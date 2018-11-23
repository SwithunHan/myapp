import {observable, action} from "mobx"

class LoginStore {
    @observable isLogin;

    constructor() {
        this.isLogin = false;
    }
    @action.bound login(){
        this.isLogin = true;
    }
    @action.bound logout(){
        this.isLogin = false;
    }

}
export default new LoginStore();