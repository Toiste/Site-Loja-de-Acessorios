const register = document.querySelector(".register")
const login = document.querySelector(".login")
const email = document.querySelector(".email")

login.style.color = "black"

register.addEventListener("click", () => {
    register.style.color = "var(--primary-color)"
    login.style.color = "var(--terciary-color-dark)"
    
    email.style.display = "block"
 })

 login.addEventListener("click", () => {
    register.style.color = "var(--terciary-color-dark)"
    login.style.color = "var(--primary-color)"
    
    email.style.display = "none"
 })