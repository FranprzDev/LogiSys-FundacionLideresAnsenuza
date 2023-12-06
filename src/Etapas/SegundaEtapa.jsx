import React from "react";
import LinkPage from "./LinkPage";

function SegundaEtapa() {
  return (
    <>
      <section className="my-3 container">
        <h2 className="text-Primary my-0 fs-2 fw-bold py-3 subrayado">
          Segunda Etapa
        </h2>

        <LinkPage
          title="[PDF] Documento Visión"
          link="https://drive.google.com/file/d/1l6rXce1UFXVpw-KwHCWQBWfkS6bynBn0/view?usp=drive_link"
          index={3}
        />

        <LinkPage
          title="[PDF] Especificación Complementaria"
          link="https://drive.google.com/file/d/1nG-OmPniwntl3aMdWk5SnSdjrOmQI0io/view?usp=drive_link"
          index={2}
        />
        
        <LinkPage
          title="(DIAGRAMA) Visión General del Producto [SI]"
          link="https://media.discordapp.net/attachments/1087586648381984778/1181500921704886282/uwu_1.jpg?ex=6581497a&is=656ed47a&hm=cdbf56f88c2418ab9b8162f4f729241e6026da28a23f0e2220ec239c3c36b7ac&=&format=webp&width=455&height=676"
          index={1}
        />

        <LinkPage
          title="(DIAGRAMA) Información en el Dominio de Interés"
          link="https://media.discordapp.net/attachments/1087586648381984778/1181491123856875540/BPD_-_TFI_AS_9.jpg?ex=6581405a&is=656ecb5a&hm=55dc073a0036822f92a7c58b0442b07d86d975c9a7bc96f61fca4e0cb65d0edd&=&format=webp&width=396&height=676"
          index={0}
        />

      </section>
    </>
  );
}

export default SegundaEtapa;
