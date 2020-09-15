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
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="328GDK9VYZSZC" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
</form>

