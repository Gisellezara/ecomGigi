import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
'img/flower.webp',
'img/hero.jpeg',  
'img/vday.jpg',  
];

// const SlideShow = () => {
//   return (
//     <div className="slide-container">
//       <Slide>
//        {slideImages.map((slideImage, index)=> (
//           <div className="each-slide" key={index}>
//             <div style={{'backgroundImage': `url(${slideImage.url})`}}>
//               <span>{slideImage.caption}</span>
//             </div>
//           </div>
//         ))} 
//       </Slide>
//     </div>
//   )
// };
const SlideShow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default SlideShow;