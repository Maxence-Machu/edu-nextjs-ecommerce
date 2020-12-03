import Layout from "../layout/layout"; // export default ...
import { useState } from "react"; // export ...
import CandyCreator from "../components/CandyCreator/CandyCreator";

export default function States() {
  const [age, setAge] = useState(18);

  const incrementAge = () => {
    let _age = age;
    _age += 1;
    setAge(_age);
  };

  const [rooms, setRooms] = useState(["1", "2", "3"]);

  function addRoom() {
    setRooms([...rooms, "1 pièce"]);
  }

  return (
    <Layout>
      <h1>Démonstration de l'utilisation des states</h1>

      <div className="row">
        <div className="col mb-4 mt-4">
          <div className="card p-3">
            <CandyCreator />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card p-3">
            <p className="card-text">Bonjour, j'ai {age} ans</p>

            <button className="btn btn-light" onClick={incrementAge}>
              Incrémenter l'âge
            </button>

            <hr />

            <div className="row">
              <div className="col-8">
                <p className="card-text">
                  Nombre de pièces dans ma maison: {rooms.length}
                </p>

                <button className="btn btn-light" onClick={addRoom}>
                  Ajouter une pièce
                </button>
              </div>
              <div className="col-4">
                <ul>
                  {rooms.map((room) => (
                    <li>{room}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
