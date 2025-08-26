import { Link } from "react-router-dom"

const Header=()=>{
//creamos un header basico 
return(
<header>
<img></img>
<nav>
<ul>

<li><Link to="/">Inicio</Link></li>
<li><Link to="/Login">Login</Link></li>
<li><Link to="/Register">Register</Link></li>
<li><Link to="/Dashboard">Dashboard</Link></li>

<button> Cerrar sesion </button>
</ul>

</nav>
</header>

)

}
export{Header}
//el comp Link de la herramienta REACT-ROUTER-DOM se usa para url internas es decir dentro de tu navegador(dentro de tu pagweb) , 
//y la etiqueta a , si te abre otra pestaña (ocea pag externas) por eso es mejor utilizarlo