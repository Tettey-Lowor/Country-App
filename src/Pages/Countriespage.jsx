import {useState, useEffect} from  'react'
import axios from 'axios';
import Navbar from '../Component/navbar';
import { Link } from 'react-router-dom';


export default function Countriespage() {
  const [country, setCountry] = useState([]);

  const url = 'https://restcountries.com/v3.1/all'
console.log(url);

useEffect(()=> {async function displayAllCountries(){
  try {
    const countries = await axios.get(url)
    const countriesBox = countries.data
    setCountry(countriesBox)
  
  } catch (error) {
    console.log(error)
  }
 
}
displayAllCountries()

}, [])
console.log('country', country)
// return countriesBox


       
        
    

  return (
    <>
      <div>
        <p>This is my Countries page</p>
      <Navbar/> 
    </div>
    <div className='outer-div'>
    {country.slice(30 , 40).map((item) => (
      <div className='inner-div'>
        <img className='flag'src={item.flags.png} alt={item.flags.alt } />
        <h2>{item.name.common}</h2>
        <h3>{item.name.official}</h3>
        <button>
          <Link to={`/Countrypage/${item.name.common}`}>Learn more</Link></button>

        

        </div>
      ))}
    </div>
    </>
  
    
  )
}
