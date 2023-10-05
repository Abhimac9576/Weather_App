import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [state, setState] = useState("Delhi");
  const [image, setImage] = useState("../src/static/sun.png");

  useEffect(() => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${state}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "36f8bd0ed3msh3cdd868e6daf478p1c04eajsn5d28da329d61",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching data:", error));
  }, [state]);

  // function formatTime(time) {
  //   const date = new Date(time);
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const ampm = hours >= 12 ? 'PM' : 'AM';
  //   const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  //   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  //   return `${formattedHours}:${formattedMinutes} ${ampm}`;
  // }

  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a")=> 
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format) ;



  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mt-6 ">Weather App</h1>

        <div className="shadow-md mt-8 mb-10 p-4 rounded-2xl">
          <input
            className="border p-2 m-2 rounded-lg "
            placeholder="Search"
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
          />
        </div>

        <div className="flex flex-wrap mt-10 ">
          <div className="">
            <h2 className="text-4xl  mb-7">{state}</h2>
            <h3 className="text-7xl ">
              {data.temp}
              <sup>o</sup>
            </h3>
          </div>
          <div className="">
            <img className="w-40 ml-14 " src={image} alt="images" />
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-3 mt-10   ">
          <div className="flex border px-5 py-2 rounded-2xl">
            <div className="self-center">
              <h3 className="text-2xl ">Sunrise</h3>
              <h3>{data.sunrise}</h3>
            </div>
            <div>
              <img
                className="w-20 ml-10 "
                src="../src/static/sunrise.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex border px-5 py-2 rounded-2xl">
            <div className="self-center">
              <h3 className="text-2xl ">Sunset</h3>
              <h3>{data.sunset}</h3>
            </div>
            <div>
              <img
                className="w-20 ml-10 "
                src="../src/static/sunrise.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex border px-5 py-2 rounded-2xl">
            <div className="self-center">
              <h3 className="text-2xl ">Humidity</h3>
              <h3>{data.humidity}%</h3>
            </div>
            <div>
              <img
                className="w-20 py-2 ml-5"
                src="../src/static/humid.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex border px-5 py-2 rounded-2xl">
            <div className="self-center">
              <h3 className="text-2xl ">Wind Speed</h3>
              <h3>{data.wind_speed}KPH</h3>
            </div>
            <div>
              <img className="w-20" src="../src/static/wind.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
