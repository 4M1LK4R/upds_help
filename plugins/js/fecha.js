$(document).ready(function () {
    BuscarMes();
});
function BuscarMes() {
    var meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');
    var hoy = new Date();
    var mes = meses[hoy.getMonth()];
    //alert(mes);
    if (mes == 'enero') {
        $('#ene').trigger('click');
    }
    else if (mes == 'febrero') {
        $('#feb').trigger('click');
    }
    else if (mes == 'marzo') {
        $('#mar').trigger('click');
    }
    else if (mes == 'abril') {
        $('#abr').trigger('click');
    }
    else if (mes == 'mayo') {
        $('#may').trigger('click');
    }
    else if (mes == 'junio') {
        $('#jun').trigger('click');
    }
    else if (mes == 'julio') {
        $('#jul').trigger('click');
    }
    else if (mes == 'agosto') {
        $('#ago').trigger('click');
    }
    else if (mes == 'septiembre') {
        $('#sep').trigger('click');
    }
    else if (mes == 'octubre') {
        $('#oct').trigger('click');
    }
    else if (mes == 'noviembre') {
        $('#nov').trigger('click');
    }
    else if (mes == 'diciembre') {
        $('#dic').trigger('click');
    }
}
