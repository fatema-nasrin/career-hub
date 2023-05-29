import { getStoredCart } from "../Utilities/fakeDb";



const appliedJobLoader = async() => {
    const loadedJobs = await fetch('/Featured-job.json');
    const jobs = await loadedJobs.json();
    // console.log(jobs)


const savedCart = getStoredCart()
    console.log(savedCart)
    let jobCartArray = [];

    for(const id in savedCart){
        const addedJob = jobs.find(job => job.id === id);
        // console.log(addedJob,id)
        if(addedJob){
            const quantity = savedCart[id];
            addedJob.quantity = quantity
            jobCartArray.push(addedJob)
        }
    }


    return {jobCartArray,jobs};
}


export default appliedJobLoader;