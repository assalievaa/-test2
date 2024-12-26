
// #1

function extractNumbers(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            result.push(Number(str[i]));
        }
    }
    return result;
}

console.log(extractNumbers("a1fg5hj6"));


// #2
function fibo(first, second) {
    if (first > 144) return;
    console.log(first)
    setTimeout(function () {
        fibo(second, first + second)
    },900)
}
fibo(1, 1)

// #3

const asyncData = async () => {
    const product = await fetch('https://fakestoreapi.com/products');
    const data = await product.json();

    console.log(data)
}
asyncData()


// #4
const buttons = document.querySelectorAll('button')

buttons.forEach(item => {
    item.onclick = () => {
        document.body.style.backgroundColor = item.innerHTML
    }
})


// #5
const block = document.querySelector('.block')
const blockBtn = document.querySelector('.btn')

blockBtn.onclick = () => {
    if(block.classList.contains("block")) {
        block.classList.remove('block')
    }else {
        block.classList.add('block')
    }
}

//#6
const p = document.querySelector('p')
let interval;
let count = 0

interval = setInterval(() => {
    if (count < 100) {
        count++
        p.innerHTML = count

    }else {
        clearInterval(interval)
    }

},1)

// #7
const btn = document.querySelector('.button')

btn.onclick = async () => {
    try {
        const response = await fetch('my.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
};