let request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users/2', true);
request.send(null);

request.onreadystatechange = function(state){
    //console.log(request);
    if(request.readyState == 4){
        let resp = request.response;
        let respObj = JSON.parse(resp);
        console.log(respObj);
    }
}; 