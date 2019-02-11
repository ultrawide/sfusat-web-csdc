const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://i.pinimg.com/originals/5a/71/7d/5a717d15b5a82633c85fea89dfec6cba.jpg';
logo.width=300
logo.height=380

app.appendChild(logo);

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);
var teststring = ["SFU SAT is amazing", "SFU SAT is awesome","SFU SAT is good", "SFU SAT is god"];
var i = 0;

function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function demo()
{
  while (true)
  {
    container.textContent = teststring[i%4];
    await sleep(2000);
    i++;  
  }
}

demo();
/*const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();*/