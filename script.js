    var request= new XMLHttpRequest();
    request.open('GET','https://api.covid19api.com/summary',true);
    request.send();
    request.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    console.log(data.Global.NewConfirmed);
    console.log(data.Global.NewDeaths)
    console.log(data.Global.TotalDeaths)
    console.log(data.Global.TotalRecovered)
    //console.log(data.Countries);
    for (var i=0;i<data.Countries.length;i++){
        //console.log(data.Countries[i].Country);
        //console.log(data.Countries[i].TotalConfirmed);
        console.log(`${data.Countries[i].Country} : ${data.Countries[i].TotalConfirmed}:${data.Countries[i].TotalRecovered}:${data.Countries[i].Date}`)
    }
    }