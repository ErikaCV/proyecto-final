import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import '../styles/ContactForm.css'
import axios from 'axios';

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      message: '',
    },
  });

  const [formMessage, setFormMessage] = useState('')
  const [formError, setFormError] = useState('')

  const onSubmit = async (data) => {
    try {

      // if (data.name.length <= 2 || data.name.length >= 20) {
      //   setFormError('El nombre debe tener entre 2 y 20 caracteres.');
      //   setFormMessage('');
      //   return;
      // }

      // if (data.lastname.length <= 2 || data.lastname.length >= 20) {
      //   setFormError('El apellido debe tener entre 2 y 20 caracteres.');
      //   setFormMessage('');
      //   return;
      // }

      // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      // if (!emailRegex.test(data.email)) {
      //   setFormError('Ingresa una dirección de correo válida.');
      //   setFormMessage('');
      //   return;
      // }

      // if (data.message.length > 250) {
      //   setFormError('El mensaje no puede exceder los 250 caracteres.');
      //   setFormMessage('');
      //   return;
      // }

      await axios.post('http://localhost:5000/contact', data);
      setFormError('');
      setFormMessage('Datos enviados');
      reset()

      setTimeout(() => {
        setFormMessage('');
      }, 2000);

    } catch (error) {
      setFormError('Ha ocurrido un error al enviar los datos.');
      setFormMessage('');
    }
  };

  return (
    <div className="cf-container">
      <h2 className="text-center fw-bolder pt-4">Contacto</h2>
      <p className='fw-medium px-3'>Completa el siguiente formulario y nos pondremos en contacto lo antes posible. Muchas gracias.</p>
      <form className="cf-form my-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: 'El nombre es requerido',
            minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' },
            maxLength: { value: 20, message: 'El apellido no puede tener más de 20 caracteres' },
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                placeholder="Nombre"
                autoComplete="off"
                type="text"
                className="form-control required"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          )}
        />
        <Controller
          name="lastname"
          control={control}
          rules={{
            required: 'El apellido es requerido',
            minLength: { value: 2, message: 'El apellido debe tener al menos 2 caracteres' },
            maxLength: { value: 20, message: 'El apellido no puede tener más de 20 caracteres' },
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                placeholder="Apellido"
                autoComplete="off"
                type="text"
                className="form-control required"
              />
              {errors.lastname && <p>{errors.lastname.message}</p>}
            </div>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'El email es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
              message: 'Dirección de correo inválida',
            },
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                placeholder="Dirección de correo electrónico"
                autoComplete="off"
                type="email"
                className="form-control required"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="message"
          control={control}
          rules={{
            required: 'El mensaje es requerido',
            maxLength: { value: 250, message: 'El mensaje no puede tener más de 250 caracteres' },
          }}
          render={({ field }) => (
            <div>
              <textarea
                {...field}
                placeholder="Deja tu mensaje"
                autoComplete="off"
                className="form-control required"
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
          )}
        />
        {formMessage && <p className="p-2 rounded bg-success text-white">{formMessage}</p>}
        {formError && <p className="p-2 rounded bg-danger text-white">{formError}</p>}
        <button className='btn' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
