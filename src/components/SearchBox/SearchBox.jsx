import css from './SearchBox.module.css';
import toast from 'react-hot-toast';

import { IoSearchOutline } from 'react-icons/io5';

const notify = () => toast('Enter search data');

export const SearchBar = ({ onSubmit, setSearchParams }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.topic.value.trim() === '') {
      notify();
      return;
    }
    const form = evt.target;
    onSubmit(form.elements.topic.value);
    setSearchParams({ query: form.elements.topic.value });

    form.reset();
  };

  return (
    <div className={css.header}>
      <form onSubmit={handleSubmit}>
        <div className={css.inputBox}>
          <button className={css.inputBtn} type="submit">
            <IoSearchOutline />
          </button>
          <input
            className={css.inp}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </div>
      </form>
    </div>
  );
};
