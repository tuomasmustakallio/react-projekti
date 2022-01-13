import React, { useState } from "react";
import { Skill } from "./skill";
import "./style.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";

const languages = [
  "Python",
  "Java",
  "JavaScript",
  "Swift",
  "C++",
  "C#",
  "Rust",
  "HTML",
  "CSS",
  "C",
  "Kotlin",
];

const skills = [
  "React",
  "Android Apps",
  "iOS Apps",
  "Server management",
  "SQL",
  "Version Control",
];

function renderItem({ selected, handleRemoveLanguage }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveLanguage(selected)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Skill skillName={selected.name} skillAmount={selected.value} />
    </ListItem>
  );
}
function renderSkill({ selectedSkill, handleRemoveSkill }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveSkill(selectedSkill)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Skill skillName={selectedSkill.name} skillAmount={selectedSkill.value} />
    </ListItem>
  );
}

export function Skills() {
  //Hetkellisiä arvoja
  let selected = { id: 1, name: "", value: 0 };
  let selectedSkill = { id: 1, name: "", value: 0 };

  //Handles showing the adding options for languages
  const [show, setShow] = useState(false);

  //Handles showing the adding options for languages
  const [showSkill, setShowSKill] = useState(false);

  let valuetext, skillvaluetext;

  //Handles selected language
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  //Handles selected skill
  const [skill, setSkill] = useState("");

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };

  //Handles language slider
  const [value, setValue] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  //Handles skill slider
  const [skillValue, setSkillValue] = useState(50);

  const handleSkillSliderChange = (event, newValue) => {
    setSkillValue(newValue);
  };

  //Handles list of selected languages
  const [selectedLanguages, setSelectedLanguages] = useState(
    languages.slice(0, 0)
  );

  const handleAddLanguage = () => {
    selected.value = value;
    selected.name = language;
    let nextHiddenItem = selected;
    if (nextHiddenItem) {
      setSelectedLanguages((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveLanguage = (selected) => {
    setSelectedLanguages((prev) => [...prev.filter((i) => i !== selected)]);
  };

  //Handles list of selected skill
  const [selectedSkills, setSelectedSkills] = useState(
    skills.slice(0, 0)
  );

  const handleAddSkill = () => {
    selectedSkill.value = skillValue;
    selectedSkill.name = skill;
    let nextHiddenSkill = selectedSkill;
    if (nextHiddenSkill) {
      setSelectedSkills((prev) => [nextHiddenSkill, ...prev]);
    }
  };

  const handleRemoveSkill = (selectedSkill) => {
    setSelectedSkills((prev) => [...prev.filter((i) => i !== selectedSkill)]);
  };

  return (
    <div>
      <>
        <div class="Header">
          <h1>Programming skills</h1>
        </div>
        <div class="SecondHeader">
          <h2>Languages</h2>
        </div>
        <div class="Skills">
          <Box sx={{ mt: 1 }}>
            <List>
              <TransitionGroup>
                {selectedLanguages.map((selected) => (
                  <Collapse id={selected}>
                    {renderItem({ selected, handleRemoveLanguage })}
                  </Collapse>
                ))}
              </TransitionGroup>
            </List>
          </Box>
        </div>
        <div class="addLButton">
          <>
            <Button
              variant="contained"
              onClick={() => setShow((prev) => !prev)}
            >
              Add a language
            </Button>
            <div class="DropDown">
              {show && (
                <Box>
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
                          {languages.map((language) => (
                            <MenuItem key={language} value={language}>
                              {language}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <h4 class="Skill">I am this good at it</h4>
                    <div class="Slider">
                      <Slider
                        value={value}
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        min={10}
                        max={100}
                        onChange={handleSliderChange}
                      />
                    </div>
                    <div class="Skill">
                      <Button
                        variant="contained"
                        disabled={language === ""}
                        onClick={handleAddLanguage}
                      >
                        Add language
                      </Button>
                    </div>
                  </Box>
                </Box>
              )}
            </div>
          </>
        </div>
        <div class="SecondHeader">
          <h2>Other skills</h2>
        </div>
        <div class="Skills">
          <Box sx={{ mt: 1 }}>
            <List>
              <TransitionGroup>
                {selectedSkills.map((selectedSkill) => (
                    <Collapse id={selectedSkill}>
                      {renderSkill({ selectedSkill, handleRemoveSkill })}
                    </Collapse>
                  ))}
              </TransitionGroup>
            </List>
          </Box>
        </div>
        <div class="addLButton">
          <>
            <Button
              variant="contained"
              onClick={() => setShowSKill((prev) => !prev)}
            >
              Add a Skill
            </Button>
            <div class="DropDown">
              {showSkill && (
                <Box>
                  <Box component="span">
                    <div class="InputSkill">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Skill
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={skill}
                          label="Skill"
                          onChange={handleSkillChange}
                        >
                          {skills.map((skill) => (
                            <MenuItem key={skill} value={skill}>
                              {skill}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <h4 class="Skill">I am this good at it</h4>
                    <div class="Slider">
                      <Slider
                        value={skillValue}
                        defaultValue={50}
                        getAriaValueText={skillvaluetext}
                        valueLabelDisplay="auto"
                        step={10}
                        min={10}
                        max={100}
                        onChange={handleSkillSliderChange}
                      />
                      </div>
                      <div class="Skill">
                      <Button
                        variant="contained"
                        disabled={skill === ""}
                        onClick={handleAddSkill}
                      >
                        Add Skill
                      </Button>
                    </div>
                  </Box>
                </Box>
                )}
            </div>
          </>
        </div>
      </>
    </div>
  );
}
