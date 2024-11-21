const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img')
        img.src = data[0].url;
    })


document.getElementById("catButton").addEventListener("click", async () => {
    try {
        const URL = 'https://api.thecatapi.com/v1/images/search';

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const img = document.querySelector('img')
                img.src = data[0].url;
            })
    } catch (error) {
        console.error("Error al obtener imagen:", error);
        alert("No se pudo cargar la imagen del gato. Intenta de nuevo más tarde.");
    }
});