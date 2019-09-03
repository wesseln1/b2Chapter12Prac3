const flightSection = document.querySelector("#flight");
const mindreadingSection = document.querySelector("#mindreading")
const xraySection = document.querySelector("#xray")
const allSections = document.querySelectorAll("section")
// console.log(allPower)

document.querySelector("#activate-flight").addEventListener("click", () => {
    function flightHandlerFunction() {
        console.log("click")
        flightSection.classList.remove("disabled")
        flightSection.classList.add("enabled")
    }
    flightHandlerFunction()
})

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    function mindreadingFunction () {
        mindreadingSection.classList.remove("disabled")
        mindreadingSection.classList.add("enabled")
    }
    mindreadingFunction()
})

document.querySelector("#activate-xray").addEventListener("click", () => {
    function xrayFunction () {
        xraySection.classList.remove("disabled")
        xraySection.classList.add("enabled")
    }
    xrayFunction()
})

document.querySelector("#activate-all").addEventListener("click", () => {
    function activateAll () {
        allSections.forEach(section => {
            section.classList.remove("disabled")
            section.classList.add("enabled")
        })
    }
    activateAll()
})

document.querySelector("#deactivate-all").addEventListener("click", () => {
    function disableAll() {
        allSections.forEach(section => {
            section.classList.remove("enabled")
            section.classList.add("disabled")
        })
        }
    disableAll()
})
