import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Title from "./Title";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


function DashboardContent() {
  const [data, setData] = React.useState([])
  const [ordred, setOrdred] = React.useState(false)
  const [filtred, setFiltred] = React.useState(false)
  React.useEffect(() => {
    (() => {
      fetch('http://localhost:8080/Transport/routier')
        .then((response) => response.json())
        .then((data) => {
          console.log({data});
          setData(data.results.bindings)})
    })()
  }, [])

  const orederByPoids = () => {
    fetch(ordred ? 'http://localhost:8080/Transport/routier' : 'http://localhost:8080/Transport/routier/peugeot')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results.bindings);
        if (filtred)
          setFiltred(false)
        setOrdred(!ordred)
      })
  }

  const filterByPoids = () => {
    fetch(!filtred ? 'http://localhost:8080/Transport/routier/ordred' : 'http://localhost:8080/Transport/routier')
      .then((response) => response.json())
      .then((data) => {
        console.log({data})
        setData(data.results.bindings);
        if (ordred)
          setOrdred(false)
        setFiltred(!filtred)
      })
  }

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Title>Routier</Title>
              <Button onClick={orederByPoids}>{ordred ? "revert" : "Peugeot"}</Button>
              <Button onClick={filterByPoids}>{filtred ? "revert" : "ordred par datee depart"}</Button>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>marque</TableCell>
                    <TableCell>model</TableCell>
                    <TableCell>dateDepart</TableCell>
                    <TableCell>dateArrivee </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow key={row.routier.value}>
                      <TableCell>{row.marque.value}</TableCell>
                      <TableCell>{row.model.value}</TableCell>
                      <TableCell>{row.dateDepart.value}</TableCell>
                      <TableCell>{row.dateArrivee.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
