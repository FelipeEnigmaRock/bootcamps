const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catImg = document.getElementById('cat');
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    
    const data = await fetch(BASE_URL);
    const json = await data.json();
    
    return json.webpurl;
   
};

const loadImg = async () => {
	catImg.src = await getCats();
};



catBtn.addEventListener('click', loadImg);

loadImg();

