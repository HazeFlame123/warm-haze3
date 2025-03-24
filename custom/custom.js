document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: "lumânări/basic.PNG", name: "basic", pret: 90 },
        { src: "lumânări/angel.PNG", name: "ingere", pret: 200},
        { src: "lumânări/cos.png", name: "coș", pret: 180 },
        { src: "lumânări/bile.PNG", name: "bile mică", pret: 90 },
        { src: "lumânări/U.PNG", name: "U", pret: 150 },
        { src: "lumânări/tanti.png", name: "tanti", pret: 180 },
        { src: "lumânări/inima.png", name: "inima", pret: 50 },
    
    
    ];

    let currentIndex = 0;
    const candleImage = document.getElementById("candleImage");
    const candlepret = document.getElementById("candlepret");
    const totalpret = document.getElementById("totalpret");
    const prevbuton = document.getElementById("prev");
    const nextbuton = document.getElementById("next");
    const mirosSelect = document.getElementById("miros");
    const cadouimpachetare = document.getElementById("cadouimpachetare");
    const culoareOptions = document.querySelectorAll("input[name='culoare']");

    function updatecarusel() {
        candleImage.src = images[currentIndex].src;
        candlepret.textContent = images[currentIndex].pret;
        updateTotal();
    }

    function updateTotal() {
        let total = images[currentIndex].pret;
        if (mirosSelect.value !== "none") total += 50;
        if (cadouimpachetare.checked) total += 20;
        culoareOptions.forEach(option => {
            if (option.checked) {
                total += (option.value === "alb" ? 10 : 20);
            }
        });
        totalpret.textContent = total;
    }

    prevbuton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updatecarusel();
    });

    nextbuton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updatecarusel();
    });

    mirosSelect.addEventListener("change", updateTotal);
    cadouimpachetare.addEventListener("change", updateTotal);
    culoareOptions.forEach(option => option.addEventListener("change", updateTotal));
    
    updatecarusel();
});


const culoares = {
    alb: 10,
    bej: 20,
    albastrupastel: 20,
    violetpastel: 20,
    galben: 20,
    rosu: 20,
    portocaliu: 20,
    mov: 20,
    rozinchis: 20,
    verdeinchis: 20,
    brun: 20,
    oranjspalat: 20,
    argintiu: 20,
    indigo: 20,
    lavanda: 20,
    turcoaz: 20,
    magenta: 20,
    fucsia: 20,
    corai: 20,
    verdedeschis: 20,
    rozviolet: 20,
    verdebrad: 20,
    verde: 20,
    albastruinchis: 20,
    cafeniu: 20,
    oranjaprins: 20,
    gold: 20,
    rosuinchis: 20,
    rozaprins: 20,
    plump: 20,
    gri: 20,
    aqua: 20,
    negru: 20
};