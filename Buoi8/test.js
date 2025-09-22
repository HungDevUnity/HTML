// Dùng for để in bảng cửu chương

for (let i = 1; i <= 10; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//Dùng while để tính tổng các số từ 1 đến 100.
let sum = 0;
let num = 1;
while (num <= 100) {
    sum += num;
    num++;
}
console.log("Tổng các số từ 1 đến 100 là: " + sum);

//Dùng do…while để yêu cầu người dùng nhập đúng mật khẩu "123456" mới cho thoát vòng lặp.
let password;
do {
    password = prompt("Vui lòng nhập mật khẩu (mật khẩu đúng là '123456'):");
} while (password !== "123456");    

//Viết hàm ẩn danh
//Tạo một biến hello, gán cho nó một hàm ẩn danh in ra "Xin chào học viên!"
//Gọi hàm đó ra 2 lần.

let hello = function() {
    console.log("Xin chào học viên!");
}
hello();
hello();

//Viết arrow function
//Viết arrow function nhanDoi(x) trả về giá trị x * 2.
//Viết arrow function kiemTraChanLe(n) trả về chuỗi "Chẵn" hoặc "Lẻ".

let nhanDoi = x => x * 2;
console.log(nhanDoi(5)); 
let kiemTraChanLe = n => n % 2 === 0 ? "Chẵn" : "Lẻ";
console.log(kiemTraChanLe(4));
