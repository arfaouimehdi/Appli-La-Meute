import { useState } from "react";
export default function CreateCharacter() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [power, setPower] = useState("");
  const [side, setSide] = useState("");

  function handleSubmit(e){
    e.preventDefault(); // Ne recharge pas la page
    // creation du personnage
    const newCharacter = {
        name,
        image,
        health : parseInt(health), // demande un chiffre + convertir en entier
        magic : parseInt(magic),
        power : parseInt(power),
        side
    }// perso creer grace au formulaire
    console.log(newCharacter);
    setName("")
    setImage("") // remet le champ du formulaire vide 
    setHealth("")
    setMagic("")
    setPower("")
    setSide("")

  }


  //const [author, setAuthor] = useState("")
  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">Création d'un personnage</h1>

      <form
      onSubmit={handleSubmit}
      className="p-4 border border-gray-300 rounded">

        <div>
          <label htmlFor="name" className="mb-2 block">
            Nom :{" "} </label>
          <input
            type="text"
            id="name"
            value={name}
            //Quand l’utilisateur tape quelque chose →
            //je prends ce qu’il a écrit → je le mets dans la variable name
            onChange={(e)=>setName(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
          <label htmlFor="image" className="mb-2 block">
            Avatar :{" "}</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
          <label htmlFor="health" className="mb-2 block">
            Santé :{" "} </label>
          <input
            type="number"
            id="health"
            value={health}
            onChange={(e)=>setHealth(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
          <label htmlFor="magic" className="mb-2 block">
            Energie :{" "} </label>
          <input
            type="number"
            id="magic"
            value={magic}
            onChange={(e)=>setMagic(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
          <label htmlFor="power" className="mb-2 block">
            Puissance :{" "} </label>
          <input
            type="number"
            id="power"
            value={power}
            onChange={(e)=>setPower(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <div>
          <label htmlFor="side" className="mb-2 block">
             Voie choisie:{" "} </label>
          <input
            type="text"
            id="side"
            value={side}
            onChange={(e)=>setSide(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
        <button type="submit" className="p-2 rounded bg-blue-500 text-white hover:opacity-90 duration-300">Créer le personnage</button>
      </form>
    </div>
  );
}
