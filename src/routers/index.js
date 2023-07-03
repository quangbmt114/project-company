import Home from "../pages/Home";
import HowToStart from "../pages/HowToStart";
import Services from "../pages/Services";
import Careers from "../pages/Careers/Careers";

const publicRouters= [
    {path:"/",component:Home},
    {path:"/howtostart",component:HowToStart},
    {path:"/services",component:Services},
    {path:"/careers",component:Careers}
]
export {publicRouters};