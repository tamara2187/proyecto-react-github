
import { Layout } from "../components/Layout"
import { useState,useEffect } from "react"
const Dashboard=()=>{
//vamos a crear un nuevo producto 
//como ya hicimos la peticion fetch y obtuvimos todos los datos en el home , no hace falta crear un estado para obtener los productos , asi que 
//vamos a crear 3 estados ,pueden ser mas , pero aca nos piden nombre,des,precio
const [username,setusername]=useState("")
const [precio,setprecio]=useState("")
const [descripcion,setdescription]=useState("")
const [category,setcategory]=useState("")
const [imagen,setimagen]=useState("")
const [error,seterror] =useState("")
const [producto,setproducto] =useState("")//este estado fue creado para mostrar el producto

//vamos hacer la peticcion a la bse de datos par crear un producto

//para crear un producto no hace falta el id .porque lo tenemos que crear nossotrops despues , no es ya existe.





//primera forma  con asyn en hamndlesumbit.
 const Handlesumbit = async (e) => { //lo tiene porque no hay una funcion asyn como fetchingdata() ,si no queres hacer una funcion async es de esta forma .
    e.preventDefault();
    seterror("") //limpia el error .
    //validacion de campos 
    if(!username || !precio || !descripcion){
    seterror("completar todos los campos del formulario")
  
  // queremos  que no siga ejecutandose nada , hasta que se complete los campos , si no se jecuta vacio en la consola
  return
    }
    else if(username.length < 3){
   seterror("coloque un nombre real")
   return
    }
//tambien podemos ejecutar un else y que se cree los productos.
    const newproduct = { 
      id: crypto.randomUUID(),//crea un id aleatorio , cada vez que el usuario crea uno.
       title :username,
       price :precio,
      description:descripcion,
      category:category, //despues lo completamos
      image: imagen
    };


 
    try {
      //aca cuando se crea la url si queres borrar un producto , se necesita el id del producto , pero si lo creas se supone que no tiene un id 
      const response = await fetch("https://fakestoreapi.com/products", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },//esta linea de cod ,te avisa que usaremos el formato json ,que se usa para intercambiar datos.Porque la respuesta de la base de datos no es un objet js ,necesitamos el formato Json si o si 

        body: JSON.stringify(newproduct) //este body indica el newproduct que creaste ,se tranforma en formato json para que lo entienda el backend y se lo envie a la abse de datos
      });

      const savedProduct = await response.json(); //la respuesta que le envoia lña base de datos tiene que estar en formato json denuevo para que se tranforme al un objet js ,el originario
      //console.log("Producto guardado:", savedProduct);
      setproducto(savedProduct)
//se blanquean los estados y los inputs
      setusername("");
      setprecio("");
      setdescription("");
      setcategory("");
      setimagen("")

    } catch (error) { //el metodo try catch , lee con el try y con el catch lo capta el error , esto sirve para eviytar que se rompa la App pero igual no evita el error , pero si evita que se rompa la app ,que es mucho

      console.error("Error al crear producto:", error);
    }
  };
  //es este comp Dahsboard .necesiatmos crear un producto nuevo, para que se envie a la abse de datos , y ese producto aprece en el comp home , porque 
  //tiene una peticion fetch de obtner todos los datos hasta el nuevo productos por el method :get . 
//console.log(user) //nosotros queremos que nos muestre el producto en la consola y es de tipo objeto porque tiene varias propiedades 

//2da forma es casi parecida pero yo la pensaria asi :excepoto por algunas cosas que no sabia .
//const handleSubmit = (e) => {
  //e.preventDefault();

  //  const newProduct = {
    //username,
    //precio,
    //descripcion
  //};

  //handlePost(newProduct);
//};

//const handlePost = async (product) => {
  //try {
    //const response = await fetch("http://localhost:3000/api/products", {
      //method: "POST",
     // headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(product)
    //});

    //const savedProduct = await response.json();
    //console.log("Producto guardado:", savedProduct);
  //} catch (error) {
    //console.error("Error al crear producto:", error);
  //}
//};




const Handleusername=(e)=>{
setusername(e.target.value)
}
 const Handleprice=(e)=>{

  setprecio(e.target.value)
 }
 const Handledes=(e)=>{
setdescription(e.target.value)
//tambien podemos utilizar estados directos en el input , en vez de crear una funcion te saca menos tiempo.
//ejemplo :<input onchange{(e)=>setusername(e.target.value) esto seri mucho mas facil que crear una funcion .

 }
 const Handlecategory=(e)=>{
  setcategory(e.target.value)



 }
 const Handleimagen=(e)=>{
setimagen(e.target.value)

 }




return(
    

<Layout >

      <h1>Bienvenidos a mi Dashboard</h1>
      <p>Usa este formulario para agregar un nuevo producto a tu tienda.</p>

      <form onSubmit={Handlesumbit}>
        <div>
          <label htmlFor="nombre">Nombre del Producto:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ej: Jeans 2000s" onChange={Handleusername} value={username} />
        </div>

        <div>
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" placeholder="Ej: 30000" onChange={Handleprice} value={precio}/>
        </div>

        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" placeholder="Ej: Jeans estilo años 2000, talle M" onChange={Handledes} value={descripcion}></textarea>
        </div>
        <div>
        <label htmlFor="category">Categoria:</label>
          <input type="text"id ="category" name="category" placeholder="ingrese su categoria" onChange={Handlecategory} value={category}></input>

        </div>
        <div>
         <label htmlFor="imagen">Imagen:</label>
          <input type="text" id="category" name="imagen" placeholder="ingrese la url de la imagen" onChange={Handleimagen} value={imagen}></input>

        

        </div>


       {
        error && <p style={{color:"red"}}>{error}</p>
       }
      



        <button type="submit">Agregar Producto</button>
      </form>
 {
        producto && <div>
       <h1>{producto.title}</h1>
       <p>{producto.price}</p>
       <p>{producto.description}</p>
       <p>{producto.category}</p>
       {
        imagen && <div>
       
       <h1>la imagen es:</h1>
       <img src= {producto.image} alt="imagen" style={{width:"200"}}></img>

        </div>
       }

        </div>
       }


</Layout>
)


}


export{Dashboard}


//JS → JSON.stringify() → cadena JSON → API → Backend → DB
//Backend → devuelve JSON → frontend → response.json() → objeto JS

//3. Resumen simple
//Lugar	Formato de datos
//Frontend (JS)	Objetos de JS
//Petición HTTP (fetch)	JSON string
//Backend	Objeto JS (temporal)
//Base de datos	Depende: tablas o documentos
//Respuesta backend	JSON string
//Frontend recibe	Objeto JS