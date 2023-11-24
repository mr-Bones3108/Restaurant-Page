import createHome from "./home";
import createTabs from "./tabs";


const pageLoader = ()=>{
    createTabs()
    createHome()
}

export default pageLoader