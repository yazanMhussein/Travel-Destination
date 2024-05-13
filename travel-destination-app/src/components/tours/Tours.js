

function Tours(props) {
  return(
    <div>
  {props.travelData.map((item) => {
  return (
   
   <div key={item.id}>
   <h3>{item.name}</h3>  
   <img src = {item.image} alt = {item.name}></img>
   <p>{item.info}</p>
   </div>
            )

        })}
        </div>
        
    )
}
  

export default Tours;
