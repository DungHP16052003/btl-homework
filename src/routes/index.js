import AdminLayout from "@/layouts/AdminLayout";
import config from "../config";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Users from "@/pages/Users";
import Login from "@/pages/Login";
import Register from "@/pages/Register";


const routes = [
    {
        path: config.routes.home,
        component: Home,

    },
    //Auth
    {
        path: config.routes.register,
        component: Register,
        layout:AdminLayout,

    },
    {
        path: config.routes.login,
        component: Login,
        layout:AdminLayout,

    },

    //Products
    {
        path: config.routes.products,
        component: Products,
    },
    {
        path: config.routes.product,
        component: ProductDetail,
        layout:null,
    },
    //Users
    {
        path: config.routes.users,
        component: Users,
        protected: true,

    },

    {
        path: config.routes.notfound,
        component: NotFound,
    }
]

export default routes