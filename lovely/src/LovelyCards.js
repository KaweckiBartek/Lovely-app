import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./LovelyCards.css"
import database from './firebase'

const LovelyCards = () => {

  const [ people, setPeople ] = useState([])
 
  useEffect(() => {
    database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()))
    })
  },[])

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
