import AddEditEntry from '../interfaces/AddEditEntry';

const AddEditForm: React.FC<AddEditEntry> = (props) => {
  return (
    <form className='' onSubmit={props.submitHandler}>
      <label
        htmlFor='toDoInput'
        className='block mb-1 text-xs uppercase text-slate-300'>
        Enter movie
      </label>
      <input
        type='text'
        id='toDoInput'
        className='border rounded bg-slate border-slate-500 w-[280px]'
        required
        onChange={props.onChangeHandler}
        value={props.movieTitle}
      />
      <button
        type='submit'
        className='px-3 py-2 ml-3 text-xs text-white transition-all duration-500 border rounded bg-slate-500 hover:text-slate-500 hover:bg-white'>
        {props.editMode ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default AddEditForm;
