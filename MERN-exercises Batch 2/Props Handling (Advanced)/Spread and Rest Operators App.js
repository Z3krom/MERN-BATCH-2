const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectID}
        title={item.title}
        url={item.url}
        author={item.author}
        num_comments={item.num_comments}
        points={item.points}
      />
    ))}
  </ul>
);
    
const Item = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

const List1 = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} {...item} />
    ))}
  </ul>
);
    
const Item1 = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

const List2 = ({ list }) => (
  <ul>
    {list.map(({ objectID, ...item }) => (
      <Item key={objectID} {...item} />
    ))}
  </ul>
);
   
const Item2 = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

const List3 = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
    
const Item3 = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

