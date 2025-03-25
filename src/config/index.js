
const config = {
   routes: {
     home: "/",
     //Auth
     login: "/login",
     register: "/register",
     //Products
     products: "/products",
     product: "/products/:slug",

    //Users
    users:"/users",
     notfound: "*",
   },
};
export default config