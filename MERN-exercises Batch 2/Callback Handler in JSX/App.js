const App = () => {
  const handleSearch = (event) => {
  
  console.log(event.target.value);
};

return (
  <div>
    <h1>My Hacker Stories</h1>
  
    {/* // B */}
    <Search onSearch={handleSearch} />
  
    <hr />
    
    <List list={stories} />
  </div>
 );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
    
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
   
    props.onSearch(event);
  };
   
  
};

