import {observable, action} from "mobx"
import {getItem} from "../utils/LocalStorage";

class loginStore {

    @observable isLogin = getItem("islogin");

    @observable username = getItem("username");

    @action.bound login(){
        this.isLogin = true;
    }
    @action.bound logout(){
        this.isLogin = false;
    }
    @action.bound setUserinfo(val){
        this.username = val
    }

}
export default new loginStore();