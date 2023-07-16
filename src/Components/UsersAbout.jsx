import { Carousel, Card, Image } from "react-bootstrap";
import { USER } from "../Utils/Constants";
import Java from "../assets/images/About/Lenguajes/javascript_plain_logo_icon_146454.png";
import Html from "../assets/images/About/Lenguajes/file_type_html_icon_130541.png";
import Css from "../assets/images/About/Lenguajes/file_type_css_icon_130661 (1).png";
import Github from "../assets/images/About/Lenguajes/github-logo_icon-icons.com_73546 (1).png";
import Vstudio from "../assets/images/About/Lenguajes/visual_studio_18908.png";
import Npm from "../assets/images/About/Lenguajes/npm_icon_132178.png";
import ReactIcon from "../assets/images/About/Lenguajes/react_original_logo_icon_146374 (1).png";
import Mongodb from "../assets/images/About/Lenguajes/mongodb_logo_icon_170943.png";
import Mysql from "../assets/images/About/Lenguajes/mysqlworkbench_103806.png";



export const UsersAbout = () => {
  const users = USER;

  return (
    <>
      <div className="ps-5 ">
        <h3 className="fs-6 text-start about-title">Nuestro equipo</h3>
        <hr />
      </div>

      <div className="row d-flex justify-content-center container-fluid  p-5">
        {users.map((user) => (
          <div key={user.id} className="col-md-3 mb-4">
            <Card className="user-card">
              <div className="user-image">
                <Image src={user.image} fluid />
              </div>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="ps-5 pb-4">
        <h3 className="fs-6 text-start about-title">Testimonios</h3>
        <hr />
      </div>
      <Carousel className="container-fluid p-5">
        {users.map((user) => (
          <Carousel.Item key={user.id}>
            <Card className="user-card">
            <div className="carousel-image-container">
                   <Image src={user.image}  className="carousel-user-image border border-secondary" roundedCircle  />
                 </div>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.testimonial}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel>
        <Carousel.Item>
            <Image className="p-3" src={Html}></Image>
            <Image className="p-3" src={Css}></Image>
            <Image className="p-3" src={Java}></Image>
            <Image className="p-3" src={Github}></Image>
            <Image className="p-3" src={Vstudio}></Image>
            <Image className="p-3" src={Npm}></Image>
            <Image className="p-3" src={ReactIcon}></Image>
            <Image className="p-3" src={Mongodb}></Image>
            <Image className="p-3" src={Mysql}></Image>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="p-3" src={Html}></Image>
            <Image className="p-3" src={Css}></Image>
            <Image className="p-3" src={Java}></Image>
            <Image className="p-3" src={Github}></Image>
            <Image className="p-3" src={Vstudio}></Image>
            <Image className="p-3" src={Npm}></Image>
            <Image className="p-3" src={ReactIcon}></Image>
            <Image className="p-3" src={Mongodb}></Image>
            <Image className="p-3" src={Mysql}></Image>
        </Carousel.Item>  <Carousel.Item>
            <Image className="p-3" src={Html}></Image>
            <Image className="p-3" src={Css}></Image>
            <Image className="p-3" src={Java}></Image>
            <Image className="p-3" src={Github}></Image>
            <Image className="p-3" src={Vstudio}></Image>
            <Image className="p-3" src={Npm}></Image>
            <Image className="p-3" src={ReactIcon}></Image>
            <Image className="p-3" src={Mongodb}></Image>
            <Image className="p-3" src={Mysql}></Image>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
