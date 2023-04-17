let names = ['Alex', 'Bianca', 'Rudi'];


function showNames() {
    let list = document.getElementById('list');

    list.innerHTML = '';
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        list.innerHTML += `<li>${name}</li>`;
    }
}


function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    console.log(search);


    let list = document.getElementById('list');
    list.innerHTML = '';

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.toLowerCase().includes(search))
            list.innerHTML += `<li>${name}</li>`;
    }
}


