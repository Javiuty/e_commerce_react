import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormatContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormatContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  );
};

export default CustomTextField;
