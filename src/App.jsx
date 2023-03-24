import reactLogo from "./assets/react.svg";
import "./App.css";
import { db } from "./firebase/Config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

function App() {
  const enviar = () => {
    try {
      const docRef = addDoc(collection(db, "usuarios"), {
        correo: document.getElementById("correo").value,
        DNI: document.getElementById("dni").value,
        Tel: document.getElementById("tel").value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      {" "}
      <div className="contenedor">
        <h2>Solo para afiliados</h2>
        <form>
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
