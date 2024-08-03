const form = document.querySelector('form');
        form.addEventListener('submit', function (e)
        {
            e.preventDefault();

        let username = document.querySelector('#username').value
        let pass = document.querySelector('#password').value

        if(username == "admin" && pass == 123)
        {
            document.querySelector('#text').innerText = "Login Successfull"
            window.open("log.html","_blank")
        }
        else{
            document.querySelector('#text').innerText = "Login Failed"
            window.open("https://www.geeksforgeeks.org","_blank")
        }
        console.log(username);
    console.log(pass);
        }
    
    )
        
        
    