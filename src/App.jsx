import "./App.css";
import { db } from "./firebase/Config";
import { addDoc, collection } from "firebase/firestore";
import swal from "sweetalert";
import { set, useForm } from "react-hook-form";
import { useState } from "react";
import { BsFillCalculatorFill } from "react-icons/bs";

function App() {
  const enviar = (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const dni = document.getElementById("dni").value;
    const tel = document.getElementById("tel").value;

    if (nombre.length < 2) {
      swal("El campo Nombre es obligatorio ");
    } else if (apellido.length < 1) {
      swal("El campo Apellido es obligatorio");
    } else if (dni.length < 5) {
      swal("El campo DNI es obligatorio");
    } else if (tel.length < 5) {
      swal("El campo Tel es obligatorio");
    } else if (correo.length < 7) {
      swal("El campo Correo es obligatorio");
    } else {
      try {
        const docRef = addDoc(collection(db, "usuarios"), {
          nombre: document.getElementById("nombre").value,
          apellido: document.getElementById("apellido").value,
          correo: document.getElementById("correo").value,
          DNI: document.getElementById("dni").value,
          Tel: document.getElementById("tel").value,
        });

        console.log("Document written with ID: ");
        swal({
          title: "Buen trabajo",
          text: "Sus datos se enviaron correctamente",
          icon: "success",
          button: "Aceptar",
        });
      } catch {
        console.error("Error adding document: ");
      }
    }
  };
  return (
    <div>
      <div className="contendorgloblal">
        <div className="contenedor">
          <h2>Ingreso a la calculadora de haberes</h2>
          <form onSubmit={enviar}>
            <input
              id="nombre"
              placeholder="Nombre"
              name="nombre"
              aria-describedby="emailHelp"
            />
            <input type="apellido" placeholder="Apellido" id="apellido" />

            <input type="DNI" placeholder="DNI" id="dni" />

            <input type="Tel" placeholder="Tel" id="tel" />

            <input type="text" placeholder="Correo" id="correo" />

            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contenedorEnl">
          <a
            href="https://main--elaborate-liger-087372.netlify.app/"
            target="_blank"
            className="enlace"
          >
            Calculadora de sueldo
          </a>
          <BsFillCalculatorFill className="icono" />
        </div>
      </div>
      <div className="contenedorP">
        <p>
          La Calculadora de Haberes es para uso exclusivo de afiliadas/os y
          permite corroborar si el sueldo se ha liquidado correctamente. Dado
          que está en fase experimental, te pedimos que si encuentras algún
          error nos lo hagas saber por correo electrónico a
          secorganizacion@atech.org.ar
        </p>
      </div>
    </div>
  );
}

export default App;
