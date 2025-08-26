import { Layout } from "../components/Layout"
const Login=()=>{

return(
    

<Layout >


<h1>Bienvenidos a mi Login</h1>

<p>Ingresa tu correo y contraseña para acceder a tu cuenta.</p>

      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="********" />
        </div>

        <button >Ingresar</button>
      </form>

</Layout>
)


}
export{Login}