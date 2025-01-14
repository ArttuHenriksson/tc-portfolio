import './App.css';

function App() {
  return (
    <>
      <div className="justify-center flex-col items-center flex gap-1">
        <h1 className="text-4xl ">TC-Portfolio</h1>
        <p>Arttu Henriksson | Packy</p>
        <p>Roolit: Tekniikka & Scrum master</p>
      </div>
      <div className="grid grid-cols-2 gap-12 h-screen justify-items-center place-items-center pt-12">
        <div className="text-black mx-auto max-w-prose">
          <h1 className="text-3xl">Alku | Syyskuu</h1>
          <p className="">
            Omalla kohdalla TC alkoi vasta 2.9, koska olin vielä kesätöissä TC:n
            ensimmäisen viikon. Olin jo aikoja sitten päättänyt että otan
            roolikseni tekniikan TC:ssä, valitsin myös sivuroolikseni scrum
            masterin. Lopulta päädyin hyvään ryhmään vaikka en edes tiennyt mikä
            oli projektin aihe. Olin alussa asennoitunut että mihin tahansa
            ryhmään päädynkin niin tulemme käyttämään niitä teknologioita mitä
            meille on opetettu jo, mutta toisin kävi.
          </p>
        </div>
        <div className="text-black mx-auto max-w-prose">
          <h1 className="text-3xl">Tavoitteet</h1>
          <p>
            Olin TC-Hopsiin kirjoittanut että haluaisin kehittyä
            <span className="font-bold"> backend</span> sekä
            <span className="font-bold"> frontend</span> kehityksessä sekä saada
            lisää toistoja <span className="font-bold"> gitin</span> käytön
            kanssa.
            <p className="mt-2">
              Tavoitteisiin päästiin ja ei päästy, sanottaisiinko näin.
              Varsinaista backend kehitystä en päässyt tekemään esimerkiksi
              Expressin tai vastavaan frameworkin kanssa. Mutta frontendistä
              opittiin uutta taas senkin edestä, kun packy tehtiin käyttäen
              NextJS:ää. <span className="font-bold"> React</span> oli itselleni
              ihan täysin uusi asia, mutta TC:n jälkeen sekin tuli opittua, myös
              uutena asiana tuli tietokantamme
              <span className="font-bold"> Neo4j</span>.
            </p>
          </p>
        </div>
        <div className="text-black mx-auto max-w-prose">
          <h1 className="text-3xl">Opit, oivallukset sekä virheet</h1>
          <p>
            TC:n aikana tuli opittua vaikka ja mitä, mutta yksi parhaimmista
            opeista oli ehkä että
            <span className="font-bold">
              {' '}
              hyvin suunniteltu on puoliksi tehty
            </span>
            . Jos olisimme alussa käyttäneet hieman enemmän aikaa tietokannan
            valintaan ja miten ne teknologiat tarjotaan käyttäjälle
            olisin/olisimme säästyneet muutamalta turhalta työtunnilta.
          </p>
          <p className="mt-2">lorem</p>
        </div>

        <div className="text-black mx-auto max-w-prose">
          <h1 className="text-3xl">Tulevaisuus</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            iusto quae reprehenderit vitae sunt pariatur provident, fugit sint
            aliquid molestias velit, magnam quis dicta. Nam suscipit velit odit
            ut aliquam.
          </p>
        </div>
        <div className="text-black mx-auto max-w-prose">
          <h1 className="text-3xl">Loppu | Joulu</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            iusto quae reprehenderit vitae sunt pariatur provident, fugit sint
            aliquid molestias velit, magnam quis dicta. Nam suscipit velit odit
            ut aliquam.
          </p>
        </div>
        <div className="text-black mx-auto max-w-prose">
          <h1 className="text-3xl">lorem </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            iusto quae reprehenderit vitae sunt pariatur provident, fugit sint
            aliquid molestias velit, magnam quis dicta. Nam suscipit velit odit
            ut aliquam.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
