const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const itemsPerPage = 10;
let currentPage = 1;
let totalPage = 1;
let data = [];

const fetchData = async () => {
    try {
        const response = await fetch(apiUrl);
        data = await response.json();
        totalPage = Math.ceil(data.length / itemsPerPage);
        displayPage(currentPage);
        setUpPagination()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const displayPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemToShow = data.slice(startIndex, endIndex);

    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';

    itemToShow.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        dataList.appendChild(li);
    })

}

/* const setupPagination = () =>{
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for(let i = 1; i<= totalPage; i++){
        const pageItem = document.createElement('li');
        pageItem.textContent = i;

        if(i === currentPage) pageItem.classList.add('active');

        pageItem.addEventListener('click',() =>{
            currentPage = i;
            displayPage(currentPage);
            setupPagination();
        })

        pagination.appendChild(pageItem);
    }

} */
const setUpPagination = () => {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for(let i = 1; i<= totalPage; i++){
        const pageItems = document.createElement('li');
        pageItems.textContent = i;

        pageItems.addEventListener('click',() =>{
            currentPage = i;
            displayPage(currentPage);
            setUpPagination();
        })
        pagination.appendChild(pageItems);
    }


}
fetchData();

