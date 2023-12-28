
'use strict'

import { createInterface } from './init.js'

// <<-FUNCTION->>
export function getDataFrom(url) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = () => {
        if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200)
            createInterface(ajax.responseText);
        else console.log(ajax.status);
    }

    ajax.open("GET", url, true);
    ajax.send();
}