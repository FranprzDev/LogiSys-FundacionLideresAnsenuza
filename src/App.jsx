import Header from './Header'
import Home from './Home'
import Nosotros from './Nosotros'
import PrimeraEtapa from './Etapas/PrimeraEtapa'
import SegundaEtapa from './Etapas/SegundaEtapa'
import TerceraEtapa from './Etapas/TerceraEtapa'
import CuartaEtapa from './Etapas/CuartaEtapa'
import Final from './Final'

function App() {
  return (
    <> 
      <Header />
      <section className='w-100 h-100'>
        <Home/>
        <Nosotros />

        <section className='py-5'>
          <PrimeraEtapa />
          <SegundaEtapa />
          <TerceraEtapa />
          <CuartaEtapa />
        </section>

        <Final/>
      </section>
    </>
  )
}

export default App
