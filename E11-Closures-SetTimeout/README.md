Especificación: Imprimir en consola del 1 al 5 de forma que cada número se muestre un segundo después del anterior.

¿Que imprime la siguiente ejecución?

```js
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

x();
```

```console
6 (en el segundo 1)
6 (en el segundo 2)
6 (en el segundo 3)
6 (en el segundo 4)
6 (en el segundo 5)
```

La variable `i` definida con `var` forma una `variable global`. En el instante en el cual se define el `time` para cada `setTimeout` se asigna el tiempo correctamente en la `cola` del runtime sin embargo al momento de imprimir el valor de `i` este ya fue modificado por la última iteración al valor de 6.
Cada iteración forma un `closure` con referencia a su `lexical environment` el cual guarda una `referencia` a la variable `i`. Como la variable `i` ese global, cada `lexical environment` esta apuntando a la misma `dirección de memoria`.

FIX CODE

Usamos `let` en la variable del `loop` lo cual define `block-scope` para la variable `i`.

```js
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

x();
```

De esta forma el `closure` forma el setTimeout en cada iteración tiene en su `lexical environment` una referencia a la variable `i` el cual es un fresh-copy debido al uso de `let` el cual es `block-scope`.

```console
1 (en el segundo 1)
2 (en el segundo 2)
3 (en el segundo 3)
4 (en el segundo 4)
5 (en el segundo 5)
```

Si quisiéramos cumplir la especificación planteada usando `var` en el `loop-for` podríamos realizar lo siguiente

```js
function x() {
    for (var i = 1; i <= 5; i++) {
        function myPrintFunc(i) {
            setTimeout(function () {
                console.log(i); // `i` in lexical env. myPrintFunc
            }, i * 1000);
        }

        myPrintFunc(i); // create a copy of i (pass by value)
    }
}

x();
```

En cada iteración se forma un `closure` del callback definido en el `setTimeout` en con su `lexical environment` que referencia al scope definido por `myPrintFunc` y cada `lexical environment` tiene una `copia` de la variable `i`.
