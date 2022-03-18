/*
  const ma = 19;
function gr(){
  
    if (true < false ) {
        let cc = "Bb";
        console.log(cc);
    }else{
        console.log(ma);
    }  
}
gr();

*/

// console.log(typeof{});

// const arr = ["Bobur","rasulov","ja"];

// console.log(Array(isArray[0]));


/*
let a = "1234";
console.log(a.padStart(9,"#0"));
*/

//let message = "Assalomu aleykum Javascript Bobur"; console.log(message.split(' ', 4));
/*
let arr = ["Банан", "Апельсин", "Яблоко", "Манго"];
    number = [4,6,9,10,3,2,12,5,7,8,0,]
console.log(number.sort((a,b) => a - b));
console.log(number.sort((a,b) => b - a));
*/

//console.log(data.sort((a,b) => a - b));
/*
const gg = data.sort((a,b) =>{
    if (a.userName > b.userName) {
        return 1;
    }else if(a.userName < b.userName){
        return -1;
    }else{
        return 0;
    }
})

console.log(gg);
*/
/*
const data = [
    {id: 1, userName: "Bobur",   suty:"Nodejs"},
    {id: 2, userName: "Azizjon", suty:"nodeJs"},
    {id: 3, userName: "Rasulov", suty:"javascript"},
    {id: 4, userName: "Umidjon", suty:"python"},
    {id: 5, userName: "Javlon",  suty:"C++"},
]

let rest = [];
*/
// data.forEach(item => {
//     if (item.suty === "Nodejs") {
//     console.log(item);   
//     }else if(item.suty === "nodejs"){
//         return item;
//     }else{
//         return "Not coders"
//     }
// })
/*
data.map((item,index,arr) => {
    console.log(item,index,arr);
    // if (i.suty === "Nodejs") {
    //     rest.push(i);
    // }
})
*/
// console.log(rest);


