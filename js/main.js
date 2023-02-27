$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function() {
    $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
                nome: 'Por favor, insira seu nome.',
                telefone: 'Este campo é obrigatório',
                email: 'Este campo é obrigatório',
                mensagem: 'Este campo é obrigatório'
            }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');        
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})