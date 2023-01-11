const App = () => {
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

   localStorage.setItem('search', event.target.value);
 };   
};

const App1 = () => {
  
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );    
};

const App2 = () => {
  
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );
   
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);
   
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };   
};

