## alternar-visibilidade
========================

Criada após um pequeno problema que tive com a exibição nativa de imagens na versão web do Twitter.

O script ao ser iniciado pesquisa as abas e verifica se o Twitter está ativo em alguma delas, caso tenha alguma ocorrência ele inserirá um pequeno código através do "chrome.tabs.executeScript" na aba:

> jQuery("div.is-preview").each(function(i, e){jQuery(this).hide();});
> jQuery("#timeline").on("DOMSubtreeModified",function(){jQuery("div.is-preview").hide();});

O primeiro trecho pesquisa todos os div.is-preview e os esconde. O segundo trecho insere um evento "DOMSubtreeModified" na div#timeline, e cada vez que houver uma adição de um div.is-preview ele será escondido.

Esse script poderia ter sido feito de alguma outra forma? Possivelmente sim, no presente momento ele faz a tarefa para o qual foi criado, mas o código "gambiarrístico" está ai, se você quiser melhora-lo, sinta-se a vontade.
