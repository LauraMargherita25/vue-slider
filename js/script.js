/* 
- Partendo dai file nello starter implementare la funzione dei bottoni (next e previous) dello slider usando Vue (prima però create la struttura dati). 
-  Al click su una thumb, visualizzare in grande l'immagine corrispondente
*/



// creo la struttura
const app = new Vue({
    el: "#root",
    data:{
        activeIndex: 0,
        arrSlides: [
            {
                title: "Svezia",
                img: "01.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque quos omnis aliquam perferendis numquam unde, id iure odit enim deleniti ex soluta velit, commodi eius consequatur quas! Doloribus, ipsa!",
            },
            {
                title: "Svizzera",
                img: "02.jpg",
                text: "Lorem ipsum",
            },
            {
                title: "Gran Bretagna",
                img: "03.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                title: "Germania",
                img: "04.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque quos omnis aliquam perferendis numquam unde, id iure odit enim deleniti ex soluta velit.",
            },
            {
                title: "Paradise",
                img: "05.jpg",
                text: "Commodi eius consequatur quas.",
            },
        ]
    },
})