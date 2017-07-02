var DoctorList = require('./../js/doctor.js').doctorModule;


var displayDoctors = function(result) {
    $('.showDoctor').empty();
    if(result.data.length != 0) {
        for(var i = 0; i <=result.data.length; i++) {
            $('.showDoctor').append("<p><img src=" + result.data[i].profile.image_url + "></p>");
            $('.showDoctor').append("<p>" + result.data[i].profile.first_name + " " + result.data[i].profile.last_name + "</p>");
        }
    } else {
        $('.showDoctor').append("<br><h3>Due to no fault of the programmer, your search returned no results! Sorry.</h3>");
    }
};


$(document).ready(function() {
    var newDoctorList = new DoctorList();
    $('#medical-condition').click(function() {
        var medicalIssue = $('#condition').val();
        $('#condition').val("");
        newDoctorList.getDoctors(medicalIssue);
    });
});

exports.doctorModule = displayDoctors;
