import {observable, action} from "mobx"
import {getItem} from "../utils/LocalStorage";

class loginStore {

    @observable isLogin = getItem("islogin") || false;

    @observable username = getItem("username") || "";

    @observable token = getItem("token") || "";

    @action.bound login(){
        this.isLogin = true;
    }
    @action.bound logout(){
        this.isLogin = false;
    }
    @action.bound setUserinfo(val){
        this.username = val
    }
    @action.bound setToken(val){
        this.token = val;
    }

}
export default new loginStore();