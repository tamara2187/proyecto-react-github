import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"
//este comp es para cuando buscas una url que no exista dentro de esta pag web , y te aparece esto.
const NotFound=()=>{
return(
<Layout>
  <h1>Esta pagina que buscaba no existe</h1>  
 <Link to="/"> ir a inicio</Link>
 </Layout> 
)
//no hace falta importar elñ comp Link porque ya lo gice en mi header y ya esta en mi routerApp .




}
export{NotFound}