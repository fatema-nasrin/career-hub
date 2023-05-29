import React, { useEffect, useState } from 'react';
import './Category.css'
import Categories from '../Categories/Categories';

const Category = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('Category-list.json')
        .then(res => res.json())
        .then(data =>setItems(data))

    } ,[] )
    return (
        
        <div className='my-container text-center'>
            <h2 className='text-4xl'>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

        <div className='grid md:grid-cols-4 gap-4 md:mx-40 mt-4'>
            {
                items.map(item => <Categories
                    key={item.id}
                    item={item} 
                    ></Categories>)
            }
        </div>

        </div>
    );
};

export default Category;