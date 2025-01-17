import './App.css';
import { useState } from 'react';
function App() {
  const images = [
    {
      src: 'images/neo4j_1.png',
      title: 'Neo4j #1',
      description: 'Suhteet teknologioiden ja ominaisuuksien välillä.',
    },
    {
      src: 'images/neo4j_2.png',
      title: 'Neo4j #2',
      description: 'Neo4j nodeja.',
    },
    {
      src: 'images/query_1.png',
      title: 'Cypher query #1',
      description:
        'Cypher query teknologioiden hakemiseen valituille ominaisuuksille.',
    },
    {
      src: 'images/query_2.png',
      title: 'Cypher query #2',
      description:
        'Kaikkien ominaisuuksien haku ja sen ominaisuuden teknologioiden ja painoarvojen.',
    },

    {
      src: 'images/techobject.png',
      title: 'Teknologia objekti #1',
      description:
        'Teknologia objektin luonti, mikä sisältää teknologian, kategorian ja lasketun painoarvon.',
    },
    {
      src: 'images/techobject_foreach.png',
      title: 'Teknologia objekti #2',
      description: 'Järjestetään teknologiat oikeisiin kategorioihin.',
    },
    {
      src: 'images/stacks.png',
      title: 'Tech stacks',
      description:
        'Luoodaan taulukko, jossa jokainen ryhmä sisältää teknologian pakollisesta kategoriasta.',
    },
    {
      src: 'images/output_modal.png',
      title: 'Output modal',
      description: 'Output modaali itse valmiista sovelluksesta',
    },
    {
      src: 'images/tc_scrum_taulu.png',
      title: 'Meidän backlogi #1',
      description: 'Meidän backlogi',
    },
    {
      src: 'images/tc_scrum_taulu_2.png',
      title: 'Meidän backlogi #2',
      description: 'Meidän backlogi',
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
            <span className="font-bold text-indigo-500"> Gitin</span> käytön
            kanssa.
            <p className="mt-2">
              Tavoitteisiin päästiin ja ei päästy, sanottaisiinko näin.
              Varsinaista backend kehitystä en päässyt tekemään esimerkiksi
              Expressin tai vastaavan frameworkin kanssa. Mutta frontendistä
              opittiin uutta taas senkin edestä, kun packy tehtiin käyttäen
              NextJS:ää.{' '}
              <span className="font-bold text-indigo-500"> React</span> oli
              itselleni ihan täysin uusi asia, mutta TC:n jälkeen sekin tuli
              opittua myös uutena asiana tuli tietokantamme
              <span className="font-bold text-indigo-500"> Neo4j</span>. Samalla
              tuli opittua tilanhallinnasta käyttäen{' '}
              <span className="font-bold text-indigo-500">Reduxia</span>
              <p className="mt-4">
                Tavoitteiden ulkopuolelta olisin halunnut oppia käyttämään
                AWS:ää ihan konkreettisesti sovellusprojektin kanssa, mutta me
                emme päätyneet käyttämään AWS:ää.
              </p>
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
            Kun toimin scrum masterina tulihan siinäkin opittua jonkinlaista
            projektin hallintaa, koska piti miettiä sprintin pituudet ja
            tekemiset. Ja loppua kohden tuli opittua miten isoja kokonaisuuksia
            pilkotaan pieneimmiksi osiksi.
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
            Lopulta tajusin että miksi ei voisi vain katsoa monta suhdetta
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
            Tulevaisuudessa haluaisin työskennellä joko fullstack kehittäjänä
            tai työskennellä tietokantojen, analytiikan sekä tekoälyn parissa.
          </p>
          <p className="mt-2">
            Tässä opintojaksolla tuli työskentelyä tietokantojen kanssa sekä
            fullstack kehitystä. Tykkäsin TC:stä koska tässä sai itse valita
            mitä halusi tehdä sekä pääsi laittamaan opit käytäntöön
          </p>
          <p className="mt-2">
            Lisää toistoja pitäisi saada backendin puolelta sekä lisäoppia
            tekoälystä
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Loppu | Joulukuu
          </h1>
          <p>
            Saimme sellaisen projektin tehdyksi mitä olimme suunnitelleet ja
            vähän ehkä enemmänkin.
          </p>
          <p className="mt-2">
            Vaikka kyseessä oli yksi kurssi, niin tuntui että siinä oli kolme
            kurssia samaan aikaan kun piti opetella Reactia sekä Neo4j:tä, mutta
            hyvin siitä selvittiin.
          </p>
          <p className="mt-2">
            Vahvuuteni ovat koodin kirjoittamisessa. Tämä ala ja suuntautuminen
            fullstackin puoleen tuntuu edelleen oikealta.
          </p>
        </div>

        {/*Kuvia */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-2">
          <h1 className="text-3xl font-semibold border-b-2 border-indigo-400 pb-2 mb-4">
            Tekemiset
          </h1>
          <p className="mb-4">
            Projektissa olin vastuussa tietokannasta sekä "backendistä", myös
            tuli fronttikoodia kirjoitettua sekä tehtyä scrum masterin hommia.
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
              <div className="mt-4 max-w-3xl">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="w-full h-auto rounded-lg shadow-md "
                />
                <p className="mt-2 text-gray-600 italic text-center">
                  {images[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
