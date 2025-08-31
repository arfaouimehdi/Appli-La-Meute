

export default function Statistiques(props) {
    console.table(props)
  return (
    <div className="flex justify-between">
            <p className="font-bold">{props.stat} :</p>
            <div className="flex">
              <div
              
              className="cursor-pointer">
                🔼</div>
              <p>{props.value} ATK </p>
              <div
              
              className="cursor-pointer">
                🔽</div>
            </div>
          </div>
  )
}
