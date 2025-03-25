import React, { useState } from 'react';
import styles from "./Slides.module.scss"

const slideData = [
  {
    image: "https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2025/Hero_Banner_-_Desktopsdd.jpg",
    
},
{
    image: "https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2025/Hero_Banner_-_Desktop_nu.jpg",
  
},
{
    image: "https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2025/Hero_Banner_-_Desktoprun.jpg",
    
},
{
    image: "https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2025/Hero_Banner_-_Desktopgym.jpg",
   
},
]
function Slides() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () =>{
    setCurrentIndex((prevIndex) =>
        prevIndex === slideData.length -1 ? 0 : prevIndex + 1
  );
}

const prev = () =>{
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
  )
}

  return (
    <div className={styles.wrapper}>
    <div className={styles.Slides}>
       <a onClick={prev} className={styles.prev}><i class='bx bx-chevron-left'></i></a>
       <img src={slideData[currentIndex].image} alt={`Slide ${currentIndex + 1} `} />
        <a onClick={next} className={styles.next}><i class='bx bx-chevron-right'></i></a>
    </div> 
    </div>
  );
}

export default Slides;
