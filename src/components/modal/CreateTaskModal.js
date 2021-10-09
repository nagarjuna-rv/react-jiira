import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreateTaskModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log('sub',data);
    props.addNewCard({
            title: data.get('title'),
            description: data.get('description'),
            epic: data.get('epic'),
            type: data.get('type'),
            assignTo: data.get('assignTo'),
    });
    handleClose();
}
  return (
    <div>
      <Button onClick={handleOpen}>Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={5}
                  name="description"
                  label="Description"
                  id="description"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="epic">Epic</InputLabel>
                <Select
                    name="epic"
                    id="epic"
                    label="Epic"
                    labelId="epic"
                    fullWidth
                    >
                         {props?.epic?.map((name) => (
                                <MenuItem key={name} value={name}>
                                {name}
                                </MenuItem>
                            ))}
                </Select>
                <FormHelperText>Select the epic</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="epic">Type</InputLabel>
                <Select
                    name="type"
                    id="type"
                    label="Type"
                    labelId="type"
                    fullWidth
                    >
                         {props?.type?.map((name) => (
                                <MenuItem key={name} value={name}>
                                {name}
                                </MenuItem>
                            ))}
                </Select>
                <FormHelperText>Select the type</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="assignTo">Assign to:</InputLabel>
                <Select
                    name="assignTo"
                    id="assignTo"
                    label="Assign to:"
                    labelId="assignTo"
                    fullWidth
                    >
                         {props?.users?.map((name) => (
                                <MenuItem key={name} value={name}>
                                {name}
                                </MenuItem>
                            ))}
                </Select>
                <FormHelperText>Select the user to assign </FormHelperText>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create 
            </Button>
          </Box>
      </Modal>
    </div>
  );
}
export default CreateTaskModal;