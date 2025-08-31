
import Statistiques from "./cardComponents/Statistiques";

export default function Card() {

    const allStat=[
        {stat :"Santé",value : 50, unit :"PV"},
        {stat :"Energie",value : 40, unit :"PM"},
        {stat :"Puissance",value : 30, unit :"Atk"},
    ]
    
  return (
    <div className="flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl customShadow overflow-hidden">
      <div className="w-[250px] h-[250px] overflow-hidden">
        <img
          src="src/assets/images/personnages/heros.jpg"
          alt="avatar"
          className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <p className="text-xl text-center font-bold">Boucanix</p>
        {/*flex flex-col c'est un display flex avec flex-direction les enfant en colonne*/}
        <div className="flex flex-col">
            {allStat.map((oneStat)=>(
               <Statistiques stat={oneStat.stat} value={oneStat.value} unit={oneStat.unit}/> 
            ))}

        </div>
        <div className="flex justify-between mt-2 ">
          <button className="px-2 py-1 bg-red-500 border-2 border-neutral-400 rounded-xl hover:border-neutral-700 hover:opacity-90 duration-300">
            Attaquer
          </button>
          <button className="px-2 py-1 bg-green-500 border-2 border-neutral-400 rounded-xl hover:border-neutral-700 hover:opacity-90 duration-300">
            Défendre
          </button>
        </div>
      </div>
    </div>
  );
}
