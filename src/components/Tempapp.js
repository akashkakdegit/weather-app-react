import React, { useEffect, useState } from "react";
import '../App.css';
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");
  const APIKEY = "4b415bf526b69606d45c71e38031aac3";
  useEffect(() => {
    const fetchApi = async () => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${APIKEY}`
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      if (resJson.name === undefined) {
        //alert("undefined city name")
        setCity(null)
      }
      else {

        setCity(resJson);
      }
    };

    fetchApi();
  }, [search])
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            placeholder="Enter city name"
            onChange={(event) => {
              event.preventDefault();
              setSearch(event.target.value)
            }
            }
          />
        </div>
        {
          !city ? (
            <p className="errorMsg">No data found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view"></i>
                  {search}</h2>
                <h1>
                  {city.main.temp}<span>&#8451;</span>
                </h1>
                <h3 className="tempmin_max">
                  Min:{city.main.temp_min}<span>&#8451;</span> ┃ Max:{city.main.temp_max}<span>&#8451;</span>
                </h3>

              </div>
              <div className="wave"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
            </div>
          )
        }



      </div>
    </>
  )
}
export default Tempapp;
