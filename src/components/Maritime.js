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
  React.useEffect(() => {
    (() => {
      fetch('http://localhost:8080/Transport/maritime')
        .then((response) => response.json())
        .then((data) => {
          console.log({data});
          setData(data.results.bindings)})
    })()
  }, [])

  const orederByPoids = () => {
    fetch(ordred ? 'http://localhost:8080/Transport/maritime' : 'http://localhost:8080/Transport/maritime/ordred')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results.bindings);
        setOrdred(!ordred)
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
              <Title>Maritime</Title>
              <Button onClick={orederByPoids}>{ordred ? "revert" : "Order by date arrive"}</Button>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>model</TableCell>
                    <TableCell>marque</TableCell>
                    <TableCell>dateDepart</TableCell>
                    <TableCell>dateArrivee </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow key={row.maritime.value}>
                      <TableCell>{row.model.value}</TableCell>
                      <TableCell>{row.marque.value}</TableCell>
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
