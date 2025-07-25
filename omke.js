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