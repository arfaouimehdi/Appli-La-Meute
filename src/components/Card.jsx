
import Buttons from "./Buttons";
import Statistiques from "./cardComponents/Statistiques";

export default function Card({character}) {
  console.table({character})

    const allStat=[
        {stat :"Santé",value : character.health, unit :"PV"},
        {stat :"Energie",value : character.magic, unit :"PM"},
        {stat :"Puissance",value : character.power, unit :"Atk"},
    ]
    
  return (
    <div className="flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl customShadow overflow-hidden">
      <div className="w-[250px] h-[250px] overflow-hidden">
        <img
          src={`src/assets/images/personnages/${character.image}`}
          alt={character.image}
          className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <p className="text-xl text-center font-bold">{character.name}</p>
        {/*flex flex-col c'est un display flex avec flex-direction les enfant en colonne*/}
        <div className="flex flex-col">
            {allStat.map((oneStat)=>(
               <Statistiques stat={oneStat.stat} value={oneStat.value} unit={oneStat.unit}/> 
            ))}

        </div>
        <div className="flex justify-between mt-2 ">
          <Buttons color="bg-red-500">Attaquer</Buttons>
          <Buttons color="bg-green-500">Défendre</Buttons>
        </div>
      </div>
    </div>
  );
}
