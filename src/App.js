import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Get_Popular from "./GetPopular/Get_Popular.jsx";
import styles from "./App.css";
import Get_Top_Rated from "./GetTopRated/Get_Top_Rated";
import Get_Up_Coming from "./GetUpComing/Get_Up_Coming";
import Nav from "./NavBar/Nav.js"
import { textAlign } from "@mui/system";
import Get_Details from "./GetDetails/Get_Details";
//Material-ui


function App() {
  return (
    
    <Router>
      <Nav/>
      <div className={styles.App}>
        {/* <h1 style= {{textAlign: "center"}}>The Movie JQ</h1> */}
        {/* <div style = {{padding: "20px"}}>
        <Button  variant="contained" color="primary" href = "/product">
          Agregar Producto
        </Button> */}
        <div style={{ marginLeft: "978px" }}>
         
        </div>
        {/* </div> */}
        {/* <hr /> */}
        <Switch>
          <Route path="/getPopular" exact>
            <Get_Popular />
          </Route>
          <Route path="/getTopRated" exact>
            <Get_Top_Rated />
          </Route>
          <Route path="/getUpComing" exact>
            <Get_Up_Coming />
          </Route>
          <Route path="/getDetails/:id" exact component= {Get_Details}>
            <Get_Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
