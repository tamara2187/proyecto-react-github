import { Layout } from "../components/Layout"
import { useState } from "react"
const Login=()=>{
//creamos un formulario que te pide correo y contraseña .
 const [correo,setcorreo]=useState("");
const [contraseña,setpassword]=useState("");
const [error,seterror]=useState(""); //un estado para mostrar error.

const Handlecorreo=(e)=>{
setcorreo(e.target.value)
}
const Handlecontraseña=(e)=>{
setpassword(e.target.value)


}









const Handlesumbit=(e)=>{
e.preventDefault()
seterror("") //al enviar el form de nuevo cuando comp todos los campos,te va aprecer el error de nuevo , por eso hayq ue limpiarllo
//console.log(correo,contraseña)//te muestra en la consola los estados de correo y contra , si no no te muestra nada miuy importante poner console.log de prueba

const Newuser={
correo, //es lo mismo que hacer correo:correo,
contraseña //contraseña:contraseña,

}
console.log(Newuser)



//validacion de campo 
if(!correo || !contraseña){
//console.log("complete todos los campos del Login")
seterror("¡Complete todos los campos !")

return

}




//vamos a setear los estados para que se limpie solo cuando envias
setcorreo(""); //se limpia porque cuando enttegemls el fomr , queremos que esa informacion  del usuario no se repita , y al hacer click se blanquean los inputs, entonces si pones click 
//te va aparecer el error.
setpassword("")

}
return(
    //crear estados como los que hicimos en Register
 

<Layout >


<h1>Bienvenidos a mi Login</h1>

<p>Ingresa tu correo y contraseña para acceder a tu cuenta.</p>

      <form onSubmit={Handlesumbit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={Handlecorreo} type="email" id="email" name="email" placeholder="ejemplo@correo.com" value={correo} />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input onChange={Handlecontraseña} type="password" id="password" name="password" placeholder="********" value={contraseña} />
        </div>
       {
        error &&<p style={{color:"red"}}>{error}</p>
       }
        <button >Ingresar</button>
      </form>

</Layout>
)


}
export{Login}
//hacer la condicion de que si no esta regitrado , no podes loguearte .