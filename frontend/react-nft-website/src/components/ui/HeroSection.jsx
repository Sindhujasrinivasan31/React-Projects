


import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import './HeroSection.css';
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
   
    <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2>Discover rare digital art and collect
                            <span>sell extraordinary</span>NFTs
                        </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus neque quibusdam sint 
                            voluptas a impedit inventore esse debitis? Velit!</p>
                            <div className= " hero__btns d-flex align-items-center gap-4">
                            <button className=' explore__btn d-flex align-items-center gap-2'> 
                                <i class="ri-rocket-line"></i><Link to='/market'> Explore 
                            </Link></button>

                            <button  className=' create__btn d-flex align-items-center gap-2'> 
                                <i class="ri-ball-pen-line"></i> <Link to='/create'> Create
                            </Link></button>
                            </div>


                          
                    </div>
                </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                        <img src={heroImg} className='w-100' alt=""/>
                        </div>
                       
                        
                    </Col>

            </Row>
        </Container>
    </section>
    
  );
};

export default HeroSection;