document.getElementById("k1").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/kitchen-1.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">K. Accessories</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">3900 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("k2").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/kitchen-2.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">K. Accessories</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">2500 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("k3").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/kitchen-3.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">K. Accessories</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">4900 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("s1").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/sports-1.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">Sports Back Cap</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">490 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("s2").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/sports-2.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">Full Jersey Set</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">6900 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("s3").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/sports-3.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">Sports cates</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">4290 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("f1").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/furniture-1.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">Single Relax Chair</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">7800 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("f2").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/furniture-2.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">Children play</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">2350 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})
document.getElementById("f3").addEventListener("click", function () {
    const div = document.createElement("div");
    div.className = "sidebar";
    div.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-10 mb-5 md:mb-10">
                <img src="assets/furniture-3.png" alt="">
                <div>
                    <h1 class="text-xs md:text-lg font-bold text-center md:text-left">Flexible Sofa</h1>
                    <p class="text-xs md:text-lg font-medium text-center md:text-left">1900 Taka</p>
                </div>
            </div>`;
    document.getElementById("sidebar").appendChild(div);
})


document.getElementById("clear").addEventListener("click", function (){
    const dN = document.getElementById("sidebar");
    dN.innerHTML = "";
})