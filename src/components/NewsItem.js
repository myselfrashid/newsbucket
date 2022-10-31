import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl } = props;
  return (
    <div className="flex flex-col space-y-2 pb-10 h-120 w-80 shadow-2xl rounded-lg">
      <img src={imageUrl} className="h-40 w-80 overflow-hidden rounded-t-xl bg-contain" alt="newsimage" />
      <div className="h-30 w-80">
        <h5 className="text-xl px-4 py-5 text-center font-medium">{title}</h5>
        <p className="text-s px-4 text-left h-32">{description}</p>
      </div>
      <a href={newsUrl} target="_blank" rel="noopener noreferrer" className='flex flex-row justify-center self-center text-center bg-gray-800 h-8 w-28 px-2 py-1 rounded-md text-white'>Read News</a>
    </div>
  )
}
export default NewsItem;