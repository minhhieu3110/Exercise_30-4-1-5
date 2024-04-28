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
function count(){
    let a = parseFloat(document.getElementById("num_a").value);
    let b = parseFloat(document.getElementById("num_b").value);
    let count = 0
    for (let i = a; i <= b ; i++) {
        if(i % 5 === 2){
            count+=1
        }
        document.getElementById('resultcount').innerHTML = "Số lượng các số chia 5 dư 2 từ "+a+" đến "+b+" là: "+count
    }
}


//Mảng
let arr = []

function create_array(){
    let n = document.getElementById("n").value;
    for (let i = 0; i < n; i++) {
        let pt = +prompt("Nhập phần tử thứ "+i)
            arr.push(pt)
        console.log(arr[i])
    }
    document.getElementById('array').innerHTML = "Mảng vừa tạo là: ["+arr+"]"
}
function even(){
    let chan = ''
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            chan += arr[i]+", "
            //console.log(chan)
            //document.getElementById('even').innerHTML = "Các phần tử chẵn trong mảng trên là: ["+chan+"]"

        }
    }
    document.getElementById('even').innerHTML = "Các phần tử chẵn trong mảng trên là: ["+chan+"]"
}
function even_odd(){
    let chan = ''
    let le =""
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            chan += arr[i]+", "
            //console.log(chan)
            //document.getElementById('even').innerHTML = "Các phần tử chẵn trong mảng trên là: ["+chan+"]"

        }else {
            le += arr[i]+", "
        }
    }
    document.getElementById('chan').innerHTML = "Các phần tử chẵn trong mảng trên là: <h2>["+chan+"]</h2>"
    document.getElementById('le').innerHTML = "Các phần tử lẻ trong mảng trên là: <h1>["+le+"]</h1>"

}
function Tong_tich(){
    let tong = 0
    let tich = 1
    for (let i = 0; i < arr.length; i++) {
        tong += arr[i];
        tich *= arr[i]
    }
    document.getElementById('tichpt').innerHTML = "Tích các phần tử trong mảng trên là: "+tich
    document.getElementById('tongpt').innerHTML = "Tổng các phần tử trong mảng trên là: "+tong
}
function Tong_tich_even(){
    let tong = 0
    let tich = 1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            tong += arr[i];
            tich *= arr[i]
        }
    }
    document.getElementById('tichpteven').innerHTML = "Tích các phần tử chẵn trong mảng trên là: "+tich
    document.getElementById('tongpteven').innerHTML = "Tổng các phần tử chẵn trong mảng trên là: "+tong
}
function findMax(){
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    document.getElementById('max').innerHTML = "Giá trị lớn nhất trong mảng trên là: "+max
}
function findMaxeven(){
    let maxchan = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0){
            if (maxchan < arr[i]) {
                maxchan = arr[i]
               // console.log(maxchan)
            }
        }
    }
    document.getElementById('maxeven').innerHTML = "Giá trị lớn nhất của các phần tử chẵn trong mảng trên là: "+maxchan
}
function count5(){
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 5 === 2){
            count+=1
        }
    }
    document.getElementById('kqcount').innerHTML = "Số lượng các phần tử chia 5 dư 2 trong mảng trên là: "+count
}
function counta(){
    let count = 0
    let a = parseFloat(document.getElementById("pt_a").value);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === a){
            count+=1
        }
    }
    document.getElementById('counta').innerHTML = "Số lượng các phần tử "+a+" trong mảng trên là: "+count
}
function vta(){
    let vta = parseFloat(document.getElementById("vt_a").value);
    let vitri = []
    let kq =""
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === vta){
            console.log(i)
            vitri.push(i)
            kq= "Vị trí của "+vta+" trong mảng trên là: "+vitri
        }else {
            kq= "Vị trí của "+vta+" không tồn tại trong mảng!!!"

        }

    }
    //return vitri
    document.getElementById('vt-a').innerHTML = kq
}
