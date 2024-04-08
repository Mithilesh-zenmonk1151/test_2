import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(props) {
  const { customPlaceHolder, customClassForSearchBar } = props;

  return (
    <Paper
      className={customClassForSearchBar}
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 250,
        height: 35,
        bgcolor: "#f7f7f7",
        borderBottom: "white",
        boxShadow: "none",
        marginBottom: "10px"
      }}
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={customPlaceHolder}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
