
const tbdy = document.querySelector('tbody');
const [namE, coursE] = document.querySelectorAll('input');
const frm = document.querySelector('form');

let x = 0;
let b = true;
let b1 = null;

frm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (b) add();
    else add1(b1);
})

function add() {
    let obj = { name: namE.value, course: coursE.value }
    sessionStorage.setItem(String(x), JSON.stringify(obj));
    let e = JSON.parse(sessionStorage.getItem(String(x)));
    tbdy.innerHTML = tbdy.innerHTML + `<tr>
    <th>${x}</th>
    <td>${e.name}</td>
    <td>${e.course}</td>
    <td>
    <button class="btn btn-warning" onclick="update(${x})">Update</button>
    </td>
    <td>
        <button class="btn btn-danger" onclick="del(${x++})">delete</button>
    </td>
    </tr>`;
    namE.value = "";
    coursE.value = "";
}
function add1(y) {
    del(y);
    let obj = { name: namE.value, course: coursE.value }
    sessionStorage.setItem(String(y), JSON.stringify(obj));
    let e = JSON.parse(sessionStorage.getItem(String(y)));
    tbdy.innerHTML = tbdy.innerHTML + `<tr>
    <th>${y}</th>
    <td>${e.name}</td>
    <td>${e.course}</td>
    <td>
    <button class="btn btn-warning" onclick="update(${y})">Update</button>
    </td>
    <td>
        <button class="btn btn-danger" onclick="del(${y})">delete</button>
    </td>
    </tr>`;
    namE.value = "";
    coursE.value = "";
}

function update(val) {
    let e = JSON.parse(sessionStorage.getItem(String(val)));
    namE.value = e.name;
    coursE.value = e.course;
    b = false;
    b1 = val;
}

function del(val) {
    sessionStorage.removeItem(val);
    let a1 = document.querySelectorAll('tbody tr')
    let a = document.querySelectorAll('tbody th');
    a.forEach((e, i) => {
        if (e.innerText == String(val)) tbdy.removeChild(a1[i]);
    })
}