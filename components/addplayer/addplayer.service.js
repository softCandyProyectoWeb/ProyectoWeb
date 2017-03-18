(function(){
  angular
  .module('myApp')
  .service('addService', addService);

  function addService(){
    var player = [
  {
    id: 001,
    name:'Goku',
    alias: 'Kokkun',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
  },
  {
    id: 002,
    name:'Piccolo',
    alias: 'PikOREO',
    money: 1500,
  photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    id: 003,
    name:'Logan',
    alias: 'Lovezno',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {
    
    id: 004,
    name:'Bomberman',
    alias: 'Don Pepe y los Globos',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }
];
    var publicAPI = {
      addPlayer : _addPlayer,
      getPlayer : _getPlayer,
      setLocal : localStoragePlayer
    };
    return publicAPI; 

    function _addPlayer(pPlayer){
      player.push(pPlayer);
      console.log(pPlayer);
      localStoragePlayer(player);

    }

    function _getPlayer(){
      var listaStored = localStorage.getItem('localPlayer');
      if (listaStored == null ) {
        player = [];
      }else {
        player = JSON.parse(listaStored);
      }
      return player;
    }

    function localStoragePlayer(pPlayer){
      localStorage.setItem(['localPlayer'], JSON.stringify(pPlayer));
    }



  }

})();