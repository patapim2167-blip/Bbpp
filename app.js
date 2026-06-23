const result=document.getElementById("result");

async function analyzePhone(){

const phone=document
.getElementById("phone")
.value
.trim();

if(!phone){

result.innerHTML=`

<div class="result-card">

⚠️ Hãy nhập tên điện thoại

</div>

`;

return;

}

try{

const files=[

"samsung.json",

"xiaomi.json",

"iphone.json"

];

let database={};

for(const file of files){

const response=

await fetch(file);

const data=

await response.json();

database={

...database,

...data

};

}

const data=

database[phone];

if(!data){

result.innerHTML=`

<div class="result-card">

❌ Chưa có dữ liệu của ${phone}

</div>

`;

return;

}

showResult(phone,data);

}

catch(e){

result.innerHTML=`

<div class="result-card">

❌ Lỗi đọc file JSON

</div>

`;

}

}

function showResult(phone,data){

let general=190;

let redDot=185;

let scope2=175;

let scope4=165;

let awm=80;

let freeLook=200;

let dpi=520;

let fire=56;

if(data.hz>=120){

general=195;

redDot=190;

scope2=180;

scope4=170;

awm=85;

dpi=560;

fire=52;

}

result.innerHTML=`

<div class="result-card">

📱 ${phone}

</div>

<div class="result-card">

🧠 CPU: ${data.cpu}

</div>

<div class="result-card">

💾 RAM: ${data.ram}GB

</div>

<div class="result-card">

📺 ${data.hz}Hz

</div>

<div class="result-card">

🎯 Độ nhạy đề xuất

<br><br>

Tổng quan: ${general}

<br>

Red Dot: ${redDot}

<br>

2X: ${scope2}

<br>

4X: ${scope4}

<br>

AWM: ${awm}

<br>

Nhìn xung quanh: ${freeLook}

</div>

<div class="result-card">

🖱️ DPI: ${dpi}

</div>

<div class="result-card">

🔘 Nút bắn: ${fire}%

</div>

<div class="result-card">

🎮 Setting game

<br><br>

Đồ họa: Mượt

<br>

FPS: Cao

<br>

Bóng đổ: Tắt

</div>

<div class="result-card">

📱 Setting máy

<br><br>

🔕 Không làm phiền: Bật

<br>

🔋 Tắt tiết kiệm pin

<br>

🧹 Đóng ứng dụng nền

</div>

`;

}
