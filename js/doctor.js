var apiKey = require('./../.env').apiKey;
var displayDoctors = require('./../js/doctor-interface.js').doctorModule;

function DoctorList() {
}

DoctorList.prototype.getDoctors = function(medicalIssue) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
        displayDoctors(result);
        console.log(result);
    }).fail(function(error){
        console.log("failed");
    });
};

exports.doctorModule = DoctorList;
