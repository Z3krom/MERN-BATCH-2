const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.search}
        onChange={props.onSearch}
      />
    </div>
  );
};

const Search1 = (props) => {
  const { search, onSearch } = props;
    
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch}
      />
    </div>
  );
};

const Search2 = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
   
const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

