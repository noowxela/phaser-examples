export const setCookie = (c_name, c_value, c_days) => {
    let d = new Date();
    d.setTime(d.getTime() + (c_days * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    document.cookie = c_name + '=' + c_value + ';' + expires + ';path=/';
}

export const getCookie = (c_name) => {
    let name = c_name + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}