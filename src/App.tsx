import './App.css';
import { useState } from 'react';
function App() {
  const images = [
    {
      src: 'images/graph.png',
      title: 'Neo4j ',
      description: 'Neo4j suhteet',
      details:
        'Tietokannan suhteet, eli millä teknologioilla on suhde ominaisuuksiin',
    },
    {
      src: 'images/cypher_query.png',
      title: 'Cypher query',
      description: 'Cypher query joka hakee kaikki featuren teknologiat',
      details: '',
    },
    {
      src: 'images/techobject.png',
      title: 'Teknologia objekti',
      description: 'Teknologia objektin luonti',
      details:
        'Aluksi "litistetään" allTechs taulukko yhdeksi taulukoksi. Mapataan "litistetty" taulukko uudeksi taulukoksi jossa on objekteja. Find-metodia käyttäen etsitään oikea data techsAndWeights taulukosta joka tulee redux-storesta. Filtteröidään sen teknologian painoarvo millä on suhde valittuun ominaisuuteen. Reducen avulla lasketaan kokonais painoarvot. Ja lopuksi palautetaan objekti mikä sisältää teknologian nimen, kategorian ja painoarvon. ',
    },
    {
      src: 'images/techobject_foreach.png',
      title: 'Teknologia objekti foreach',
      description: 'Teknologia objekti joka on käytetty stackien luontiin',
      details: 'Tietokannan suhteet',
    },
    {
      src: 'images/stacks.png',
      title: 'Stackit',
      description: 'Stackien luonti',
      details: 'Tietokannan suhteet',
    },
    {
      src: 'images/outputmodal.png',
      title: 'Output modal',
      description: 'Output modaali',
      details: 'Tietokannan suhteet',
    },
    {
      src: 'images/tc_scrum_taulu.png',
      title: 'Meidän backlogi',
      description: 'Meidän backlogi',
      details: 'Tietokannan suhteet',
    },
  ];
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 shadow-lg">
        <h1 className="text-5xl font-bold tracking-wide">TC-Portfolio</h1>
        <p className="text-lg">Arttu Henriksson | Packy</p>
        <p className="text-lg italic">Roolit: Tekniikka & Scrum Master</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-100 text-gray-800">
        {/*ALku */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Alku | Syyskuu
          </h1>
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

        {/* Tavoitteet  */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Tavoitteet
          </h1>
          <p>
            Olin TC-Hopsiin kirjoittanut että haluaisin kehittyä
            <span className="font-bold text-indigo-500"> backend</span> sekä
            <span className="font-bold text-indigo-500"> frontend</span>{' '}
            kehityksessä sekä saada lisää toistoja{' '}
            <span className="font-bold text-indigo-500"> gitin</span> käytön
            kanssa.
            <p className="mt-2">
              Tavoitteisiin päästiin ja ei päästy, sanottaisiinko näin.
              Varsinaista backend kehitystä en päässyt tekemään esimerkiksi
              Expressin tai vastavaan frameworkin kanssa. Mutta frontendistä
              opittiin uutta taas senkin edestä, kun packy tehtiin käyttäen
              NextJS:ää.{' '}
              <span className="font-bold text-indigo-500"> React</span> oli
              itselleni ihan täysin uusi asia, mutta TC:n jälkeen sekin tuli
              opittua, myös uutena asiana tuli tietokantamme
              <span className="font-bold text-indigo-500"> Neo4j</span>.
            </p>
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Opit */}
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Opit
          </h1>
          <p>
            TC:n aikana tuli opittua vaikka ja mitä, mutta yksi parhaimmista
            opeista oli ehkä että
            <span className="font-bold text-indigo-500">
              {' '}
              hyvin suunniteltu on puoliksi tehty
            </span>
            . Jos olisimme alussa käyttäneet hieman enemmän aikaa tietokannan
            valintaan ja miten ne teknologiat tarjotaan käyttäjälle
            olisin/olisimme säästyneet muutamalta turhalta työtunnilta.
          </p>
          <p className="mt-2">
            Kai opeiksi voisi myös laskea tuon reactin, reduxin sekä neo4j:n. Ja
            tottakai tulihan myös opittua miten scrum toimii käytännössä sekä
            tietenkin ryhmätyöskentely taidot parantuivat. Ja tällä kurssilla
            sai myös hieman käytännön tuntua miltä se työelämä sitten voisi
            esimerkiksi olla
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          {/*Kämmit*/}
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Kämmit
          </h1>
          <p>
            Se on jo tullut muutaman kerran mainittua, mutta Firebasen valinta
            oli ehkä isoin virhe mitä tässä prjojektissa teimme/tein. Se ei
            sitten kuitenkaan ollut meille se oikea vaihtoehto, koska
            alkuperäinen "tägi" systeemi teknologiasuosituksissa ei ihan
            toiminut, tässä vielä kuva firebasesta 1,5 tunnin jälkeen kun
            saatiin tuo tägi systeemi toimimaan.
            <img
              src="images/firebase.png"
              alt="firebase"
              className="rounded-lg mt-4 shadow-md"
            />
          </p>
          <p className="mt-4">
            Yksi toinen kämmi oli kun tein niitä ehdotus stackkejä, niin
            ajattelin että kolme stäckkiä on sopiva. Niin aloin sitten
            rakentamaan jonkinlaista funktiota/algoritmiä mikä katsoo ne
            painoarvot ja jakaa ne tasaisesti kolmeen eri taulukkoon. Ja
            lopputulos minkä sain niin oli kyllä toimiva, mutta jakoi välillä ne
            teknologiat miten sattuu.
          </p>
          <p>
            {' '}
            Lopulta tajusin että miksi ei voisi vain katso monta suhdetta
            ominaisuudella on teknologioihin ja niiden perusteella tehdä ne
            stäkit.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Tulevaisuus*/}
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Tulevaisuus
          </h1>
          <p>
            Työ johon haluisin sijoittua voisi olla jotain fullstack kehityksen,
            tietokantojen ja analytiikan väliltä.
          </p>
          <p className="mt-2">
            Tässä opintojaksossa sai hyvän kuvan mitä se työelämä voisi sitten
            tulevaisuudessa olla tälläisen projektin myötä
          </p>
          <p className="mt-2">
            Lisää backend koodia pitäisi saada tehtyä sekä varmaan myös lisää
            oppia tekoälystä, koska se nyt on vaan kovaa huutoa tällä hetkellä.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Loppu | Joulukuu
          </h1>
          <p>Saimme sellaisen projektin tehtyä mitä halusimmekin.</p>
          <p className="mt-2">
            Vahvuuteni kyllä lepäät koodin kirjoittamisessa sekä tietokannoissa.
            Myös sain lisää vahvuuksia tiimityöskentelyyn
          </p>
        </div>

        {/*Kuvia */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-2">
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Mitä sitten tuli konkreettisesti tehtyä
          </h1>
          <p className="mb-4">
            Tässä projektissa olin vastuussa tuosta tietokannasta ja sovelluksen
            "backendistä", myös tuli tehtyä fronttikoodia sekä hoidettua scrum
            masterin hommia.
          </p>
          <div className="space-y-4">
            <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <div key={index}>
                  <button
                    onClick={() => setSelectedImage(index)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                      selectedImage === index
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {img.title}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="mt-4 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].title}
                    className="w-full h-auto rounded-lg shadow-md "
                  />
                  <p className="mt-2 text-gray-600 italic text-center">
                    {images[selectedImage].description}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg h-fit">
                  <h3 className="font-semibold text-lg mb-2">Selitys</h3>
                  <p className="text-gray-700">
                    {images[selectedImage].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
