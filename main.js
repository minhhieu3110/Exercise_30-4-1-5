function ten(){
    let name = document.getElementById("name").value;
    document.getElementById('ten').innerHTML = name
}
function binhphuong(){
    let a = parseFloat(document.getElementById("a").value);
    let binhphuong= Math.pow(a, 2)
    document.getElementById('kq').innerHTML = "Bình Phương của "+a+" là: "+binhphuong
}
function tenh1(){
    let name = document.getElementById("nameh1").value;
    document.getElementById('tenh1').innerHTML = "<h1>"+name+"</h1>";
}
function picture(){
    let src = document.getElementById("src").value;
    let image = document.getElementById("image").value;
    document.getElementById('srcpic').innerHTML = src
    document.getElementById('image').innerHTML ="<img src='"+src+"'>";
}
function check(){
    let age = document.getElementById("age").value;
    let kq = ""
    if (age > 0){
        if(age < 18){
            kq = "Chưa đủ tuổi"
        }else {
            kq = "Đủ tuổi"
        }
    }else {
        kq = "Tuổi không hợp lệ!!!"
    }
    document.getElementById('kqua').innerHTML = kq
}
function kt(){
    let kq =""
    let a = parseFloat(document.getElementById("soa").value);
    if (a % 2 == 0){
        kq = "Hello"
    }else {
        kq = "Hi"
    }
    document.getElementById('numa').innerHTML = kq
}
function checkab(){
    let a =parseFloat(document.getElementById("numbera").value);
    let b =parseFloat(document.getElementById("numberb").value);
    let kq =""
    if (a > b){
         kq = "Tổng "+a+" và "+b+" là: "+(a+b)
    }
    else if (a < b){
        kq = "Tích "+a+" và "+b+" là: "+(a*b)
    }
    else if ( a = b){
        kq ="HiHi"
    }
    document.getElementById('result').innerHTML = kq
}
function ktra(){
    let a =parseFloat(document.getElementById("number_a").value);
    let b =parseFloat(document.getElementById("number_b").value);
    let c =parseFloat(document.getElementById("number_c").value);
    let max = a
    if (max < b){
        max = b
    }
    if (max < c) {
        max = c
    }
    document.getElementById('ketq').innerHTML = "Số lớn nhất là: "+max
}
function inhello(){
    for (let i = 1; i <= 100 ; i++) {
        console.log(i+". Hello")
       // document.getElementById('100').innerHTML = i+". Hello<br>"
    }
}
function in_n_hello(){
    let n = +prompt("Nhập N")
    let i = 1
    while (i <= n){
        console.log(i+". Hello")
        i++
    }
}
function print1_1000(){
    for (let i = 1; i <= 1000 ; i++) {
        console.log(i)
        // document.getElementById('100').innerHTML = i+". Hello<br>"
    }
}
function printa_b(){
    let a = parseFloat(document.getElementById("so_a").value);
    let b = parseFloat(document.getElementById("so_b").value);
    for (let i = a; i <= b ; i++) {
        console.log(i)
    }
}
function printa_bh1(){
    let a = parseFloat(document.getElementById("so-a").value);
    let b = parseFloat(document.getElementById("so-b").value);
    for (let i = a; i <= b ; i++) {
        console.log("<h1>"+i+"</h1>")
        document.write("<h1>"+i+"</h1>")
    }
}
function printeven(){
    let a = parseFloat(document.getElementById("number-a").value);
    let b = parseFloat(document.getElementById("number-b").value);
    for (let i = a; i <= b ; i++) {
        if (i % 2 == 0){
            console.log(i)
        }
    }
}
function print1(){
    let a = parseFloat(document.getElementById("numb-a").value);
    let b = parseFloat(document.getElementById("numb-b").value);
    for (let i = a; i <= b ; i++) {
        if (i % 2 == 0){
            document.write("<h2>"+i+"</h2>")
        }else {
            document.write("<h1>"+i+"</h1>")
        }
    }
}
function calc(){
    let a = parseFloat(document.getElementById("num-a").value);
    let b = parseFloat(document.getElementById("num-b").value);
    let tong = 0
    let tich =1
    for (let i = a; i <= b ; i++) {
        if (i % 5 == 2){
            tong+=i
            tich*=i
        }
    }
   document.getElementById('tong').innerHTML = "Tổng các số chia 5 dư 2 từ a đến b là: "+tong
   document.getElementById('tich').innerHTML =  "Tích các số chia 5 dư 2 từ a đến b là: "+tich
}