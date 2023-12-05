import { part4Array } from "../Utils/constants";
import LinkPage from "./LinkPage";

function CuartaEtapa() {
  return (
    <>
      <section className="container py-5">
        <h2 className="text-Primary my-0 fs-2 fw-bold py-3 subrayado">Cuarta Etapa</h2>
        {
          part4Array.map((item, index) => (
            <LinkPage
              title={item.title}
              link={item.link}
              index={index}
            />
          ))
        }
      </section>
    </>
  );
}

export default CuartaEtapa;
