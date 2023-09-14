import React from 'react'
import SwipeUpAltRoundedIcon from '@mui/icons-material/SwipeUpAltRounded';
import './style.css'

const MoveToTop = () => {

    let mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


  return (
    <div className='moveToTopBtn' id="myBtn" onClick={()=>topFunction()} >
       <SwipeUpAltRoundedIcon style={{color:"var(--blue)"}}/>
    </div>
  )
}

export default MoveToTop