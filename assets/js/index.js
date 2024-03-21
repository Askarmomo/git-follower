const API_URL = "https://api.github.com/users/anburocky3/followers"
const cartsEl = document.getElementById("carts")
try {
    const thumnail = await fetch(API_URL)
    
    const jasondata = await thumnail.json()
    
    jasondata.map((users) => {
    
        console.log(users);
        const template = `
        <div class=" sm:max-w-xs rounded  bg-slate-600 p-3">
        <div>
          <img id="photo" src="${users.avatar_url}" class="h-80 w-full object-cover pb-3"></img>
        </div>
        <div class="font-semibold text-xl">${users.login}</div>
        <div class=" pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur earum ut eveniet. Soluta, odio aliquam esse veritatis sit earum.</div>
      </div>`
    
        cartsEl.innerHTML += template
    
    })
} catch (error) {
    alert("i found a error",error)
}
