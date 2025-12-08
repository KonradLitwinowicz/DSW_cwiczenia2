import WeatherIcon from './WeatherIcon'
function WeatherDetails({ miasto }){
    if(!miasto) return null;

    return(
        <div className="card details-panel">
          <h2>Szczegóły pogody dla {miasto.miasto}</h2>
          <div className="details-row">
            <div className="details-item">
              <strong>Temperatura:</strong>
              <div>{miasto.aktualnaTemperatura} °C</div>
            </div>
            <div>
              <WeatherIcon condition={miasto.aktualnaPogoda}></WeatherIcon>
            </div>
            <div className="details-item">
              <strong>Warunki:</strong>
              <div>{miasto.aktualnaPogoda}</div>
            </div>
            <div className="details-item">
              <strong>Wiatr:</strong>
              <div>{miasto.aktualnyWiatr}</div>
            </div>
            <div className="details-item">
              <strong>Kierunek Wiatru:</strong>
              <div>{miasto.aktualnyKierunekWiatru}</div>
            </div>
            <div className="details-item">
              <strong>Zachmurzenie:</strong>
              <div>{miasto.aktualneZachmurzenie}</div>
            </div>
            {Array.isArray(miasto.prognoza5Dni) && (
              <div className="card details-panel forecast">
                <h3>5-dniowa prognoza</h3>
                <div className="forecast-row">
                  {miasto.prognoza5Dni.map((dzien, idx) => (
                    <div className="forecast-day" key={idx}>
                      <div>
                        <WeatherIcon condition={dzien.pogoda}></WeatherIcon>
                      </div>
                      <div className="details-item"><strong>{dzien.dzien}</strong></div>
                      <div className="details-item">Temperatura: {dzien.temperatura} °C</div>
                      <div className="details-item">Pogoda: {dzien.pogoda}</div>
                      {dzien.kierunekWiatru && <div className="details-item">Kierunek wiatru: {dzien.kierunekWiatru}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
    )
}

export default WeatherDetails;
