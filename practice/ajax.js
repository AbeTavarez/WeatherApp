//* ====================== GET

// const http = new XMLHttpRequest();


// const url = `https://jsonplaceholder.typicode.com/todos`;

// const method = `GET`;

// http.open(method, url);
// http.onreadystatechange = () => {
//     if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
//         console.log(JSON.parse(http.responseText));
//     } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//         console.log(`error`);
//     }
// };

// http.send();

//* ====================== POST

const http = new XMLHttpRequest();

const url = `https://jsonplaceholder.typicode.com/posts`;

const method = `POST`;

const data = `title=MY%20Post%20Title&body=My%20Post%20Body`;

http.open(method, url);

http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

http.onreadystatechange = () => {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
        console.log(`error`);
    }
};

http.send(data);