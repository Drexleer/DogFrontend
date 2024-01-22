export function validateForm(input) {
    //console.log(input);
    let errors = {};
    // Validamos el name.
    if (input.name === '') errors.name = 'Coloca un nombre!';
    else if (!/^[A-Za-z ]+$/.test(input.name))
        errors.name = 'Sin caracteres especiales o números!';
    // Validamos los height.
    if (input.min_height === '')
        errors.min_height = 'Coloca una altura correcta';
    else if (input.min_height < 15)
        errors.min_height = 'Tiene que medir 15cm o mas';
    if (input.max_height === '')
        errors.max_height = 'Coloca una altura correcta';
    else if (input.max_height > 110)
        errors.max_height = 'Tiene que medir 110cm o menos';
    if (parseInt(input.min_height) > parseInt(input.max_height))
        errors.min_height = 'El mínimo no puede superar al mayor';
    // Validamos los weight.
    if (input.min_weight === '')
        errors.min_weight = 'Coloca un peso correcto';
    else if (parseInt(input.min_weight) < 1)
        errors.min_weight = 'Tiene que pesar 1Kg o mas';
    if (input.max_weight === '')
        errors.max_weight = 'Coloca un peso correcto';
    else if (parseInt(input.max_weight) > 90)
        errors.max_weight = 'Tiene que pesar 90Kg o menos';
    if (parseInt(input.min_weight) > parseInt(input.max_weight))
        errors.min_weight = 'El mínimo no puede ser menor al mayor';
    // Validamos el life span.
    if (input.min_life === '') errors.min_life = 'Coloca un año correcto';
    else if (input.min_life < 1)
        errors.min_life = 'Tiene que ser mayor a 1 ';
    if (input.max_life === '') errors.max_life = 'Coloca un año correcto';
    else if (input.max_life > 20)
        errors.max_life = 'Tiene que vivir 20 o menos';
    if (parseInt(input.min_life) > parseInt(input.max_life))
        errors.min_life = 'El máximo no puede ser menor al mayor';
    return errors;
}