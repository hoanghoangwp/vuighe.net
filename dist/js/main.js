// function validateForm() {
//     var x = document.forms["myform"]["name"].value;
//     if (x == "") {
//         alert("You must be enter name !");
//         return false;
//     }

//     var y = document.forms["myform"]["age"].value;
//     if (y == "") {
//         alert("You must be enter age !");
//         return false;
//     }
// }

var app = angular.module("myApp", []);
app.controller("myctrl", ['$scope', function ($scope) {
    $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
}]);

function myFunction() {
    if (document.querySelector('select.date').value !== '' && document.querySelector('select.month').value !== '' && document.querySelector('select.year').value !== '') {
        alert('Chúc mừng bạn đã đăng nhập thành công !');
        // window.open('login.html')
        window.location.href = '#';
    }
    else if (document.querySelector('select.date').value === '' && document.querySelector('select.month').value === '' && document.querySelector('select.year').value === '') {

        alert('Bạn phải nhập đầy đủ thông tin yêu cầu !');


    }
}

$(document).ready(function () {
    $('#sub').prop('disabled', true);

    $('.fullname, .username, .email, .password, .password_confirmation, .date, .month, .year').keyup(function () {

        if ($('.fullname').val() !== '' && $('.username').val() !== '' && $('.email').val() !== ''
            && $('.password').val() !== '' && $('.password_confirmation').val() !== ''
        ) {
            $('#sub').prop('disabled', false);
            $("#sub").removeClass("disable");
        }
        else {
            $('#sub').prop('disabled', true);
            $("#sub").addClass("disable");
        }
    });



        $("#form").submit(function (e) {
            e.preventDefault();
            if (login__username == 'admin' && login__password == 'admin') {
                return true;
            } else return false
        });

});



    // Below function Executes on click of login button.
    function validate() {
        document.querySelector('input#login__username').value == 'admin' && document.querySelector('input#login__password').value == 'admin'
            ? console.log('true')
            : console.log('false');

        console.log(document.querySelector('input#login__username').value == 'admin' && document.querySelector('input#login__password').value == 'admin');
        if (document.querySelector('input#login__username').value == 'admin' && document.querySelector('input#login__password').value == 'admin') {
            alert('Chúc mừng bạn đã đăng nhập thành công !');
            // window.open('login.html')
            window.location.href = '#';
        }
        else if (document.querySelector('input#login__username').value == '' || document.querySelector('input#login__password').value == '') {

            alert('Bạn phải nhập đầy đủ thông tin yêu cầu !');


        }
        else {
            alert("Tài khoản hoặc mật khẩu của bạn bị sai !");
        }
    };
