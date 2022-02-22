import React, { ChangeEvent, useState, useEffect } from 'react';
import AddEditEntry from '../interfaces/AddEditEntry';

const AddEditForm: React.FC<AddEditEntry> = (props) => {
  const [currMovie, setCurrMovie] = useState<string>('');

  useEffect(() => setCurrMovie(props.movieTitle), [props.movieTitle]);

  const assignNewMovie = (i: ChangeEvent<HTMLInputElement>) => {
    setCurrMovie(i.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.editMode) {
      props.onEdit(props.movieId, currMovie);
    } else {
      props.onAddEntry(currMovie);
      setCurrMovie('');
    }
  };

  return (
    <form className='' onSubmit={submitHandler}>
      <label htmlFor='toDoInput' className='block mb-1 text-xs uppercase text-slate-300'>
        Enter movie
      </label>
      <input type='text' id='toDoInput' className='border rounded bg-slate border-slate-500 w-[280px]' required onChange={assignNewMovie} value={currMovie} />
      <button type='submit' className='px-3 py-2 ml-3 text-xs text-white transition-all duration-500 border rounded bg-slate-500 hover:text-slate-500 hover:bg-white'>
        {props.editMode ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default AddEditForm;
