import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';

const LovelyCards = () => {
  
  const [ people, setPeople ] = useState([
    {
      name: "Steave Jobs",
      url: "",
    },
    {
      name: "Alicja Smolińska",
      url: "",
    },
    {
      name: "Bartek Kawecki",
      url: "",
    }
  ])

  // const [ people, setPeople ] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const URL = `https://api.github.com/users`;

  // console.log(people);
  
  // useEffect(() => {
  //   const getData = async () => {
  //     const resp = await fetch(URL);
  //     const data = await resp.json();
  //     setPeople(data);
  //     setLoading(false)
  //   }
  //   getData()
  // }, [])

  
  return (
    <div>
      {people.map((person, i) => (
        <TinderCard key={i} >
          <div
            style={{backgroundImage: `url(${person.url})`}}
            className="card">
            <h3>{ person.name }</h3>
          </div>
        </TinderCard>))}
    </div>
  )
}

export default LovelyCards
