var apiKey = require('./../.env').apiKey;

function DoctorList(){
}

DoctorList.prototype.getDoctors = function(medicalIssue) {
};

var displayDoctors = function(response) {
    $('.showDoctor').empty();
    for(var i = 0; i <=response.data.length; i++) {
        $('.showDoctor').append("<p>" + response.data[i].profile.first_name + "</p>");

    }
    $('.showDoctor').append("<p>Ta da!</p>");
}

$(document).ready(function() {
    var newDoctorList = new DoctorList();
    alert('twice?');
    $('#medical-condition').click(function() {
        alert("hi");
        var medicalIssue = $('#condition').val();
        //$('#condition').val("");
        newDoctorList.getDoctors(medicalIssue);
     $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
         alert(medicalIssue);
        alert('bye');
            displayDoctors(response);
            console.log(response);
        }).fail(function(error){
            console.log("fail");
        });
    });
});

exports.doctorModule = DoctorList;


//('https://api.betterdoctor.com/2016-03-01/doctors?query=rash&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=b967904c63b94561bd3525a4b3b32656' + '&format=json')
