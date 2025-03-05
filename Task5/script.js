const container = document.querySelector('#data-container');
const loadingIndicator = document.querySelector('#loading');

let page = 1;
let isLoading = false;

// First FetchData from API
const fetchData = async(page) =>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);

        if(!response.ok){throw new Error("Failed to fetched Data");}
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log("Error:"+error);
        return [];
    }
}

// How data we shown in the container
const renderData = (items) =>{
    items.forEach(item =>{
        const div = document.createElement('div');
        div.className = 'data-item';
        div.innerHTML = `<h3>${item.id}. ${item.title}</h3> <p>${item.body}</p>`;
        container.appendChild(div);
    })
}

// Get moreData from the API
const loadMoreData = async() =>{
    if(isLoading) return;
    isLoading = true;
    loadingIndicator.style.display = 'block';

    const data = await fetchData(page);
    renderData(data);

    if(data.length > 0 ) page++;
    loadingIndicator.style.display = 'none';
    isLoading = false;

}

// Here AddEventListener on windows
window.addEventListener('scroll',() =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight -50 ){
        loadMoreData();
    }
})

// Initial Data load
loadMoreData();

