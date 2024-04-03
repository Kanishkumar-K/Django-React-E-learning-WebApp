import * as React from 'react';
import Navbar from './Navbar';
import bgi from './img/image4.png';

import {
  CssBaseline,
  Snackbar,
  Modal,
  TextField,
  MenuItem,
  Button,
  Box,
} from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  Add as AddIcon,
  Edit as EditIcon,
  DeleteOutlined as DeleteIcon,
  Save as SaveIcon,
  Block as BlockIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import MuiAlert from '@mui/material/Alert';
import { randomId } from '@mui/x-data-grid-generator';

const roles = ['Html and CSS', 'JavaScript', 'React JS', 'Web Development'];

const initialRows = [];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
});

function EditToolbar(props) {
  const { openModal } = props;

  const handleClick = () => {
    openModal();
  };

  return (
    <div style={{ 
      position: 'relative',
      width: '100vw', 
      height: '3000vh', 
      overflow: 'hidden', 
      backgroundImage: `url(${bgi})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '3000vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          zIndex: 1, // Ensure content is in front of background

        }}
      >
        <GridToolbarContainer>
          <Button
            style={{
              backgroundColor: '#f7f6f2',
              marginLeft: '100px',
            }}
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleClick}
          >
            Add User
          </Button>
          <br />
        </GridToolbarContainer>
      </div>
    </div>

    
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [suspendedId, setSuspendedId] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [newUserDetails, setNewUserDetails] = React.useState({
    name: '',
    age: '',
    role: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (!newUserDetails.name.trim()) {
      setSnackbarMessage('Name cannot be empty.');
      setSnackbarOpen(true);
      return;
    }

    if (!newUserDetails.age.trim() || isNaN(newUserDetails.age)) {
      setSnackbarMessage('Age must be a valid number.');
      setSnackbarOpen(true);
      return;
    }

    if (!newUserDetails.role.trim()) {
      setSnackbarMessage('Role cannot be empty.');
      setSnackbarOpen(true);
      return;
    }

    if (!newUserDetails.email.trim() || !emailRegex.test(newUserDetails.email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarOpen(true);
      return;
    }

    if (!newUserDetails.phoneNumber.trim() || !phoneRegex.test(newUserDetails.phoneNumber)) {
      setSnackbarMessage('Please enter a valid phone number in format (123-456-7890).');
      setSnackbarOpen(true);
      return;
    }

    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, ...newUserDetails, isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));

    setModalOpen(false);
    setNewUserDetails({
      name: '',
      age: '',
      role: '',
      email: '',
      countryCode: '+1',
      phoneNumber: '',
    });
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    if (suspendedId === id) {
      setSnackbarMessage('User account is suspended. You cannot edit this record.');
      setSnackbarOpen(true);
      return;
    }
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    // Save logic here
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleBlockClick = (id) => () => {
    if (suspendedId === id) {
      // Unblock the user if already blocked
      setSuspendedId(null);
      setSnackbarMessage(`User with ID ${id} has been unblocked.`);
    } else {
      // Block the user if not already blocked
      setSuspendedId(id);
      setSnackbarMessage(`User with ID ${id} has been blocked.`);
    }
    setSnackbarOpen(true);
  };
  

  const handleCancelClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {

    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleRowDoubleClick = (params, event) => {
    console.log('Double clicked on row', params.id);
  };

  const handleRowModesModelChange = (newModel) => {
    setRowModesModel(newModel);
  };

  React.useEffect(() => {
    if (snackbarOpen) {
      const snackbarTimer = setTimeout(() => {
        setSnackbarOpen(false);
      }, 6000);
      return () => clearTimeout(snackbarTimer);
    }
  }, [snackbarOpen]);

  const columns = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    { field: 'age', headerName: 'Age', width: 100, editable: true },
    {
      field: 'role',
      headerName: 'Course Name',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: roles,
    },
    
    { field: 'email', headerName: 'Email', width: 200, editable: true },
    { field: 'countryCode', headerName: 'Country Code', width: 120, editable: true },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 180,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CloseIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<BlockIcon />}
              label="Block"
              className="textPrimary"
              onClick={handleBlockClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            disabled={suspendedId === id}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            disabled={suspendedId === id}
          />,
          <GridActionsCellItem
            icon={<BlockIcon />}
            label="Block"
            onClick={handleBlockClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 480,
        width: '110%',
        borderRadius: 8,
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        style={{
          marginLeft: '-110px',
          paddingLeft: '20px',
          border: '2px solid black',
        }}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        onRowDoubleClick={handleRowDoubleClick}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { openModal },
        }}
      />

      <Box>
        <Modal open={modalOpen} onClose={closeModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              width:"1000px",
              p: 4,
            }}
          >
            <TextField
              name="name"
              label="Name"
              placeholder="Enter name"
              value={newUserDetails.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              name="age"
              label="Age"
              placeholder="Enter age"
              value={newUserDetails.age}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              name="role"
              select
              label="Course"
              placeholder="Select course"
              value={newUserDetails.role}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            >
              {roles.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="email"
              label="Email"
              placeholder="Enter email"
              value={newUserDetails.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              name="countryCode"
              label="Country Code"
              placeholder="Enter country code"
              value={newUserDetails.countryCode}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter phone number"
              value={newUserDetails.phoneNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Navbar />

    </Box>
  );
}


