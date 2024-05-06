let users = [
    {
        login: "MDK91",
        password: "123456"
    }
];

$(document).ready(function(){
    $(".btn-success").click(function(){
        let login = $("#login").val();
        let password = $("#password").val();
        let result = false;
        if(login == ""){
            alert("Login qatorini toldring!")
        }
        else if(password == ""){
            alert("Parol qatorini toldring")
        }
        else{
            if(users.length !=0){
                users.forEach(function(item){
                    if(login == item.login){
                        if(password == item.password){
                            result = true;
                            alert("Siz tizimga kirdingiz!")
                        }
                        else{
                            alert("parol notogri")
                        }
                    }
                });
                if(!result){
                    alert("royxatdan oting")
                }
            }
            else{
                alert("Siz birinci foydalanuvchisiz iltimos royxatdan oting!")
            } 
        }
        
    });
    $(".btn-link").click(function(){
        let login = $("#login").val();
        let password = $("#password").val();
        let result = false;

        if(login == ""){
            alert("login qatorini toldring!");
        }
        else if(password == ""){
            alert("parol qatorini toldiring!")
        }
        else{
            if(users.length !=0){
                users.forEach(function(item){
                    if(login == item.login){
                        result = true;
                    }
                });
                if(result){
                    alert("bunday login mavjut!")
                }
                else{
                    alert("siz royxatdan otdingiz");
                    users.push({login: login, password: password})
                }
            }else{
                users.push({login: login, password: password})
            }
        }   
    })
});