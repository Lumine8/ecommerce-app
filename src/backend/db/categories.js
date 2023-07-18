import { v4 as uuid } from "uuid";

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
    img: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
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
    img: "https://images.unsplash.com/photo-1562707904-8280ad4e2bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJldmVyYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Cake",
    description:
      "Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked. In their oldest forms, cakes were modifications of bread.",
    img: "https://images.unsplash.com/photo-1686221817801-27b85431430d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
   },
  // {
  //   _id: uuid(),
  //   categoryName: "Ice-Cream",
  //   description:
  //     "Ice cream is a frozen dessert, typically made from milk or cream and flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruits.",
  // },
];
