const başlık = document.querySelector("#başlık")
const kiloİnput = document.querySelector("#kiloİnput")
const boyİnput = document.querySelector("#boyİnput")
const hesaplaTuş = document.querySelector("#hesapla")

kiloİnput.addEventListener("keyup", () => { kontrol(kiloİnput) })
boyİnput.addEventListener("keyup", () => { kontrol(boyİnput) })
hesaplaTuş.addEventListener("click", hesapla)

function kontrol(e) {
    if (isNaN(e.value) || e.value == 0) {
        e.value = ""
        başlık.innerHTML = "Vücut Kitle Endeksi"
    }
    if (kiloİnput.value > 0 && boyİnput.value > 0) {
        hesaplaTuş.classList.remove("disabled")
        hesaplaTuş.classList.replace("btn-outline-success", "btn-success")
    } else {
        hesaplaTuş.classList.add("disabled")
        hesaplaTuş.classList.replace("btn-success", "btn-outline-success")
    }
}

function hesapla() {
    let indeks = kiloİnput.value / ((boyİnput.value / 100) ** 2)
    if (indeks < 18.5) {
        sonuç("İdeal kilonun altında")
    } else if (18.5 <= indeks && indeks < 25) {
        sonuç("İdeal kiloda")
    } else if (25 <= indeks && indeks < 29.9) {
        sonuç("İdeal kilonun üstünde")
    } else if (30 <= indeks && indeks < 39.9) {
        sonuç("İdeal kilonun çok üstünde (obez)")
    } else {
        sonuç("İdeal kilonun çok üstünde (morbid obez)")
    }
    function sonuç(e) {
        başlık.innerHTML = `Vücut Endeksiniz : ${e}`
    }
}
