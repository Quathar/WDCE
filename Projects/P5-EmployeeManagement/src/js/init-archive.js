
'use strict'

import { createInterface } from './init.js'

// <<-CONSTANT->>
const UPLOAD_ARCHIVE_ID = 'upload-archive';

// <<-FIELD->>
let file;

// <<-FUNCTION->>
export function allowUploadArchive() {
    // Header
    let h1 = document.createElement('h1');
    h1.textContent = 'Introduce your CSV file';

    // Input
    let input = document.createElement('input');
    input.id = 'csv-input';
    input.type = 'file';
    input.accept = '.csv';
    input.addEventListener('change', () => {
        file = input.files[0];
        let fr = new FileReader();
        fr.onload = () => createInterface(fr.result)
        fr.readAsText(file, 'utf-8');
    });

    // Add to the document
    document.getElementById(UPLOAD_ARCHIVE_ID)
        .appendChild(h1)
        .appendChild(input);
}
