function entrar(){
    const usuario = document.querySelector('input[type="text"]')
    const senha = document.querySelector('input[type="password"]')
    const botao = document.querySelector('#botaoEnviar')

    localStorage.setItem("usuario", 'admin')
    localStorage.setItem("senha", 'admin')
    
    botao.onclick((evento) =>{
        
        if(usuario == localStorage.getItem('usuario') && senha == localStorage.getItem('senha')){
            alert('deu certo')
        }
        
    })
   
}
window.onload = entrar;