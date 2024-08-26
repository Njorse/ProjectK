const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
setTimeout(() => {
  preloader.style.display = "none";
},3000)
})

    
    
    
    
    const productos = [
        {
            id: 1,
            titulo: 'HYDRA VR Headset Alpha',
            imagen: '../img/vr/01_Hero-View.webp',
            precio: 2990.99
        },
        {
            id: 2,
            titulo: 'HYDRA VR Headset Beta',
            imagen: '../img/vr/899-00579-01-800x800w.jpg.webp',
            precio: 3990.99
        },
        {
            id: 3,
            titulo: 'HYDRA VR Controller Pro',
            imagen: '../img/vr/e1.jpg',
            precio: 1490.99
        },
        {
            id: 4,
            titulo: 'HYDRA VR Glove Set',
            imagen: '../img/vr/f.elconfidencial.com_original_c36_a1c_222_c36a1c2226f521017b9f78840ae24765.jpg',
            precio: 2490.99
        },
        {
            id: 5,
            titulo: 'HYDRA VR Base Station',
            imagen: '../img/vr/gearvr11-640x426.jpg',
            precio: 1790.99
        },
        {
            id: 6,
            titulo: 'HYDRA VR Game Pack',
            imagen: '../img/vr/marcat1.webp',
            precio: 9909.99
        },
        {
            id: 7,
            titulo: 'HYDRA VR Fitness Kit',
            imagen: '../img/vr/Oculus-Quest-2-1-e1556636395653-920x613-920x613.webp',
            precio: 1290.99
        },
        {
            id: 8,
            titulo: 'HYDRA VR Storage Case',
            imagen: '../img/vr/oculus-rift-s-2164101.webp',
            precio: 7900.99
        },
        {
            id: 9,
            titulo: 'HYDRA VR Gaming Chair',
            imagen: '../img/vr/Oculus-Rift-S-PC-Powered-VR-Gaming-Headset_52c855ed-2633-4468-9ffa-7ac0ac896aaf.61d4e5a05e01749bf16d4bd128222ab7.webp',
            precio: 4990.99
        },
        {
            id: 10,
            titulo: 'HYDRA VR Cable Management',
            imagen: '../img/vr/playstation-vr2.webp',
            precio: 3900.99
        },
        {
            id: 11,
            titulo: 'HYDRA VR Audio Kit',
            imagen: '../img/vr/Samsung_Gear_VR.jpg',
            precio: 8900.99
        },
        {
            id: 12,
            titulo: 'HYDRA VR Cleaning Kit',
            imagen: '../img/vr/vr-headset-2048px-9008.jpg',
            precio: 2900.99
        }
    ];

    const containerProductos = document.querySelector('.productos-container');

    function cargarProductos() {
        productos.forEach(producto => {
            const div = document.createElement('div'); 
            div.classList.add('producto')
            div.innerHTML = `   
            <img class="producto-image"   src="${producto.imagen}" alt="${producto.titulo}" />
            <div class="producto-details">
                <h3 class="producto-title">${producto.titulo}</h3>
                <p class="producto-price">$ ${ producto.precio}</p>
                <button class="producto-add" id = "${producto.id}">Obtener</button>
            </div>
            `;

            containerProductos.append(div);

        });
    }

    cargarProductos();





            