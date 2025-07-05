let cars = prompt('აირჩიეთ სასურველი მანქანა');

if (cars === 'mercedes') {
  alert('ძალიან კარგი არჩევანია');
} else if (cars === 'tesla') {
  alert('ცუდი არჩევანია');
} else if (cars === 'opel') {
  alert('საშუალო არჩევანია');
} else {
  alert('სამწუხაროდ სხვა ავტომობილზე ვერ ვფლობტ ინფორმაციას.');
}

// 2

let favoriteFilm = 'film1';

let filmList = ['film1', 'film2', 'film3'];

if (filmList.includes(favoriteFilm)) {
  alert('It is a good film');
} else {
  alert('The Film is not good');
}
