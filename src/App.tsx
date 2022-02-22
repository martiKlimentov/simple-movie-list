import React, { useState } from 'react';
import AddEditForm from './components/AddEdiitForm';
import List from './components/List';
import ListEntry from './interfaces/ListEntry';

function App() {
  const [moviesList, setMoviesList] = useState<ListEntry[]>([
    { id: '1', text: 'The Matrix' },
    { id: '2', text: 'Catch me if you can' },
    { id: '3', text: 'Fury' },
  ]);

  const [currMovieTitle, setCurrMovieTitle] = useState('');
  const [currMovieId, setCurrMovieId] = useState('');
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  const addEntryHandler = (e: any) => {
    e.preventDefault();
    if (currMovieTitle && buttonsDisabled) {
      setMoviesList(
        moviesList.map((item) =>
          item.id === currMovieId ? { ...item, text: currMovieTitle } : item
        )
      );
      setCurrMovieTitle('');
      setButtonsDisabled(false);
      //success message
    } else {
      setMoviesList((prevState) => [
        ...prevState,
        {
          id: Math.random().toString(),
          text: currMovieTitle,
        },
      ]);
      //show message success
      //reset form
      setCurrMovieTitle('');
      setButtonsDisabled(false);
    }
  };

  const editEntryHandler = (id: string, title: string) => {
    const currMovie = moviesList.filter((m) => m.id === id);
    setCurrMovieTitle(currMovie[0].text);
    setCurrMovieId(currMovie[0].id);
    setButtonsDisabled(true);
  };

  const deleteEntryHandler = (id: string) => {
    setMoviesList(moviesList.filter((movie) => movie.id !== id));
  };

  const deleteAllRecordsHandler = () => {
    setMoviesList([]);
  };

  const onChangeHandler = (e: any) => {
    setCurrMovieTitle(e.target.value);
  };

  return (
    <div
      id='body'
      className='flex items-center justify-center w-screen h-screen bg-slate-300'>
      <div id='main' className='w-[450px] min-h-[200px] bg-white rounded p-6'>
        <h2 className='w-full text-center uppercase'>Movies to watch</h2>
        <AddEditForm
          movieId={currMovieId}
          movieTitle={currMovieTitle}
          editMode={buttonsDisabled}
          onEdit={editEntryHandler}
          submitHandler={addEntryHandler}
          onChangeHandler={onChangeHandler}
        />
        <List
          listEntries={moviesList}
          onDelete={deleteEntryHandler}
          onEdit={editEntryHandler}
          buttonsVisibility={buttonsDisabled}
        />
        {moviesList.length > 0 && (
          <button
            onClick={deleteAllRecordsHandler}
            className='block px-2 py-1 mx-auto text-xs bg-red-500 rounded-md'
            disabled={buttonsDisabled}>
            clear list
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
