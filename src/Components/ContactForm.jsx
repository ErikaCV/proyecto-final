import { useForm, Controller } from 'react-hook-form';
import '../styles/ContactForm.css'

const ContactForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="cf-container">
      <div className="cf-row">
        <div className="cf-col">
          <h2 className="cf-title about-title">CONTACTATE CON ......!</h2>
          <form className="cf-form" onSubmit={handleSubmit(onSubmit)}>
            <label>NOMBRE</label>
            <Controller
              name="nombre"
              control={control}
              defaultValue=""
              rules={{ required: 'El nombre es requerido', maxLength: 15 }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="form-control required"
                  minLength="3"
                />
              )}
            />
            {errors.nombre && <p>{errors.nombre.message}</p>}

            <label>APELLIDO</label>
            <Controller
              name="apellido"
              control={control}
              defaultValue=""
              rules={{ required: 'El apellido es requerido', maxLength: 15 }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="form-control required"
                  minLength="3"
                />
              )}
            />
            {errors.apellido && <p>{errors.apellido.message}</p>}

            <label>EMAIL</label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'El email es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Dirección de correo inválida',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="form-control required"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label>DEJANOS UN MENSAJE!</label>
            <Controller
              name="mensaje"
              control={control}
              defaultValue=""
              rules={{ required: 'El mensaje es requerido', maxLength: 250 }}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="form-control required"
                />
              )}
            />
            {errors.mensaje && <p>{errors.mensaje.message}</p>}

            <button type="submit">ENVIAR</button>
          </form>
        </div>
        <div className="cf-col">
          <h2 className='about-title'>ENCUENTRANOS EN:</h2>
          <div className="cf-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023707775184!2d-65.20939048529601!3d-26.83669609650096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1677371497043!5m2!1ses!2sar" style={{border:0, width:"90%", height:"100%"}} allowFullScreen loading="lazy" title="map"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
