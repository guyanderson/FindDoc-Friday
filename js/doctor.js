var apiKey = require('./../.env').apiKey;

function DoctorList() {
}

// DoctorList.prototype.getDoctors = function(medicalIssue) {
// };

DoctorList.prototype.getDoctors = function(medicalIssue) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
        displayDoctors(result);
        console.log(result);
    }).fail(function(error){
        console.log("failed");
    });
};

//=============================================================================

var displayDoctors = function(result) {
    $('.showDoctor').empty();
    for(var i = 0; i <=result.data.length; i++) {
        $('.showDoctor').append("<p><img src=" + result.data[i].profile.image_url + "></p>");
        $('.showDoctor').append("<p>" + result.data[i].profile.first_name + " " + result.data[i].profile.last_name + "</p>");
    }
}


$(document).ready(function() {
    var newDoctorList = new DoctorList();
    $('#medical-condition').click(function() {
        var medicalIssue = $('#condition').val();
        $('#condition').val("");
        newDoctorList.getDoctors(medicalIssue);
    });
});





// $(document).ready(function() {
//     var newDoctorList = new DoctorList();
//     //alert('twice?');
//     $('#medical-condition').click(function() {
//         //alert("hi");
//         var medicalIssue = $('#condition').val();
//         $('#condition').val("");
//         newDoctorList.getDoctors(medicalIssue);
//         $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
//         //alert(medicalIssue);
//         //alert('bye');
//             displayDoctors(result);
//             console.log(result);
//         }).fail(function(error){
//             console.log("failed");
//         });
//     });
// });

exports.doctorModule = DoctorList;
