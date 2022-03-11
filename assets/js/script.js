var curso1 = [{
        nombre: "Andrés Ávila",
        calificaciones: [4.5, 6.5, 5.2, 6.8]
    },
    {
        nombre: "Fernanda Bustos",
        calificaciones: [7.0, 5.8, 6.3, 6.7]
    },
    {
        nombre: "Mauricio Cortés",
        calificaciones: [5.2, 5.3, 5.0, 5.7]
    },
    {
        nombre: "Karla Donoso",
        calificaciones: [4.3, 3.7, 4.8, 4.2]
    },
    {
        nombre: "Tomás Ercilla",
        calificaciones: [5.9, 6.2, 6.3, 6.5]
    },
    {
        nombre: "Daniela Fernández",
        calificaciones: [4.5, 4.7, 4.9, 5.1]
    },
    {
        nombre: "Sergio Garrido",
        calificaciones: [2.1, 3.4, 2.8, 1.5]
    },
    {
        nombre: "Pamela Herrera",
        calificaciones: [5.6, 5.9, 6.1, 5.7]
    },
    {
        nombre: "Fernando Inostroza",
        calificaciones: [6.8, 6.9, 7.0, 6.9]
    },
    {
        nombre: "Laura Jorquera",
        calificaciones: [5.6, 5.3, 6.2, 5.8]
    },
    {
        nombre: "Bryan Kelly",
        calificaciones: [5.6, 4.6, 3.9, 6.1]
    },
    {
        nombre: "Pía Muñoz",
        calificaciones: [4.6, 4.8, 5.0, 4.3]
    },
    {
        nombre: "Leonardo Navea",
        calificaciones: [7.0, 6.8, 5.9, 6.5]
    },
    {
        nombre: "Sandra Ortiz",
        calificaciones: [5.4, 5.7, 5.3, 5.2]
    },
    {
        nombre: "Andrés Poblete",
        calificaciones: [6.5, 5.9, 6.3, 6.7]
    },
    {
        nombre: "Francisca Quiroga",
        calificaciones: [6.9, 6.8, 7.0, 6.9]
    },
    {
        nombre: "Osvaldo Rojas",
        calificaciones: [2.5, 3.5, 4.5, 5.5]
    },
    {
        nombre: "Eduardo Soto",
        calificaciones: [5.9, 6.3, 4.9, 5.4]
    },
    {
        nombre: "Rayén Toro",
        calificaciones: [4.3, 5.2, 4.9, 5.6]
    },
    {
        nombre: "Germán Uturriaga",
        calificaciones: [3.6, 4.2, 4.5, 3.9]
    },
    {
        nombre: "Javiera Véliz",
        calificaciones: [2.5, 1.9, 4.2, 3.5]
    },
    {
        nombre: "Paola Yáñez",
        calificaciones: [4.5, 3.2, 5.6, 4.2]
    },
    {
        nombre: "Ricardo Zapata",
        calificaciones: [4.5, 6.7, 5.4, 6.2]
    }
];

var res = curso1.length * 7;
document.write("<table border>");
document.write("<thead>");

document.write("<th>");
document.write("#");
document.write("</th>");

document.write("<th>");
document.write("Nombre Completo");
document.write("</th>");

document.write("<th>");
document.write("Nota 1");
document.write("</th>");

document.write("<th>");
document.write("Nota 2");
document.write("</th>");

document.write("<th>");
document.write("Nota 3");
document.write("</th>");

document.write("<th>");
document.write("Nota 4");
document.write("</th>");

document.write("<th>");
document.write("Promedio");
document.write("</th>");
let i = 0;
document.write("</thead>");
for (i; i < curso1.length; i++) {
    let suma = curso1[i].calificaciones[0] + curso1[i].calificaciones[1] + curso1[i].calificaciones[2] + curso1[i].calificaciones[3]
    let pro = suma / 4;
    document.write("<tr>");
    for (j = 0; j < 1; j++) {
        document.write("<td>");
        document.write(i);
        res--;
        document.write("</td>");

        document.write("<td>");
        document.write(curso1[i].nombre);
        res--;
        document.write("</td>");

        document.write("<td>");
        if (curso1[i].calificaciones[0] < 4) {

            document.write("<h6>" + curso1[i].calificaciones[0]);
        } else {
            document.write(curso1[i].calificaciones[0]);
        }
        res--;
        document.write("</td>");

        document.write("<td>");
        if (curso1[i].calificaciones[1] < 4) {

            document.write("<h6>" + curso1[i].calificaciones[1]);
        } else {
            document.write(curso1[i].calificaciones[1]);
        }
        res--;
        document.write("</td>");

        document.write("<td>");
        if (curso1[i].calificaciones[2] < 4) {

            document.write("<h6>" + curso1[i].calificaciones[2]);
        } else {
            document.write(curso1[i].calificaciones[2]);
        }
        res--;
        document.write("</td>");

        document.write("<td>");
        if (curso1[i].calificaciones[3] < 4) {

            document.write("<h6>" + curso1[i].calificaciones[3]);
        } else {
            document.write(curso1[i].calificaciones[3]);
        }
        res--;
        document.write("</td>");

        document.write("<td>");
        if (pro < 4.0) {

            document.write("<h6>" + pro);
        } else {
            document.write(pro);
        }
        res--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>")