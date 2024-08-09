import "../styles/AppClima.css";
import lupaBusqueda from "../assets/lupaBusqueda.png";
import { fetchApiClima } from "../hook/fetchApiClima";
export const CardClima = () => {
  const { dataClima, handleCambioClima, handleSubmit, ciudad } =
    fetchApiClima();

  //usaremos esta constante para poder usar la respuesta en grados centigrados
  const difKelvin = 273.15;

  return (
    <div className="container-app">
      <h2>Clima Mundial</h2>
      <form onSubmit={handleSubmit} className="form-app">
        <input
          type="text"
          value={ciudad}
          onChange={handleCambioClima}
          placeholder="Ingresa Ciudad"
          className="input-app"
        />
        <img className="lupa-busqueda" onClick={handleSubmit} src={lupaBusqueda} alt="Buscar" />
      </form>

      {dataClima && dataClima.main && dataClima.weather && (
        <div className="clima-info">
          <h3>{dataClima.name}, {dataClima.sys.country}</h3>
          <h6>Temperatura: {parseInt(dataClima.main.temp - difKelvin)}°C</h6>
          <img
            src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
};
