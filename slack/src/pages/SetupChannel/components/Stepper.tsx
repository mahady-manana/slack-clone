import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { stepUtil } from "./stepUtil";
import { useStyles } from "../styles";

interface StepperProps {
  step: 1 | 2 | 3;
  onClickNext: () => void;
  onChangeValue: (name: string, value: string) => void;
}
export const Stepper: FC<StepperProps> = ({
  step,
  onClickNext,
  onChangeValue,
}) => {
  const classes = useStyles();
  const [emailFields, setEmailFields] = useState<string[]>(["email1"]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChangeValue(name, value);
  };
  const handleNext = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClickNext();
  };
  const onAddNewEmailfield = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setEmailFields((prev) => prev.concat([`email${prev.length + 1}`]));
  };
  return (
    <Box p={2}>
      <Box>
        <Typography>Step {step} of 3</Typography>
      </Box>
      <Box>
        <Typography variant="h2">{stepUtil[step].title}</Typography>
      </Box>

      <Box>
        <Typography>{stepUtil[step].decription}</Typography>
      </Box>

      <Box py={3}>
        {step === 1 && (
          <TextField
            variant="outlined"
            name="companyName"
            placeholder="Ex: Acme Marketing or Acme Co"
            fullWidth
            className={classes.input}
            onChange={handleChange}
          />
        )}
        {step === 2 && (
          <TextField
            variant="outlined"
            name="channel"
            placeholder="Ex: Q4 budget, autumn campaign"
            fullWidth
            className={classes.input}
            onChange={handleChange}
          />
        )}
        {step === 3 && (
          <>
            {emailFields.map((field, index) => (
              <TextField
                variant="outlined"
                name={field}
                placeholder="Ex. ellis@gmail.com"
                fullWidth
                className={classes.input}
                onChange={handleChange}
                key={index}
                style={{ marginBottom: 10 }}
              />
            ))}
          </>
        )}
        {step === 3 && (
          <Button
            startIcon={<AddCircleOutlineIcon />}
            style={{ textTransform: "none" }}
            onClick={onAddNewEmailfield}
          >
            Add another
          </Button>
        )}
      </Box>

      <Box>
        <Button variant="contained" onClick={handleNext}>
          {step === 3 ? "Add Teammates" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};
