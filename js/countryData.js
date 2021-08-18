const api_url="https://api.covid19api.com/summary";

async function getApi(url){
    const response = await fetch(url);
    var data = await response.json();
    data=data.Countries;
    
    show(data);

}

getApi(api_url);

function show(data){

    const TPL_Results = item =>`
   <div class="grid-item">
   <h3 class="head">${item.Country}</h3>
   <h4 class="">New Cases      : <span>${item.NewConfirmed}</span></h4>
   <h4 class="">Total Cases    : <span>${item.TotalConfirmed}</span></h4>
   <h4 class="">Total Death : <span>${item.TotalDeaths}</span></h4>
   <h4 class="">New Death : <span>${item.TotalDeaths}</span></h4>
   <h4 class="">Total Recoverd : <span>${item.TotalRecovered}</span></h4>
   <h4 class="">New Recoverd : <span>${item.NewRecovered}</span></h4>
   </div>
   `
   document.querySelector("#country")
   .innerHTML = data.map(item => TPL_Results(item)).join('');


}
