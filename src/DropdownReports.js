import React from 'react';
import {Button}from '@material-ui/core';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu,
    MenuHeader,
    MenuDivider,
    MenuGroup
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import FolderIcon from '@material-ui/icons/Folder';
import {MdLibraryBooks} from 'react-icons/md';

export default function DropdownReport() {

    return (
        <>
            <Menu menuButton={
                <Button color="inherit"><FolderIcon fontSize="small"/>Reports</Button>} styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>
                <MenuItem styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>
                <MdLibraryBooks color="#6fa7d7" fontSize="1.5em"/> Feedback Report</MenuItem>
            </Menu>
        </>
    );
}