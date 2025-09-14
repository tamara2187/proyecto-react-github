import { useState } from "react"

import { Layout } from "../components/Layout"

const Register=()=>{
//vamos hacer la parte Logica , tenemos que hacer un registro que contega nombre, email y contraseña
//vamos hacer estados :le avisan al comp que va haber una modificacion
// react tiene por defecto un re-render que lo hace cada vez , que hay un cambio en el esatdo o en las props de los comp,
//impoprtante solo se renderiza el comp que fue modificado por algun estado , no la pag web entera por eso el usuario no lo nota , si fuese toda la pag , lo notaria 
//asi que es es invisible , aparte como tenemos el evento onchange cada vez que hagamos un cambio en el estado de username que lo tiene el input usetrname /nombre
//se va ejecutar esta funcion del evento , pero eso es cada vez , ocea escribo mi nombre "tamara" y va a ahber un re-render 6 veces  , porque esa son las veces que hubo un cambio en ese input 
//pasa lo mismo con los otros estados.
const [username,setusername]=useState("");
const [email,setemail]=useState("");
const [password,setpassword]=useState("");
const [error,seterror] =useState("");


const HandleChangename=(e)=>{
setusername(e.target.value) 



}
const HandleChangeemail=(e)=>{
setemail(e.target.value)
}

const HandleChangepassword=(e)=>{

setpassword(e.target.value)


}
const HandleSumbit=(e)=>{

e.preventDefault( )
seterror("")//para evitar que cuando vuelvas a enviar el form completando todos los inputs , no te aparece ese error 


//validar los campos para que ningun input este vacio 
//cxondicion
if(!username || !email || !password){
seterror("hay un error , completar todos los campos")
//en la consola cada vez que entregue un campo de input vacio , te va a tirar este error en la consola.
//para que me aparesca en el navegador como un comentario de advertencia , necesitamos crear un estado en vez de ponerlo en la consola.
return

}


//creamos un objeto para el nuevo usuario

const newuser={
//cuando la valor  de un objeto tiene el mismo valor que el objeto , te podes ahorra el nombre y ponerlo asi:

//username,
//email,
//password,
//}
//console.log(newuser)
//directamente el valor , solo si el valor es igual al objeto, si es diferente no funciona.
username:username,
email:email,
password:password
}
console.log(newuser)

//ahora vamos a limpiar los estados  , esto limpia todo lo la info que esta en la consola , en este caso ,tu nombre, contraseña y email
//pero tambien hay que limpiar el input , si no te queda el input con toda tu info y cuando hagas click , no se va a mostrar tu info en la consola 
//por eso debemos actualizar los inputs.eso lo vamos a lograr  poniendole un value a los inputs , valor inicial del estado , username,email y password
setusername("")
setemail("")
setpassword("")
}
return(
    

<Layout >


<h1>Bienvenidos a mi Register</h1>
     <form onSubmit={HandleSumbit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input onChange={HandleChangename} type="text" id="nombre" name="nombre" placeholder="Tu nombre" value={username || ""} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={HandleChangeemail} type="email" id="email" name="email" placeholder="ejemplo@correo.com" value={email || "" } />
        </div>
        
        
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input onChange={HandleChangepassword} type="password" id="password" name="password" placeholder="********" value={password || ""} />
        </div>
        
        {
          error && <p style={{color:"red"}}>{error}</p> 

        }

        <button type="submit">Registrarse</button>
      </form>

</Layout>
)


}
export{Register}
//no deberia ser asi , utilizamos una condicion forzada en esta linea de cod:value={email || "" } />
//porque antes no tenia value y despues se lo puse , puede que haya errores .


//en esta linea de cod , nos esta mostrando que si existe un error nos va  a renderizar un comentario del parrafo y se va ver de color rojo
  // error && <p style={{color:"red"}}>complete todos los campos!</p> 
  //los campos de validacion hay que estudiarlos , porque son varias cosas , como verificar que sea un nombre y no un ".", o que tenga tantos caracteres , como en el documento
  // que el email tenga mayus, @ y "." son varias cosas por estudiar.

        
