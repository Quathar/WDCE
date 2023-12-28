import { createInterface }    from './init.js';
import { allowUploadArchive } from './init-archive.js'; 
import { getDataFrom }        from './init-url.js';
import { CSV }                from './resources.js'
import { URL }                from './resources.js'

// <<-CONSTANT->>
// You can change the value if you want to init in another mode
const INIT_TYPE = 0;

// <<-FUNCTIONS->>
window.onload = function() {
    switch (INIT_TYPE) {
        case 0:
            createInterface(CSV);
            break;
        case 1:
            allowUploadArchive();
            break;
        case 2:
            getDataFrom(URL);
            break;
        default: alert('Bad Init type');
    }
};
