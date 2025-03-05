const btn = document.getElementById('fetchData');
const getUserData = document.getElementById('getData');
const clearStorage = document.getElementById('clear');

const fetchData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    localStorage.setItem('users', JSON.stringify(data));
    console.log(data);
}

const getFethedData = async () =>{
    const data = await JSON.parse(localStorage.getItem('users'));
    data.forEach((user) =>{
        console.log(user.name);
    })
}
const clearLocalStorage = () =>{
    localStorage.clear();
    console.log('Local Storage Cleared');
}

btn.addEventListener('click', fetchData);
getUserData.addEventListener('click', getFethedData);
clearStorage.addEventListener('click',clearLocalStorage);