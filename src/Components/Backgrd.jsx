import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Backgrd = () => {
  return (
    <Carousel 
      showArrows={true} infiniteLoop={true} autoPlay showThumbs={false} showStatus={false}  emulateTouch={true} 
    >
      <div>
        <img 
          src="https://cdn.pixabay.com/photo/2023/09/19/01/29/ai-generated-8261668_1280.jpg" 
          alt="Image 1" 
          style={{ height: "500px", width: "100%" }} 
        />
      </div>
      <div>
        <img 
          src="https://cdn.pixabay.com/photo/2021/07/10/15/45/online-shop-6401739_1280.png" 
          alt="Image 2" 
          style={{ height: "500px", width: "100%" }} 
        />
      </div>
      <div>
        <img 
          src="https://cdn.pixabay.com/photo/2024/08/05/09/13/woman-8946233_1280.png" 
          alt="Image 3" 
          style={{ height: "500px", width: "100%" }} 
        />
      </div>
    </Carousel>
  );
};

export default Backgrd;
