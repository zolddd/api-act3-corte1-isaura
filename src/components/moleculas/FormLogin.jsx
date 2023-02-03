import { useRef } from "react";
import moduleStyle from "../../assets/style/form.module.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import { Link,useNavigate } from "react-router-dom";


export default function FormLogin() {
  
  const form = useRef();
  const endpoint = "http://34.225.239.102/api/iniciar";
  const navigater=useNavigate();

  const handlerClick = (e)=>{
      e.preventDefault();
      const newForm = new FormData(form.current)
      
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: newForm.get("usuario"),
          contrasenia: newForm.get("contrasenia"),
        }),
      };
  
      fetch(endpoint, options)
        .then(response => response.json())
        .then(data => {
          if(data.status===true){
            navigater("/helcome")

          }else{
            alert("no existe una cuenta con esos datos...")
          }
        });
  }
  
  return ( 
    <>
    <form ref={form} className={moduleStyle.container}>
    <Title title={"Login"} className={moduleStyle.brandTitle} />

    <div className={moduleStyle.inputs}>
    
      <Label information={"Usuario"} />
      <Input type={"text"} name={"usuario"}/>

      <Label information={"Password"} />
      <Input
        type={"password"}
        name={"contrasenia"}
      />
    </div>
    <button type="button" onClick={handlerClick}>save</button>
    <Link to="/register" className={moduleStyle.link}>¿No tienes cuenta? regístrate gratis</Link>
  </form>
    </>
   );
}
