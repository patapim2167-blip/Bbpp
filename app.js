const result=document.getElementById("result");

async function analyzePhone(){

const phone=

document

.getElementById("phone")

.value.trim();

if(!phone){

return;

}

result.innerHTML=

`<div class="result-card">

🔍 Đang tìm kiếm...

</div>`;

try{

const response=

await fetch(

`https://api-mobilespecs.azharimm.dev/v2/search?query=${encodeURIComponent(phone)}`

);

const api=

await response.json();

if(

!api.data ||

api.data.phones.length===0

){

result.innerHTML=

`<div class="result-card">

❌ Không tìm thấy dữ liệu

</div>`;

return;

}

const item=

api.data.phones[0];

result.innerHTML=

`

<div class="result-card">

📱 ${item.phone_name}

</div>

<div class="result-card">

🏢 ${item.brand}

</div>

<div class="result-card">

📅 ${item.detail}

</div>

<div class="result-card">

🎯 Gợi ý độ nhạy: Thử từ 180-195

</div>

<div class="result-card">

🖱️ DPI gợi ý: 520-560

</div>

<div class="result-card">

🔘 Nút bắn gợi ý: 50%-60%

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

🔋 Tắt tiết kiệm pin

<br>

🧹 Đóng ứng dụng nền

<br>

🔕 Không làm phiền: Bật

</div>

`;

}

catch{

result.innerHTML=

`<div class="result-card">

❌ Lỗi kết nối API

</div>`;

}

}
