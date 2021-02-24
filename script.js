let btnNode = document.querySelector('.request-btn');
let resultNode = document.querySelector('.result');
let valueNode1 = document.querySelector('.input1');
let valueNode2 = document.querySelector('.input2');

btnNode.addEventListener('click', () => {
    let width = +valueNode1.value;
    let height = +valueNode2.value;
    if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
        fetch(`https://picsum.photos/${width}/${height}`)
            .then((response) => {
                const result = `
                    <div class="card">
                        <img src=${response.url} class="card-image"/>
                    </div>
                `;
                resultNode.innerHTML = result;
            })
            .catch(() => {
                console.log('error');
            });
    } else {
        resultNode.innerHTML = 'a number is out of range 100 - 300';
    }
});