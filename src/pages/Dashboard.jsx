import { Layout } from "../components/Layout"
const Dashboard=()=>{

return(
    

<Layout >

      <h1>Bienvenidos a mi Dashboard</h1>
      <p>Usa este formulario para agregar un nuevo producto a tu tienda.</p>

      <form>
        <div>
          <label htmlFor="nombre">Nombre del Producto:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ej: Jeans 2000s" />
        </div>

        <div>
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" placeholder="Ej: 30000" />
        </div>

        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" placeholder="Ej: Jeans estilo años 2000, talle M"></textarea>
        </div>

        <button type="submit">Agregar Producto</button>
      </form>


</Layout>
)


}
export{Dashboard}