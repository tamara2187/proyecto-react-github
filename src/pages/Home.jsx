//crear el comp Home
import { Layout } from "../components/Layout"
import { useEffect,useState } from "react" //esto es un estado o hook de react  , react tiene 2 usestate es un array y useefect que es una funcion 

//vamos a explicar la parte de como se renderiza un comp en el navegador :
//esto lo vimos al principio pero igual lo voy a volver a escribir .
//primero react lee y crea la logica del comp es decir el cuerpo ,ocea los estados , las funciones todo lo que venga antes del return lo lee y lo crea 
//pero como nno tiene nada porque aun los efectos secundarios no llegaron es decir que todavia no hay nada info , se renderiza el return ocea la visual 
//y luego se renderiza lo que hay en el useeefect (porque ya se hizo un re-render de ese comnp , entonces el estado ya tiene su info )

const Home=()=>{

  const [productos,setproductos]=useState([])//no es un string como en los anteriores , es un array , si no ponemos nada es un undefind y puedo ocacionar errores
  const [user,setuser]=useState(true)



  //podemos crear un estado usuario , pero en este caso estado global , porque recuerden que los estados son propios de cada comp 
 //al ser global vamos an poder hacer una condicion que diga "si hay ususario mostrame estos comp pag " y si no lo hay mostrame otros comp pag
 //vamos hacer una simulacion de que el usuario existe ,pero esto debria ser mas que nada un estado global


  const fetchingProducts= async()=>{ 
    //es una Api falsa asi que las modificaciones que hagamos solo se muestra en el navegador , pero al recargar se muestra lo mismo de antes 
    //porque esta api es falsa , es para practicar no tiene una base nde datos ,para nuestra api si tenemos que crearla , por el momento es solo practica
  const response =  await fetch("https://fakestoreapi.com/products",{ method:"GET"} ) //es un objeto con un method :get ,por defecto fetch,ya trae ese http 
  //o metodo get, pero igual lo ponemos , tambien fetch tiene 2 parametros 1 , que es la url de la api,y otro que no es necesario que es el objeto.
  
//response :respuesta 
//y esta url es:https://fakestoreapi.com/ la original pero le agregamos /products porque nos referimos a los productos.

const data = await response.json() //funcion asincronica :acompañada del await , dice "espera que mientras cargue la url podes hacer otra cosa".
  //se pasa a .json porque es mas legible y se puede entender mas facil.  
  setproductos(data) //este estado ahora guarda la info de data 

    }
  // este hook o estado de react , que es una funcion : nos dice que primero , ejecuta el comp y una vez que el fetch reciba su info ,y la guarde en el estado 
  //recien se ejecuta esta funcion , ocea al hacer un re-render de ese comp , nos evita de algunos errores que pudene surgir al utlizar una funcion asincronica como 
  //que al recargar la pag web , tarde y que en blanco por un tiempo y luego se renderiza el el comp , el return y lo demas , entonces esta funcion te evita esto .
  //es importante utlizarlo por esa razon

  //para eliminar un producto , agregar , modificar ,tenemos que eliminarlo de la bsae de datos , para que despues eliminarlo en el fron-end 
  
 
   

     
 
const Handledelete= async(id)=>{

    const response= await fetch(`https://fakestoreapi.com/products/${id}`
,{method:"DELETE"})

console.log(response)//ya se elimino de la base de datos porque nos da el okay .
//vamosa a eliminar del frond-end

if(response.ok){ //si respuesta es ok , signifca que ya se elimno de la base de datos y solo falta eliminarlo del frond-end

 setproductos(prevproduct=>prevproduct.filter((product)=>product.id != id)) //se actualiza rl esatdo y ya no hay 20 productos , son 19.
}
//el prevproduct : no es una copia sino el valor actual de productos ,casi parecido a una copia pero no lo es , y utlizamos el metodo filter ,porque
//este metodo no itera sobre el array actual , si no que nos devuelve un nuevo array , pero con la condicion , en este caso todos los que sean diferentes al id 
//por eso nos devuelve una lista sin ese id , dandolo por eliminado de mi frond-end porque ya lo eliminamosd antes de la base de datos 
//no podemos usar find :porque devuelve un nuevo array el primer elmento y  un solo elemento que cumpla  con la condicion .
// splice , se puede pero es muy rebuscado porque itera spbre el estado actual , y lo mmejor seria que nos devuelva un nuevo array , haci que hay que hacer una copia y es muy rebuscado 

}










//actualizar el producto 
//recuerden el hay 2 metodos : el patch y el put
//put :sirve para actualizar todo el producto
//patch:sirve para actualizar solo u8na propiedad
//👉 Con PUT el servidor espera que le mandes todo el objeto completo.

//Si le pasás solo una propiedad, depende del backend:

//Muchos lo interpretan como que el resto de las propiedades quedan vacías o se borran.

//Otros (más “flexibles”) pueden dejar el resto igual.

//Lo estándar en REST es que PUT reemplace todo el recurso.

//👉 Con PATCH, en cambio:

//Si le pasás solo precio, solo se actualiza precio.

//Las demás propiedades quedan intactas, sin riesgo de borrarse.

//hacerlo de nuevo porque esta mal .
const Handleupdate= async(id)=>{
  try {
    
 
const  response = await fetch(`https://fakestoreapi.com/products/${id}`,{method:"PATCH"})
const data =await response.json()
//Método	Envía body?	Recibe body?
//GET	No	Sí (JSON con datos)
//POST	Sí	Sí (JSON con objeto creado)
//PUT	Sí	A veces (objeto actualizado) cuando esta modificcado todo el producto
//PATCH	Sí	A veces (objeto actualizado) cuando modificas algunas propiedades del producto
//DELETE	No	A veces (puede ser vacío o mensaje de confirmación) la mayor parte del tiempo te responde con un ok:true
setproductos (prevproduct=>prevproduct.map((product)=>{
 if(product.id===id){

  //aca debefria mostrar lo que quiero modificar ocea las props .//busquemos como es que ese elemnto borrado se actualiza
 }


}))
} catch (error) {
    console.error(error);
   alert ("Ocurrio un error al actualizar , intente nuevamente !")
  }

}

//diferencias entre map ,filter y find()
//maps:metodo que rrecorre los prductos y te acrualiza el producto , ocea acrtualiza todos lo productos ,en base a lo que le des vos.
//metodo find(): este metodo solo agarra el primer elemnto que coinsida y no te recorre todo el array ,y aparte te devuelve undefind si no encuentra nada , recorda que solo te va devolver un elemento.
//metodo filter (): este metodo te recorre todo el array y si te devulde un array nuevo en base a la condicion , si no hay nada te devulñve array vacio.
  




 useEffect(()=>{
fetchingProducts()

},[]) //este array  vacio , esta porque indica que se va a ejecutar una sola vez la funcion , no mas veces , solo una .







return(
    //este comp que se renderiza ,layout, es un plantilla por eso , el comp tiene un cierre de apertura 
    //y en el medio va lo que va a mostrar , dentro de este comp tambien esta el header y footer , es decir que si renderizamos 
    //home va aparecer el footer , el header y lo que hay dentro de el Home 
    //hay que aclarar algo un estado :guarda info ,cuando esa info cambia,le avisa al comp que hubo un a modificacion,y
    //es decir no se va arenderizar la pag web completa , react tiene un re-render que solo renderiza la parte que se modifico , en este caso tal componente.
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
          <h3>Producto 4</h3>
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
        <h1>Productos en descuentos  :</h1>
        <div>
       {
//el key siempre va en la etiqueta que contiene el map () en este caso el div
        productos .map((product)=>
        <div key= {product.id}> 
        <h1 >{product.title}</h1>
        <img src={product.image} alt={`imagen de ${product.title} `} /> 
        <p>{product.price}$</p>
        <p>{product.description}</p>
        <p><strong> {product.category}</strong> </p>
      
       
       {
       user && //si usuario existe , ocea si tiene una cuenta en el register y solo debe loguear 
       //te va a aparecer el boton  de borrar y otro de actualizar.


       //pensemos en esto , primero el prod debe borrse y despues actualizarse.
       //logicamente primero debemos borrar y luego actualizar.      
       <div><button>actualizar</button>
      <button onClick={()=>Handledelete(product.id)}>borrar</button>
       </div>
       }
       
       
       </div>
        )}

        </div>
        
      </section>

</Layout>
)


}
export{Home}



//el backend es lo que vamos hber en el curso que sigue :
//es la parte invisible que no seve y es como el cerebro porque al estar conectado con una base de datos , administra todos las entidades com o productos
//usuarios y pedidios o mas ,administra todo , que ususario eliminar ,crear,que pedido fue modificado y o eliminar y todo lo demas , tiene una parte de seguridad
//que te indica que el usuario tiene un name o email propio que es unique y la contraseña se puede repetir , pero igualmente nose muestra ,esto es un conceopto de seguridad para las cuentas del ususario
//lo tiene todos los videojuegpos ,apps y etc....
//para conectar el froend end con el backen necesitamos un metodo fetch , que puro de javascript , se puede hacer con otra herramienta externas .
//fetch:es como una ruta o puerta que conecta el fronedn y el backen , y de ahi al froneedn , le puedo avisar que datos quiero elimiar ,leer,actualizar o borrar (crud)