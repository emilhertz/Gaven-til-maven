async function getRestaurants() {

    //Defining request options
    const options = {
        method: "GET"
    };
    //Request that saves respond in variable
    const res = await fetch('http://localhost:4000/user/create', options)
    //Procedure if no error
        .then((response)=>{return response.json()})
        //Procedure if fetch error (e.g. API not reachable)
        .catch((e)=>{return console.log(e)});

    if(res.created === true){
        alert("Bruger oprettet!");
        window.open("login.html", "_self");
    } else {
        alert(`${res.errors}`);
    }
}

