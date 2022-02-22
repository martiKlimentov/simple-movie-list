interface AddEditEntry {
  movieId: string;
  movieTitle: string;
  editMode: boolean;
  onEdit: (id: string, title: string) => void;
  onChangeHandler: (e: any) => void;
  submitHandler: (title: any) => void;
}

export default AddEditEntry;
