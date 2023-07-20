import { useContext, useState } from "react";
import "./userDetails.css";
import { DataContext } from "../../ContextProvider/DataProvider";
import { AuthContext } from "../../ContextProvider/AuthProvider";

export default function UserProfile() {
  const { newAddress, setnewAddress } = useContext(DataContext);
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
  const saveAddresses = () => {
    setGetAddress([...getAddress, newAddress]);
  };

  console.log(getAddress);
  return (
    <div id="userdetails" className="container">
      <div>
        <h2>Saved Addresses</h2>
        <ul className="addresses">
          {getAddress.map((item) => {
            const { street, city, state, pincode } = item;
            return (
              <li style={{ listStyle: "none" }}>
                <p>Street: &nbsp; {street}</p>
                <p>
                  City / State / Zip: &nbsp; {city} • {state} • {pincode}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Add New Address</h2>
        <div className="form-group">
          <input
          style={{marginBottom:"3rem"}}
            type="street"
            placeholder="Street"
            onChange={(e) => {
              onStreetChange(e.target.value);
            }}
          />

          <input
          style={{marginBottom:"3rem"}}
            type="city"
            placeholder="City"
            onChange={(e) => {
              onCityChange(e.target.value);
            }}
          />

          <input
          style={{marginBottom:"3rem"}}
            type="state"
            placeholder="State"
            onChange={(e) => {
              onStateChange(e.target.value);
            }}
          />

          <input
          style={{marginBottom:"3rem"}}
            type="zip"
            placeholder="Zip"
            onChange={(e) => {
              onPincodeChange(e.target.value);
            }}
          />
        </div>
        <button onClick={saveAddresses}>Save Address</button>
      </div>
    </div>
  );
}
