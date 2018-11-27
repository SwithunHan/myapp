/**
 * 封装 fetch
 */
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export default function request (method, url, body) {
    method = method.toUpperCase();
    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Token': localStorage.getItem('atoken') || '' // 从sessionStorage中获取access token
        },
        body
    })
        .then((res) => {
            if (res.status === 401) {
                history.push('/login');
                return Promise.reject('Unauthorized.');
            } else {
                const token = res.headers.get('token');
                if (token) {
                    localStorage.setItem('token', token);
                }
                return res.json();
            }
        });
}

// GET 请求
export const get = url => request('GET', url);
// POST 请求
export const post = (url, body) => request('POST', url, body);
// PUT 上传
export const put = (url, body) => request('PUT', url, body);
// DELETE 删除
export const del = (url, body) => request('DELETE', url, body);