let devices=[];

fetch("devices.json")

.then(res=>res.json())

.then(data=>{

devices=data.devices;

})

.catch(()=>{

document.getElementById("result").innerHTML="Lỗi đọc dữ liệu";

});

function searchPhone(){

let keyword=document.getElementById("searchInput")

.value.toLowerCase();

let result=document.getElementById("result");

let found=devices.find(d=>

d.model.toLowerCase().includes(keyword)

);

if(!found){

result.innerHTML="Không tìm thấy";

return;

}

result.innerHTML=`

<div class="result-card">

📱 ${found.brand} ${found.model}

<br><br>

⚙️ ${found.chipset}

<br>

💾 ${found.ram}GB RAM

<br>

🏆 ${found.tier}

</div>

`;

}
