function showResult(phone,data){

result.innerHTML=`

<div class="result-card">

📱 ${phone}

</div>

<div class="result-card">

🧠 CPU: ${data.cpu}

</div>

<div class="result-card">

💾 RAM: ${data.ram}

</div>

<div class="result-card">

📺 Màn hình: ${data.hz}

</div>

<div class="result-card">

🎯 Cấu hình được đề xuất theo thiết bị.

</div>

<div class="result-card">

⚙️ Bạn có thể mở rộng dữ liệu sau này.

</div>

`;

}
