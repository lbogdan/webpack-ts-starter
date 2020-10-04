import '../assets/main.css';

function addTitle(title: string) {
  const $app = document.getElementById('app');
  if ($app) {
    const $title = document.createElement('h1');
    $title.className = 'container';
    $title.innerHTML = title;
    $app.appendChild($title);
  }
}

addTitle('Hello, webpack-ts-starter!');
