"use strict";

// Creamos una matriz en la que almacenamos los datos de los empleados
// Nombre, Apellido, Año Nacimiento, Sueldo
let empleados = [
    {nombre: "Gabriel", apellido: "Herranz", nacimiento: 1975, sueldo: 30000 },
    {nombre: "Sandra", apellido: "Lopez", nacimiento: 1984, sueldo: 55000},
    {nombre: "Juan", apellido: "Gonzalez", nacimiento: 2002, sueldo: 45000},
    {nombre: "Fernando", apellido: "Jimenez", nacimiento: 1900, sueldo: 25000},
];

// Filtramos por sueldo > 40000
let empleadosSueldosAltos = empleados.filter(empleado => {
    return empleado.sueldo > 40000;
});

// Ordenamos los empleados por año de nacimiento
let empleadosPorOrdenDeNacimiento = empleados.sort((a, b) => {
    return a.nacimiento - b.nacimiento;
});