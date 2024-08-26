const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
setTimeout(() => {
  preloader.style.display = "none";
},3000)
})




const menu = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header-nav");
const closer = document.querySelector("#close");

menu.addEventListener("click", () => {
    navbar.classList.add("active");
    
})
closer.addEventListener("click", () => {
    navbar.classList.remove("active");
    
})

//**  Swiper*//

new Swiper('.swiper', {
    slidesPerView: "auto",
    direction: 'horizontal',
    loop: true,
    effect:"slide",

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay:{
        delay: 2500,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});






//@FormData
//** VALIDACION FALTANTE Form*/

document.getElementById("join-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    let errorMessage = "";
    let errorMessagemail = "";

    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const email = document.getElementById("email").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombres === "") {
      isValid = false;
      errorMessage += "El campo Nombres es obligatorio.\n";
    }
    if (apellidos === "") {
      isValid = false;
      errorMessage += "El campo Apellidos es obligatorio.\n";
    }

    if (email === "") {
      isValid = false;
      errorMessagemail += "El campo Email es obligatorio.\n";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      errorMessagemail += "El formato del Email es incorrecto.\n";
    }
    if (celular === "") {
      isValid = false;
      errorMessage += "El campo Celular es obligatorio.\n";
    } else if (!/^\d+$/.test(celular)) {
      isValid = false;
      errorMessage += "El campo Celular debe contener solo números.\n";
    }
    if (ciudad === "") {
      isValid = false;
      errorMessage += "El campo Ciudad es obligatorio.\n";
    }
    if (mensaje === "") {
      isValid = false;
      errorMessage += "El campo Mensaje es obligatorio.\n";
    }

  
    if (!isValid) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Falta rellenar algunos campos \n"+errorMessagemail,
            
            customClass: {
                
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                footer: 'swal2-footer',
                iconColor: 'swal2-icon',
                confirmButton: 'swal2-confirm',
               
              },

        });
              
        

    } else {
        Swal.fire({
            
            title: "Formulario enviado",
            text: "Se ha enviado correctamente la consulta. En breve nos pondremos en contacto contigo.",
            
          });
      
    }
})

//** FAQ */
    const faq = document.getElementById("faq");
    faq.addEventListener("click", (e) => {
        e.preventDefault();
        const htmlContent = `
    <div class="faq-item">
    <details>
      <summary class="faq-question">¿Qué ventajas ofrecen los productos de realidad virtual en comparación con otras tecnologías?</summary>
      <div class="faq-answer">
       Los productos de realidad virtual ofrecen una experiencia inmersiva única que transforma la manera en que interactuamos con la tecnología. Desde simulaciones precisas hasta entrenamientos avanzados, la VR proporciona un nivel de realismo y detalle sin precedentes.
      </div>
    </details>
  </div>

  <div class="faq-item">
    <details>
      <summary class="faq-question">¿Cómo puedo asegurarme de que los productos de realidad virtual sean compatibles con mi equipo existente?</summary>
      <div class="faq-answer">
       Nuestros productos de realidad virtual están diseñados para ser compatibles con una amplia gama de dispositivos y sistemas operativos. Si tienes preguntas específicas sobre la compatibilidad con tu equipo, no dudes en contactar a nuestro equipo de soporte técnico.
      </div>
    </details>
  </div>

  <div class="faq-item">
    <details>
      <summary class="faq-question">¿Cuál es el tiempo de entrega típico para los productos de realidad virtual?</summary>
      <div class="faq-answer">
        El tiempo de entrega de nuestros productos de realidad virtual varía según la ubicación y la disponibilidad del producto. Por lo general, puedes esperar recibir tu pedido en un plazo de 3 a 5 días hábiles. Para detalles específicos sobre el envío, consulta nuestra sección de política de envíos o contáctanos directamente.
      </div>
    </details>
  </div>
    `;


    Swal.fire({
        title: "Preguntas frecuentes",
        html: htmlContent,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            title: 'swal2-title1',
            
           
          }
    });
    })


  