import React, {useState} from 'react'; 
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid, Typography, TextField, Paper, Button} from "@material-ui/core";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 0,
      },
    }));

const AddEmployee = (props) => {
    const classes = useStyles();
    const [employeeName, setEmployeeName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const errors = {}
    
    const handleEmployeeName = (e) => {
        setEmployeeName(e.target.value)
    }
    const handleCustomerName = (e) => {
        setUserName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword= (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword= (e) => {
        setConfirmPassword(e.target.value)
    }



    const runValidations = () => {
        if(employeeName.trim().length === 0){
            errors.employeeName = 'This field is required.'
        }
        if(userName.trim().length === 0){
            errors.userName = 'This field is required.'
        }
        if(email.trim().length === 0){
            errors.email = 'This field is required.'
        }
        if(password.trim().length < 10){
            errors.password = 'This field is required.'
        }
        if(confirmPassword.trim().length < 10){
            errors.confirmPassword = 'This field is required.'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()
        if(Object.keys(errors).length === 0){
           
            const formData = {
                        employeeName: employeeName,
                        userName: userName,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword
                    }
                    console.log(formData)
                    
                    setEmployeeName('')
                    setUserName('')
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
        }else{
           
        }
        
    }

    return (
        <Container>
            <Grid container> 
                <Grid xs = {12}>
                    <form onSubmit = {handleSubmit}>
                        <Paper>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6" className={classes.title}>
                                     Employee Details
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <Grid container style = {{position: "relative", padding: 20 }}>
                            <Grid xs = {12} sm = {6} style={{justifyContent:"space-between", display: 'flex', flexWrap: 'wrap'}}>
                                <Typography style={{paddingLeft: 50}}>Employee Name:</Typography> 
                                <TextField style={{width: 400}} type = 'text' value = {employeeName} onChange = {handleEmployeeName} placeholder = 'employee_name' mediumWidth/>
                                
                            </Grid>
                            </Grid>
                        </Paper>
                        <Paper>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6" className={classes.title}>
                                     Registration Information
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <Grid container style = {{position: "relative", padding: 20 }}>
                            <Grid xs = {12} sm = {6} style={{justifyContent:"space-between", display: 'flex', flexWrap: 'wrap'}}>
                                <Typography style={{paddingLeft: 100}}>Username</Typography> 
                                <TextField style={{width: 400}} type = 'text' value = {userName} onChange = {handleCustomerName} placeholder = 'User Name' mediumWidth/>
                               
                            </Grid>
                            <Grid xs = {12} sm = {6} style={{justifyContent:"space-between", display: 'flex', flexWrap: 'wrap'}}>
                                <Typography style={{paddingLeft: 70}}>Email ID</Typography> 
                                <TextField  style={{width: 350}} type = 'text' value = {email} onChange = {handleEmailChange} placeholder = 'E-mail' mediumWidth/>
                                
                            </Grid>
                            <Grid xs = {12} sm = {6} style={{justifyContent:"space-between", display: 'flex', flexWrap: 'wrap'}}>
                                <Typography style={{paddingLeft: 100, marginTop:"50px"}}>Password</Typography> 
                                <TextField  style={{width: 400, marginTop:"50px"}} type = 'text' value = {password} onChange = {handlePassword} placeholder = '********' mediumWidth/>
                                
                            </Grid>
                            <Grid xs = {12} sm = {6} style={{justifyContent:"space-between", display: 'flex', flexWrap: 'wrap'}}>
                                <Typography style={{paddingLeft: 70, marginTop:"50px"}}>Confirm Password</Typography> 
                                <TextField  style={{width: 350, marginTop:"50px"}} type = 'text' value = {confirmPassword} onChange = {handleConfirmPassword} placeholder = '********' mediumWidth/>
                                
                            </Grid>
                            </Grid>
                            <Grid align="center" style = {{position: "relative", padding: 20, marginBottom: "50px" }}>
                                <Button type = "submit" variant="contained" style = {{backgroundColor:"#32C5D2"}}>Submit</Button>
                                <Button type = "submit" variant="contained" style= {{margin:"10px"}}>Reset</Button>
                            </Grid>
                        </Paper>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}
export default AddEmployee