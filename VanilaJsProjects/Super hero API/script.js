
const baseURL = `https://superheroapi.com/api.php/1745815112540589`;
const displayInfo =document.getElementById('display-info');
const search =document.getElementById('searchbar');
const searchBtn =document.getElementById('search-btn');
const statEmojis ={'intelligence':'🧠',
'strength':'💪',
'speed': '⚡',
'power':'📊',
'durability':'🌊',
'combat':'🤼‍♂️' }


const showHeroInfo = (character) => {
    const name =`<h2>${character.name}</h2>`;
    const image = `<img src="${character.image.url}" width ="300" height="300">`
    // const powerstats=Object.keys(character.powerstats)
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statEmojis[stat]} ${stat}:${character.powerstats[stat]}</p>`}).join('')
    displayInfo.innerHTML = `${name} ${image} ${stats}`;
}

const getRandomSuperHero = (id) =>{
            fetch(`${baseURL}/${id}`).then(Response => Response.json())
            .then(json =>{
                const superhero=json
                // console.log(superhero.powerstats)
                showHeroInfo(superhero)
            })
    }
const searchSuperHero =(name) =>{
        fetch(`${baseURL}/search/${name}`).then(Response => Response.json())
        .then(json =>{
            const superhero = json.results[0];
            showHeroInfo(superhero);
        })
    }

    RandomBtn =document.getElementById('random-btn');
    RandomBtn.addEventListener('click', ()=>{
       getRandomSuperHero(Math.floor(Math.random()*731)+1)
    })
    searchBtn.onclick = () =>{
        searchSuperHero(search.value)}
