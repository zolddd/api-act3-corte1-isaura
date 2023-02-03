import { useRef,useState } from "react";
import Label from "../atoms/Label";
import moduleStyle from "../../assets/style/form.module.css";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
export default function FormAlta() {
  const [select, setselect] = useState("");
  const form = useRef();
  const endpoint = "http://34.225.239.102/api/autobus/register";
  const numlicencia= Math.floor((Math.random() * 10000) + 1)

  const handleChange=e=>{
    setselect(e.target.value)
  }

  const handlerClick=(e)=>{

    e.preventDefault();

    const newForm = new FormData(form.current);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: newForm.get("clave"),
        placa: newForm.get("placa"),
        numasientos: newForm.get("numasientos"),
        fecha: newForm.get("fecha"),
        tipo: select || "lujo",
        nombre: newForm.get("nombre"),
        licencia: numlicencia
      }),
    };

    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
      });

  }

  return (
    <form ref={form} className={moduleStyle.container}>
      <Title title={"Alta Autobus"} className={moduleStyle.brandTitle} />

      <div className={moduleStyle.inputs}>
        <Label information={"Clave Autobus"} />
        <Input type={"text"} name={"clave"} />

        <Label information={"Placa Autobus"} />
        <Input type={"text"} name={"placa"} />

        <Label information={"Numero de asientos"} />
        <Input type={"number"} name={"numasientos"} />


        <Label information={"Fecha de alta"} />
        <Input type={"date"} name={"fecha"} />

        <select onChange={handleChange} className={moduleStyle.select}>
          <option value="Turismo">Turismo</option>
          <option value="Lujo">Lujo</option>
        </select>

        <Label information={"Nombre chofer"} />
        <Input type={"text"} name={"nombre"} />

      </div>
      <button type="button" onClick={handlerClick}>save</button>
    </form>
  );
}
