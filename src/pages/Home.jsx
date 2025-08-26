//crear el comp Home
import { Layout } from "../components/Layout"
const Home=()=>{

return(
    //este comp que se renderiza ,layout, es un plantilla por eso , el comp tiene un cierre de apertura 
    //y en el medio va lo que va a mostrar , dentro de este comp tambien esta el header y footer , es decir que si renderizamos 
    //home va aparecer el footer , el header y lo que hay dentro de el Home 


<Layout >


<h1>Bienvenidos a mi Tienda virtual</h1>

<p>Los mejores productos al mejor precio. Envíos a todo el país.</p>

      <section>
        <h2>Productos Destacados</h2>

        <div>
          <h3>Producto 1</h3>
          <img src="https://i.pinimg.com/736x/0a/ab/a6/0aaba6c8b3c508b396a18e433a9a0905.jpg" alt="jeans 2000s" className="Producto-1"></img>
          <p>Precio: $30.000</p>
          <button>Agregar al carrito</button>
        </div>

        <div>
          <h3>Producto 2</h3>
          <img src="https://i.pinimg.com/736x/70/a9/6b/70a96b93e6e63df7cccc0b23286012f2.jpg" alt="remera-brillo" className="Producto-2"></img>
          <p>Precio: $40.000</p>
          <button>Agregar al carrito</button>
        </div>

        <div>
          <h3>Producto 3</h3>
          <img src="https://i.pinimg.com/736x/21/e4/aa/21e4aa8aae8d77717f656f8724b67a19.jpg"alt="remera-rosa-brillo" className="Producto-3"></img>
          <p>Precio: $45.000</p>
          <button>Agregar al carrito</button>
        </div>

     <div>
          <h3>Producto 3</h3>
          <img src="https://i.pinimg.com/1200x/87/44/33/874433186b50a08f247e256a92118287.jpg"alt="remera-celeste-brillo" className="Producto-4"></img>
          <p>Precio: $45.000</p>
          <button>Agregar al carrito</button>
        </div>


      </section>

      <section>
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Ofrecemos calidad, confianza y envío a todo el país. Nuestra misión es
          que disfrutes de tus compras de manera rápida y segura.
        </p>
      </section>

</Layout>
)


}
export{Home}
