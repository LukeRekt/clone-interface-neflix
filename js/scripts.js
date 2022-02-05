const filme = document.getElementsByClassName("owl-carousel owl-theme")[0];
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

fetch(`../db.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json())
    .then((data) => {
        criarFilme(data);
        //setServices(data.services);

    })

    function criarFilme(dados){
        for(let i = 0; i < dados.length; i++){
            console.log(dados[i]['descricao'])
            filme.innerHTML += `<div class="item">
            <div class="over-filme">
                <div class="sobre-filme">
                    <h5>${dados[i]['filme']}</h5>
                    <p>Umbrella Academy acompanha os membros de uma família disfuncional de super-heróis enquanto eles trabalham juntos para resolver a misteriosa morte de seu pai e lidam com suas personalidades e habilidades divergentes. </p>
                    <button class="botao" style="margin-top: 5px; padding: 8px; font-size: 20px;">Assistir Agora</button>
                    <button class="botao" style="margin-top: 5px; padding: 8px; font-size: 20px;">Sobre</button>
                </div>
                
            </div>
            <img class="box-filme" src="${dados[i]['imagem']}" alt="">
        </div>`
        }
        
       
    }