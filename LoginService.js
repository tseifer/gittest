/**
 * Created by Tidhar on 28/11/2016.
 */

let setColor = (didSucceedLogin) => {
    if (didSucceedLogin == true) {
        document.getElementById("verify").innerHTML = "Welcome";
        document.getElementById("verify").style.backgroundColor = 'green';
    } else {
        document.getElementById("verify").innerHTML = "Go away!";
        document.getElementById("verify").style.backgroundColor = 'red';

    }
};


let loginService = {
    user: 'tidhar',
    password: '123456',

    login: function(fn) {
        let typedUser = prompt("enter username");
        let typedPassword = prompt("enter password");

        //let didSucceed = (typedUser === this.user && typedPassword===this.password);
        let didSucceed;
        if (typedUser === this.user && typedPassword === this.password) {
            didSucceed  = true;
        } else {
            didSucceed = false;
        }
        fn(didSucceed);
    }

};

loginService.login(setColor);
