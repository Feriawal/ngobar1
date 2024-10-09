const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');


function randomTanah(tanah) {
    const tRandom = Math.floor(Math.random() * tanah.length);
    return tRandom;

function munculkanTikus(tanah) {
    tanah[1].classlist.add('muncul');
}