
//NPM
import {useState} from 'react';
import { useHistory } from "react-router-dom";

export default function TrackPackage(){
    
  //State
  const[PackageID,setPackageID]= useState("");

  const history = useHistory();

    function onSearch(event)
    {
        // alert(PackageID);
        event.preventDefault();
        history.push(`/results/${PackageID}`);
    }
     
    return(
        <div id="track" className="trackpage">
            <h1 className="heading-track">Track Packages</h1>
            <p className="details-track">Is a package on its way to you? Cool! <br/>
               Enter your package ID  below to track.<br/>
                </p>
         <form onSubmit={onSearch} className="search-bar">
            <input
            type="text" 
            placeholder="Enter your package ID here.."
            value={PackageID}
            onChange={(event)=>setPackageID(event.target.value)}
             />
            <input type="submit" value="Search"/>
            
        </form>

        
        </div>
    );
}