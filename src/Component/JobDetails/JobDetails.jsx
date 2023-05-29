import React from 'react';
import './JobDetails.css';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div>
        <div className='banner'>
            <div >
                <Header/>
            </div>
            <h2 className='heading'>Job Details</h2>
        </div>



      

        </div>
    );
};

export default JobDetails;