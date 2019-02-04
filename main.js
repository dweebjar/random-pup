// https://dog.ceo/api/breeds/image/random
{/* <img src="https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_9753.jpg" alt=""></img> */}

// const search = document.querySelector('#searchButton');

const loadPic = () => {
    document.querySelector('#dogPic').innerHTML = "";
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(returnJson => {
        const markup = `<img src="${returnJson.message}" alt=""></img>`;
        document.querySelector('#dogPic').innerHTML = markup;
    });
};

loadPic();
document.getElementById('searchButton').addEventListener('click', loadPic);