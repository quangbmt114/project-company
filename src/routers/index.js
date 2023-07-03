import Home from "../pages/Home";
import HowToStart from "../pages/HowToStart";
import Services from "../pages/Services";
import Careers from "../pages/Careers/Careers";
import ContactUs from "../pages/ContactUs";

const publicRouters= [
    {path:"/",component:Home},
    {path:"/howtostart",component:HowToStart},
    {path:"/services",component:Services},
    {path:"/careers",component:Careers},
    {path:"/contactus",component:ContactUs}
]
export {publicRouters};