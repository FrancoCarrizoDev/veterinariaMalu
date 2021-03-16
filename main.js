
$(document).ready(function () {
    $(function () {
        $('.bxslider').bxSlider({
            auto: true,
            captions: true,
            pager: true,
            slideWidth: 1300
        });
    });

    var posts = [{
        tittle: 'Lorem JavaScript',
        date: (new Date()),
        content: 'LLorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia consectetur, magnam, esse omnis illum animi laborum incidunt illo perferendis perspiciatis itaque delectus mollitia odit accusamus magni, cumque maiores error!'
    },
    {
        tittle: 'Lorem JavaScript',
        date: new Date(),
        content: 'LLorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia consectetur, magnam, esse omnis illum animi laborum incidunt illo perferendis perspiciatis itaque delectus mollitia odit accusamus magni, cumque maiores error!'
    },
    {
        tittle: 'Lorem JavaScript',
        date: new Date(),
        content: 'LLorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia consectetur, magnam, esse omnis illum animi laborum incidunt illo perferendis perspiciatis itaque delectus mollitia odit accusamus magni, cumque maiores error!'
    },
    ];

    posts.forEach((item, index) => {
        var post = `
        <article>
        <h3>${item.tittle}</h3>
        <span>${item.date}</span>
        <p>${item.content}</p>
        <button type="submit">Leer Más</button>
        </article>
        `;

        $("#posts").append(post)
    });

    $('.up').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false
    });

    

});

/*SCRIPT CONTACT*/

$('#enviarContact').click(function (e) {
    e.preventDefault();
    /*Captura de datos escrito en los inputs*/
    var nom = document.getElementById("nombreContact").value;
    var tipo = document.getElementById("telContact").value;
    var email = document.getElementById("emailContact").value;
    var fecha = document.getElementById("razonContact").value;
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("nombreContact", nom);
    localStorage.setItem("telContact", tipo);
    localStorage.setItem("emailContact", email);
    localStorage.setItem("razonContact", fecha);
    /*Limpiando los campos o inputs*/
    document.getElementById("nombreContact").value = "";
    document.getElementById("telContact").value = "";
    document.getElementById("emailContact").value = "";
    document.getElementById("razonContact").value = "";
    $("#contactForm").html("<p style='margin-top:30px'>Pronto nos comunicaremos contigo, muchas gracias por confiar en nosotros ");

});

$("#limpiarContact").click(function(e){
    e.preventDefault();
    document.getElementById("nombreContact").value = "";
    document.getElementById("telContact").value = "";
    document.getElementById("emailContact").value = "";
    document.getElementById("razonContact").value = "";
})