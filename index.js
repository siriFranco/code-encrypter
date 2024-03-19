function encrypt() {
    var inputText = document.getElementById("textInput").value;
    var alertPlaceHolder = document.getElementById('liveAlertPlaceholder')

    if (/[^a-z\s]/.test(inputText)) {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-warning', 'alert-dismissible');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = `
            Please enter only lowercase letters without special characters.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertPlaceHolder.innerHTML = '';
        alertPlaceHolder.appendChild(alertDiv);
        return;
    }

    var replacedText = inputText
        .replaceAll('e', 'enter')
        .replaceAll('i','imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u',"ufat");
        
    document.getElementById("showText").textContent = replacedText;

    var imgInside = document.querySelector('.img-inside');
    imgInside.style.display = 'none';

    var copyButton = document.getElementById('copyText');
    copyButton.classList.remove('d-none');
}

function decrypt() {
    var inputText = document.getElementById("textInput").value;
    var alertPlaceHolder = document.getElementById('liveAlertPlaceholder')
    
    if (/[^a-z\s]/.test(inputText)) {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-warning', 'alert-dismissible');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = `
            Por favor, ingresa solo letras minúsculas y sin caracteres raros.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertPlaceHolder.innerHTML = '';
        alertPlaceHolder.appendChild(alertDiv);
        return;
    }
    var replacedText = inputText
        .replaceAll('enter', 'e')
        .replaceAll('imes','i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat',"u");
    document.getElementById("showText").textContent = replacedText;
}

// Function to copy text encrypt/decrypt
function copyText() {
    let textCopied = document.getElementById('showText');
    let button = document.getElementById('copyText');

    navigator.clipboard.writeText(textCopied.textContent);
    button.textContent = 'Copied';
}