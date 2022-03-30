import React from 'react'
import SlideShow from './SlideShow';

const Home = () => {
  return (
    <div>
        <p>
            <img className="heroimg" src="img/pinlogooo.png" alt=''/>
        </p>
   
          <h1>About us!</h1>
          <p> If you can think of it, I can create it. You are only one step away from getting it delivered right to your door. 
             Gigi Designs was created with the only sole intention of serving the customer what they want.
             Each product is a custom design cup or a limited-edition cup. It is a small business established in 1997 and 
             has grown through the years. The owner is Giselle Guevara. She was fascinated by buying cups while traveling, 
             which sparked her interest in selling and designing each cup displayed on this website.
          </p>  
          <br/>

          <SlideShow />
           </div>

          
          
 )
};



export default Home;
