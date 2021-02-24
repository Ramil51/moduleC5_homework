function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    // server response handler
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Response status: ', xhr.status);
        } else {
            let result = JSON.parse(xhr.response);
            console.log('Result: ', result);
            if (callback) {
                callback(result);
            }
        }
    };

    // loading process handler
    xhr.onprogress = function (event) {
        console.log(`Loaded ${event.loaded} of ${event.total} bytes`);
    };

    // error handler
    xhr.onerror = function () {
        console.log('Error! Response status: ', xhr.status);
    };

    xhr.send();
};

let btnNode = document.querySelector('.request-btn');
let resultNode = document.querySelector('.result');
let valueNode = document.querySelector('.input');

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img src="${item.download_url}" class="card-image"/>
                <p>${item.author}</p>
            </div>
        `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
};

btnNode.addEventListener('click', () => {
    let value = +valueNode.value;
    if (value >= 1 && value <= 10) {
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
    } else {
        resultNode.innerHTML = 'a number is out of range 1 - 10';
    }
});