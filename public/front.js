const getBtn = document.getElementById("get")
const postBtn = document.getElementById("post")
const input = document.getElementById("input")
const feed = document.getElementById('feed')
const clearBtn = document.getElementById('clear')

const baseURl = 'http://localhost:8383/'

getBtn.addEventListener("click", getInfo)
postBtn.addEventListener('click', postInfo)
clearBtn.addEventListener('click', async (e)=>{
    e.preventDefault()
    input.value=0
    await postInfo(e)
    await postInfo(e)
    while (feed.lastChild) {
        feed.removeChild(feed.lastChild);
    }
      
})

async function getInfo(e){ //get info from server
    e.preventDefault()
    const res = await fetch(baseURl + 'doubled' , { method: 'GET' })//. option for fetch. get by default but well write it
    const data = await res.json() //get as json
    input.value = data.sum //info is the field we gave the res json
}
async function postInfo(e){ //send new value to server to update stuff
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
    feed.insertAdjacentHTML('afterbegin',`<p class="data">${input.value}</p>`)
}

