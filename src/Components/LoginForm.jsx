import { useForm } from "../hooks/useForm";


export const FormularioComponent = () => {

  const initialForm = {
    userName: '',
    email: '',
    password: ''
  }

  const { formState, onInputChange} = useForm(initialForm)
    // desectructuramos formState
    const { userName, email, password } = formState;
  
const onSubmit = (event) => {
  event.preventDefault()
  console.log(formState)

}

  return (
  <form onSubmit={onSubmit}>  
      <div className="form-group">
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          className="form-control"
          name="userName" // en el tutorial lo pone como name al id
          placeholder="Enter your Username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
