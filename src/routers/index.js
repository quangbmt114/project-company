import Home from "../pages/Home/home.js";
import HowToStart from "../pages/HowToStart/howtostart.js";
import Services from "../pages/Services";
import Technologies from "../pages/Technologies";
import Careers from "../pages/Careers/Careers";
import ContactUs from "../pages/ContactUs";

const publicRouters= [
    {path:"/",component:Home},
    {path:"/howtostart",component:HowToStart},
    {path:"/services",component:Services},
    {path:"/technologies",component:Technologies},
    {path:"/careers",component:Careers},
    {path:"/contactus",component:ContactUs}
]
export {publicRouters};