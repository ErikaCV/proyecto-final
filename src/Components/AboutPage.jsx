import About from "../assets/images/About/About.jpg";
import { Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import fullstack from "../assets/images/About/fullstack.jpg"
import { UsersAbout } from "./UsersAbout";

function AboutPage() {
  const firstDivHeight = 300; 

  return (
    <>
      <div className="container pt-2">
        <h1 className="text-center about-title">Acerca de nosotros</h1>
        <hr />

        <div className="box-about row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12" style={{ position: 'relative', height: `${firstDivHeight}px` }}>
            <div>
              <Image src={About} className="rounded img-main" fluid />
            </div>
          </div>
          <div className="text-about col-lg-6 col-md-4 col-sm-12 institution-div" style={{ position: 'relative', top: `${firstDivHeight / 2}px` }}>
            <div >
              <h3>Nuestra Institución</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium beatae officia ut ab sed exercitationem laborum cupiditate perspiciatis minus esse maiores tempora aut enim iusto omnis hic, deleniti earum in?</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam!</span>
            </div>
          </div>
        </div>

        <div className="row">
          <Card className="col-lg-4 col-md-6 col-sm-12 border-0 p-5 cardAbout">
            <Card.Img variant="top" className="rounded" src={fullstack} />
            <Card.Body>
              <h3>Crece con Nosotros</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</p>
            </Card.Body>
          </Card> 
          <Card className="col-lg-4 col-md-6 col-sm-12 border-0 p-5 cardAbout">
            <Card.Img variant="top" className="rounded" src={fullstack} />
            <Card.Body>
              <h3>Crece con Nosotros</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</p>
            </Card.Body>
          </Card> 
          <Card className="col-lg-4 col-md-6 col-sm-12 border-0 p-5 cardAbout">
            <Card.Img variant="top" className="rounded" src={fullstack} />
            <Card.Body>
              <h3>Crece con Nosotros</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</p>
            </Card.Body>
          </Card> 
        </div>

        <UsersAbout />
      </div>
    </>
  );
}

export default AboutPage;
