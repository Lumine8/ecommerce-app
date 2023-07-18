import { useContext, useState } from "react";
import "./userDetails.css";
import { DataContext } from "../../ContextProvider/DataProvider";
import { AuthContext } from "../../ContextProvider/AuthProvider";

export default function UserProfile() {
 const {newAddress,setnewAddress,} = useContext(DataContext)
 const { getAddress, setGetAddress } = useContext(AuthContext);

  const onStateChange = (e) => {
    setnewAddress({ ...newAddress, state: e });
  };
  const onCityChange = (e) => {
    setnewAddress({ ...newAddress, city: e });
  };
  const onStreetChange = (e) => {
    setnewAddress({ ...newAddress, street: e });
  };
  const onPincodeChange = (e) => {
    setnewAddress({ ...newAddress, pincode: e });
  };
  const saveAddresses = () =>{
    setGetAddress([...getAddress, newAddress])
  }

  console.log(getAddress)
  return (

    <div id="userdetails" className="container">
    <div>
        <h2>All Addresses</h2>
        <ul>{getAddress.map((item)=>{
            const {street, city, state, pincode} = item;
            return(
                <li style={{listStyle:"none"}}>
                    <p>{street}</p>
                    <p>{city} • {state} • {pincode}</p>
                </li>
            )
        })}</ul>
    </div>
      <div class="form-group">
        <input type="street" placeholder="Street" onChange={(e) => {onStreetChange(e.target.value)}} />

        <input type="city" placeholder="City" onChange={(e) => {onCityChange(e.target.value)}} />

        <input type="state" placeholder="State" onChange={(e) => {onStateChange(e.target.value)}} />

        <input type="zip" placeholder="Zip" onChange={(e) => {onPincodeChange(e.target.value)}} />
      </div>
      <button onClick={saveAddresses}>Save Address</button>
    </div>
  );
}
