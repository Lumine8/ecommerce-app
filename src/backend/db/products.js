import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    category: "Cake",
    title: "Strawberry Pavlova",
    desc: "Delicate as the ballerina it was named after, Pavlova is the quintessential summer dessert. Whipped cream is typically dolloped on top of a snowy meringue, followed by a pop of color in the form of fruit.",
    image:
      "https://static01.nyt.com/images/2022/05/11/dining/NL-Strawberry-pavlova/merlin_205193310_6169f5d3-5ad8-4eae-b05e-427f41b6a1ff-superJumbo.jpg",
    thumbnail:
      "https://static01.nyt.com/images/2022/05/11/dining/NL-Strawberry-pavlova/merlin_205193310_6169f5d3-5ad8-4eae-b05e-427f41b6a1ff-superJumbo.jpg",
    rating: "4.0",
    price: "300.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Bresil Captivant 65%",
    desc: "A bar of dark chocolate made with the finest Brazilian cocoa beans with fresh notes of yellow fruits and slightly spicy followed by a slightly acidic attack with a strong cocoa taste for a good length in the mouth.",
    image:
      "https://media.lamaisonduchocolat.com/catalog/product/cache/cc3d0d65a4156928414062ee0914d513/b/r/br_sil_captivant_1.jpg",
    thumbnail:
      "https://media.lamaisonduchocolat.com/catalog/product/cache/cc3d0d65a4156928414062ee0914d513/b/r/br_sil_captivant_1.jpg",
    rating: "5.0",
    price: "999.00",
  },
  {
    _id: uuid(),
    category: "Beverage",
    title: "Blue Tokai Coffee Vienna Roast",
    desc: "The second darkest of our roasts, this blend has great body, low acidity and is a favourite choice for coffee drinkers who enjoy a strong cup, with the characteristic bittersweet notes. The Vienna Roast is best enjoyed with milk.",
    image:
      "https://cdn.shopify.com/s/files/1/0738/1409/products/ViennaRoast3_220422-15.jpg?v=1650948261&width=1024&height=768",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0738/1409/products/ViennaRoast3_220422-15.jpg?v=1650948261&width=1024&height=768",
    rating: "5.0",
    price: "470.00",
  },{
    _id: uuid(),
    category: "Chocolate",
    title: "My/Mochi Ice Cream, Cookies & Cream",
    desc: "Cookies & Cream My/Mo Mochi Ice Cream is the perfect combination of rich, premium ice cream and crisp, chocolatey cookies wrapped in mushy, mochi dough. A new kind of yum in your handheld snack…because nobody craves same-old.",
    image:
      "https://m.media-amazon.com/images/I/71Te4kzoToS._SL1500_.jpg",
    thumbnail:
      "https://m.media-amazon.com/images/I/71Te4kzoToS._SL1500_.jpg",
    rating: "4.9",
    price: "899.00",
  },
 {
    _id: uuid(),
    category: "Cake",
    title: "Japanese Sponge Cake",
    desc: "Kasutera is a traditional Japanese sponge cake made with sugar, flour, eggs, and starchy syrup. This Nagasaki specialty is raised solely by egg foam, with no added butter or oil, and has a soft, moist, and spongy texture. The cake is also known as Castella.",
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/07c6b2fac6ab43d5b00ef5a72d084032.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/Images/Dishes/07c6b2fac6ab43d5b00ef5a72d084032.jpg?w=200&h=200",
    rating: "4.5",
    price: "750.00",
  },
  
  {
    _id: uuid(),
    category: "Beverage",
    title: "Beewel 100% Specialty Grade Robusta",
    desc: "From the House Of Beewel : Bring home the taste of soothing bliss with Beewel’s Robusta medium roast whole bean made with speciality grade ,freshly roasted , Single origin straight from Mercara gold estate, the choicest plantations from coorg.",
    image:
      "https://i0.wp.com/beewel.in/wp-content/uploads/2022/12/Robusta-Coffee-Beans-300-g-Front.jpg?fit=600%2C600&ssl=1",
    thumbnail:
      "https://i0.wp.com/beewel.in/wp-content/uploads/2022/12/Robusta-Coffee-Beans-300-g-Front.jpg?fit=600%2C600&ssl=1",
    rating: "5.0",
    price: "449.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Arabian Coffee Chocolate Cake",
    desc: "Strong & stimulating coffee mixed with a 38% dark chocolate truffle, layered onto cocoa cake sponges, covered and decorated with a fine chocolate truffle glaze with cocoa coffee bean.",
    image: "https://zukachocolates.com/storage/2021/03/46.jpg",
    thumbnail: "https://zukachocolates.com/storage/2021/03/46.jpg",
    rating: "4.6",
    price: "359.00",
  },
  
  {
    _id: uuid(),
    category: "Cake",
    title: "Cremeschnitte",
    desc: "Cremeschnitte is a vanilla-flavored custard cream cake and an absolute classic among central and eastern European desserts. It is known by many names, most of which have stemmed from the German cremeschnitte, and literally translate to either cream slice or, in some cases, cream pie.",
    image:
      "https://realfood.tesco.com/media/images/RaspberryCremeschnitte-LGH-mini-9f2c763c-0724-4fce-9632-965e842cc98e-0-1400x919.jpg",
    thumbnail:
      "https://realfood.tesco.com/media/images/RaspberryCremeschnitte-LGH-mini-9f2c763c-0724-4fce-9632-965e842cc98e-0-1400x919.jpg",
    rating: "4.3",
    price: "800.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Classic Sachertorte",
    desc: "The original Sachertorte is the most famous Austrian cake. It is a classic, layered chocolate sponge cake that is thinly coated with high-quality apricot jam and topped with chocolate icing. Sachertorte is said to taste the best when accompanied by cloud of unsweetened whipped cream on the side.",
    image:
      "https://cdn.tasteatlas.com/images/dishes/4621a49b7d544148975c04373b7d1420.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/images/dishes/4621a49b7d544148975c04373b7d1420.jpg?w=200&h=200",
    rating: "4.3",
    price: "449.00",
  },
  
  {
    _id: uuid(),
    category: "Beverage",
    title: "Society Coffee Premix Pouch",
    desc: "Wake up and smell this premium instant coffee. You will fall in love with it instantly. First the strong aroma and then the refreshing sip..ahhh! And come to think of it all you have to do is just add hot water, stir and you're ready to indulge yourself.",
    image:
      "https://cdn.shopify.com/s/files/1/0590/8067/1386/products/SocietyCoffeePremix1KgPouch_700x.jpg?v=1652696168",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0590/8067/1386/products/SocietyCoffeePremix1KgPouch_700x.jpg?v=1652696168",
    rating: "5.0",
    price: "383.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Australian Lamington Cake",
    desc: "The world-famous Australian culinary icon Lamington consists of a sponge cake that is dipped in chocolate and sprinkled with finely desiccated coconut. The cake is believed to have been created by accident when Lord Lamington's maid accidentally dropped his cake in melted chocolate.",
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/8cafb772b8a8405dbe62f68ebe8cdb28.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/Images/Dishes/8cafb772b8a8405dbe62f68ebe8cdb28.jpg?w=200&h=200",
    rating: "4.2",
    price: "349.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Romagnola-Italian Ciambella",
    desc: "Ciambella is a traditional Italian ring cake that is flavored with lemon zest, and sometimes a sweet, fruity liqueur. For holidays such as Christmas or Easter, ciambella is usually made from a firm dough that is braided and shaped into a ring.",
    image:
      "https://cdn.tasteatlas.com/images/dishes/edb4a6075cb745479fbbd4a335140b9c.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/images/dishes/edb4a6075cb745479fbbd4a335140b9c.jpg?w=200&h=200",
    rating: "3.8",
    price: "599.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Red velvet Cake",
    desc: "This American classic is traditionally made for Valentine's Day and Christmas. Red velvet cake is typically covered in a French-style butter roux icing, though recently cream cheese frosting and buttercream have both been used as a simpler and tastier alternative.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg",
    rating: "3.5",
    price: "799.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "New York-style cheesecake",
    desc: "New York-style cheesecake is different from other cheesecakes mainly because of its heavy and dense texture that feels extremely smooth and rich. Its flavor should be sweet and tangy, not citrusy, chewy, or starchy.",
    image:
      "https://cdn.tasteatlas.com/images/dishes/2b32fef1de134125b9c5f71836c40a8a.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/images/dishes/2b32fef1de134125b9c5f71836c40a8a.jpg?w=200&h=200",
    rating: "4.0",
    price: "499.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Ruby Chocolate Bar Blueberry Cranberry Purple Haze",
    desc: "A refreshing burst of berries enhances the subtle fruitiness and fresh citric notes of ruby chocolate. A unique flavourful experience that’s going to put a spell on you.",
    image:
      "https://cdn.shopify.com/s/files/1/0586/5429/4206/products/purple-haze-630596_1944x.jpg?v=1663919893",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0586/5429/4206/products/purple-haze-630596_1944x.jpg?v=1663919893",
    rating: "3.4",
    price: "395.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Teff Crackle 72% Dark Chocolate",
    desc: "First Teff chocolate with Goodness of Prebiotic Fiber,rich in natural Prebiotic fibre extracted from Citrus fruits, Papaya, Pineapple & Soya bean which introduces natural sweetness and reduces the bitter taste of dark chocolate",
    image:
      "https://cdn.shopify.com/s/files/1/0530/0145/3717/products/9_d1ebcc72-0256-4fa2-865e-cca319672354_1800x1800.jpg?v=1648541378",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0530/0145/3717/products/9_d1ebcc72-0256-4fa2-865e-cca319672354_1800x1800.jpg?v=1648541378",
    rating: "4.5",
    price: "395.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "52% Dark Chocolate | Couverture | Organic",
    desc: "Cocoacraft’s organic cocoa beans are handpicked from plantations in Kerala, then fermented, dried and processed naturally into fine chocolate. We take great care to bring out the natural flavour of the cocoa by extended conching.",
    image:
      "https://cdn.shopify.com/s/files/1/0408/0854/6463/products/WhatsAppImage2023-02-10at10.16.11AM.jpg?v=1676004408&width=800",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0408/0854/6463/products/WhatsAppImage2023-02-10at10.16.11AM.jpg?v=1676004408&width=800",
    rating: "4.5",
    price: "395.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Ambriona - 55% Mild Dark Chocolate",
    desc: "Crafted by blending the highest-quality cocoa from Costa Rica, Togo and Vietnam. This Signature Blend bar is the perfectly balanced Dark chocolate, enamored with hints of red fruits and mild bitterness that never fails to leave behind a lingering fruity and smoky aftertaste on your palate.",
    image:
      "https://cdn.shopify.com/s/files/1/0066/2713/1490/products/PHOTO-2018-11-27-21-48-37-3_1280x.jpg?v=1663408434",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0066/2713/1490/products/PHOTO-2018-11-27-21-48-37-3_1280x.jpg?v=1663408434",
    rating: "3.5",
    price: "235.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Assorted Chocolate Dark",
    desc: "This is a luxury assorted dark chocolate gift box with 50g each 85%, 75%, Almond and Hazelnut Dark Chocolate. Chocolate was invented in 1900 BC by the Aztecs in Central America. We at Didier & Frank bring you those exotic flavours and hand crafted chocolates that the Aztecs enjoyed secretly.",
    image: "https://m.media-amazon.com/images/I/81QdhfaqrVL._SL1500_.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/81QdhfaqrVL._SL1500_.jpg",
    rating: "4.5",
    price: "635.00",
  },
  ,
  {
    _id: uuid(),
    category: "Beverage",
    title: "Jolt Caramel Coffee- 80% Arabica Coffee | 20% Washed Robusta",
    desc: "Heavy mouthfeel with caramel notes & a pleasant aftertaste. This balanced coffee works well with milk based & black coffee drinks. 80% Arabica Coffee: 20% Washed Robusta",
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/28489029/1493700877.jpg",
    thumbnail:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/28489029/1493700877.jpg",
    rating: "4.3",
    price: "449.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Medovik",
    desc: "Medovik is a popular Russian layered honey cake consisting of honey-infused, almost biscuit-like sponges that are coated with thin layers of cream. Although there are numerous variations of the cake, the custard is usually prepared with whipped cream or various combinations of condensed milk and butter.",
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/9863c29236aa4a188608ec198fcdab7d.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/Images/Dishes/9863c29236aa4a188608ec198fcdab7d.jpg?w=200&h=200",
    rating: "4.5",
    price: "629.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Black Forest",
    desc: "Black Forest cherry cake is a popular German dessert consisting of chocolate sponges that are coated in whipped cream and dotted with kirschwasser-infused cherries. Some varieties use the kirschwasser brandy to soak the chocolate layers or to lightly flavor the whipped cream.",
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/b19aebb29acd4062b729913ed0af1692.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/Images/Dishes/b19aebb29acd4062b729913ed0af1692.jpg?w=200&h=200",
    rating: "4.2",
    price: "550.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Krémes",
    desc: "The Hungarian version of the famous cremeschnitte goes under the name krémes, meaning creamy. It combines two layers of puff pastry held together with a generous amount of smooth pastry cream. Though the recipe has been slightly modernized, the classic krémes pastry cream should be light and airy.",
    image:
      "https://cdn.tasteatlas.com/images/dishes/3a50c3d19f014dab8720930f7fe381d8.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/images/dishes/3a50c3d19f014dab8720930f7fe381d8.jpg?w=200&h=200",
    rating: "4.4",
    price: "475.00",
  },
  {
    _id: uuid(),
    category: "Beverage",
    title: "Dark Chocolate Balanced Diet Coffee",
    desc: "Guilt-free, delicious & healthy! Premium dark chocolate flavoured instant coffee infused with 11 healthy vitamins.",
    image:
      "https://cdn.shopify.com/s/files/1/0583/3329/8841/files/IncredaBrewDarkChocolateFlavouredWellnessCoffee.jpg?v=1683964952",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0583/3329/8841/files/IncredaBrewDarkChocolateFlavouredWellnessCoffee.jpg?v=1683964952",
    rating: "3.7",
    price: "225.00",
  },
  {
    _id: uuid(),
    category: "Beverage",
    title: "Rage Coffee - Dark Chocolate",
    desc: " Made using 100% Arabica beans and infused with high-quality natural flavourings. Balanced, smooth, and sweet without any bitterness. A complex special blend thanks to small batch crystallisation. Each serving has <5 calories, 90-120 mg caffeine per serving.",
    image:
      "https://www.jiomart.com/images/product/600x600/rvcwrqk1nb/rage-coffee-50-gms-dark-chocolate-flavour-product-images-orvcwrqk1nb-p596643987-0-202303012028.jpg",
    thumbnail:
      "https://www.jiomart.com/images/product/600x600/rvcwrqk1nb/rage-coffee-50-gms-dark-chocolate-flavour-product-images-orvcwrqk1nb-p596643987-0-202303012028.jpg",
    rating: "3.9",
    price: "244.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Chocolate coated Coffee beans Dragees",
    desc: "Entisi dragees are chocolate coated nuts or fruits made with the finest quality of ingredients sourced from around the world.Whole roasted coffee beans dipped in dark chocolate",
    image:
      "https://cdn.shopify.com/s/files/1/0550/8159/9141/products/8906116820063FRONT1_2048x2048.png?v=1619602632",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0550/8159/9141/products/8906116820063FRONT1_2048x2048.png?v=1619602632",
    rating: "3.8",
    price: "299.00",
  },
  {
    _id: uuid(),
    category: "Beverage",
    title: "Chocolate Raspberry Premium Instant Coffee",
    desc: "Unique blend of chocolate, coffee and a twist of raspberry that'll hit you with a 90's nostalgia from the time you open your bottle to the very last sip of coffee. This fresh and tangy flavour is an IMPULSE COFFEES EXCLUSIVE! ",
    image:
      "https://cdn.shopify.com/s/files/1/0603/6239/1807/products/DSC09405_720x.jpg?v=1658996959",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0603/6239/1807/products/DSC09405_720x.jpg?v=1658996959",
    rating: "4.6",
    price: "450.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Fudgy Brownie Cookie Dough Mix",
    desc: "A perfect marriage between a Chewy Chocolate Cookie and a Rich Fudgy Brownie, for a lot less calories. We’ve perfected cookies, and you can take all the credit.",
    image:
      "https://i0.wp.com/cocosutra.com/wp-content/uploads/2020/06/Cookie-Dough-Mix-Fudgy-Brownie-1.jpg?fit=1500%2C1500&ssl=1",
    thumbnail:
      "https://i0.wp.com/cocosutra.com/wp-content/uploads/2020/06/Cookie-Dough-Mix-Fudgy-Brownie-1.jpg?fit=1500%2C1500&ssl=1",
    rating: "4.8",
    price: "200.00",
  },
  {
    _id: uuid(),
    category: "Beverage",
    title: "Coffee Cookies | Ultra Low Carb",
    desc: "These products have been carefully curated to not only take care of your nutriotional Keto needs but also satisfy your craving of traditional snacks that one usually misses while on Ketogenic Diet.",
    image:
      "https://www.ketofy.in/wp-content/uploads/2019/04/Ketofy-Coffee-Cookies-Front-min-2-scaled.jpg",
    thumbnail:
      "https://www.ketofy.in/wp-content/uploads/2019/04/Ketofy-Coffee-Cookies-Front-min-2-scaled.jpg",
    rating: "4.9",
    price: "200.00",
  }, {
    _id: uuid(),
    category: "Chocolate",
    title: "Vegan Dark Chocolate Sea Salt Gelato",
    desc: "True chocoholics, get ready for our Vegan Dark Chocolate Sea Salt Gelato. Blend of creamy dark chocolate with a hint of contrasting sea salt, this flavour will blow your mind. It’s Dairy-free with no added sugar, this is truly a Vegan delight!",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOXS6tP8U_3Jn-FpKlvVt1ZKIMZL_cE1RkDGjA-VOJKXK8TmY0VVCjdig0pH_-IyXtvg1gDy1fxeC5w8PA72jnzrWBXgg00A&usqp=CAY",
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOXS6tP8U_3Jn-FpKlvVt1ZKIMZL_cE1RkDGjA-VOJKXK8TmY0VVCjdig0pH_-IyXtvg1gDy1fxeC5w8PA72jnzrWBXgg00A&usqp=CAY",
    rating: "5.0",
    price: "500.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Green Girl Bakeshop Ice Cream Sandwich",
    desc: "Creamy and milky Ice cream sandwiched between biscuits will definitely please your tastebuds. The amazing taste of milky ice cream between the biscuits makes it the tastiest ice cream of all time.",
    image:
      "https://cdn.dribbble.com/users/6251/screenshots/2514896/gg-ice-cream-sandwich-packaging-design2.jpg",
    thumbnail:
      "https://cdn.dribbble.com/users/6251/screenshots/2514896/gg-ice-cream-sandwich-packaging-design2.jpg",
    rating: "4.9",
    price: "1000.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Sernik: Polish cheesecake",
    desc: "Sernik is a Cheesecake from Poland, stemming from old Christian and Jewish traditions. It is made with eggs, sugar, and twaróg - a type of curd cheese that has been used in desserts for hundreds of years. It is believed that sernik originated in the 17th century.",
    image:
      "https://cdn.tasteatlas.com/Images/Dishes/63c5320b6ff94d81abfccc78f70d2dd5.jpg?w=905&h=510",
    thumbnail:
      "https://cdn.tasteatlas.com/Images/Dishes/63c5320b6ff94d81abfccc78f70d2dd5.jpg?w=200&h=200",
    rating: "4.1",
    price: "659.00",
  },
  {
    _id: uuid(),
    category: "Beverage",
    title: "Coffee Cookies",
    desc: "Your love for coffee now comes in a form of a cookie, made with a rich blend of coffee extract, jaggery, oatmeal powder and vegan butter, these cookies will surely fill your room with a scent of freshly brewed sweet coffee.",
    image:
      "https://cdn.shopify.com/s/files/1/0126/6732/2432/products/coffeecookies.jpg?v=1677924189&width=600",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0126/6732/2432/products/coffeecookies.jpg?v=1677924189&width=600",
    rating: "3.5",
    price: "199.00",
  },
  {
    _id: uuid(),
    category: "Cake",
    title: "Apricot Delight",
    desc: "Apricot delight is made with puree of apricots that have been soaked overnight in water. The soaked apricots are cooked with sugar and spread between slices of sponge cake",
    image:
      "https://hashtagbiryani.com/wp-content/uploads/2022/12/Apricot-Delite.jpg",
    thumbnail:
      "https://hashtagbiryani.com/wp-content/uploads/2022/12/Apricot-Delite.jpg",
    rating: "3.2",
    price: "315.00",
  },
  {
    _id: uuid(),
    category: "Chocolate",
    title: "Choco-Dipped Marie Biscuit",
    desc: "A childhood favourite, we combined the OG Marie Gold Biscuit with creamy, smooth and delicious chocolate. Each biscuit is sandwiched together and loaded with rich sweet chocolate filling and dipped further in chocolate.",
    image:
      "https://cdn.shopify.com/s/files/1/0464/2045/9669/products/5_be53d51e-786e-4b41-9092-f05b0d7a10e3_1000x.png?v=1668764901",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0464/2045/9669/products/5_be53d51e-786e-4b41-9092-f05b0d7a10e3_1000x.png?v=1668764901",
    rating: "3.0",
    price: "499.00",
  }, 
];

// {
//   _id: uuid(),
//   title: "You Can WIN",
//   author: "Shiv Khera",
//   price: "5000",
//   categoryName: "non-fiction",
// },
// {
//   _id: uuid(),
//   title: "You are Winner",
//   author: "Junaid Qureshi",
//   price: "3000",
//   categoryName: "horror",
// },
// {
//   _id: uuid(),
//   title: "Think and Grow Rich",
//   author: "Shiv Khera",
//   price: "1000",
//   categoryName: "fiction",
// },
