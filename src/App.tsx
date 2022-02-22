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

  const addEntryHandler = (text: string) => {
    const newEntry: ListEntry = {
      id: Math.random().toString(),
      text,
    };
    setMoviesList((prevState) => [...prevState, newEntry]);
  };

  const getMovieHandler = (id: string) => {
    const currMovie = moviesList.find((m) => m.id === id);
    setCurrMovieTitle(currMovie!.text);
    setCurrMovieId(currMovie!.id);
    setButtonsDisabled(true);
  };

  const editEntryHandler = (id: string, title: string) => {
    const currMovie = moviesList.find((m) => m.id === id);
    currMovie!.text = title;
    setMoviesList((prevState) => [...prevState]);
    setCurrMovieTitle('');
    setButtonsDisabled(false);
  };

  const deleteEntryHandler = (id: string) => {
    setMoviesList(moviesList.filter((movie) => movie.id !== id));
  };

  const deleteAllRecordsHandler = () => {
    setMoviesList([]);
  };

  return (
    <div id='body' className='flex items-center justify-center w-screen h-screen bg-slate-300'>
      <div id='main' className='w-[450px] min-h-[200px] bg-white rounded p-6'>
        <h2 className='w-full text-center uppercase'>Movies to watch</h2>
        <AddEditForm onAddEntry={addEntryHandler} movieId={currMovieId} movieTitle={currMovieTitle} editMode={buttonsDisabled} onEdit={editEntryHandler} />
        <List listEntries={moviesList} onDelete={deleteEntryHandler} onEdit={getMovieHandler} buttonsVisibility={buttonsDisabled} />
        {moviesList.length > 0 && (
          <button onClick={deleteAllRecordsHandler} className='block px-2 py-1 mx-auto text-xs bg-red-500 rounded-md' disabled={buttonsDisabled}>
            clear list
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
