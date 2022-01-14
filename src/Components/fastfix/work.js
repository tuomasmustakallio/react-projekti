import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { TransitionGroup } from "react-transition-group";
import List from "@mui/material/List";
import TextField from '@mui/material/TextField';
import Collapse from "@mui/material/Collapse";
import './workstyle.css';

const example = [
    "work"
]

function renderItem({ work, handleRemoveWork }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveWork(work)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={work.title} secondary={work.desc}/>
    </ListItem>
  );
}

export function Work() {
  let work = { id: 1, title: "", desc: "" };

  const [title, setTitle] = React.useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [desc, setDesc] = React.useState("");

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const [selectedWork, setSelectedWork] = React.useState(example.slice(0, 0));

  const handleAddWork = () => {
    work.title = title;
    work.desc = desc;
    let nextWorkItem = work;
    if (nextWorkItem) {
      setSelectedWork((prev) => [nextWorkItem, ...prev]);
    }
  };

  const handleRemoveWork = (work) => {
    setSelectedWork((prev) => [...prev.filter((i) => i !== work)]);
  };
  
  return (
    <div class="Nyt">
      <h2 class="h">Work Experience</h2>
            <TextField
            fullWidth
             label="Job Title" variant="outlined"
             onChange={handleTitleChange}
            />
            <TextField
            fullWidth
            label="Job Description" variant="outlined"
            maxRows={4} multiline
            onChange={handleDescChange}
            />
            <div class="textField">
            <Button variant="contained" onClick={handleAddWork} disabled={title === ""}>
            Add Work Experience
            </Button>
            </div>
        <Box sx={{ mt: 1}}>
            <List>
            <TransitionGroup>
                {selectedWork.map((work) => (
                <Collapse id={work}>
                    {renderItem({ work, handleRemoveWork })}
                </Collapse>
                ))}
                </TransitionGroup>
            </List>
        </Box>
    </div>
  );
}
