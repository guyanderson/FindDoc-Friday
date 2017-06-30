var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(name) {
    $('.showDoctor').append(name);
}

$(document).ready(function() {
    $('#medical-condition').click(function() {
        var newDoctor = new Doctor();
        var medicalIssue = $('condition').val();
        //$('#condition').val("");
        newDoctor.getDoctors(medicalIssue);
    });
});
