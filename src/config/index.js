const config = {
  routes: {
    home: "/",
    home2: "/home2",
    //Auth
    login: "/login",
    register: "/register",
    profile: "/p/:username",
    editProfile: "/edit",
    //Products
    products: "/products",
    product: "/products/:slug",
    //RecruitmentJobs
    recruitment: "/recruitment",
    recruitmentStory: "/recruitmentStory",
    RecruitmentExcellent: "/RecruitmentExcellent",
    //History
    history: "/history",
    //Delivery
    delivery: "/delivery",
    security: "/security",
    //Users:
    users: "/users",
    notfound: "*",
  },
};
export default config;
