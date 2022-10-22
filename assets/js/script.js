const   $btnSignIn = document.querySelector('.sign-in-btn'),
        $btnSignUp = document.querySelector('.sign-up-btn'),
        $signUp = document.querySelector('.sign-up'),
        $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

// Función para mostrar información de la sucursal
function muestraSucursal() {
    const formulario = document.getElementById("formulario"),
	    nuevoDiv = document.createElement("div"),
        nuevoFrame = document.createElement("iframe");

    formulario.innerHTML = "";
	nuevoDiv.id = "sucursal";
    nuevoDiv.className = "card bg-light mb-3";
    nuevoDiv.style = "max-width: 25rem; float:left;";
	nuevoDiv.innerHTML =
        '<div class="card-header"><i class="bx bxl-sketch" style="color:#ad292e"></i> Joyería Rubí <i class="bx bxl-sketch" style="color:#ad292e"></i></div>' +
        '<div class="card-body">' +
            '<p class="card-text">Tienda: Zona centro</p>' +
            '<p class="card-text">Dirección: Calle Guanajuato #3 bis, Jerez, Zacatecas</p>' +
            '<p class="card-text">CP: 99300</p>' +
            '<p class="card-text">Teléfono: 494-100-0057</p>' +
        '</div>';
    formulario.appendChild(nuevoDiv);

    nuevoFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.0920996043524!2d-102.99211588255615!3d22.650354500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8682effd818b017b%3A0x868d8ce2f0cf4e0f!2sJOYER%C3%8DA%20RUBI!5e0!3m2!1ses!2smx!4v1666292493242!5m2!1ses!2smx";
    nuevoFrame.width = 900;
    nuevoFrame.height = 650;
    nuevoFrame.style = "border:ridge;";
    nuevoFrame.allowFullscreen = "";
    nuevoFrame.loading = "lazy";
    nuevoFrame.referrerPolicy = "no-referrer-when-downgrade";
    formulario.appendChild(nuevoFrame);
}