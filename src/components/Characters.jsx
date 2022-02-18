import React, {useState, useEffect} from 'react'
import '../index.css'

function Characters({ name, height, mass , created, edited, homeworld}) {
    //destructure props so they can be used within the component
    const [planet, setPlanet] = useState([]);
    //created an initial state to be used for the homeworld prop
    


    useEffect(() => {

        async function fetchPlanet() {
            let response = await fetch(homeworld)
            let planetData = await response.json()

            setPlanet(planetData.name)
            
        }

        fetchPlanet()
        
    }, [homeworld])
    
   
    
    
  return (
    <>
          
            <tr className='character-values' >
            <td className='character-name'>{name}</td>
            <td className='character-height'> {height} cm</td>
            <td className='character-mass'> {mass} kg</td>
            <td className='character-created'>{created.substring(0, 10)}</td>
            <td className='character-edited'> {edited.substring(0, 10)}</td>
            <td className='character-homeworld'>{planet} </td>
            </tr>
            
          </>
  )

  
}

export default Characters