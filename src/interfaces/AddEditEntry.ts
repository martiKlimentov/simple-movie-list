interface AddEditEntry {
  onAddEntry: (text: string) => void;
  movieId: string;
  movieTitle: string;
  editMode: boolean;
  onEdit: (id: string, title: string) => void;
}

export default AddEditEntry;
