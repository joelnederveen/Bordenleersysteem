console.log('test js');

var names = ['bert', 'chantal', 'freek'];

names.forEach(showNames)

function showNames(item) {
    document.getElementById('namecol').innerHTML += 'Name:' + '<br>';
    document.getElementById('itemcol').innerHTML += item  + '<br>';

    var img = document.createElement('img');
    img.src = 'Documents/Bordenleersysteem//Images/'+item+'.jfif';
    document.getElementById('images').appendChild(img);
}