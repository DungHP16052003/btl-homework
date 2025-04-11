
import Header from "./components/Header";
import Slides from "./components/Slides";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Discount from "./components/Discount";
import { Outlet } from "react-router-dom";
import Care from "./components/Care";

function DefaultLayout() {
  return (
    <div className="wrapper">
      <Header/>
      <Slides/>
      <Category/>
      <Discount/>
      <div>
        <Outlet/> 
      </div>
      <Care/>
      <Footer/>
    </div>
  );
}

export default DefaultLayout;
