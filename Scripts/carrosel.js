const carousel = document.querySelector(".carousel");
const arrows = document.querySelectorAll(".control");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let startX;
let scrollStart;
let isDragging;

arrows.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "left") {
            carousel.scrollLeft -= firstCardWidth;
        } else if (btn.id === "right") {
            carousel.scrollLeft += firstCardWidth;
        }
    });
});

const dragging = (e) => {
    if (!isDragging) return;

    const offset = startX - e.pageX;
    carousel.scrollLeft = scrollStart + offset;
};

// Inicie os valores quando o drag começar
const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollStart = carousel.scrollLeft;
    carousel.classList.add("dragging")
};

// Termine o drag quando o usuário soltar o mouse
const stopDragging = () => {
    isDragging = false;
    carousel.classList.remove("dragging")
};

carousel.addEventListener('mousedown', startDragging);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', stopDragging);
carousel.addEventListener('mouseleave', stopDragging);


const header = document.querySelector(".links");

function iniciarDados() {
    const user = sessionStorage.getItem("user");


    if (!user) {
        // Cria o elemento de login
        const loginLink = document.createElement("a");
        loginLink.className = "";  // Adicione uma classe se desejar
        loginLink.href = "login.html";
        loginLink.role = "button";
        loginLink.textContent = "Login";

        // Adiciona o link de login ao header
        header.appendChild(loginLink);
    } else {
        // Cria o elemento de logoff
        const logoffLink = document.createElement("a");
        logoffLink.className = "logoff";  // Adicione uma classe se desejar
        logoffLink.href = "#";
        logoffLink.role = "button";
        logoffLink.textContent = "Logoff";

        // Adiciona um evento de clique para fazer o logoff
        logoffLink.addEventListener("click", () => {
            sessionStorage.removeItem("user");
            alert("Você fez logoff.");
            window.location.reload();
        });

        // Adiciona o link de logoff ao header
        header.appendChild(logoffLink);
    }
}

