import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Paper,
  Menu,
  MenuItem,
  IconButton,
  TableContainer,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

const Import = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    props.deleteMake(anchorEl.getAttribute("makeid"));
    handleClose();
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>

      <Container sx={{ width: 800, margin: "20px auto" }}>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>
          Import
        </Button>
        <h2>COUNT: {props.makes.length}</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Make</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.makes.map((make) => (
                <TableRow
                  key={make.MakeId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {make.MakeId}
                  </TableCell>
                  <TableCell>{make.MakeName}</TableCell>
                  <TableCell align="right">
                    <IconButton makeid={make.MakeId} onClick={handleClick}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Import;
