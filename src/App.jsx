import Header from "./Header";
import Home from "./Home";
import Nosotros from "./Nosotros";
import PrimeraEtapa from "./Etapas/PrimeraEtapa";
import SegundaEtapa from "./Etapas/SegundaEtapa";
import TerceraEtapa from "./Etapas/TerceraEtapa";
import CuartaEtapa from "./Etapas/CuartaEtapa";
import Final from "./Final";
import LinkPage from "./Etapas/LinkPage";

function App() {
  return (
    <>
      <Header />
      <section className="w-100 h-100">
        <Home />
        <Nosotros />

        <section className="py-5">
          <PrimeraEtapa />
          <SegundaEtapa />
          <TerceraEtapa />
          <CuartaEtapa />
          <section className="container">
            <LinkPage 
              title="TFI COMPLETO" 
              link="https://drive.google.com/file/d/1eUB-BdWEdfxao_OEyxKy5RZr5bTcItS6/view?usp=drive_link"         
              index={1} />
          </section>
        </section>

        <Final />
      </section>
    </>
  );
}

export default App;
