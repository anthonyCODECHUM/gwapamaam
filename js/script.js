const applyCaesarCipher = (text, shift) => {
    return text.replace(/[a-zA-Z]/g, (char) => {
        const isUpperCase = char === char.toUpperCase();
        const code = char.charCodeAt(0);
        const shiftedCode = (code - (isUpperCase ? 65 : 97) + shift + 26) % 26 + (isUpperCase ? 65 : 97);
        return String.fromCharCode(shiftedCode);

        
    });
};

const encrypt = () => {
    const inputText = document.getElementById('inputText').value;
    const encryptionKey = parseInt(document.getElementById('encryptionKey').value);
    const encryptedText = applyCaesarCipher(inputText, encryptionKey);
    document.getElementById('outputText').value = `${encryptedText} [Key:${encryptionKey}]`;
    let audio = new Audio("/audio/en1.wav");
    audio.play();
};

const decrypt = () => {
    const encryptedTextWithKey = document.getElementById('outputText').value;
    const match = encryptedTextWithKey.match(/(.+) \[Key:(\d+)\]/);

    if (!match) {
        alert("Invalid format for decryption");
        return;
    }

    const encryptedText = match[1];
    const encryptionKey = parseInt(match[2]);

    const decryptedText = applyCaesarCipher(encryptedText, -encryptionKey);

    document.getElementById('inputText').value = decryptedText;
    document.getElementById('outputText').value = decryptedText; 
    let audio = new Audio("/audio/dec1.wav");
    audio.play();
};





let play = document.getElementById("inputText");
play.addEventListener("click", () => playInputSound());

const playInputSound = () => {
    let audio = new Audio("/audio/user1.wav");
    audio.play();
};

let key = document.getElementById("encryptionKey");
key.addEventListener("click", () => playKeySound());

const playKeySound = () => {
    let audio = new Audio("/audio/en.wav");
    audio.play();
};
