import Cards from "./Cards";
import { cardsArray } from "./Utils/constants";

function Home() {
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
            <div className="col-12 col-md-6 col-lg-4">
              <Cards
                title={cardsArray[0].title}
                img={cardsArray[0].img}
                text={cardsArray[0].text}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Cards
                title={cardsArray[1].title}
                img={cardsArray[1].img}
                text={cardsArray[1].text}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Cards
                title={cardsArray[2].title}
                img={cardsArray[2].img}
                text={cardsArray[2].text}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Cards
                title={cardsArray[3].title}
                img={cardsArray[3].img}
                text={cardsArray[3].text}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Cards
                title={cardsArray[4].title}
                img={cardsArray[4].img}
                text={cardsArray[4].text}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Cards
                title={cardsArray[5].title}
                img={cardsArray[5].img}
                text={cardsArray[5].text}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
