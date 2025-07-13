import React from 'react';

interface Character {
  name: string;
  birth_year: string;
  gender: string;
}

interface ResultsProps {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
}

class Results extends React.Component<ResultsProps> {
  render() {
    const { characters, isLoading, error } = this.props;

    if (error) {
      return (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      );
    }

    if (isLoading) {
      return (
        <>
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </>
      );
    }

    if (characters.length === 0) {
      return (
        <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          No characters found. Try a different search.
        </div>
      );
    }

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {this.props.characters.map((character, index) => (
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">{character.name}</h3>
              <p>Birth Year: {character.birth_year}</p>
              <p>Gender: {character.gender}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Results;
