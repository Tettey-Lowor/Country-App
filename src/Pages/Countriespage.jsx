import React from 'react'
import axios from 'axios';

export default function Countriespage() {
const url = 'https://restcountries.com/v3.1/all?authuser=0'
console.log(url);

    // function display5countries (){
    //   letfiveItems =countriesBox.slice(0, 4)
    //   console.log('five', fiveItems)
        let countriesBox = []
        

        async function displayAllCountries(){
          const countries = await axios.get(url)
          const countriesBox = countries.data
          const slicedData = countriesBox.slice(0,5)
          slicedData.map(country=> {
            console.log(country.name.common);
          });
            //  console.log('yes', item)
          
          console.log('five', slicedData)
          // let fiveCountries= countriesBox.slice(0 , 5).map((item) => {
          //   console.log('yes', item)
          // }
          // )
          
          // console.log('countries', countries.data);
          return countriesBox
        }
        displayAllCountries()

       
        
    

  return (
    <div>Countriespage</div>
  )
}
