import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from '@mui/material/Box';

export function AddNew(){

    let valuetext;

    const [language, setLanguage] = useState("");

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Box component="span">
            <div class="InputSkill">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Coding Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  label="Coding Language"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>C</MenuItem>
                  <MenuItem value={1}>Java</MenuItem>
                  <MenuItem value={2}>Python</MenuItem>
                </Select>
              </FormControl>
            </div>
            <h4 class="Skill">I am this good at it</h4>
            <div class="Slider">
              <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                min={10}
                max={100}
              />
            </div>
            <div class="Skill">
              <Button variant="contained">Add skill</Button>
            </div>
            </Box>
    )
}