import User from "../model/userModel.js";
import bcrypt from 'bcryptjs';
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import emailValidator from 'email-validator';
import { generateToken } from "../utils/utils.js";

const userRouter = express.Router();

userRouter.post('/register', expressAsyncHandler(async (req,res) => {
    try {
        const {firstName, lastName, email, password, passwordConfirm} = req.body;

        //validation
        if (!firstName) {
            return res.status(404).send({message: 'first name field is required'})
        } else if (!lastName) {
            return res.status(404).send({message: 'last name field is required'})
        } else if (!email) {
            return res.status(404).send({message: 'email field is required'})
        } else if (!emailValidator.validate(email)) {
            return res.status(404).send({message: 'email is invalid'})
        } else if (!password) {
            return res.status(404).send({message: 'password field is required'})
        } else if (!passwordConfirm) {
            res.status(404).send({message: 'confirm password field is required'})
        } else if (password !== passwordConfirm) {
            res.status(404).send({message: 'password does not match'})
        } else if (password.length < 6) {
            res.status(404).send({message: 'password must be atleast 6 characters'})
        } else {
            const existingUser = await User.findOne({email});

            if (existingUser) {
                res.status(404).send({message: 'email already taken'});
            } else {
                //encrypt the password
                const salt = bcrypt.genSaltSync(Number(process.env.SALT));
                const passwordHash = bcrypt.hashSync(password, salt);
                
                //save a new user to database
                const newUser = new User({
                    firstName, 
                    lastName, 
                    email, 
                    passwordHash, 
                });
                const savedUser = await newUser.save();

                //send the user details include token
                res.send({
                    _id: savedUser._id,
                    username: savedUser.username,
                    email: savedUser.email,
                    isAdmin: savedUser.isAdmin,
                    token: generateToken(savedUser)
                })
               
            }
        }

    } catch (error) {
        console.error(error)
        res.status(500).send();
    }
}));

userRouter.post('/login', expressAsyncHandler(async (req, res) => {
    try {
        const {email, password} = req.body;

        //validatation
        if (!email) {
            return res.status(404).send({message:'email field is required'})
        } else if (!emailValidator.validate(email)) {
            return res.status(404).send({message: 'email is invalid'})
        } else if (!password) {
            return res.status(404).send({message: 'password field is required'})
        } else {
            const existingUser = await User.findOne({email});

            if (existingUser) {
                if (bcrypt.compareSync(password, existingUser.passwordHash)) {
                    res.send({
                        _id:existingUser._id,
                        firstName:existingUser.firstName,
                        lastName: existingUser.lastName,
                        email:existingUser.email,
                        token:generateToken(existingUser)
                    })
                    return;
                }
            }

             res.status(404).send({message: 'wrong email or password'});
                  
        }
        
    } catch (error) {
      console.error(error)
      res.status(500).send();  
    }
}));


export default userRouter;