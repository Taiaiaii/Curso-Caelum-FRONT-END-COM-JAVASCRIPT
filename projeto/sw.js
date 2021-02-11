const CACHE_NAME ='ceep-cache-v1';
const CACHE_FILES = ([
    '/',
    '/index.html',
    '/favicon.ico',
    '/js/lib/jquery.js',
    '/js/server/sync.js',
    '/js/storage/db.js',
    '/js/storage/login-usuario.js',
    '/js/views/btnAjuda.js',
    '/js/views/btnLogout.js',
    '/js/views/btnMudaLayout.js',
    '/js/views/btnSync.js',
    '/js/views/busca.js',
    '/js/views/formulario-cartao.js',
    '/js/views/mural.js',
    '/js/views/notificacao.js',
    '/js/app.js',
    '/img/bin2.svg',
    '/img/edit.svg',
    '/css/botaoSync.css',
    '/css/cabecalho.css',
    '/css/cartao.css',
    '/css/container.css',
    '/css/formNovoCartao.css',
    '/css/mural.css',
    '/css/opcoesDaPagina.css',
    '/css/opcoesDoCartao.css',
    '/css/reset.css'  
]).map(item => '/projeto' + item);  //inserir a pasta projeto em todos os itens

// 'install' é executado quando o service worker é instalado ou inicializado
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(CACHE_FILES);
        })
    );
})

//fetch gerencia e intercepta todas as requisições HTTP realizadas pela aplicação dando a oportunidade do SW deternminar o que fazer
// com essas requisições: ex = buscar algo no servidor ou buscar algo no caches

self.addEventListener('fetch', function(event){
    event.respondWith(fetchFromServerOrCache(event.request));
});

async function fetchFromServerOrCache(request) {
    try{
        return await fetch(request)
    }catch(e){
        return await caches.match(request, {ignoreVery: true});
    }
}