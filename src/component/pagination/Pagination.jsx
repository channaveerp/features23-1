import React, { useEffect, useState } from 'react';
import style from './page.module.css';
import axios from 'axios';
import PaginationCard from './PaginationCard';
import Pageshow from './Pageshow';

const Pagination = () => {
  const [responseData, setResponseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerpage, setPostPerpage] = useState(8);

  const lastIndex = currentPage * postPerpage;
  const firstIndex = lastIndex - postPerpage;
  const paginationdata = responseData.slice(firstIndex, lastIndex);

  const fetchData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setResponseData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log('res', responseData.length);

  return (
    <div>
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
