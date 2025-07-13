import React from 'react';

interface Character {
  image: string;
  name: string;
  gender: string;
}

class Card extends React.Component<{ character: Character }> {
  render() {
    const { character } = this.props;
    return (
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
        <img src={character.image} width="250px" alt="picture" />
        <h3 className="font-bold text-lg">{character.name}</h3>
        <p>Gender: {character.gender}</p>
      </div>
    );
  }
}

export default Card;
