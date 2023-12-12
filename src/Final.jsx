import React from "react";
import '../src/index.css'

function Final() {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src="./racoon.png" alt="Racoon" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ">
            <h2 className="text-wrap text-Primary-Dark fs-4 fw-bold text-center" id="animate-bounce">
              La finalización de esta aventura nos ha mostrado que nuestro
              aprendizaje fue más allá de la adquisición de conocimiento
              teórico; fuimos capaces de traducirlo y aplicarlo en soluciones
              reales y beneficiosas para la organización estudiada.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Final;
