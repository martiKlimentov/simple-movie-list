import React, { useState } from 'react';
import EditEntry from '../interfaces/EditEntry';

const EditForm: React.FC<EditEntry> = (props) => {
  const [currMovie, setCurrMovie] = useState<string>(props.movieTitle);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const id = props.movieId;
    props.onEditMovie(id, currMovie);
  };

  const editMovieTitleHandler = (movie: any) => {
    setCurrMovie(movie.target.value);
  };

  return (
    <form className='' onSubmit={submitHandler}>
      <label htmlFor='toDoInput' className='block mb-1 text-xs uppercase text-slate-300'>
        Enter movie
      </label>
      <input type='text' id='toDoInput' className='border rounded bg-slate border-slate-500 w-[280px]' required value={currMovie} onChange={editMovieTitleHandler} />
      <button type='submit' className='px-3 py-2 ml-3 text-xs text-white transition-all duration-500 border rounded bg-slate-500 hover:text-slate-500 hover:bg-white'>
        Edit
      </button>
    </form>
  );
};

export default EditForm;
