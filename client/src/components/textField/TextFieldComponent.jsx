import { TextField, Stack, InputLabel } from '@mui/material';
import React from 'react';
import './TextFieldcom.css';

function TextFieldCompo(props) {
  const { value, placeholder, label, type, customClassName, setValue } = props;

  return (
    <Stack sx={{ marginTop: '22px' }}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <TextField
        id={label}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        className={customClassName}
        sx={{
          paddingTop: '14px',
        }}
      />
    </Stack>
  );
}

export default TextFieldCompo;
