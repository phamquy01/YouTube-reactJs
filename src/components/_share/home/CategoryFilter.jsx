import { filterVideoAction } from '@/store/homeSlice';
import { filterVideo } from '@/services/HomeService';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function CategoryFilter(props) {
  const [filterList, setFilterList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const dataFilter = {
      search: props.title,
      number: 20,
      pageToken: '',
    };

    const getVideoSearchPage = async () => {
      try {
        let response = await filterVideo(dataFilter);
        console.log('response', response);
        if (response) {
          dataFilter.pageToken = response.data.nextPageToken;
          setFilterList((prev) => [...prev, ...response.data.items]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getVideoSearchPage();

    window.addEventListener('scroll', function (e) {
      const top = e.target.documentElement.scrollTop;
      const win = window.innerHeight;
      const height = e.target.documentElement.scrollHeight;
      if (top + win >= height) {
        dataFilter.number += 10;
        getVideoSearchPage();
      }
    });
  }, [props.title]);

  const handleFilterHome = () => {
    setActive(!active);
    dispatch(filterVideoAction(filterList));
  };
  const [active, setActive] = useState(false);
  return (
    <div
      className="category-filter"
      onClick={() => {
        handleFilterHome();
      }}>
      {props.title}
    </div>
  );
}

export default CategoryFilter;
