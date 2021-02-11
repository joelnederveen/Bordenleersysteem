var names = ['bert', 'chantal', 'freek', 'gert', 'hanneke', 'hans', 'irma', 'karen', 'kees', 'lidia'];

var correctNumber = Math.floor(Math.random() * 11);

console.log('correct name: '+names[correctNumber]);

var correctName = names[correctNumber];

console.log(correctName);

showImage(correctName);


function showImage(image) {
    var img = document.createElement('img');
    img.src = 'Images/'+image+'.jfif';
    img.width = 500;
    img.height = 500;
    document.getElementById('images').appendChild(img);
}

// function showImage(item) {
//     // document.getElementById('namecol').innerHTML += 'Name:' + '<br>';
//     // document.getElementById('itemcol').innerHTML += item  + '<br>';
// }