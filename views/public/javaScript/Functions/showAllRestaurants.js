showRestaurant = async() =>{
  //Defining request options
  const options = {
    method: "GET",
  };

  //Request that saves respond in variable
  const res = await fetch('http://localhost:4000/restaurant/get', options)
      //Procedure if no error
      .then((response)=>{return response.json()})
      //Procedure if fetch error (e.g. API not reachable)
      .catch((e)=>{return console.log(e)});
  if(res.errors) {
    console.log(res.errors)
  }

  //return restaurants
  let restaurants = res.restaurants;

  console.log(res.restaurants);
};