import React from 'react'
import './Modal.css'




const Modal = ({setShowModal}) => {
  return (
    

        <div className="modal__wrapper" onClick={()=> setShowModal(false)}>
          <div className="single__modal">
            <h6 className='text-center text-light'>
              Place a Bid
            </h6>
            <p className='text-center text-light'>You must bid atleast 
            <span className='money'>5.89 ETH</span></p>
            <div className="input__item mb-4">
              <input type='number' placeholder='00:00 ETH' />
            </div>
            <div className="input__item">
              <h6>Enter Quantity, 7 available</h6>
              <input type='number' placeholder='Enter quantity' />
            </div>
            <div className='d-flex align-items-center  justify-content-between'>
              <p>You must bid at least</p>
              <span className='money'>5.89 ETH</span>
            </div>

            <div className='d-flex align-items-center  justify-content-between'>
              <p>Service fee</p>
              <span className='money'>0.89 ETH</span>
            </div>

            <div className='d-flex align-items-center  justify-content-between'>
              <p>Total bid Amount</p>
              <span className='money'>5.89 ETH</span>
            </div>

            <button className="place__bid-btn">
              Place a Bid
            </button>

          </div>
        </div>



  );
};

export default Modal;