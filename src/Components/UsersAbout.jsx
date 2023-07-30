
import React, { useState, useEffect } from "react"
import axios from "axios"

export const UsersAbout = () => {

  const [aboutData, setAboutData] = useState([])

    useEffect(() => {
      axios.get("http://localhost:5000/about-us")
      
      .then((response) => {
        console.log("Datos recibidos del backend:", response.data);
        setAboutData(response.data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error))
    }, [])

  return (
    <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-around flex-lg-wrap">
      {aboutData.map((data) => (
      <div className= "mb-2 pt-4 m-4" key={data._id}>
          <div className="card-container mb-1">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner p-3"> 
              <div className="d-flex justify-content-center">
                <img className="w-75 rounded-circle" src={`http://localhost:5000/images/${data.profileImg}`} alt={`foto de perfil de ${data.name}`} title={data.name} />
              </div>
              <h2 className="mt-2">{data.name}</h2>
              <p>{data.description}</p>
            </div>
          </div>
      </div>))}
    </div>
  )
}
