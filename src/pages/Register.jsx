import { Layout } from "../components/Layout"
const Register=()=>{

return(
    

<Layout >


<h1>Bienvenidos a mi Register</h1>
     <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="********" />
        </div>

        <button type="submit">Registrarse</button>
      </form>

</Layout>
)


}
export{Register}