let form = document.querySelector('.form'), 
    srcimg = document.querySelector('.srcimg'),
    input = document.querySelector('.input'),
    select = document.querySelector('.select'),
    list = document.querySelector('.list');

        const porduc = [
            {id: 1, proDuction:"Iphone", img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDg0NDw0OEA4ODg8PDQ0QDg8PDQ0NFhEWFhURFhUYHSggJBolGxYYITEjJSkrLi4uFx8zODMsNykxMi0BCgoKDg0OGxAQGTclHSYtMCsrLys3Ny0tNy03MjArLSs3Ky03LS0tNS0tLSstLTgtLS00NSsrKy0tKysrLS03Lv/AABEIAPQAzgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUGBwj/xABIEAACAQIBBQoJBwwDAQAAAAAAAQIDEQQFEiExcQYTIjJBUVJhc7IUFTM0VJGSk9EHI0KBobHBFkNTYnJ0goOjs8LwRGOiJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAwUCBP/EACARAQACAQUBAQEBAAAAAAAAAAABAhEDEzEyURIhQQT/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJNJNt2S1t6kjW1MvYWLaU3O2ve4SmvWlYmKzPEDZg1L3QUNHBraf8AqldD8oKHQr+6kdbd/Btganx/Q6Ff3Uh4/odCv7qQ27+DbA1P5QUOhX9zIflBQ6Ff3Mht38G2BqPyhodCv7mRLSy7hZNJzcG9W+QlTXrasNu3g2QKJ30rVyFTgAAAAAAAAAAAAAAAAAABy26DFyrVXQT+ap2U1yVKlr2fUk1o531GjxuUaOHhvlatSoUtCU6jSzuaybStzfcZmK01MRf6Veaex1M37jxn5TJzqZVlTqt73SpU3SjrSUr58kufOVvqR7s7dIwPWcm5Vw+KV6OKp1I3tnQUZRvzXUtfUbVUn+kXsL4ngu4ipKllOlGk5ZlWFVVVbXCNNzUmudSSs/ie5qc97vFJzsrJ6uS/2HVLzaMkfrI0xtnWabspLRZ8zRJZEKd4SUuWOnaVp4iLjFtq7jFva0mWCXNRTNRZ4RDpR9aKeEQ6UfWgL3FFsoJ6LFrxEOlH1oteIh0o+tEjOyBinSqrDt3pVL72n+bqJXcV1NX0c6OmOJp4iO/YdqS8vS5VqcrP7Gdlv0OnH2keH/RWItmBICidypQAAAAAAAAAAAAAAAAOFxD+crdvL++jUbr9y2Dx7i60WpxV4zjJwqRvrs1ydTujbYjj1v3iX988h+VTK1fEZQeDdSUMPTp03mJtRm5K+dLntq+pnvtMRWMwO63N7lsDgpN0tM5JZ05yc6sop3tnP6N+RJHZYWjGbs3oseC/J/lGrQxlLDRk3Srxm97u3GnNU5TU0uR8GztrTfMe1zk3Rv8AqkVn6pMR+JiULUqk5pSe9xk4qzs5W16eYxauW8m0p71LEUFOLs1xs18zk38DHy5Uq0smYudG6qxw03Cy4SbU22uvgr1Hh1KUd7vnyztceWL2sXvNcRCJl9H0KVGos6OY0+Xe0S+B0+SMH1ZtmcT8lGJq1MFBzbaTqRg3y04ztH/JbIo7ak6mdPOzc2/zdr3zevrO4nMRILC0n9CPsoeCUuhH2UTrW9kX9buvwKnWRj+B0uhH2UU8Cpfo4eyjIBKEEaGY86nKVOXI4Sa+zU/rRv8AIuUJV4yjOyq0mlO2iMk+LNLr0/WmacnyI7YuXNLDyvtU42+9lOtWJrn+pdGADwgAAAAAAAAAAAAA4WtG9Suny1ay6+Ozj92G4+jlGUasqroYiKzVVSWZON72d9Frt6Lpq71o66E86VRvW6tRv22Sml8xNcSOG3KbiMPgajrTxMatVxcc+U6cVGD1qMU3r1NtvRo0Ha4upSVJpVKerpxJFFcy9RHjEsyWhamIrFYxAYCKlTSlpThG9+XjHG43cDkeVZy0xzm26Mak402+Xgxf3WN3lnHTw2TcTXp6Z08M5R5rqM2eCOU6snXqVZSqybk5yk3O6tpv9f2FepaInGMmX0pkrB0aFOMKUUoJJRUUkrJaErchsMVRUFCSemWvTe5w3yX5TrYnBxlVk5SjKcHN655sklJ9dmk+uLO2zeUnH1i0TiExK5cZ/sx/yLi36T/Zj/kVO4QMoCjZKBsnyK//AK/5E+/ExyuSr+G0rXtvdS+y3xOdTpKXVgAzgAAAAAAAAAAAAAcBRfCqdpU77JkzHpcap2lTvsmTNSOBImQ4x8CWxkiZDjHwWBBRpxnRzJxzoShmyi7aYtaf9285wmI+SzDOq3Txs6dFu+9NLOS5lKS/Bne4R8COxfcTnNqVtyIsgZOwuBowoUpQUYqyV9r9d23fnbNrvkeR53VFX+3UYKdjYwnnJPnJwEU+XW9L5tgBRgCgKEgybIs7YxLpUZpe1F/gQMvyR57T7KocanSR1YAM4AAAAAAAAAAAAAHA1X89X7ar32VLKvlsR29XvsuTNSvEC65Di3wSW5Bi3wRItwnEjsX3GQmY2D4kdiMgC65lYSeuP1oxC+nOzT/2wGwuUKXKXAqUbFygBkuRbeGxvr3mpm7br8LkDZJkfz6n2VQ41ekjrQAZwAAAAAAAAAAAAAPPq3lsR29XvsqmW1vLYjt6vfZU1K8QLiHGcSWxktyHGcR7GSLMHxFsRkXMfB8SOxE4FxUtRr90VedLB4qpBtSjSlZrXHkbWxXZEziMje5OqwrXipxeZJQqOLUt7fM7amZeLpqMuDCUYaEnJPhPn0nlnyZZe8GxyoylanilvT5lU1wfruv4j1rKNZuKS1N8L8DzU1ptaIGDcoUB6gJ8hxvjU+jRm/8A1FfiY7Zlbn/PH+7z78SvV6SOpABnAAAAAAAAAAAAAA89r+WxHb1e+wMR5bEdvV7zKGpXgVIcXxJbGTEOL4j2MkUwfEjsJyDB8RbCcAW16UakJ05q8JxlCceeLVmvUXgDy2e4nKdPESVFQcKclKjiZVYxTSd46FeSktlus9fw2LnOjTdSKjVlCO+xTTUZ24ST5rmGSUpchTGhWJyMi4uR5xTOLhe2Ze53zx9hPvxMC5nbm/O5dhLvxK9XpI6wAGcAAAAAAAAAAAAADz3E+WxHb1e8y0rifLYjt6veZaaleBW5Di3wHsJSHFvgPYSL8JxFsJiHCcRbCYCoKFQKhMoAJbi5YmLkC65sNzPncuwl34mtNjuY87l2Eu/E41ekjrgAZwAAAAAAAAAAAAAPO8V5bEdvV7zLC/FeXxHb1e8yw1K8AQ4viPYTEGL4j2EiXCPgR2E9zHwvEjsJbgXgsuVuBcC24uBemVuR3K3AvubLcv53LsJd+Jqrm03Ledy7CXfiV6vSR14AM4AAAAAAAAAAAAAHneK8viO3q95kZJjGt/xFv09T15zIzUrxAEOL4j2ExDi+K9hIuwz4K2EtyGhxVpv185JcC64uW3FwLri5bcXAuuVTLLi4F9za7lPO5dhLvxNRc2+5Lzqen8w9H8cSvV6SOxABnAAAAAAAAAAAAAA8/wAs0XSxeIi/pz32D54z122O6MU7nLOSKeLilJuNSF3TqxtnRvrXWuo5bEbn8bB2VONVdOE1FeqTPdp61ZjEyNfcjxCvF7DYeJMd6M/eU/iUeQ8c/wDjP3lP4lm5X0azCTvFdWgnLlueyjCV44a6etb5S+JlRyNj/RWv5lL4jcr6MQGZ4lx3oz95T+I8S470Z+8p/EblfRhgzfEmO9H/AKlP4jxJjvR/6lP4jcr6MIGb4kx3o795T+I8SY70d+8p/EblfRhG73G028RXqfRhSjBv9aUs63qj9pj4Xc7jKjtNQox5ZSanK3VFfizrcm4CnhaapU07Jtyk9MpzeuTfOU62rX5xAygAeMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z'},
             {id: 1, proDuction:"Samsung", img: 'data:image/jpeg;base64,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'},
        ]

       function myrender(arr){
        arr.map(item => {
            let newLi = document.createElement('li')
            let newImg = document.createElement('img')
            let newTirle = document.createElement('h3')

            newTirle.textContent = item.proDuction;
            newImg.setAttribute('src',item.img);
            newImg.setAttribute('width',"150px")


            newLi.appendChild(newImg)
            newLi.appendChild(newTirle)
            

            list.appendChild(newLi)
        })
       }
       myrender(porduc);

       function renSelect(arr) {
        console.log("Ok");
       }
       renSelect(porduc);

       select.addEventListener('change', (b) =>{
        arr.map((item) => {
            let newOption = document.createElement('option')
            newOption.textContent = item.proDuction;
            select.appendChild(newOption);
        })
       })

        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            let newLi = document.createElement('li')
            let newImg = document.createElement('img')
            let newTirle = document.createElement('h3')

            newTirle.textContent = input.value;
            newImg.setAttribute('src',srcimg.value);
            newImg.setAttribute('width',"150px")


            newLi.appendChild(newImg)
            newLi.appendChild(newTirle)
            

            list.appendChild(newLi)
        })

