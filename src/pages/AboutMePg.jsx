import React from 'react';
import images from '../components/images/headshot.jpeg';

export default function About() {
    return (
      <div>
        <h1>Chris Cummings</h1>
       <div className='headshot'>
       <img src={images} className="card-img-top" alt="Headhshot photo" />
        </div> 
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    );
  }
  