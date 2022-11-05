document.querySelectorAll('#menuAjax').forEach(link =>{//requisitar com ajax para não ir para outro local
    const conteudo = document.getElementById('conteudo')

    link.onclick = function(e){ // função chamada quando o usuario clicar
        e.preventDefault() // previne de ir para outra pagina e mavegar
        
        fetch(link.href) // É uma api do js para requisição http e trabalha em Promises
        .then(resp => resp.text())//serve para pegar o conteudo da pagina que fiz requisição
        .then(html => conteudo.innerHTML = html)
    }
})

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://zurcsa.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();


