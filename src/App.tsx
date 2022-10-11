import React, { useState } from "react";
import axios from "axios";
import { CountryTypes } from "./TypeCountries";
import Country from "./components/country/Country";
import Loading from "./components/loading/Loading";

import {

  Button,

} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const App = () => {
  const [countries, setCountries] = useState<CountryTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [inputSearch, setInputSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [errorStatus, setErrorStatus] = useState<boolean>(false);


  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryTypes[]>(
        `https://restcountries.com/v3.1/${category}/${inputSearch}`
      );

      setCountries(data);
      setErrorStatus(false);
      console.log(errorStatus);

    } catch {
      setErrorStatus(true);
      console.log("olmadi");
      console.log(errorStatus);
    } finally {
      setLoading(false);

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
      <Loading loading={loading}>
        <div>
          <div className="country-container">{countriesMap()}</div>
        </div>
      </Loading>
    </div>
  );
};

export default App;
