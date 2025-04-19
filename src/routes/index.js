import AdminLayout from "@/layouts/AdminLayout";
import config from "../config";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Users from "@/pages/Users";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import Home2 from "@/pages/Home2";
import NoFooterLayout from "@/layouts/NoFooterLayout";
import EditProfile from "@/pages/Profile/Component/EditProfile";
import RecruitmentJobs from "@/pages/RecruitmentJobs";
import RecruitmentStory from "@/pages/RecruitmentStory";
import RecruitmentExcellent from "@/pages/RecruitmentExcellent/component";



const routes = [
    {
        path: config.routes.home,
        component: Home,

    },
    {
        path: config.routes.home2,
        component: Home2,

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
        path: config.routes.profile,
        component: Profile,
        layout:NoFooterLayout,

    },
    {
        path: config.routes.editProfile,
        component: EditProfile,
        layout:NoFooterLayout,

    },
    {
        path: config.routes.product,
        component: ProductDetail,
        layout:null,
    },
    {
        path: config.routes.recruitment,
        component: RecruitmentJobs,
        layout:NoFooterLayout,

    },
    {
        path: config.routes.recruitmentStory,
        component: RecruitmentStory ,
        layout:NoFooterLayout,

    },
    {
        path: config.routes.RecruitmentExcellent,
        component: RecruitmentExcellent ,
        layout:NoFooterLayout,

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