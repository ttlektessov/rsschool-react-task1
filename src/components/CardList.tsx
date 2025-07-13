import React from 'react';

interface Character {
  name: string;
  birth_year: string;
  gender: string;
}

class CardList extends React.Component<{ characters: Character[] }> {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {this.props.characters.map((character, index) => (
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">{character.name}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
