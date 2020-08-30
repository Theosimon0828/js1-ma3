const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const container = document.querySelector(".container");
const handler = document.querySelector(".handler");

async function call() {
   
        const response = await fetch(url);
        const results = await response.json();
        const facts = results.results;

        for(i=0; i<facts.length; i++) 
        {
            if (i === 8){
                break;
            }
            container.innerHTML += facts[i].name + " " + facts[i].rating + " " + facts[i].tags.length + " ";        }
} 
try{
call();
handler.innerHTML = "success";
}
catch(error) {
    handler.innerHTML = "error found";
}
