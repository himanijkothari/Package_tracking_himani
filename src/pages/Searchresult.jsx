//NPM
import {useEffect,useState} from 'react';
export default function Searchresult({match}){

   //State
  const[PackageDetails,setPackageDetails]=useState([]);

   //Const API from where data is fetching
  const API_URL="https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {
    
    fetch(API_URL)
      .then(Response=> Response.json())
      .then((json)=> onFetchSuccess(json))
      .catch((error) => onFetchFail(error))
      
    },[setPackageDetails]);

    function onFetchSuccess(json)
    {
      setPackageDetails(json);
    }

    function onFetchFail(error) {
      console.log("Error", error);
    }

    const packageid= match.params.PackageID;

    const filteredArray = PackageDetails.filter((item)=> item.parcel_id.match(packageid)).map((item)=>{
        return(
            <ul>
                <li id={item.id}><span>Your Parcel ID:</span> {item.parcel_id}</li> 
                <li id={item.id}><span>Your Parcel Status:</span> {item.status}</li> 
                <li id={item.id}><span>Estimated Time of Delivery:</span> {item.eta}</li> 
                <li id={item.id}><span>Parcel sent by:</span> {item.sender}</li> 
                <li id={item.id}><span>Current location of your parcel:</span> {item.location_name}</li> 
            </ul>
           
        );
     });
  
    return(
      
        <div className="searchresult">
          <h1>Your Parcel details are:</h1>
          {filteredArray}
        </div>
      );


      
}