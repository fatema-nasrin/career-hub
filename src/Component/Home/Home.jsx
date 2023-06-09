import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FeatureJobList from '../Featured-job/FeatureJobList';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <Category></Category>
            <FeatureJobList></FeatureJobList>
        </div>
    );
};

export default Home;