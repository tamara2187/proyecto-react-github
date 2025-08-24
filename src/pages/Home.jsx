//crear el comp Home
import { Layout } from "../components/Layout"
const Home=()=>{

return(
    //este comp que se renderiza ,layout, es un plantilla por eso , el comp tiene un cierre de apertura 
    //y en el medio va lo que va a mostrar , dentro de este comp tambien esta el header y footer , es decir que si renderizamos 
    //home va aparecer el footer , el header y lo que hay dentro de el Home 
<Layout>


<h1>Bienvenidos a mi Home</h1>


</Layout>
)


}
export{Home}