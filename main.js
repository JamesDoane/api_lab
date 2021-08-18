
const resbtn = document.getElementById("resbtn");
const resContainer = document.querySelector('body')

function swapiRequest(){
    console.log("before click")
    axios.get(`https://swapi.dev/api/planets/2/`)
    .then((res)=>{
        let residents = res.data.residents
        let h2 = document.createElement('h2')
        for(let i = 0; i<residents.length ; i++){
            axios.get(residents[i])
                .then((res)=>{
                    let newDiv = document.createElement('div')
                    newDiv.textContent = res.data.name
                    h2.appendChild(newDiv)
                })
        }
        
    })
}

resbtn.addEventListener('click' , ()=>{
    // console.log("click")
    resContainer.innerHTML = `<button id="resbtn">Get Residents</button>`
    axios.get(`https://swapi.dev/api/planets/2/`)
    .then((res)=>{
        let residents = res.data.residents
        let h2 = document.createElement('h2')
        for(let i = 0; i<residents.length ; i++){
            axios.get(residents[i])
                .then((res)=>{
                    // console.log(res.data)
                    let names = res.data.name
                    console.log(names)
                    let newDiv = document.createElement('div')
                    newDiv.textContent = names
                    h2.appendChild(newDiv)
                })
        }
        resContainer.appendChild(h2)
        
    })
})