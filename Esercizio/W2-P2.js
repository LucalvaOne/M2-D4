/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me);
/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
/*const array=[];
for(let i=1;i<=100;i++){
  if(i%2!==0){
    console.log(i);
  }
}
/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
/*const array=[];
for(let i=0; i<10; i++){
  array.push(Math.floor(Math.random()*100)+1);
  console.log(array[i]);
}

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
 /* const array=[];
  for(let i=0; i<100; i++){
    array.push(Math.floor(Math.random()*100)+1);
  }
  for(let i=0;i<100;i++){
    if(array[i]%2===0){
      console.log(array[i]);
    }
  }
/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
 /* const array=[];
  for(let i=0; i<4; i++){
    array.push(Math.floor(Math.random()*100)+1);
    console.log(array[i]);
  }
  sum=0;
  for(let i=0; i<4; i++){
    sum = sum + array[i];
  }
  console.log(sum);
/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
/*const array=[];
  for(let i=0; i<5; i++){
    array.push(Math.floor(Math.random()*100)+1);
    console.log(array[i]);
  }
  for(let i=0; i<5; i++){
    array[i]=array[i]+1;
    console.log(array[i]);
  }
/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/
/*const array=[];
  for(let i=0; i<50; i++){
    array.push(Math.floor(Math.random()*50)+1);
    console.log(array[i]);
  }
  for(let i=50; i>=0;i--){
    if(array[i]%2===0){
    array.splice(i,1);
  }
}
  console.log(array);
/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
 /* function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
  }
  const array = [];
  for(i = 0; i < 10; i++){
    const unic = getRandom(0, 10);
    const back = 0;
    if(!array.includes(unic)){
      array.push(unic);
    } else {
      i--;
    }
  }

  console.log(array);
/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
/*const array = ["EPICODE", "is", "great"];
const array2 = [];
for( i = 0; i < 3; i++){
  array2.push(array[i].length);
}
console.log(array);
console.log(array2);
/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
/*const array=[1, 3, 5];
for(i=2;i>=0;i--){
  console.log(array[i]);
}

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
/*const array=[];
  for(let i=0; i<10; i++){
    array.push(Math.floor(Math.random()*10)+1);
    console.log(array[i]);
  }
  let m = Math.max.apply(null, array);
  console.log(m)
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/
/*let oldestMovie = 0;
let nameOldest;
for(i = 0; i < movies.length; i++){
  if(oldestMovie <= movies[i].Year && oldestMovie !== 0){
    oldestMovie = oldestMovie;
  } else {
    oldestMovie = movies[i].Year;
    nameOldest = movies[i].Title;
  }
}
console.log(movies);
console.log("Il film più vecchio dell'array precedente è: " + nameOldest + " uscito nell'anno: " + oldestMovie);

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/
/*let count=0;
for(let i=0;i<14;i++){
if(movies[i].Type==='movie'){
  count++;
}
}
console.log(count);

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
/*for(let i=0;i<14;i++){
  console.log(movies[i].Title);
}
/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
/*for(i=0;i<14;i++){
  if(movies[i].Year>=2000){
    console.log(movies[i])
  }
}
/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
/*const id = 'tt0355702'
for(let i=0;i<14;i++){
  if(movies[i].imdbID===id){
    console.log(movies[i]);
  }
}

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
/*let sumYear=0;
for(i=0;i<14;i++){
  sumYear=parseInt(movies[i].Year) + sumYear;
}
console.log(sumYear);
/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
/*const word='Endgame';
for(i=0;i<14;i++){
  if(movies[i].Title.includes(word)){
    console.log(movies[i])
  }
}
*/