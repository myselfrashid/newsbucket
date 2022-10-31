import React from 'react';
import loading from 'D:/Websites/React/newsbucket/src/loading.gif';


const Spinner = () => {
    return (
        <div className='flex justify-center self-center text-center'>
            <img src={loading} alt="loading" />
        </div>
    )
  }

export default Spinner;