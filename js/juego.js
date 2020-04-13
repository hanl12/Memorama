//JUEGO CREADO POR ESTUDIANTES DE LA UNIVERSIDAD DEL MAGDALENA.

var cartas = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'] //Array de números para identificar pares de cartas.
var valores = []; //Valores a comparar.
var id_m = []; //Array de ID del array de cartas.
var volteadas = 0; //Número de cartas volteadas.


// Crear nueva tabla.
function tabla()
{
    volteadas = 0;
    var salida = '';
    cartas = cartas.sort(function() {return Math.random() - 0.5}); //Revolver cartas
    
    for (let i = 0; i < cartas.length; i++)
    {
        salida += '<div id="carta_'+i+'" onclick=baraja(this,\''+cartas[i]+'\')></div>';//Crear cada tarjeta
    }
    document.getElementById('tablero_n').innerHTML = salida;
}

//Función de juego.
function baraja(carta,val)
{
    if(carta.innerHTML == '' && valores.length < 2) //Si la carta no está volteada y si hay menos de dos cartas volteadas.
    {
        carta.style.background = "url(img/"+val+"\.png) no-repeat"; //Muestra la carta.
        carta.innerHTML = val;//Escribe el valor de la carta en el div pero muy pequeño para que no se vea.

        if (valores.length == 0) //Si no hay cartas volteadas.
        {
            valores.push(val); //Guarde el valor en el array de valores.
            id_m.push(carta.id); //Guarde en el array de IDs
        }
        else if(valores.length == 1) //Si ya hay una carta volteada.
        {
            valores.push(val); //Guarde en el vector de valores.
            id_m.push(carta.id); //Guarda en el array de IDs.

            if(valores[0]==valores[1]) //Si las cartas volteadas son iguales.
            {
                var i = valores[0]; //Variable de comparación para el switch.
                switch (i) //Switch para mostrar imagen e información del componente encontrado(didáctico).
                {  

                    case '1':
                        Swal.fire({
                            imageUrl: 'img/1.png',
                            imageAlt: 'Procesador',
                            text: "El procesador es el cerebro del sistema, procesa todo lo que hace el computador y ejecuta todas las acciones."
                        })
                        break;

                    case '2':
                        Swal.fire({
                            imageUrl: 'img/2.png',
                            imageAlt: 'Disco duro',
                            text: "El Disco Duro es un dispositivo donde se almacenan todos los datos guardados en el computador."
                        })
                        break;
                    case '3':

                        Swal.fire({
                            imageUrl: 'img/3.png',
                            imageAlt: 'RAM',
                            text: "La memoria RAM es una forma de memoria de almacenamiento temporal que guarda los procesos en tiempo real, pero no por mucho tiempo."
                        })
                        break;
                    case '4':

                        Swal.fire({
                            imageUrl: 'img/4.png',
                            imageAlt: 'Motherboard',
                            text: "La tarjeta madre es la placa de circuitos en donde se conectan todas las partes del computador."
                        })
                        break;

                    case '5':
                        Swal.fire({
                            imageUrl: 'img/5.png',
                            imageAlt: 'Torre',
                            text: "La torre o chasis es donde se meten todos los componentes del computador para proteger las partes y que todo se vea más estético."
                        })
                        break;
                        
                    case '6':
                        Swal.fire({
                            imageUrl: 'img/6.png',
                            imageAlt: 'Fuente de poder',
                            text: "La fuente de poder es la que alimenta de corriente eléctrica a todo el computador."
                        })
                        break;
                    case '7':
                        Swal.fire({
                            imageUrl: 'img/7.png',
                            imageAlt: 'Tarjeta gráfica',
                            text: "La Tarjeta Gráfica es una expansión de la tarjeta madre que se encarga de toda la parte gráfica o visual del computador. (Opcional)"
                        })
                        break;
                    case '8':
                        Swal.fire({
                        imageUrl: 'img/8.png',
                        imageAlt: 'SSD',
                        text: "El disco duro de estado sólido es una versión nueva de los anteriores discos duros, los cuáles son más rápidos y más modernos, sirven para guardar la información del computador ."
                        })
                        break;
                }
        
                volteadas += 2; //Aumentar volteadas.
                valores = []; //Vaciar el array de valores
                id_m = []; //Vaciar el array de IDs.

                if(volteadas == cartas.length) //Su todas las cartas están volteadas.
                {
                    function terminar() //Función terminar.
                    {
                      Swal.fire( //Mensaje.
                            '¡GANASTE!',
                            'Volteaste todas las tarjetas.',
                            'success'
                        )
                    }
                    setTimeout(terminar,4000); //Esperar un momento para mostrar el mensaje de terminar para que el jugador pueda leer la información de la última tarjeta.
                }
            }
            else //Si las cartas no son iguales.
            {
                function voltear() //Función para ocultarlas de nuevo.
                {
                    var carta1 = document.getElementById(id_m[0]); //Guardar las cartas en 1 variable.
                    var carta2 = document.getElementById(id_m[1]);
                    carta1.innerHTML = ""; //Borrar lo escrito el valor escrito en el DIV.
                    carta2.innerHTML = "";
                    carta1.style.background = 'url(img/fondo.png) no-repeat'; //Cambiar el fondo para ocultar las cartas.
                    carta2.style.background = 'url(img/fondo.png) no-repeat';
                    valores = []; //Vaciar array de valores.
                    id_m = []; //Vaciar array de IDs.
                }
                setTimeout(voltear,500); //Esperar medio segundo para que el jugador memorice las cartas.
            }
        
        }
    }
}
