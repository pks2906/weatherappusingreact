
import './App.css';


function App() { 
 const [coordinates, setCoordinates] = UseState ({})
  let latitude = 23.0
  let longitude = 95.0


  return (
    <div>
   <h1> This is a weather application.</h1>
   <h6>The latitude is: {coordinates.latitude} and longitude is {longitude}</h6>
   <button onClick= {
    (e) => { 
      
      
    
      forecastApi (latitude, longitude).then( () => {

      })

      
    }} > Show Forecast</button>
   
   </div>
  );
}

export default App;
