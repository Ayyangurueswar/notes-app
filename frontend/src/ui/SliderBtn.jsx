import React, {useState} from 'react'
import Slider from './Slider';

const SliderBtn = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  }
  return (
    <div className='sm:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24" fill="none" onClick={handleOpen}>
            <path fillRule="evenodd" clipRule="evenodd" d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM5 17C5 16.4477 5.44772 16 6 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17Z" fill="currentColor"/>
        </svg>
        <Slider show={show} handleClose={handleClose}/>
        {
          show && (
              <div className='fixed top-0 left-0 w-full h-screen bg-black opacity-50'></div>
          )
        }
    </div>
  )
}

export default SliderBtn