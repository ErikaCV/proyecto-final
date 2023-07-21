import Carousel from 'react-bootstrap/Carousel';
// import motoUno from '../assets/images/moto1.jpg';
// import motoDos from '../assets/images/moto2.jpg';
// import motoTres from '../assets/images/moto3.jpg';
import slider1 from '../assets/images/img-slider/slider1.webp';
import slider2 from '../assets/images/img-slider/slider2.webp';
import slider3 from '../assets/images/img-slider/slider3.webp';
import '../styles/Slider.css';

function Slider() { 
  return (
    <div className='slider mt-4'>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={slider3}
            alt="Third slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
