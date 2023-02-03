import { useRef } from "react";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Label from "../atoms/Label";
import moduleStyle from "../../assets/style/form.module.css";
import {useNavigate } from "react-router-dom";

export default function FormRegister() {
  const form = useRef();
  const endpoint = "http://34.225.239.102/api/registrar/usuario";
  
  const navigater=useNavigate();

  const handlerClick = (e) => {
    e.preventDefault();

    const newForm = new FormData(form.current);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: newForm.get("nombre"),
        usuario: newForm.get("usuario"),
        correo: newForm.get("correo"),
        contrasenia: newForm.get("contrasenia"),
      }),
    };

    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
      });

      navigater("/login")
    
  };

  return (
    <form ref={form} className={moduleStyle.container}>
      <Title title={"Create a count"} className={moduleStyle.brandTitle} />

      <div className={moduleStyle.inputs}>
        <Label information={"Nombre"} />
        <Input
          type={"text"}
          name={"nombre"}
          placeholder="Enter you name"
        />

        <Label information={"Usuario"} />
        <Input
          type={"text"}
          name={"usuario"}
          placeholder="Enter you name"
        />

        <Label information={"email"} />
        <Input type={"email"} name={"correo"} placeholder="Enter you gmail" />

        <Label information={"Password"} />
        <Input
          type={"password"}
          name={"contrasenia"}
          placeholder="Enter you password"
        />
      </div>
      <button type="button" onClick={handlerClick}>
        save
      </button>
    </form>
  );
}
