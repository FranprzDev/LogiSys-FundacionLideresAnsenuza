import { personalCards } from "./Utils/constants";
import { motion } from "framer-motion";

function Nosotros() {
  return (
    <>
      <section className="container">
        <h2 className="text-Primary my-0 fs-2 fw-bold py-3 subrayado">Nuestro Equipo</h2>

        <div className="row justify-content-center py-2">
          {personalCards.map((card, index) => {
            return (
              <motion.div className="col-12 col-md-6 col-lg-4" key={index}
              animate={{
                scale: [1, 1.2, 1.5, 1.2, 1],
                rotate: [0, 30, 90, 180, 0],
                borderRadius: ["10%", "10%", "20%", "10%", "10%"],
              }}
              >
                <div className="card custom-width my-2">
                  <div className="d-flex justify-content-start align-items-center flex-column card-body bg-Primary-Dark rounded">
                    <h5 className="card-title text-center text-Primary-Lightest fs-2 fw-bold">
                      {card.fullname}
                    </h5>
                    <img
                      src={card.img}
                      className="my-2 img-fluid rounded-circle w-50"
                    />
                    <p className="card-text text-wrap text-center">
                      <span className="text-Primary-Lightest fst-italic">
                        {card.rol}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Nosotros;
