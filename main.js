let str = prompt("String typedagi ma'lumot kiriting");
let num = prompt("Number typedagi ma'lumot kiriting");
let bool = prompt("boolean typedagi ma'lumot kiriting");

let isConfirm = confirm("Hamma ma'lumotlarni to'g'ri kiritganizga ishonchingiz komilmi?");

if (isConfirm) {
    alert(
        `Siz kiritgan ${str} so'zi string typega tegishli\n` +
        `Siz kiritgan ${num} so'zi number typega tegishli\n` +
        `Siz kiritgan ${bool} so'zi boolean typega tegishli`
    );      
}
