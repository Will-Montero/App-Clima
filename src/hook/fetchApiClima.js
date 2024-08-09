import { useState } from "react"

export const fetchApiClima = () => {

   //tenemos la url y api_key en constantes
   const URL = 'https://api.openweathermap.org/data/2.5/weather'
   const API_KEY = '63d11d676a975cda1e0594da8f384257'

  //inicializamos los cambios de estado
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState([])


   //hacemos el fetch de la Api y seteamos la data
   const fetchClima = async () => {
    if(!URL)return 
    try {
        const response = await fetch(`${URL}?q=${ciudad}&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setDataClima(data);
        console.log(data);
    } catch (error) {
        console.error(error);
        setDataClima(null); // O maneja el error de alguna manera
    }
}


    //oimos los valores de la ciudad ingresada (onChange)
    const handleCambioClima = (e) => {
      setCiudad(e.target.value)
  }

  //hacemos llamado de la api y no recargamos la página(form)
  const handleSubmit = (e) => {
      e.preventDefault()
      if(ciudad.length > 0)fetchClima()
  }


  return ({
    dataClima,
    handleCambioClima,
    handleSubmit,
    ciudad
  }
  )
}
