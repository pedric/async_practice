
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function getCustomerData(){
  try{
    const customer = await getCustomer(1);
    if(customer.isGold){
      const topMovies = await getTopMovies();
      await sendEmail(customer.email,topMovies);
    }
  }
  catch(err){
    console.log(err.message);
  }
}
getCustomerData();

function getCustomer(id) {
  console.log('GET customer data...')
  return new Promise((resolve,reject) => {
    setTimeout(() => {
          resolve({ 
          id: 1, 
          name: 'Mosh Hamedani', 
          isGold: true, 
          email: 'email' 
        });
    }, 1000);
  });
}

function getTopMovies() {
  console.log('GET top movies...');
  return new Promise((resolve,reject) => {
      setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  console.log('sending email...');
  setTimeout(() => {
    console.log('email sent');
  }, 2000);
}