const api_url="https://api.rootnet.in/covid19-in/stats/latest";

async function getApi(url){
    const response = await fetch(url);
    var data = await response.json();
    data=data.data.regional;
    
    show(data);

}

getApi(api_url);

function show(data){

    const TPL_Results = item =>`
   <div class="grid-item">
   <h3 class="head">${item.loc}</h3>
   <h4 class="">Total     : <span>${item.totalConfirmed}</span></h4>
   <h4 class="">Deaths    : <span>${item.deaths}</span></h4>
   <h4 class="">Discharge : <span>${item.discharged}</span></h4>
   </div>
   `
   document.querySelector("#state")
   .innerHTML = data.map(item => TPL_Results(item)).join('');


}

