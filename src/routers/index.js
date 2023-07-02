import Home from "../pages/Home";
import HowToStart from "../pages/HowToStart";
import Services from "../pages/Services"
const publicRouters= [
    {path:"/",component:Home},
    {path:"/howtostart",component:HowToStart},
    {path:"/services",component:Services}
]
export {publicRouters};