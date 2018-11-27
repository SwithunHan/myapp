import {get,post} from '../fetch'
const host = "http://127.0.0.1:8000";

//首页头条数据
export async function getdframeinfo() {
    try {
        const res = await get(`${host}/api/dframes`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
//首页菜单列表
export async function getbannerlist() {
    try {
        const res = await get(`${host}/api/menus`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
//首页轮播数据
export async function getbannerimg() {
    try {
        const res = await get(`${host}/api/swipers`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
// 验证登录
export async function authLogin(userinfo) {
    try {
        const res = await fetch(`${host}/api/login`,{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userinfo)
        });
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
//获取商品列表数据
export async function getOrderList() {
    try {
        const res = await fetch(`${host}/api/orders`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
