import React, { useState } from "react";
import axios from "axios";
import { CountryTypes } from "./TypeCountries";
import {

  Button,

} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const App = () => {
  const [countries, setCountries] = useState<CountryTypes[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");


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
