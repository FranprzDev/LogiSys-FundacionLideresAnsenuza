import LinkPage from "./LinkPage";

function PrimeraEtapa() {

  return (
    <>
      <section className="container">
        <h2 className="text-Primary my-0 fs-2 fw-bold py-3 subrayado">
          Primera Etapa
        </h2>
        <LinkPage
          title="[PDF] Documento de la Empresa"
          link="https://drive.google.com/file/d/177I5TuilMQsubWzW_HqKhxfH1LN129Io/view?usp=sharing"
          index={0}
        />

        <LinkPage
          title="BPD (Business Process Diagram)"
          link="https://media.discordapp.net/attachments/1087586648381984778/1181489226857074718/bpd.png?ex=65813e96&is=656ec996&hm=63711e37c91fa0aadd3aee26795ae98b0f608dbf373099f3bcae65ad324b8e8f&=&format=webp&quality=lossless&width=1440&height=446"
          index={1}
        />
      </section>
    </>
  );
}

export default PrimeraEtapa