export class geradorCodigo {

    constructor(){}
  
    static gerarCodigo() {
      var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
          var numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
  
          var combinacoes = [ [ 3, 2, 1, 3, 2, 1 ], [ 2, 3, 1, 2, 1, 1 ], [ 3, 1, 3, 2, 1, 2 ], [ 1, 3, 2, 1, 2, 1 ],
                  [ 2, 3, 1, 2, 3, 3 ], [ 2, 3, 1, 2, 1, 3 ] ];
  
          var combinacaoUsada = Math.floor(Math.random() * 5 + 0);
  
          var codigoFinal = "";
  
          for (var i = 0; i < 6; i++) {
              if (combinacoes[combinacaoUsada][i] == 1) {
                  codigoFinal += letras[Math.floor(Math.random() * 26 + 0)];
              } else if (combinacoes[combinacaoUsada][i] == 2) {
                  codigoFinal += letras[Math.floor(Math.random() * 26 + 0)].toUpperCase();
              } else {
                  codigoFinal += numeros[Math.floor(Math.random() * 10 + 0)];
              }
          }
  
          return codigoFinal;
    }
  }
  