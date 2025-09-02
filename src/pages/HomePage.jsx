import Card from "../components/Card";


export default function HomePage() {

     const allCharacters = [
        {
          image: "heros.jpg",
          name: "Boucanix",
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
        {
          image: "elfe.jpg",
          name: "elint"
        }
      ];
  return (
    <>
    <h1 className="font-bold m-10">
          Coucou les Fighers !!!
        </h1>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {allCharacters.map((oneCharacter, index) => (
            // Affiche une carte avec les infos d’un personnage
            // La key permet à React de suivre chaque élément de la liste sans bug

            <Card key={index} character={oneCharacter} />
          ))}
        </div>
      
    </>
  )
}
