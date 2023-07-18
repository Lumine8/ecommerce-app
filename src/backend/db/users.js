import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    address: [
      { street: "2717 Saint St, TX",state:"Texas", pincode: "987465", city: "Houston" },
      { street: "XYZ 987, This St.",state:"Madhya Pradesh", pincode: "462001", city: "Bhopal" },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
