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

        <article className="d-flex align-items-center justify-content-between gap-5">
          <h3 className="text-Primary my-2 fs-5 fw-bold fst-italic py-2">
            [PDF] Modelo del Domino y Modelo de Caso de Uso
          </h3>
          <a
            href="https://drive.google.com/file/d/1xv84tkKKDGpkxaZ_2Qa-e3MzY-XWrPmj/view?usp=drive_link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-box-arrow-up-right text-Primary-Darker"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </a>
        </article>

        <article className="d-flex align-items-center justify-content-between gap-5">
          <h3 className="text-Primary my-2 fs-5 fw-bold fst-italic py-2">
            Modelo del Dominio
          </h3>
          <a
            href="https://media.discordapp.net/attachments/1087586648381984778/1181503905155268731/image.png?ex=65814c42&is=656ed742&hm=f14afbb8c451f38eeaa7a7cac56d73f5de28c6fa914ae5b6f651110f34dc0f34&=&format=webp&quality=lossless"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-box-arrow-up-right text-Primary-Darker"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </a>
        </article>

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