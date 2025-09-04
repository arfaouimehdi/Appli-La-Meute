import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function AllCharactersPage() {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";
//useState([]) :	Commence avec une liste vide
//characters :	La variable qui contient la liste
// setCharacters :	Fonction pour changer la liste
  const [characters, setCharacters]= useState([]);
  const [bateau, setBateau] = useState(0)

  // useEffect(..., [])	Exécute du code une fois au démarrage
  // fetchCharacters()	Va chercher les personnages
  //setCharacters(...)	Met à jour la liste avec les résultats
    useEffect(()=>{
    fetchCharacters()
  },[bateau])




  async function fetchCharacters(){
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error (`problème de connexion au http : ${response.status}`)
      }
      const data = await response.json();
      console.log(data);
      setCharacters(data);

    }catch(error){
      console.error("erreur lors de la récupération des données : ", error)
    }
  }

  return (
    <div>
        <h1 className="text-4xl mb-6 text-center">Tous les personnages</h1>
        <p className="cursor-pointer"
        onClick={()=>{setBateau(bateau+1)}}
        > Valeur bateau = {bateau}</p>
        <div className="flex flex-wrap justify-center gap-8">
        {characters.map((oneCharacter)=>(
          <Card key={oneCharacter.id} character={oneCharacter}/>
        ))}
      </div>
    </div>
  )
}
