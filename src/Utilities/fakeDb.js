// const addToDb = id => {
//     let jobCart = {}
//     const storedCart = localStorage.getItem('job-cart')
//     if (storedCart) {
//     jobCart = JSON.parse(storedCart)
//   }

//   const quantity = jobCart[id]
//   if (quantity) {
//     const newQuantity = quantity + 1
//     jobCart[id] = newQuantity
//   } else {
//     jobCart[id] = 1
//   }
//   localStorage.setItem('job-cart', JSON.stringify(jobCart))


// }

// const getStoredCart = () => {
//   let jobCart = {}

  
//   const storedCart = localStorage.getItem('job-cart')
//   if (storedCart) {
//     jobCart = JSON.parse(storedCart)
//   }
//   return jobCart 
// }


// export {addToDb, getStoredCart}  



const addToDb = id => {
  let jobCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('job-cart')
  if (storedCart) {
    jobCart = JSON.parse(storedCart)
  }

  // add quantity
  const quantity = jobCart[id]
  if (quantity) {
    const newQuantity = quantity + 1
    jobCart[id] = newQuantity
  } else {
    jobCart[id] = 1
  }
  localStorage.setItem('job-cart', JSON.stringify(jobCart))
}

const getStoredCart = () => {
  let  jobCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('job-cart')
  if (storedCart) {
    jobCart = JSON.parse(storedCart)
  }
  return jobCart
}

const removeFromDb = id => {
  const storedCart = localStorage.getItem('job-cart')
  if (storedCart) {
    const jobCart = JSON.parse(storedCart)
    if (id in jobCart) {
      delete jobCart[id]
      localStorage.setItem('job-cart', JSON.stringify(jobCart))
    }
  }
}

const deleteJobCart = () => {
  localStorage.removeItem('job-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteJobCart }