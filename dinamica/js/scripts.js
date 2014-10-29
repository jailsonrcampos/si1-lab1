$(document).ready(function(){

    // adiciona um novo assunto na lista de assuntos a aprender
    $('.form-assunto').submit(function(){

        var assunto = $('.form-assunto :text');

        $('#assuntoAprender').append('' +
        '<div class="item-assunto">' +
        '<a href="#" class="botao-ok"><span class="glyphicon glyphicon-ok promover remover" title="Mover para a lista de assuntos aprendidos"></span></a> ' +
        '<a href="#" class="botao-remover"><span class="glyphicon glyphicon-remove remover" title="Remover assunto"> </span></a> ' +
        assunto.val() +
        '</div>');
        assunto.val('');
        $("#assuntoAprender").focus();
        return false;
    });

    // Promove o assunto selecionado para a lista de assuntos aprendidos
    $(".promover").live('click', function(){

        var id = $(".promover").index(this);
        $(".promover").eq(id).parent().slideUp('fast', function() {
            var assunto = $(this).parent().text();
            $('#assuntoAprendido').append('' +
            '<div class="item-assunto">' +
            '<a href="#" class="botao-remover"><span class="glyphicon glyphicon-remove remover" title="Remover assunto"> </span></a> ' +
            assunto +
            '</div>');
        })
        $("#assuntoAprendido").focus();
        return false;
    });

    // Remove o assunto selecionado
    $(".remover").live('click', function(){
        var id = $(".remover").index(this);
        $(".remover").eq(id).parent().slideUp('fast', function() {
            $(this).parent().remove();
        })
        $("#assuntoAprender").focus();
        return false;
    })

})