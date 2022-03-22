import React from 'react'

export const Home = () => {
  return (
    <div>
        <p>
            <img className="heroimg" src="img/pinlogooo.png" height="50%" alt="Red Cup"/>
    

         </p>
   
       <h1>About us!</h1>
        <p> If you can think of it, I can create it. You are only one step away from getting it delivered right to your door. 
             Gigi Designs was created with the only sole intention of serving the customer what they want.
             Each product is a custom design cup or a limited-edition cup. It is a small business established in 1997 and 
             has grown through the years. The owner is Giselle Guevara. She was fascinated by buying cups while traveling, 
             which sparked her interest in selling and designing each cup displayed on this website.
        </p>
        <h2>Products {style="text-align:center"}</h2>

   
   <div className="slideshow-container-home">
   
   <div className="mySlides fadeimg">
     <img src="img/vday.jpg" style="width:100%"/>
     
   </div>
   
   <div className="mySlides fadeimg">
     <img src="img/hero.jpeg" style="width:100%"/>
   </div>
   
   <div className="mySlides fadeimg">
     <img src="img/flower.webp" style="width:100%"/>
    
   </div>
   <div style="text-align:center">
    <span className="dot"></span> 
    <span className="dot"></span> 
    <span className="dot"></span> 
  </div>
   </div>
   

    </div>
  )
  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000)};
  
}


export default Home;
