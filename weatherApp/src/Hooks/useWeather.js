import { useState,useEffect } from "react";

function useWeatherInfo(state){
    const [data,setData] = useState({})

    useEffect(() => {
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${state}`, {
            headers: {
                'X-RapidAPI-Key': '36f8bd0ed3msh3cdd868e6daf478p1c04eajsn5d28da329d61',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
      }, []);    

      return data
}

export default useWeatherInfo