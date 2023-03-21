import React, { useState } from 'react';
import { data } from './data';

const Search = () => {
  const [query, setQuery] = useState('');
  console.log('query:', query);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => handleQuery(e)}
      />
      <div>
        {data
          .filter((idx) => idx.title.toLowerCase().includes(query))
          .map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
