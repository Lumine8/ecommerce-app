import { v4 as uuid } from "uuid";
import img1 from "../../Assets/Barry-Callebaut-on-growth-opportunities-for-chocolate.jpg"
import img2 from "../../Assets/GettyImages-645462725-e1616622396590.jpg"
import img3 from "../../Assets/l-intro-1658850950-fotor-20230718172057.jpg"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Chocolate",
    description:
      "Chocolate is a food made from roasted and ground cacao seed kernels that is available as a liquid, solid, or paste, either on its own or as a flavoring agent in other foods.",
    img:img1
    },
  // {
  //   _id: uuid(),
  //   categoryName: "Cookies",
  //   description:
  //     "A cookie, or a biscuit, is a baked or cooked snack or dessert that is typically small, flat and sweet. It usually contains flour, sugar, egg, and some type of oil, fat, or butter.",
  // },
  {
    _id: uuid(),
    categoryName: "Beverage",
    description:
      "A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture.",
    img:img2
    },
  {
    _id: uuid(),
    categoryName: "Cake",
    description:
      "Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked. In their oldest forms, cakes were modifications of bread.",
    img:img3
    },
  // {
  //   _id: uuid(),
  //   categoryName: "Ice-Cream",
  //   description:
  //     "Ice cream is a frozen dessert, typically made from milk or cream and flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruits.",
  // },
];
