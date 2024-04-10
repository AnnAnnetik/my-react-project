<<<<<<< HEAD
import { useState } from 'react';
// import style from './SearchBar.module.css';

const SearchBar = ({ addImg }) => {
=======
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSubmit }) => {
>>>>>>> 71fc2f9b322743f038cf7de576b4cef737e98dd7
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
<<<<<<< HEAD
    addImg(value);
    setValue('');
  };

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChange}
=======
    const query = value.trim();
    if (!query.length) {
      toast.error('Please, search images and photos');
    }

    onSubmit(query);
  };

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <header className={css.search}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
>>>>>>> 71fc2f9b322743f038cf7de576b4cef737e98dd7
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
<<<<<<< HEAD
          name="search"
          value={value}
        />
        <button type="submit">Search</button>
=======
          value={value}
          onChange={handleChange}
        />
        <button className={css.searchBtn} type="submit">
          <FiSearch size="16px" />
        </button>
>>>>>>> 71fc2f9b322743f038cf7de576b4cef737e98dd7
      </form>
    </header>
  );
};

export default SearchBar;
