import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { getPhotos } from './articles-api';
import Button from './components/Button/Button';

import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
import { ImageGallery } from './components/ImageGallery/ImageGallery';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const response = await getPhotos(query, page);

        setPhotos(pre => [...pre, ...response.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const hendleClick = () => {
    setPage(pre => pre + 1);
  };

  return (
    <div>
      <SearchBar addImg={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery photos={photos} />
      <Button onClick={hendleClick}>Load more</Button>
    </div>
  );
}

export default App;
