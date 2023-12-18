import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, frontSprites, backSprites }) {
  const [showFront, setShowFront] = useState(true)

  function handleClick(){
    if (!showFront) {
      setShowFront(true)
    } else {
      setShowFront(false)
    }
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt="oh no!" src={showFront ? frontSprites : backSprites}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
