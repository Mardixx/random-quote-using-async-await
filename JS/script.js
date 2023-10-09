/* async function f() {
    return 1;
}
f().then(alert)
async function i() {
    return Promise.resolve(1)
}
i().then(alert) */
/* async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!") , 1000)
    })
    let result = await promise;

    alert(result)
}

f() */

let main = document.querySelector('main')
let btn = document.querySelector('.creation')

function getInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let test = () => fetch('https://thatsthespir.it/api')
    test()
        .then((response) => response.json())
        .then((json) => {
            let body = document.querySelector('body')

            let p = document.createElement('p')
            let img = document.createElement('img')
            let quoteP = document.createElement('p')

            let author = json.author
            let photo =  json.photo
            let quote = json.quote

            p.textContent = author
            img.src = photo
            quoteP.textContent = quote

            main.appendChild(p)
            main.appendChild(img)
            main.appendChild(quoteP)

            if (img.getAttribute('src') == "") {
                img.src = "./img/NoImg.png"
            }
        })
            resolve('Done');
          }, 1000);
    })
}

async function test() {
    console.log('Initialized');
    const getGood = await getInfo();
    console.log(getGood);
}

let count = 0
let p = document.createElement('p')
p.classList = 'count'
document.body.appendChild(p)

btn.addEventListener("click", () => {
    count++
    p.textContent = 'Count: ' + count

    try {
        test()
    } catch (error) {
        console.error(error);
    }
})

