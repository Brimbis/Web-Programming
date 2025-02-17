document.getElementById("fetchUsers").addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let userList = document.getElementById("userList");
        userList.innerHTML="";

        data.forEach(user => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${user.username}</strong>`;
            userList.appendChild(li);
        });
    })
    .catch(error => console.error("Error fetching data: ", error));
});

document.getElementById("fetchCompany").addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let userList = document.getElementById("companyList");
        userList.innerHTML="";

        data.forEach(user => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${user.company.name}</strong> - ${user.company.catchPhrase}`;
            userList.appendChild(li);
        });
    })
    .catch(error => console.error("Error fetching data: ", error));
});