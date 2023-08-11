import imgGithub from '../assets/images/github-icon.svg';
import imgLinkedin from '../assets/images/linkedin-icon.svg';
import imglogo from '../assets/images/logo2.png';
import imgfacebook from '../assets/images/facebook.png';
import imgTwitter from '../assets/images/twitter.png';
import imginstagram from '../assets/images/instagram.png';
import imgtiktok from '../assets/images/tiktok.png';
import imgcasa from '../assets/images/hogar.png';
import imgtelefono from '../assets/images/telefono.png';
import imgemail from '../assets/images/email.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    const members = [

        {   
            memberName: "Luis Lopez",
            linkGithub: "https://github.com/Luis-LI",
            linkLinkedin: "https://www.linkedin.com/in/",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },
        {   
            memberName: "Erika Cruz",
            linkGithub: "https://github.com/ErikaCV",
            linkLinkedin: "https://www.linkedin.com/in/",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },
        {   
            memberName: "Belén Gómez",
            linkGithub: "https://github.com/belugomez",
            linkLinkedin: "https://www.linkedin.com/in/beléngómez",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },
        {   
            memberName: "Franco Nieva",
            linkGithub: "https://github.com/francojnieva",
            linkLinkedin: "https://www.linkedin.com/in/francojnieva/",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },
        {   
            memberName: "Carlos Avanzini",
            linkGithub: "https://github.com/Luis-LI",
            linkLinkedin: "https://www.linkedin.com/in/carlos-matias-avanzini-4b707b61/",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },


    ]

    const socialRedes = [

        {   
            altFaceebokIcon: "Logo del icono de Faceebok",
            alttwiteerIcon: "Logo del icono de twiteer",
            altinstagramIcon: "Logo del icono de instagram",
            alttiktokIcon: "Logo del icono de tiktok",
            linkFacebook: "https://www.facebook.com/",
            linkTwitter: "https://twitter.com/?lang=es",
            linkinstagram: "https://www.instagram.com/",
            linkTiktok: "https://www.tiktok.com/es/",
        }

    ]

    const security = [
        {   
          
            linkDefensaDelConsumidor: "https://www.argentina.gob.ar/economia/comercio/defensadelconsumidor",
        }

    ]

    const datos = [
        {   
          
            direccion: "La Romana 1855,",
            provincia: "Provincia de Tucuman,",
            pais:"Republica Argentina",
            telefono:"+774967876",
            email:"motoFly@motofly.com"
        }

    ]


    const SecurityPoli = security.map(e =>
        <div className='members-item my-2'>
            <p className='mb-1'></p>
            <div className='linksProfile-container mb-3'>
                <a href={e.linkDefensaDelConsumidor} className='me-1 link-underline link-underline-opacity-0' target='_blanck'>Defensa del Consumidor</a><br></br><br></br>
                <a href={e.linkDefensaDelConsumidor} className='me-1 link-underline link-underline-opacity-0' target='_blanck'>Boton de Arrepentimiento</a><br></br><br></br>
                <a href={e.linkDefensaDelConsumidor} className='me-1 link-underline link-underline-opacity-0' target='_blanck'>Politica de Privacidad</a><br></br><br></br>
            </div>
        </div>
    )

    const datea = datos.map(e =>
        <div className='members-item my-2'>
            <p className='mb-1'></p>
            <div className='linksProfile-container mb-3'>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'><img src={imgcasa}/></div>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'>{e.direccion}</div>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'>{e.provincia}</div>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'>{e.pais}</div><br></br>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'><img src={imgtelefono}/></div>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'>{e.telefono}</div><br></br>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'><img src={imgemail}/></div>
                <div  className='me-1 link-underline link-underline-opacity-0' target='_blanck'>{e.email}</div>
            </div>
        </div>
    )
    const element = socialRedes.map(e =>
        <div className='members-item my-2'>
            <p className='mb-1'></p>
            <div className='linksProfile-container mb-3'>
                <a href={e.linkFacebook} className='me-1' target='_blanck'><img src={imgfacebook} alt={e.altFaceebokIcon} /></a><br></br><br></br>
                <a href={e.linkTwitter} className='me-1' target='_blanck'><img src={imgTwitter} alt={e.alttwiteerIcon} /></a><br></br><br></br>
                <a href={e.linkinstagram} className='me-1' target='_blanck'><img src={imginstagram} alt={e.altinstagramIcon} /></a><br></br><br></br>
                <a href={e.linkTiktok} className='me-1' target='_blanck'><img src={imgtiktok} alt={e.alttiktokIcon} /></a><br></br><br></br>
                
            </div>
        </div>
    )

    const elemen = members.map(e =>
        <div className='members-item my-2' key={e.memberName}>
            <p className='mb-1'>{e.memberName}</p>
            <div className='linksProfile-container mb-3'>
                <a href={e.linkGithub} className='me-1' target='_blanck'><img src={imgGithub} alt={e.altGithubIcon} /></a>
                <a href={e.linkLinkedin} target='_blanck'><img src={imgLinkedin} alt={e.altLinkedinIcon} /></a>
                
            </div>
        </div>
    )


    

  return (
    <footer className='footer-container px-4 px-lg-5 text-white'>
        <div className='d-flex flex-column align-items-center flex-lg-row align-items-lg-center  justify-content-lg-around'>
            <div className='mt-0 logo-container d-flex justify-content-center'>
                <NavLink to="/"><img className="logo-app rounded-circle" src={imglogo} alt="logo de la app"/>  {element} </NavLink>
                  
            </div>
            <div className='linksPage d-flex flex-column my-3 fw-medium'>
                
                <NavLink to="/" className=' my-2 link-underline link-underline-opacity-0'><i className="bi bi-house-door-fill"></i> Inicio</NavLink>
                <NavLink to="/about" className='my-2 link-underline link-underline-opacity-0'>Nosotros</NavLink>
                <NavLink to="/contact" className='my-2 link-underline link-underline-opacity-0'>Contacto</NavLink>
            </div>
        


         
            <div className='mt-3'>
                {datea} 
            </div>   
            <div className='mt-3'>
                {SecurityPoli} 
            </div> 

            
            <div className='mt-3'>
                {elemen} 
            </div>   

       
          
        </div>
        <p className='text-center p-2'>&copy; Copyright Group 3 - 2023</p>
    </footer>
  )
}

export default Footer