import React from 'react';
import { HiTrash } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';
import ListEntry from '../interfaces/ListEntry';

const List = (props: any) => {
  const list = props.listEntries;

  const editHandler = (id: string) => {
    props.onEdit(id);
  };

  const deleteHandler = (id: any) => {
    props.onDelete(id);
  };

  const ifDisabled = props.buttonsVisibility;

  return (
    <ul>
      {list.map((currMovie: ListEntry) => {
        return (
          <li key={currMovie.id} className={`flex items-center justify-between w-full my-2 transition-all duration-500 rounded hover:bg-slate-200 ${ifDisabled ? 'text-red-500' : ''}`}>
            {currMovie.text}
            <span>
              <button onClick={editHandler.bind(null, currMovie.id)} disabled={ifDisabled}>
                <AiOutlineEdit color='#61C87B' />
              </button>
              <button onClick={deleteHandler.bind(null, currMovie.id)} className='ml-2' disabled={ifDisabled}>
                <HiTrash color='#CC0000' />
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
