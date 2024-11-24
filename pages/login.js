class Login{
    constructor(page){
        this.page = page
    }

    baseurl(){
        return 'https://opensource-demo.orangehrmlive.com/'
    };

    username_input(){
        return '//input[@name="username"]'
    };

    password_input(){
        return '//input[@name="password"]'
    }
}

module.exports = Login