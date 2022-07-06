const getBtn = document.getElementById("get")
const postBtn = document.getElementById("post")
const input = document.getElementById("input")
const feed = document.getElementById('feed')

const baseURl = 'http://localhost:8383/'

getBtn.addEventListener("click", getInfo)
postBtn.addEventListener('click', postInfo)

async function getInfo(e){
    e.preventDefault()
    const res = await fetch(baseURl + 'doubled' , { method: 'GET' })//. option for fetch. get by default but well write it
    const data = await res.json() //get as json
    input.value = data.info //info is the field we gave the res json
}
async function postInfo(e){
    e.preventDefault()
    if(input.value==''){return}
    const res = await fetch(baseURl ,
    {
        method: 'POST',
        headers: {"Content-Type" : 'application/json'},
        body: JSON.stringify({
            parcel: input.value
        })
    })
    feed.insertAdjacentHTML('afterbegin',`<p>${input.value}</p>`)
}

