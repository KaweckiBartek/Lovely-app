import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./LovelyCards.css"

const LovelyCards = () => {

  const [ people, setPeople ] = useState([
    {
      name: "Brad Pitt",
      url: "https://ocdn.eu/pulscms-transforms/1/UZKk9kpTURBXy9iODg3NThlY2E5YWEzMGE5Y2YyMDJkYmNjYjAzMjJhNy5qcGeSlQMCzJHNEZTNCeSVAs0DnQDDw4KhMAGhMQE",
    },
    {
      name: "Angelina Jolie",
      url: "https://s3.viva.pl/newys/angelina-jolie-usmiechnieta-aktorka-swietuje-troche-urodziny-515153-GALLERY_BIG.jpg",
    },
    {
      name: "Cameron Diaz",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cameron_Diaz_WE_2012_Shankbone_4.JPG/1200px-Cameron_Diaz_WE_2012_Shankbone_4.JPG",
    }
  ])

  
  return (

    <div className="lovelyCards__wrapper">
      {people.map((person) => (
        <div className="swipe">
          <TinderCard
            preventSwipe={[ 'up', 'down' ]}
            key={person.name}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        </div>))}
    </div>

  )
}

export default LovelyCards
