import React from "react";
import { useForm, Controller } from "react-hook-form";

const LoginForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          Correo electronico
        </label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <input
              {...field}
              type="email"
              className="form-control required"
              maxLength="25"
              required
            />
          )}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true, maxLength: 7 }}
          render={({ field, fieldState }) => (
            <input
              {...field}
              type="password"
              className="form-control required"
              maxLength="7"
              required
            />
          )}
        />
      </div>
      <p className="text-center">
        {" "}
        ¿Olvidaste tu clave?{" "}
        <a href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
          Recuperar contraseña
        </a>
      </p>
      {/* checkbox */}
      <div className="mb-4 form-check">
        <Controller
          name="connected"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input
              {...field}
              type="checkbox"
              className="form-check-input required"
            />
          )}
        />
        <label htmlFor="connected" className="form-check-label">
          Mantenerme conectado
        </label>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-secondary">
          Iniciar sesión
        </button>
      </div>
      <div className="my-3">
        <p className="text-center">
          No tienes cuenta? <a href="./suscribe.html">Registrate</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
