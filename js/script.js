/* 
- Partendo dai file nello starter implementare la funzione dei bottoni (next e previous) dello slider usando Vue (prima però create la struttura dati). 
-  Al click su una thumb, visualizzare in grande l'immagine corrispondente
- Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
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
    methods: {
        next(){
            if (this.activeIndex == this.arrSlides.length - 1) {
                this.activeIndex = 0; 
            } else {
                this.activeIndex++; 
            }
        },
        previus(){
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrSlides.length - 1; 
            } else {
                this.activeIndex--; 
            }
        },
        /* setInterval(){
            if (this.activeIndex == this.arrSlides.length - 1) {
                this.activeIndex = 0; 
            } else {
                this.activeIndex++; 
            } (3000);
        } */

        // setInterval(() => alert('tic'), 2000);

        /* setInterval(function () {
            time.localTime = new Date().toLocaleTimeString();
        }, 5000); */
        /*setInterval: setInterval(() => {
            alert('tic')
        }, 3000),*/
        startInterval() {
            sticazzi = setInterval(this.next, 3000)
        },
        stopInterval() {
            clearInterval(sticazzi)
        }
    },
    created(){
        this.startInterval()
    }
})


