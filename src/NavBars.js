import React from 'react';
import {Button, Box }from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import HomeIcon from '@material-ui/icons/Home';
import DropdownAdmin from './DropdownAdmin';
import DropdownReports from './DropdownReports';
import '@szhsin/react-menu/dist/index.css';


export default function CustomizedMenus() {
  return (
    <div>
      <AppBar position="static" style={{backgroundColor:"#333333"}}>
      <Box style={{ display: "flex", flexDirection: 'row', justifyContent: "flex-start", marginLeft: "170px"}}>
          <Menu menuButton={
                <Button color="inherit"><HomeIcon fontSize="small"/>Home</Button>} styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>
                <MenuItem styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>Dashboard</MenuItem>
          </Menu>
        <DropdownReports />
        <DropdownAdmin />
      </Box>
      </AppBar>
    </div>
  );
}