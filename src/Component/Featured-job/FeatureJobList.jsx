import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeatureJobList = () => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        fetch('Featured-job.json')
        .then(res => res.json())
        .then(data =>setJobs(data.slice(2)))

    } ,[] )

    return (
       <div className='my-container text-center'>
        <h2 className='text-4xl'>Featured Jobs</h2>
        <p>Senior Software Engineer with expertise in Machine Learning and Artificial Intelligence,<br />  working remotely for a well-funded startup that is revolutionizing the healthcare industry</p>

        <div className=' grid md:grid-cols-2 gap-4 md:mx-40 mt-4'>
           {
                jobs.map(job => <FeaturedJob
                    key={job.id}
                    job={job} 
                    ></FeaturedJob>)
                
            } 
        </div>

        <button className='mt-4'>See All Jobs</button>
       </div>
    );
};

export default FeatureJobList;