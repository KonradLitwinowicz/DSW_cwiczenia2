function WeatherCard(props){
    const className = `city-card ${props.selected ? 'selected' : ''}`;
    return(
        <div className={className} onClick={props.onClick} role="button" tabIndex={0} onKeyPress={(e)=>{ if(e.key === 'Enter') props.onClick && props.onClick(); }}>
            <h2>{props.miasto}</h2>
            <div className="meta">
                <div className="temp">{props.temperatura ? props.temperatura + '°C' : '-'}</div>
                <div className="cond">{props.pogoda || ''}</div>
            </div>
        </div>
    )
}
export default WeatherCard;