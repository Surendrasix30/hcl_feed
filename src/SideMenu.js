import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: { 
    height: 680,
    flexGrow: 1,
    maxWidth: 400,
  },
  item: {
    fontSize: "62.5%"
  },
  button:{
    left:"30px",
    top:"30px",
    height:30,
    width:25,
    backgroundColor: "#337ab7",
    color:"#FFFFFF"
  }
});

export default function FileSystemNavigator() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <TreeItem nodeId="1" label="Noida" className={classes.item}>
        <TreeItem nodeId="2" label="A8-9, Sector 60" />
        <TreeItem nodeId="3" label="A10-11, Sector 3" />
        <TreeItem nodeId="4" label="A11, Sector 16" />
        <TreeItem nodeId="5" label="A2, Sector 3" />
        <TreeItem nodeId="6" label="A9, Sector 3" />
        <TreeItem nodeId="7" label="N4, Sector 59" />
        <TreeItem nodeId="8" label="N5, Sector 60" />
        <TreeItem nodeId="9" label="LBP 127" />
      </TreeItem>
      <TreeItem nodeId="10" label="Lucknow">
        <TreeItem nodeId="11" label="IT01" />
        <TreeItem nodeId="12" label="IT03" />
        <TreeItem nodeId="13" label="SDC01" />
        <TreeItem nodeId="14" label="SDC02" />
      </TreeItem>
      <TreeItem nodeId="15" label="Chennai">
        <TreeItem nodeId="16" label="AMB 1" />
        <TreeItem nodeId="17" label="AMB 3" />
        <TreeItem nodeId="18" label="AMB 4" />
        <TreeItem nodeId="19" label="AMB 5" />
        <TreeItem nodeId="20" label="AMB 6" />
        <TreeItem nodeId="21" label="ETA Block 1" />
        <TreeItem nodeId="22" label="ETA Block 2&3" />
        <TreeItem nodeId="23" label="Arihant Technopolis" />
        <TreeItem nodeId="24" label="Ozone" />
      </TreeItem>
      <TreeItem nodeId="25" label="Nagpur">
        <TreeItem nodeId="26" label="IT01 - Nagpur" />
        <TreeItem nodeId="27" label="Cafeteria" />
      </TreeItem>
      <TreeItem nodeId="28" label="Kolkata">
        <TreeItem nodeId="29" label="SEZ BLDG" />
      </TreeItem>
      <TreeItem nodeId="30" label="Vijayawada">
        <TreeItem nodeId="31" label="Medha Towers" />
      </TreeItem>
      <TreeItem nodeId="32" label="Noida 126 Campus">
        <TreeItem nodeId="33" label="Tower 1" />
        <TreeItem nodeId="34" label="Tower 2" />
        <TreeItem nodeId="35" label="Tower 3 " />
        <TreeItem nodeId="36" label="Tower 4" />
        <TreeItem nodeId="37" label="Tower 5" />
        <TreeItem nodeId="38" label="Tower 6" />
        <TreeItem nodeId="39" label="Corporate Block" />
        <TreeItem nodeId="40" label="Cafeteria 1" />
        <TreeItem nodeId="41" label="Cafeteria 2" />
        <TreeItem nodeId="42" label="Cafeteria 3" />
        <TreeItem nodeId="43" label="KNMA" />
        <TreeItem nodeId="44" label="Induction" />
      </TreeItem>
      <TreeItem nodeId="45" label="Bangalore">
        <TreeItem nodeId="46" label="ITPL Aviator" />
      </TreeItem>
      <TreeItem nodeId="47" label="Pune">
        <TreeItem nodeId="48" label="Mekong" />
      </TreeItem>
      <TreeItem nodeId="49" label="Vijayawada Campus">
        <TreeItem nodeId="50" label="Tower 1(SEZ)" />
        <TreeItem nodeId="51" label=" SDC(Non SEZ)" />
      </TreeItem>
      <TreeItem nodeId="52" label="Hyderabad">
        <TreeItem nodeId="53" label="GAR" />
        <TreeItem nodeId="54" label="C3I" />
      </TreeItem>
      <Button variant="contained" className={classes.button}>
        Submit
      </Button>
    </TreeView>
  );
}