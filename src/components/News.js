import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1d6b67dcc7704a0ba1fe70e992e755ea&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    updateNews();
  },[])


  const handlePrevClick = async () => {
    setPage(page-1);
    updateNews();
  }

  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  }

  return (
    <div className='overflow-y px-4 text-center sm:flex sm:flex-col sm:justify-center items-center flex-shrink-0'>
      <h1 className='text-2xl font-serif font-semibold text-center py-8 px-10'>Today's Top Headlines are</h1>
      {loading && <Spinner />}
      <div className='md:grid md:grid-cols-3 sm:flex sm:flex-col px-10 py-10 text-center'>
        {!loading && articles.map((element) => {
          return <div className="px-10 py-10 md:grid sm:flex md:grid-cols-4 sm:flex-col" key={element.url}>
            <NewsItem title={element.title.slice(0, 50).concat("...")} description={element.description ? element.description.slice(0, 150).concat("...") : `No Description Given`} imageUrl={element.urlToImage ? element.urlToImage : 'https://www.thenewsminute.com/sites/default/files/KaushikLM_Twitter_150822_1200.jpg'} newsUrl={element.url} />
          </div>
        })}
      </div>
      <div className='flex flex-row justify-around w-full'>
        <button type='button' disabled={page <= 1} className='bg-gray-800 h-8 w-24 px-2 py-1 rounded-md box-content self-center text-white font-semibold' onClick={handlePrevClick}>&larr; Previous</button>
        <button type='button' disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className='bg-gray-800 h-8 w-24 px-2 py-1 rounded-md box-content self-center text-white font-semibold' onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News