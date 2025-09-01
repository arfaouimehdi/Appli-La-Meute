import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const allCharacters = [
    {
      image: "heros.jpg",
      name: "boucanix",
      health: 50,
      energie: 40,
      power: 30,
    },
    {
      image: "magicienne.jpg",
      name: "Douchka",
      health: 60,
      energie: 50,
      power: 35,
    },
  ];

  return (
    // react fragments
    <main className="flex min-h-svh flex-col">
      <Navbar />
      <section className="flex-grow container p-2">
        <h1 className="font-bold rounded-xl bg-neutral-300 px-3 py-5  w-fit m-10">
          Coucou les Fighers !!!
        </h1>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {allCharacters.map((oneCharacter, index) => (
            // Affiche une carte avec les infos d’un personnage
            // La key permet à React de suivre chaque élément de la liste sans bug

            <Card key={index} character={oneCharacter} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
