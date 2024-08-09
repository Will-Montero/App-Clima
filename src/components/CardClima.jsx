import { useState } from "react"

export const CardClima = () => {

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState([])

    const URL = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '63d11d676a975cda1e0594da8f384257'
    const difKelvin = 273.15

    const fetchClima = async () => {
        try {
            const response = await fetch(`${URL}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleCambioClima = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(ciudad.length > 0)fetchClima()
    }

    return (
  <>
  
  </>
  )
}
