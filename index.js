$(document).ready(function(){
  $('header button').click(()=>{
   $('form').slideDown();
  });
  $('#cancelar').click(()=>{
    $('form').slideUp();
  })

  $('form').on('submit', (e)=>{
    e.preventDefault();
    const novaImagem = $('#endereco-imagem').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${novaImagem}" />`).appendTo(novoItem);

    $(`<div class="overlay-imagem-link" >
          <a href="${novaImagem}" title="Veja imagem em tamanho real" target="_blank">
             Veja imagem em tamanho real
         </a>
      </div>
    `).appendTo(novoItem);

    $(novoItem).appendTo('ul');
   $(novoItem).fadeIn();
    $(novaImagem).val('');
  });
});