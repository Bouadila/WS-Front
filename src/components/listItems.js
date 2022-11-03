import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <Link to="Conteneurs" style={{ textDecoration: "none" }}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
        Conteneurs
      </Link>
    </ListItemButton>
    <ListItemButton>

      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="energie" style={{ textDecoration: "none" }}>
        Energie
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="marchendise" style={{ textDecoration: "none" }}>
        <ListItemText primary="Marchendise" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="transport" style={{ textDecoration: "none" }}>
        <ListItemText primary="Transport" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="aerien" style={{ textDecoration: "none" }}>
        <ListItemText primary=" Aerien" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="maritime" style={{ textDecoration: "none" }}>
        <ListItemText primary=" Martime" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="routier" style={{ textDecoration: "none" }}>
        <ListItemText primary=" Routier" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="ferroviaire" style={{ textDecoration: "none" }}>
        <ListItemText primary=" Ferroviaire" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="vehicule" style={{ textDecoration: "none" }}>
        <ListItemText primary=" Vehicule" />
      </Link>
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="transportEnergie" style={{ textDecoration: "none" }}>
        <ListItemText primary="Transport par energie" />
      </Link>
    </ListItemButton> */}
  </React.Fragment>
);
