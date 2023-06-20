import generateJoke from "./generateJoke";
import works from './assets/works.png';
import './styles/main.scss';

const worksImg = document.getElementById('laughImg');
worksImg.src = works;
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();