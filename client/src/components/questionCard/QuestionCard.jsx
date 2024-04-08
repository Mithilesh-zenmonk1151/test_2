import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';

export default function QuestionCard({name,option1,option2,option3,option4,marks}) {
  return (
    <FormControl>
        < Typography>
        {name}
        </Typography>
      <FormLabel id="demo-radio-buttons-group-label">Choices</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value={option1} control={<Radio />} label={option1} />
        <FormControlLabel value={option2} control={<Radio />} label={option2} />
        <FormControlLabel value={option3} control={<Radio />} label={option3} />
        <FormControlLabel value={option4} control={<Radio />} label={option4} />
      </RadioGroup>
      <Typography>{marks}</Typography>
    </FormControl>
  );
}