document.addEventListener("DOMContentLoaded", function(){


    var form = document.querySelector('.form');


    form.addEventListener("submit", function(e){

        e.preventDefault();

        var email = document.querySelector("#inputEmail").value;
        var name = document.querySelector("#inputName").value;
        var agree = document.querySelector("#data_agreement").checked;

        var errorMessage = document.querySelector('.error-message');
        var successMessage = document.querySelector('.success-message');

        errorMessage.innerHTML = "";

        var fine = true;

        if(email.indexOf("@") == -1)
        {
            var p = document.createElement('p');
            p.innerText = "niepoprawny email";
            errorMessage.appendChild(p);
            fine = false;
        }

        if(name.length <= 3)
        {
            var p = document.createElement('p');
            p.innerText = "minimum 3 znaki";
            errorMessage.appendChild(p);
            fine = false;
        }



        if(!agree)
        {
            var p = document.createElement('p');
            p.innerText = "Brak zgody";
            errorMessage.appendChild(p);
            fine = false;
        }



        if(fine)
        {
            var p = document.createElement('p');
            p.innerText = "Wiadomość została wysłana!";
            successMessage.appendChild(p);

            var self = this;

            setTimeout(function(){
                self.submit();
            }, 2000)


        }


    })


});
