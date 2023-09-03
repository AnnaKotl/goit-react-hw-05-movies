import { DebounceInput } from 'react-debounce-input';

export const FormSearch = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="search movie"
      />
    </form>
  );
};