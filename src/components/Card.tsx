import React from 'react';

interface Character {
  name: string;
  birth_year: string;
  gender: string;
}

class Card extends React.Component<{ character: Character }> {
  render() {
    const { character } = this.props;
    return (
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg">{character.name}</h3>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
      </div>
    );
  }
}

export default Card;
