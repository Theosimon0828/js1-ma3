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
            const html = `
            <div>
                <p> ${facts[i].name} </p>
                <p> ${facts[i].rating} </p>
                <p> ${facts[i].tags.length} </p>
            </div>
            `
            container.innerHTML += html;   
        }
} 
try{
call();
handler.innerHTML = "success";
}
catch(error) {
    handler.innerHTML = "error found";
}
