import { UsersAbout } from "./UsersAbout.jsx";


function AboutPage() {

  return (
    <div className="py-4">
      <UsersAbout />
      <div className="institution-container d-flex flex-column justify-content-center aling-items-center text-center pt-5 px-2 px-lg-5">
        <h1 className="mb-3">Nuestra Institución</h1>
        <p className="fw-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nobis perferendis neque, quibusdam tenetur reprehenderit nihil doloremque, autem exercitationem soluta veritatis vero debitis cupiditate! Omnis error eius neque veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nobis perferendis neque, quibusdam tenetur reprehenderit nihil doloremque, autem exercitationem soluta veritatis vero debitis cupiditate! Omnis error eius neque veritatis .</p>
      </div>
    </div>
  );
}

export default AboutPage;
