import Cards from "./Cards";
import { cardsArray } from "./Utils/constants";
import { motion } from "framer-motion";

function Home() {
  const duration = 1.0;

  return (
    <>
      <section className="min-vh-100 d-flex align-items-center flex-column">
        <h1 className="text fs-1 text-Primary-Darker my-0 pt-3 fst-italic fw-bold subrayado2">
          LogiSys
        </h1>
        <h3 className="text fs-3 text-Primary-Light-Darker pt-2 my-0 text-break text-center">
          Tú seguridad, nuestra agilidad;
          <br />
          <span className="fw-bold text">protegiendo tu tranquilidad.</span>
        </h3>
        <section className="container my-4">
          <div className="row flex-wrap">
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
            >
              <Cards
                title={cardsArray[0].title}
                img={cardsArray[0].img}
                text={cardsArray[0].text}
              />
            </motion.div>
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.25 }}
            >
              <Cards
                title={cardsArray[1].title}
                img={cardsArray[1].img}
                text={cardsArray[1].text}
              />
            </motion.div>
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Cards
                title={cardsArray[2].title}
                img={cardsArray[2].img}
                text={cardsArray[2].text}
              />
            </motion.div>
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.75 }}
            >
              <Cards
                title={cardsArray[3].title}
                img={cardsArray[3].img}
                text={cardsArray[3].text}
              />
            </motion.div>
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.0 }}
            >
              <Cards
                title={cardsArray[4].title}
                img={cardsArray[4].img}
                text={cardsArray[4].text}
              />
            </motion.div>
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5 }}
            >
              <Cards
                title={cardsArray[5].title}
                img={cardsArray[5].img}
                text={cardsArray[5].text}
              />
            </motion.div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
