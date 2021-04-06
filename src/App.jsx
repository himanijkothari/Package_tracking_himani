// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import information from "./data/information.json";
import Header from "./component/Navbar";
import Home from "./pages/Home";
import Package from "./pages/TrackPackage";
import SearchResult from "./pages/Searchresult";
import "./style/style.css";



export default function App() {

  
  return (
    <div className="App">
      
      <BrowserRouter>
        {/* The header is outside the Switch to make it available all the time */}
        <Header />
    
        {/* The pages we want to show based on the browser URL */}
        <Switch>
          <Route component={Home} path="/" exact  />
          <Route component={Package} path="/trackPackage"/>
          <Route component={SearchResult} path="/results/:PackageID"/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

