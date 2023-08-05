import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function RegisterForm() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm()
  const navigate = useNavigate()

  const [formMessage, setFormMessage] = useState('')
  const [formError, setFormError] = useState('')

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/register', data)
      setFormError('')
      setFormMessage('Registro existoso')
      reset()

      setTimeout(() => {
        setFormMessage('')
        // navigate('/login')
      }, 2000)
      
    } catch (err) {
      setFormError('Ha ocurrido un error')
      setFormMessage('')
      console.log(err)
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='form-container m-4 col col-md-9 col-lg-6'>
        <h2 className='mb-4 fw-bolder'>Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
          <div className='mb-4'>
            <Controller
              name='userName'
              control={control}
              defaultValue=''
              rules={{
                required: 'Por favor, ingrese un nombre de usuario',
                minLength: {
                  value: 3,
                  message: 'El nombre de usuario debe tener al menos 3 caracteres',
                },
                maxLength: {
                  value: 20,
                  message: 'El nombre de usuario debe tener menos de 20 caracteres',
                },
              }}
              render={({ field }) => (
                <input
                  type='text'
                  placeholder='Nombre de usuario'
                  autoComplete='off'
                  {...field}
                  className='form-control rounded'
                />
              )}
            />
            {errors.userName && (
              <p className='text-danger'>
                {errors.userName.message}
              </p>
            )}
          </div>
          <div className='mb-4'>
            <Controller
              name='email'
              control={control}
              defaultValue=''
              rules={{
                required: 'Por favor, ingrese un correo electrónico',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Ingrese una dirección de correo electrónico válida',
                },
              }}
              render={({ field }) => (
                <input
                  type='email'
                  placeholder='Dirección de correo electrónico'
                  autoComplete='off'
                  {...field}
                  className='form-control rounded'
                />
              )}
            />
            {errors.email && (
              <p className='text-danger'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='mb-4'>
            <Controller
              name='password'
              control={control}
              defaultValue=''
              rules={{
                required: 'Por favor, ingrese una contraseña',
                minLength: {
                  value: 10,
                  message: 'La contraseña debe tener al menos 10 caracteres',
                },
              }}
              render={({ field }) => (
                <input
                  type='password'
                  placeholder='Contraseña'
                  autoComplete='off'
                  {...field}
                  className='form-control rounded'
                />
              )}
            />
            {errors.password && (
              <p className='text-danger'>
                {errors.password.message}
              </p>
            )}
          </div>
          {formMessage && <p className="p-2 rounded bg-success text-white">{formMessage}</p>}
          {formError && <p className="p-2 rounded bg-danger text-white">{formError}</p>}
          <div className='text-center mt-2'>
            <button type='submit' className='btn btn-danger'>
              Registrarme
            </button>
          </div>
        </form>
        <p className='mb-0 mt-4 text-center'>¿Ya tienes una cuenta?</p>
        <div className='text-center mt-3'>
          <Link
            to='/login'
            className='link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm;
