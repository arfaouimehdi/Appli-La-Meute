

export default function AllCharactersPage() {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";

  async function fetchCharacters(){
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error (`problème de connexion au http : ${response.status}`)
      }
      const data = await response.json();
      console.log(data)

    }catch(error){
      console.error("erreur lors de la récupération des données : ", error)
    }
  }
  fetchCharacters()
  return (
    <div>
        <h1 className="text-3xl font-bold underline">Tous les personnages</h1> 
      
    </div>
  )
}
