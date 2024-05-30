import Navabr from "../src/components/Navbar"
import Navbaritems from "../src/components/Navbar-items"
import Saleimage from "../src/components/saleimage";
import Couses from "../src/components/courses";
import Toprecommended from "./components/toprecommended";
import Most from "../src/components/mostpopular";
import Footer from "../src/components/footer";
function App(){
    return(
        <>
         <Navabr></Navabr>
        <Navbaritems></Navbaritems>
        <Saleimage></Saleimage>
        <Couses></Couses>
        <Toprecommended></Toprecommended>
        <Most></Most>
        <Footer></Footer>
        </>
        
    )
}

export default App;