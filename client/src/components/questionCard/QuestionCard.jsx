import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function QuestionCard({
  name,
  option1,
  option2,
  option3,
  option4,
  marks,
  value,
  handleOnRadioChange
}) {
  
  return (
    <FormControl sx={{
      display:"flex",
      width:"100%",
      justifyContent:"center",

    }}
    valu
    >
      <Card sx={{ width: "100%", height: "30vh" ,justifyContent:"center"}}>
        <CardContent sx={{
          display:"flex",
          justifyContent:"space-between",
          width:"550px",
          border:"1px solid black"

        }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={value}
            onChange={handleOnRadioChange}
          >
           <Typography>Q.{name}</Typography>
           <FormLabel id="demo-radio-buttons-group-label">Choices</FormLabel>


            <FormControlLabel
              value={option1}
              control={<Radio />}
              label={option1}
            />
            <FormControlLabel
              value={option2}
              control={<Radio />}
              label={option2}
            />
            <FormControlLabel
              value={option3}
              control={<Radio />}
              label={option3}
            />
            <FormControlLabel
              value={option4}
              control={<Radio />}
              label={option4}
            />
          </RadioGroup>
          <Typography>Marks:-{marks}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </FormControl>
  );
}
