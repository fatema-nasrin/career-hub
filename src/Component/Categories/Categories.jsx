import React from 'react';

const Categories = ({item}) => {
   
    return (
         
        <div className='bg-slate-400 rounded p-8 text-left text-black'>
           <img className='w-24 h-24 rounded' src={item.picture} alt="" />
           <h2>{item.categoryName} </h2>
           <p>{item.jobsAvailable} Jobs Available </p>
           
        </div>
    );
};

export default Categories;