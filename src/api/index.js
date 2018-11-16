const host = "http://127.0.0.1:8000";

export async function getdframeinfo() {
    try {
        const res = await fetch(`${host}/getdframeinfo`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getbannerlist() {
    try {
        const res = await fetch(`${host}/getbannerlist`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getbannerimg() {
    try {
        const res = await fetch(`${host}/getbannerimg`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}