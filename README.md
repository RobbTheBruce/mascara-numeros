# mascara-numeros
Plugin para implementação de mascara em números

## Como importar

```js
const mascara = require('mascara-numeros');
```

## Exemplos de uso

```js
console.log(mascara("5521994642213","+99 (99) 99999-9999")); //retorna "+55 (21) 99464-2213"
console.log(mascara("74353400","99999-999")); //retorna "74353-300"
console.log(mascara('49331795068','999.999.999-99')); //retorna "493.317.950-68"
```

Se for util pra vc, ajude doando no link:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=772EPN8HX9EKQ)