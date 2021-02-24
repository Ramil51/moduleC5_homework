let btnNode = document.querySelector('.request-btn');
let resultNode = document.querySelector('.result');
let valueNode1 = document.querySelector('.input1');
let valueNode2 = document.querySelector('.input2');

function useRequest(page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            result = response.json();
            return result;
        })
        .then((data) => {
            localStorage.setItem('myJSON', JSON.stringify(data));
            displayResult(data);
        })
        .catch(() => {
            console.log('error');
        });
}

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
    let page = +valueNode1.value;
    let limit = +valueNode2.value;
    if (page >= 1 && page <= 10 && limit >= 1 && limit <= 10) {
        useRequest(page, limit);
    } else if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
        resultNode.innerHTML = 'a page number and page limit is out of range 1 - 10';
    } else if (limit < 1 || limit > 10 || isNaN(limit)) {
        resultNode.innerHTML = 'a page limit is out of range 1 - 10';
    } else {
        resultNode.innerHTML = 'a page number is out of range 1 - 10';
    }
});

const myJSON = localStorage.getItem('myJSON');
if (myJSON) {
    console.log('localStorage JSON saved', myJSON);
    displayResult(JSON.parse(myJSON));
}