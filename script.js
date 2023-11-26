this.innerHTML = this.innerHTML
predmeti = document.querySelectorAll('.items')
predmeti.forEach(element => {
    element.addEventListener('click', randomchik);
});


function randomchik() {
    let a = [{id: 'Да', int: 30}, {id: 'Нет', int: 5000}];

    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i].int;
    }
    
    let rand = Math.floor(Math.random() * sum);
    
    let i = 0;
    for (let s = a[0].int; s <= rand; s += a[i].int) {
      i++;
    }
    if (a[i].id == 'Нет') {
        this.innerHTML = this.innerHTML + '<span style="color:#81f542">' + ' - '  + a[i].id + '</span>'
    }
    else {
        this.innerHTML = this.innerHTML + '<span style="color:#f54b42">' + ' - '  + a[i].id + '</span>'
    }
}