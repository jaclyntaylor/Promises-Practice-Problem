const getDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(res=>res.json()).then(data=>document.querySelector("#dog-img").src=data.message)
}

const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const {slip} = await res.json()
    document.querySelector("#advice-output").innerText = slip.advice;
}

const getJoke = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
    const {joke} = await res.json()
    document.querySelector("#joke-output").innerText = joke;
}



document.querySelector("#dog-btn").addEventListener("click", getDog);
document.querySelector('#advice-btn').addEventListener('click', getAdvice);
document.querySelector('#joke-btn').addEventListener('click', getJoke);