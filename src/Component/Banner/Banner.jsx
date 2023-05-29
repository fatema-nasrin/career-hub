import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='my-container grid md:grid-cols-2 gap-8 my-4'>
           <div className='banner-details'>
           <h1>Your dream job is out there. Let's find it together</h1>
            <p className='mt-4'>Looking for a job can be overwhelming, but with our job searching site, we make it easier for you to find the right opportunity. Our site offers a user-friendly interface, customized job recommendations, and a vast database of job openings from top employers. Whether you're a recent graduate, a seasoned professional, or simply exploring your options, our job searching site can help you take the next step in your career.</p>
            <button className='mt-4'>Get started</button>
           </div>
           <div>
                <img className='rounded' src="/src/assets/banner.jpg" alt="" />
           </div>
        </div>
    );
};

export default Banner;