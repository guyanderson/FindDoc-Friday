var apiKey = require('./../.env').apiKey;

function DoctorList(){
}

DoctorList.prototype.getDoctors = function(medicalIssue) {
};

var displayDoctors = function(result) {
    $('.showDoctor').empty();
    for(var i = 0; i <=result.data.length; i++) {
        $('.showDoctor').append("<p><img src=" + result.data[i].profile.image_url + "></p>");
        $('.showDoctor').append("<p>" + result.data[i].profile.first_name + "</p>");

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
     $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
        alert(medicalIssue);
        alert('bye');
            displayDoctors(result);
            console.log(result);
        }).fail(function(error){
            console.log("failed");
        });
    });
});

exports.doctorModule = DoctorList;


//('https://api.betterdoctor.com/2016-03-01/doctors?query=rash&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=b967904c63b94561bd3525a4b3b32656' + '&format=json')
