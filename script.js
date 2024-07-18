// Function to encrypt text
function encrypt() {
    const shift = parseInt(document.getElementById('shift').value);
    const plaintext = document.getElementById('plaintext').value.toUpperCase();
    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // A-Z
            let encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
            ciphertext += String.fromCharCode(encryptedCharCode);
        } else {
            ciphertext += plaintext[i]; // Keep non-alphabet characters unchanged
        }
    }

    document.getElementById('result').value = ciphertext;
}

// Function to decrypt text
function decrypt() {
    const shift = parseInt(document.getElementById('shift').value);
    const ciphertext = document.getElementById('plaintext').value.toUpperCase();
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // A-Z
            let decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
            plaintext += String.fromCharCode(decryptedCharCode);
        } else {
            plaintext += ciphertext[i]; // Keep non-alphabet characters unchanged
        }
    }

    document.getElementById('result').value = plaintext;
}
