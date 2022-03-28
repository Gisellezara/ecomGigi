import React from 'react'

const Home = () => {
  return (
    <div>
        <p>
            <img className="heroimg" src="img/pinlogooo.png" />
        </p>
   
          <h1>About us!</h1>
          <p> If you can think of it, I can create it. You are only one step away from getting it delivered right to your door. 
             Gigi Designs was created with the only sole intention of serving the customer what they want.
             Each product is a custom design cup or a limited-edition cup. It is a small business established in 1997 and 
             has grown through the years. The owner is Giselle Guevara. She was fascinated by buying cups while traveling, 
             which sparked her interest in selling and designing each cup displayed on this website.
          </p>  
  {/* // array for slider images */}
const productArray = [
  {
   <img src= "img/flower.webp"/>
  },
  {
    <img src= "img/hero.jpeg"/>
  },
  {
    <img src= "img/vday.jpg"/>
  },
];
          
               
  </div>
  
   

  )};
 

const slideShow = () =>{
  const settings = {
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  //goes through our list one by one and returns a product componet for us
  const sliderProducts = productArray.map((product) => (
    <Product image={product.image} title={product.title} />
  ));

  return (
    <Slider className="slider" {...settings}>
      {sliderProducts}
    </Slider>
  )
};



export default Home;
