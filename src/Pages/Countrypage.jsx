import React from 'react';
import Navbar from '../Component/navbar';
import { useParams} from 'react-router-dom'
import { useEffect , useState } from 'react';
import axios from 'axios';


export default function Countrypage() {
  const [country, setCountry] = useState(null);

  
  const params=useParams()
  console.log('params' , params);
  const url = `https://restcountries.com/v3.1/name/${params.countryName}`

  useEffect(()=> {
    async function displayOneCountry(){

    try {
      const countries = await axios.get(url)
      const countriesBox = countries.data
      console.log('countriesBox', countriesBox[0]);

      setCountry(countriesBox[0])
      console.log('hello')
    
    } catch (error) {
      console.log(error)
    }
   
  }
  displayOneCountry()
  
  }, [params.countryName])

  if(!country){
    return<div>Loading...</div>;
  }

  

  return (
    <>
    <Navbar />
    <h1>{country.name.common}</h1>
    <div>
    <h2>{country.name.common}</h2>
    <img className='flag'src={country.flags.png} alt={country.flag.alt } />
    <h3>Continent: {country.continents}</h3>
    <h3>Currency: {country.currencies.GHS.name} <span>{country.currencies.GHS.symbol}</span></h3>
    <h3>Population:{country.population}</h3>
    {/* <h3>currency: {Country.currencies{...}}</h3> */}
    <h3>Coat of Arms</h3><img className='coatOfArms'src={country.coatOfArms.png} alt={country.coatOfArms.alt } />
    
    </div>
    </>
    
  )
}
