import React, { useContext } from 'react'
import { Navbar,Nav,Container,Carousel } from 'react-bootstrap';
import { Store } from '../Store';
function ContentPage() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const logoutHandler = () => {
    dispatch({type: 'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    window.location.href = '/'
  }
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#firstName">{userInfo.firstName}</Nav.Link>
            <Nav.Link href="#lastName">{userInfo.lastName}</Nav.Link>
            <Nav.Link href="#email">{userInfo.email}</Nav.Link>
            <Nav.Link href="#loginpage" onClick={logoutHandler}>log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/banner4.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>A Lovely Love Story by Edward Monkton.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/banner3.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>The fierce Dinosaur was trapped inside his cage of ice.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/banner5.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Then along came the Lovely Other Dinosaur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container mt-5 px-5'>
        <h1>A Lovely Love Story by Edward Monkton</h1>
        <p>The fierce Dinosaur was trapped inside his cage of ice. Although it was cold he was happy in there. 
          It was, after all, HIS cage.</p>
        <p>Then along came the Lovely Other Dinosaur.</p> 
        <p>The Lovely Other Dinosaur melted the Dinosaur’s cage with kind words and loving thoughts.</p> 
        <p>I like this Dinosaur, thought the Lovely Other Dinosaur. Although he is fierce he is also tender 
          and he is funny. He is also quite clever though I will not tell him this for now.</p>
        <p>I like this Lovely Other Dinosaur, thought the Dinosaur. She is beautiful and she is different 
          and she smells so nice. She is also a free spirit, which is a quality I much admire in a dinosaur.</p> 
        <p>But he can be so distant and so peculiar at times, thought the Lovely Other Dinosaur.</p>
        <p>He is also overly fond of Things. Are all Dinosaurs so overly fond of Things?</p>
        <p>But her mind skips from here to there so quickly, thought the Dinosaur. She is also uncommonly keen
           on Shopping. Are all Lovely Other Dinosaurs so uncommonly keen on shopping?</p>  
        <p>I will forgive his peculiarity and his concern for Things, thought the Lovely Other Dinosaur.
           For they are part of what makes him a richly charactered individual.</p>
        <p>I will forgive her skipping mind and her fondness for shopping, thought the Dinosaur.
           For she fills our life with beautiful thought and wonderful surprises. Besides, I am 
           not unkeen on shopping either.</p> 
        <p>Now the Dinosaur and the Lovely Other Dinosaur are old. Look at them.</p> 
        <p>Together they stand on the hill telling each other stories and feeling the warmth of the sun
           on their backs.</p> 
        <p>And that, my friends, is how it is with love. Let us all be Dinosaurs and Lovely Other
           Dinosaurs together.</p> 
        <p>For the sun is warm. And the world is a beautiful place…</p>            
      </div>

      <footer className='footer text-white'>
        <div className="custom-shape-divider-top-1663958508">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
        
      </footer>
    </div>
  )
}

export default ContentPage