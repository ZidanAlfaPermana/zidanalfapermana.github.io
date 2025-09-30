function changeWeb(type) {
    if (type === Number) {
        window.location.href = "404.php"
    }
    /*
    * ada 3 pilihan coi
    * - trim (default)
    * - cppkalku
    * - webku
    * */
    switch (type) {
        case "cppkalku":
            window.location.replace("https://github.com/MagmaZ3637/MSwitchCaseCPP")
            break
        case "webku":
            window.location.replace("https://github.com/MagmaZ3637/TremegoKeuangan")
            break
        default:
            window.location.replace("https://github.com/MagmaZ3637/MTrim")
    }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
    })
}

let isClicked = false
function omkeGasm() {
    const icon = document.getElementById("ikondrop")
    if (isClicked) {
        isClicked = false
        icon.style.transform = "rotate(0deg)"
        icon.style.transition = "ease-in 0.2s"
    } else {
        isClicked = true
        icon.style.transform = "rotate(180deg)"
        icon.style.transition = "ease-out 0.2s"
    }
}