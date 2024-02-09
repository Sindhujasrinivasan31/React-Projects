import React,{useRef} from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection';
import { Container,Row,Col } from 'reactstrap';


const Contact = () => {



  return (
    <>
    <CommonSection title='Contact'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' className='m-auto text-center'>
              <h2>
                Drop a message
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam,
                 dolorem aliquam expedita voluptate inventore atque possimus ratione? Magni, natus.</p>
                <div className="contact mt-4">


                  <form  method='post' action='http://127.0.0.1:8000/contact/'>
                    <div className="form__input">
                      <input type="text" placeholder='Enter your name'  name='name'/>
                    </div>

                    <div className="form__input">
                      <input type="text" placeholder='Enter your email'   name='email' />
                    </div>

                    <div className="form__input">
                      <input type="text" placeholder='Enter your subject' name='subject' />
                    </div>

                    <div className="form__input">
                     <textarea rows='7' placeholder='Write Message'   name='message'></textarea>
                    </div>
                      <button className="send__btn" type='submit'   style={{border:'none',padding:'7px 25px',
                      marginTop:'20px'}} >
                        Send a message
                      </button>
                  </form>
                </div>
        
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Contact;