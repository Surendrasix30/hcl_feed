import React, { Fragment } from 'react';
import {Button}from '@material-ui/core';
import { NavLink } from 'react-router-dom';
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
import {DiStreamline} from 'react-icons/di';
import AddEmployee from './AddEmployee';


export default function DropdownAdmin() {

    return (
        <>
            <Menu menuButton={
                <Button color="inherit"><FolderIcon fontSize="small"/>Admin</Button>} styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>
                <SubMenu label={<Fragment><DiStreamline color="#6fa7d7" fontSize="1.5em"/><span>Employee</span></Fragment>} styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>
                    <MenuGroup>
                        <MenuItem styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}} >Add Employee</MenuItem>
                        <MenuItem styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>Employee Listing</MenuItem>
                    </MenuGroup>
                </SubMenu>
                <SubMenu label={<Fragment><DiStreamline color="#6fa7d7" fontSize="1.5em"/><span>Email</span></Fragment>} styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>
                    <MenuGroup>
                        <MenuItem styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>Add Email</MenuItem>
                        <MenuItem styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>Email Listing</MenuItem>
                    </MenuGroup>
                </SubMenu>
                <SubMenu label={<Fragment><DiStreamline color="#6fa7d7" fontSize="1.5em"/><span>QR Code</span></Fragment>} styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>
                    <MenuGroup>
                        <MenuItem styles={{ color: '#FFFFFF', backgroundColor: '#5d6b7a'}}>QR Based Feedback Generator</MenuItem>
                    </MenuGroup>
                </SubMenu>
            </Menu>
        </>
    );
}