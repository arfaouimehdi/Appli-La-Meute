export default function Statistiques({stat, value, unit}) {
    console.table(stat)
  return (
    <div className="flex justify-between">
            <p className="font-bold">{stat} :</p>
            <div className="flex">
              <div
              
              className="cursor-pointer">
                🔼</div>
              <p>{value} {unit} </p>
              <div
              
              className="cursor-pointer">
                🔽</div>
            </div>
          </div>
  )
}
