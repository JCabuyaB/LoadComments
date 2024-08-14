// info
const data = [
    {
        id: 1,
        image: "./assets/freddy.jpg",
        nombre: "Freddy",
        profesion: "Desarrollador de Sofrware",
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum augue sit amet augue accumsan, et volutpat magna cursus. Ut interdum placerat erat nec aliquet. Sed et ornare est.",
    },
    {
        id: 2,
        image: "./assets/miguel.avif",
        nombre: "Miguel",
        profesion: "Técnico en Sistemas",
        descripcion:
            "Fusce vestibulum ligula venenatis eros pretium porta. Praesent pretium vestibulum sapien, sit amet semper ex tempus id. Morbi posuere, nisl non rhoncus tincidunt, mauris eros consectetur lorem, venenatis interdum.",
    },
    {
        id: 3,
        image: "./assets/sandra.jpg",
        nombre: "Sandra",
        profesion: "UX Designer",
        descripcion:
            "Aliquam rutrum nisi at turpis volutpat gravida. Ut eros sapien, lobortis non mi eget, gravida sagittis elit. Aenean mattis justo at ullamcorper efficitur.",
    },
    {
        id: 4,
        image: "./assets/valentina.jpg",
        nombre: "Valentina",
        profesion: "DevOps",
        descripcion:
            "Praesent et purus laoreet, rutrum risus vitae, accumsan arcu. Nulla ut facilisis massa. Nunc aliquam gravida volutpat. Phasellus maximus convallis quam eu semper.",
    },
];

// obtener contenido del DOM
// posicion inicial de la data
let currentIndex = 0;
const dataSize = data.length - 1;

// person data
const image = document.querySelector(".image__person");
const personName = document.querySelector(".person__name");
const job = document.querySelector(".person__job");
const description = document.querySelector(".content__description");

// controls
const previous = document.getElementById("anterior");
const next = document.getElementById("siguiente");
const randomBtn = document.querySelector(".controls__random-btn");

// funcion para catgar la info
const loadData = (i) => {
    image.src = data[i].image;
    personName.innerText = data[i].nombre;
    job.innerText = data[i].profesion;
    description.innerText = data[i].descripcion;
};

// cargar la posicion iniciarl/actual (0)
window.addEventListener("DOMContentLoaded", () => {
    loadData(currentIndex);
});

// controls functions
const showNext = () => {
    currentIndex == dataSize ? (currentIndex = 0) : currentIndex++;
    loadData(currentIndex);
};

const showPrevious = () => {
    currentIndex == 0 ? (currentIndex = dataSize) : currentIndex--;
    loadData(currentIndex);
};

const showRandom = () => {
    currentIndex = Math.round(Math.random() * dataSize);
    loadData(currentIndex);
};

// agregar listeners a los controles
next.addEventListener('click', showNext);
previous.addEventListener('click', showPrevious);
randomBtn.addEventListener('click', showRandom);