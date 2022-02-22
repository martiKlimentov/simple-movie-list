interface EditEntry {
  movieTitle: string;
  movieId: string;
  onEditMovie: (id: string, title: string) => void;
}

export default EditEntry;
