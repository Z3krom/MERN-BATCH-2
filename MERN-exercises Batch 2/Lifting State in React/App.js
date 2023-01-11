const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
   
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
    
  return (
    <div>
      <h1>My Hacker Stories</h1>
     
      <Search onSearch={handleSearch} />
   
      <hr />
     
      <List list={stories} />
    </div>
  );
};

const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
  </div>
);

const App1 = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
   
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
    
  const searchedStories = stories.filter(function (story) {
    return story.title.includes(searchTerm);
  });
   
  return (
    <div>
    
    <h1>My Hacker Stories</h1>
    
    <Search onSearch={handleSearch} />
    
    <hr />
    
    <List list={searchedStories} />
  </div>
 );
};

const App2 = () => {
   
  const searchedStories = stories.filter((story) =>
    story.title.includes(searchTerm)
  );
    
};

const App3 = () => {
   
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); 
   
};