//vamos a crear el router para las rutas de los comp(url) porque react no los tiene por eso instalasmo la herramienta react-router-dom
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import{NotFound} from "../pages/NotFound"
import { Footer } from "../components/Footer"
const RouterApp=()=>{

return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/Dashboard" element={<Dashboard/>}/>
<Route path="*" element={<NotFound/>}/>


</Routes >



</BrowserRouter>




)




}
export{RouterApp}
