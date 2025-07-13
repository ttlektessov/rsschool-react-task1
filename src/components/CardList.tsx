import React from 'react';
import Card from './Card';

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
          <Card key={index} character={character} />
        ))}
      </div>
    );
  }
}

export default CardList;
