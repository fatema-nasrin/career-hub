import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = (props) => {
    const {JobTitle,id,CompanyLogo,CompanyName,RemoteOrOnsite,
        FulltimeOrParttime,Location,Salary } = props.job;
    
        return (
            <div className='border-solid border-2 border-gray-500 rounded md:p-10 text-left'>
                <img className='w-42 h-32 rounded' src={CompanyLogo} alt="" />
                <h2 className='mt-2'>{JobTitle} </h2>
                <p className='mt-2'>{CompanyName} </p>
                <button className='mt-2'>{RemoteOrOnsite} </button>
                <button className='mx-4'>{FulltimeOrParttime} </button>
               
               <div className='grid grid-cols-2 mt-2'>
               <div className='flex'>
               <MapPinIcon className="h-4 w-4 text-gray-500 mt-1" /><p>{Location} </p> 
               
               </div>
               <div className='flex'>
               <CurrencyDollarIcon className="h-4 w-4 text-gray-500 mt-1" />
               <p>{Salary} </p>
               </div>
               </div>
                
              <button> <Link to={`/${id}`}  className='mt-4'>View Details</Link></button>
               
            </div>
        );
    };
    
    export default FeaturedJob;
    
