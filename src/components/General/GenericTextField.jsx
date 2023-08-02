import React from 'react';
import { TextField as MuiTextField, styled } from '@mui/material';

const styles = {
  label: {
    "& .MuiFormLabel-root": {
      color: "#EEEEEE"

    },
    "& .Mui-focused": {
      color: "#EEEEEE !important"

    }
  },
  textField: {
    boxShadow: '0px 20px 15px rgba(0, 0, 0, 0.05)',
    borderColor: 'transparent',
    '& .MuiInputBase-root': {

      fontSize: '13.997px',
      lineHeight: '28px',
      color: 'white',
      fontWeight: 500,
      background: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      '&:hover fieldset': {
        borderColor: ({ palette }) => palette.primary.main,
      },
      borderRadius: '8px',
      '& fieldset': {        
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 8,
        borderColor: 'transparent',
        borderWidth: 0,
        color: '#EEE'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
     
    },
  },
};

const StyledTextField = styled(MuiTextField)(styles.textField);

const GenericTextField = ({ label = '', type = 'text', ...props }) => {
  return (
    <>
      <StyledTextField
        variant="outlined"
        fullWidth
        InputLabelProps={{ classes: { root: styles.label } }}
        label={label}
        type={type}
        {...props}
        sx={styles.label}
      />
    </>
  );
};

export default GenericTextField;
