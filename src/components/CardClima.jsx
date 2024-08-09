import { useState } from "react"

export const CardClima = () => {

    //inicializamos los cambios de estado
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState([])

    //tenemos la url y api_key en constantes
    const URL = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '63d11d676a975cda1e0594da8f384257'

    //usaremos esta constante para poder usar la respuesta en grados centigrados
    const difKelvin = 273.15

    //hacemos el fetch de la Api y seteamos la data
    const fetchClima = async () => {
        try {
            const response = await fetch(`${URL}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    //imos los valores de la ciudad ingresada (onChange)
    const handleCambioClima = (e) => {
        setCiudad(e.target.value)
    }

    //hacemos llamado de la api y no recargamos la página(form)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(ciudad.length > 0)fetchClima()
    }

    return (
  <div>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={ciudad}
        onChange={handleCambioClima}
        />
        <button>🔍</button>
    </form>

    {dataClima && (
        <div>
            <h3>{dataClima.name}</h3>
             <h6>Temeratura:  {parseInt(dataClima.main.temp - difKelvin)}°C</h6>
             <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />  
        </div>
    )}
  </div>
  
  )
}
