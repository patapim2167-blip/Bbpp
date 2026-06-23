function showResult(phone,data){

let dpi=520;
let fire=56;

let general=190;
let redDot=185;
let scope2=175;
let scope4=160;
let awm=80;
let freeLook=200;

if(data.hz>=120){

dpi=560;
fire=52;

general=195;
redDot=190;
scope2=180;
scope4=170;
awm=85;

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

📺 Màn hình: ${data.hz}Hz

</div>

<div class="result-card">

🎯 Độ nhạy đề xuất

<br><br>

Tổng quan: ${general}

<br>

Red Dot: ${redDot}

<br>

2x: ${scope2}

<br>

4x: ${scope4}

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

Độ phân giải: Tiêu chuẩn

</div>

<div class="result-card">

📱 Setting máy

<br><br>

🔋 Tiết kiệm pin: Tắt

<br>

🌙 Độ sáng: 75%

<br>

🔕 Không làm phiền: Bật

<br>

🧹 Đóng ứng dụng nền trước khi chơi

</div>

`;

}
