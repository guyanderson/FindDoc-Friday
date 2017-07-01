var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
};

var displayDoctor = function(name) {
    $('.showDoctor').append(name);
}

$(document).ready(function() {
    var newDoctor = new Doctor();
    alert('twice?');
    $('#medical-condition').click(function() {
        alert("hi");
        var medicalIssue = $('condition').val();
        $('#condition').val("");
        newDoctor.getDoctors(medicalIssue);
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=rash&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=b967904c63b94561bd3525a4b3b32656' + '&format=json').then(function(response) {
        alert('bye');
            displayDoctor(response);
            console.log(response);
        }).fail(function(error){
            console.log("fail");
        });
    });
});

exports.doctorModule = Doctor;
