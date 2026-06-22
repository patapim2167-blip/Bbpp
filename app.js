const result = document.getElementById("result");

const historyKey = "ghw_history";

const database = {

"Samsung A71":{

cpu:"Snapdragon 730",

ram:"8GB",

hz:"60Hz"

},

"Samsung A55":{

cpu:"Exynos 1480",

ram:"8GB",

hz:"120Hz"

},

"iPhone 13":{

cpu:"Apple A15 Bionic",

ram:"4GB",

hz:"60Hz"

},

"Redmi Note 13":{

cpu:"Snapdragon 685",

ram:"8GB",

hz:"120Hz"

}

};

document

.getElementById("searchBtn")

.addEventListener(

"click",

analyzePhone

);

function analyzePhone(){

const phone=

document

.getElementById("phone")

.value.trim();

if(!phone){

result.innerHTML=

`<div class="result-card">

⚠️ Hãy nhập tên điện thoại.

</div>`;

return;

}

const data=

database[phone];

saveHistory(phone);

if(data){

showResult(phone,data);

}else{

showUnknown(phone);

}

}

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

function showUnknown(phone){

result.innerHTML=`

<div class="result-card">

📱 ${phone}

</div>

<div class="result-card">

❓ Chưa có dữ liệu.

</div>

`;

}

function saveHistory(phone){

let history=

JSON.parse(

localStorage.getItem(

historyKey

)

)||[];

history=

history.filter(

v=>v!==phone

);

history.unshift(phone);

history=history.slice(0,5);

localStorage.setItem(

historyKey,

JSON.stringify(history)

);

}