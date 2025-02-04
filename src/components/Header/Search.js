import { useState, useEffect } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artist, setArtist] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (searchTerm === "") {
      setArtist(null);
      setNoResults(false);
      return;
    }

    const fetchArtists = async () => {
      try {
        const response = await fetch("http://localhost:3000/artists");
        const data = await response.json();
        const filteredResults = data.filter((artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredResults.length === 0) {
          setArtist(null);
          setNoResults(true);
        } else {
          setArtist(filteredResults[0]); // 1o artista encontrado
          setNoResults(false);
        }
      } catch (error) {
        console.error("Erro ao buscar artistas:", error);
      }
    };

    fetchArtists();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        id="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="O que você quer ouvir?"
      />
      {noResults && <p>No artists found</p>}
      {artist && (
        <div id="result-artist">
          <h2>{artist.name}</h2>
          <img src={artist.urlImg} alt={artist.name} />
        </div>
      )}
    </div>
  );
};

export default Search;
