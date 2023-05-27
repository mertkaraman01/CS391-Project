import { MyContext } from '../components/context';
import TripTable from '../components/TripTable';
import {useState, useEffect} from 'react';
import axios from 'axios';
const api = axios.create({ baseURL: `http://localhost:3001/trips` });

function Homepage() {
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    getTrips();  
  },[]);

  const getTrips = () => {
    api.get("/").then(res => {
      setTripList(res.data);
    }).catch((err) => console.log(err));
  }
  const contextObject={header:"Here are our Adventure Trips", tripList:tripList,tripCount:tripList.length}
  
  return (
    <div style={{ padding: "1rem 0" }} className="App">     
      <h1 style={{color: 'color value',
      textAlign: 'center',
      alignSelf: 'center'}}>Welcome to our Site!</h1>
      <MyContext.Provider value={contextObject}>  
          <TripTable></TripTable>
      </MyContext.Provider>
      
    </div>
     
  );
}

export default Homepage;;