import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import SideMenu from "./SideMenu";
import NavBars from "./NavBars";
import NavbarDropdown from "./NavbarDropdown";
import NewCharts from "./NewCharts";
import { makeStyles } from '@material-ui/core/styles';
import logo from './assets/Welldone.gif';
import logo1 from './assets/ok.gif';
import TextField from '@material-ui/core/TextField';
import Logo from './Logo';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles ((theme) => ({
  CardHeaderText:{
    color: "#333333",
    fontFamily: "Open Sans",
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold"
  },
  NavBars:{
    marginTop: "10px",
    marginBottom: "20px"
  },
  charts: {
    margin: "0 10px",
    marginTop: "10px",
    marginLeft: "50px",
    marginBottom: "10px"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: "30px",
    marginTop: "40px",
    marginBottom: "20px"
  },
  containerText: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: "20px",
    marginTop: "40px",
    marginBottom: "20px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button:{
    marginLeft:"300px",
    marginBottom:"30px",
    marginTop:"30px",
    height:30,
    width:40,
    paddingLeft: "50px",
    paddingRight: "50px",
    color:"#FFFFFF"
  }
}));


function Dashboard() {
  const classes = useStyles();
    return (
      <div style={{ width: '100%' }}>
        <Box display="flex" p={1}>
          <Box p={1} >
              <RouterLink to="/">
                <Logo />
              </RouterLink>
          </Box>
            <Box display="flex" justifyContent="center" marginLeft="400px" m={1} p={1}>
              <Typography className={classes.CardHeaderText}>
                Hcl Feedback
              </Typography>
            </Box>
          <Box p={1} flexShrink={0} marginLeft="300px">
            <NavbarDropdown />
          </Box>
        </Box>
        <NavBars className={classes.NavBars} />
        <Grid style={{ margin: "20px"}}></Grid>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} container>
              <Grid item xs container direction="row" spacing={3}>
              <Grid item xs={2}>
                <Paper>
                 <SideMenu />
                </Paper>
                </Grid>
                <Grid item xs={8}>
                  <Paper>
                          <Grid item xs container direction="row" spacing={1}>
                            <Grid item xs={2}>
                              <Paper>
                                <img height={90} src="https://i.pinimg.com/170x/d9/61/80/d96180b4a09537b0429a45319494761d--emoji-faces-smiley-faces.jpg"></img>
                              </Paper>
                            </Grid>
                            <Grid item xs={2}>
                              <Paper>
                               <img height={90} src="https://media.tenor.com/images/641cb09c1b48931a9caf6fdbb5688762/tenor.gif"></img>
                              </Paper>
                            </Grid>
                            <Grid item xs={2}>
                              <Paper>
                               <img src={logo1} height={90} />
                              </Paper>
                            </Grid>
                            <Grid item xs={2}>
                              <Paper>
                                <img height={90} src="https://i.pinimg.com/originals/aa/f7/f2/aaf7f2bb862a0004acad5bff2b08d927.gif"></img>
                              </Paper>
                            </Grid>
                            <Grid item xs={2}>
                              <Paper>
                                <img height={90} src="https://uploads.desmos.com/activitybuilder/fe484ed6a16fa361c43dfb55442caa24"></img>
                              </Paper>
                            </Grid>
                            <Grid item xs={2}>
                              <Paper>
                                <img src={logo} height={90} />
                              </Paper>
                            </Grid>
                            <Typography className={classes.containerText}>
                              Date From
                            </Typography>
                            <form className={classes.container} noValidate>
                              <TextField
                                id="datetime-local"
                                type="datetime-local"
                                defaultValue="2021-05-01T00:00:00"
                                className={classes.textField}
                              />
                            </form>
                            <Typography className={classes.containerText}>
                              Date To
                            </Typography>
                            <form className={classes.container} noValidate>
                              <TextField
                                id="datetime-local"
                                type="datetime-local"
                                defaultValue="2021-05-05T23:59:00"
                                className={classes.textField}
                              />
                            </form>
                            <Button variant="contained" style={{backgroundColor:"#32c5d2"}} className={classes.button} disableElevation>
                              Submit
                            </Button>
                          </Grid>
                          <Grid container spacing={2} className={classes.charts}><Paper>
                            <NewCharts />
                          </Paper></Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
export default Dashboard;