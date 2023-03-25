import "./App.css";
import { db } from "./firebase/Config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Input } from "@nextui-org/react";
import swal from "sweetalert";

function App() {
  const enviar = () => {
    try {
      const docRef = addDoc(collection(db, "usuarios"), {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        DNI: document.getElementById("dni").value,
        Tel: document.getElementById("tel").value,
      });
      console.log("Document written with ID: ", docRef.id);
      swal({
        title: "Buen trabajo",
        text: "Sus datos se enviaron correctamente",
        icon: "success",
        button: "Aceptar",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const saludo = () => {};
  return (
    <div>
      {" "}
      <div className="contenedor">
        <h2>Solo para afiliados</h2>
        <form>
          <input type="nombre" placeholder="Nombre" id="nombre" />
          <input type="apellido" placeholder="Apellido" id="apellido" />
          <input type="text" placeholder="Correo" id="correo" />
          {/* <input type="Password" placeholder="Password" /> */}
          <input type="DNI" placeholder="DNI" id="dni" />
          <input type="Tel" placeholder="Tel" id="tel" />
        </form>
        <button onClick={enviar}> Enviar</button>
      </div>
    </div>
  );
}

export default App;
