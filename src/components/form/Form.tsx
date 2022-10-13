import React from "react";
import "./form.scss";
import {
  Box,
  TextField,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface iFormProps {
  handleSubmit: any;
  errValidCategory: boolean;
  category: string;
  handleChange: any;
  errValidSearch: boolean;
  errInputMessage: string;
  setCategory: any;
}

const Form: React.FunctionComponent<iFormProps> = ({
  handleSubmit,
  errValidCategory,
  category,
  handleChange,
  errValidSearch,
  errInputMessage,
  setCategory,
}) => {
  return (
    <>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box sx={{ minWidth: 120 }} className="form__category">
          <FormControl fullWidth error={errValidCategory}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <MenuItem value="">
                <em>select country</em>
              </MenuItem>
              <MenuItem value="name">name</MenuItem>
              <MenuItem value="currency">currency</MenuItem>
              <MenuItem value="lang">language</MenuItem>
              <MenuItem value="capital">capital</MenuItem>
              <MenuItem value="lang">language</MenuItem>
              <MenuItem value="region">region</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          className="form__search"
          onChange={handleChange}
          placeholder="Search Country"
          label={`Name of ${category}`}
          name="country"
          variant="outlined"
          fullWidth
          required
          error={errValidSearch}
          helperText={errInputMessage}
        />

        <Button
          className="form__button"
          onSubmit={handleSubmit}
          type="submit"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          Search
        </Button>
      </form>
    </>
  );
};

export default Form;