do {
    var a = +prompt('Введите число')
} while (isNaN(a) || a == null || a === 0);

do {
    var b = +prompt('Введите степень')
} while (isNaN(b) || b == null || b === 0);

var c = a

for (let i = 0; i < (b-1); i++) {
    c = a * c 
    alert(c);
}