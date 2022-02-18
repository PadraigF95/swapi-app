
import './index.css'

import React, { useState, useEffect} from 'react';
import Characters from './components/Characters';



function App() {

  const [people, setPeople ] = useState([]);
const [search, setSearch ] = useState("");
//set initial state of variables


useEffect(() => {
  //fetch api data
  async function fetchPeople() {
    let res = await fetch(`https://swapi.dev/api/people/?search=${search}`);
    let data = await res.json();

    setPeople(data.results);
   
  }

  fetchPeople();
  //call the function
}, [search]);


const handleChange = e => {
  setSearch(e.target.value)
}
//handles the changes that occur within the searchbar




const filteredPeople = people.filter(people =>
  people.name.toLowerCase().includes(search.toLowerCase())
  );

  //Filter the people variable to the persons name which then allows us to search for that name in the searchbar

  return (
    <div>

      
<div className='search-container'>
        <h1 className='search-text'>Search For Character</h1>
        <form className='searchbar'>
          <input type="search" placeholder="search..." onChange={handleChange} className="search-input" />
        </form>
      </div>
      <div className='table-container'>
      <table className="table">
            <thead className="thead-dark">
                <tr>
                <th className='name-heading'>Name</th>
                <th className='height-heading'>Height</th>
                <th className='mass-heading'>Mass</th>
                <th className='created-heading'>Created</th>
                <th className='edited-heading'>Edited</th>
                <th className='homeworld-heading'>Homeworld</th>
                </tr>
            </thead> 
           <tbody>


{filteredPeople.map(people => {
  //Map through the data and send the props to the characters component
  return(
    <Characters key={people.url}
      name = {people.name}
      height = {people.height}
      mass = {people.mass}
      created = {people.created}
      edited = {people.edited}
      homeworld = {people.homeworld}
      />
    
  )
})}
</tbody>
       </table>
       </div>

    </div>
  );
}

export default App;
