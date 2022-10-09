import React, { useState } from "react";
import axios from "axios";
import { CountryTypes } from "./TypeCountries";
import Country from "./components/country/Country";
import {

  Button,

} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const App = () => {
  const [countries, setCountries] = useState<CountryTypes[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [errorStatus, setErrorStatus] = useState<boolean>(false);


  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryTypes[]>(
        `https://restcountries.com/v3.1/${category}/${inputSearch}`
      );

      setCountries(data);

    } catch {

    } finally {
    }
  };

  const countriesMap = () => {
    if (!errorStatus) {
      return ( countries.map((country) => (
        <div key={country.population} className="countryCardContainer">
          <Country country={country} category={category} />
        </div>
      ))
      )
    }

    return (
      <div className="error-page">
        <div className="error-message">
          <h1> there is no RESULT </h1>
          <p>--- please check if the spelling of information is correct---</p>
        </div>
      </div>
    );
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();


   
      getCountries();
    }
  
  return (
    <div className="container">

    <div className="form_container">
    <form
      className="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
    

      <Button
        className="button"
        onSubmit={handleSubmit}
        type="submit"
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
      >
        Submit
      </Button>
    </form>
  </div>
       
    </div>
  );
};

export default App;
