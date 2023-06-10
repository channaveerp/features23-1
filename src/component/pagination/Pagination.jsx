import React, { useEffect, useState } from 'react';
import style from './page.module.css';
import axios from 'axios';
import PaginationCard from './PaginationCard';
import Pageshow from './Pageshow';

const Pagination = () => {
  const [responseData, setResponseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerpage, setPostPerpage] = useState(8);
  const [menFilter, setmenFilter] = useState(false);
  const lastIndex = currentPage * postPerpage;
  const firstIndex = lastIndex - postPerpage;

  const fetchData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setResponseData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log('res', responseData.length);

  const handleFilter = (e) => {
    setmenFilter(e.target.checked);
  };
  const filteredData = menFilter
    ? responseData.filter((item, index) => item.category === "men's clothing")
    : responseData;
  console.log('filteredData', filteredData);
  const paginationdata = filteredData.slice(firstIndex, lastIndex);
  return (
    <div>
      <div>
        <p>Filter</p>
        <label htmlFor=''>men</label>
        <input
          type='checkbox'
          onChange={handleFilter}
          name='men'
          checked={menFilter}
        />
      </div>
      <PaginationCard paginationdata={paginationdata} />
      <Pageshow
        totalpost={responseData.length}
        postPerpage={postPerpage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
