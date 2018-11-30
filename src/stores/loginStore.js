import {observable, action,computed} from "mobx"
import {getItem} from "../utils/LocalStorage";

class loginStore {

    @observable isLogin = getItem("islogin") || false;

    @observable username = getItem("username") || "";

    @observable token = getItem("token") || "";

    @observable count = 0;

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
    @action.bound setCount(){
        this.count = (this.count) + 1;
    }
    @computed get getCount(){
        return this.count * this.count;
    }

}
export default new loginStore();