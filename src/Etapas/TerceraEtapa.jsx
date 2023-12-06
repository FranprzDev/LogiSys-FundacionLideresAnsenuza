import React from 'react'
import { textAndDiagramaSecuenciaCasoDeUso } from '../Utils/constants'
import LinkPage from './LinkPage'

function TerceraEtapa() {
  return (
    <>
      <section className="container">
        <h2 className="text-Primary my-0 fs-2 fw-bold py-3 subrayado">
          Tercera Etapa
        </h2>

        <LinkPage 
          title="[PDF] Modelo del Dominio y Modelo de Caso de Uso"
          link={"https://drive.google.com/file/d/1xv84tkKKDGpkxaZ_2Qa-e3MzY-XWrPmj/view?usp=drive_link"}
          index={-1}
        />

        <LinkPage
          title={"Modelo del Dominio"}
          link="https://media.discordapp.net/attachments/1087586648381984778/1181503905155268731/image.png?ex=65814c42&is=656ed742&hm=f14afbb8c451f38eeaa7a7cac56d73f5de28c6fa914ae5b6f651110f34dc0f34&=&format=webp&quality=lossless"
          index={-2}
          />

        <h3 className="text-Primary my-2 fs-5 fw-bold fst-italic py-2 subrayado2">
          Modelo de Caso de Uso
        </h3>

        {
          textAndDiagramaSecuenciaCasoDeUso.map((item, index) => {
            return (
              <LinkPage
                title={item.title}
                link={item.link}
                index={index}
              />
            )
          })
        }

        <LinkPage
          title={"Diagrama de Casos de Uso"}
          link={"https://media.discordapp.net/attachments/1087586648381984778/1181512289539604480/image.png?ex=65815411&is=656edf11&hm=4cfadefecdf68a7040d419021c8c4433045e3600c345c26697212836877dda96&=&format=webp&quality=lossless"}
        />

        <LinkPage
          title={"Diagrama de Transición de Estados"}
          link={"https://media.discordapp.net/attachments/1087586648381984778/1181512337354657823/image.png?ex=6581541c&is=656edf1c&hm=956f6ac31b82057431e62110e1542edbc0f3cc79b128a59b4c1a1ab7b9933d18&=&format=webp&quality=lossless"}
        />


      </section>
    </>
  );
}

export default TerceraEtapa