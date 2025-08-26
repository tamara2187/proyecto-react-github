//plantilla de mi pag web
import { Header } from "./Header"
import { Footer } from "./Footer"
const Layout=(props)=>{
return(
    <>
   
<Header/>
<main>
    {props.children} 
</main>
<Footer/>

</>

)
}
export{Layout}
