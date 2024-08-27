let btn_encrypt = document.getElementById("btn_encrypt");
let btn_decrypt = document.getElementById("btn_decrypt");
// let btn_copy = document.getElementById("btn_copy");

btn_encrypt.addEventListener("click", encrypt);
btn_decrypt.addEventListener("click", decrypt);
// btn_copy.addEventListener("click", copy);

let entered_text = document.getElementById("input_text");
let printed_text = document.getElementById("output_text");

entered_text.addEventListener("keydown", checkCharacter);

let output_encrypted = document.getElementById("output_enable");
let output_default = document.getElementById("output_default");

let warning = document.getElementById('warning');




function showOutput() {
    output_encrypted.style.display = "flex";
    output_default.style.display = "none";
}

function checkCharacter(e) {
    let character_allowed = "abcdefghijklmnñopqrstuvwxyz";
    if(e.key === 'Backspace') return;
    if(e.key === ' ') return;
    if(character_allowed.includes(e.key)) {
        warning.style.color = "var(--color-info)";
        warning.style.fontSize = "12px";
        return;
    } else {
        warning.style.color = "var(--color-highlight-info)";
        warning.style.fontSize = "24px";
        e.preventDefault();
    }
}

function encrypt() {
    showOutput();
    let userText = entered_text.value;
    let text_encrypted = "";
    for(let i=0; i<userText.length; i++) {
        if (userText[i] == "a") {
            text_encrypted += "ai";
        } else if (userText[i] == "e") {
            text_encrypted += "enter";
        } else if (userText[i] == "i") {
            text_encrypted += "imes";
        } else if (userText[i] == "o") {
            text_encrypted += "ober";
        } else if (userText[i] == "u") {
            text_encrypted += "ufat";
        } else {
            text_encrypted += userText[i];
        }
    }
    printed_text.innerHTML = text_encrypted;
}

function decrypt() {
    showOutput();
    let textEncrypted = entered_text.value;
    let text_decrypted = "";
    for(let i=0; i<textEncrypted.length; i++) {
        if (textEncrypted[i] == "a" && textEncrypted[i+1] == "i") {
            text_decrypted += "a";
            i+=1;
        } else if (textEncrypted[i] == "e" && textEncrypted[i+1] == "n" && textEncrypted[i+2] == "t" && textEncrypted[i+3] == "e" && textEncrypted[i+4] == "r") {
            text_decrypted += "e";
            i+=4;
        } else if (textEncrypted[i] == "i" && textEncrypted[i+1] == "m" && textEncrypted[i+2] == "e" && textEncrypted[i+3] == "s") {
            text_decrypted += "i";
            i+=3;
        } else if (textEncrypted[i] == "o" && textEncrypted[i+1] == "b" && textEncrypted[i+2] == "e" && textEncrypted[i+3] == "r") {
            text_decrypted += "o";
            i+=3;
        } else if (textEncrypted[i] == "u" && textEncrypted[i+1] == "f" && textEncrypted[i+2] == "a" && textEncrypted[i+3] == "t") {
            text_decrypted += "u";
            i+=3;
        } else {
            text_decrypted += textEncrypted[i];
        }
    }
    printed_text.innerHTML = text_decrypted;
}








