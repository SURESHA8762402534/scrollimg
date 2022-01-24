function imgload(){
    //alert('hi')
    let i =0;
    while(i<10){
    let img = document.createElement('img');
    img.src = `${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37d8G1q6K7kET1XOLMwKU0H3hvPhED3HSrg&usqp=CAU'}`
    img.classList.add('img')
    document.querySelector('.container').appendChild(img);
    i++;
    console.log(i)
    }
    
}

 window.addEventListener('load', imgload);
 window.addEventListener('scroll', () => {
     if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
         imgload();
     }
 })



 
// fetch("https://api.unsplash.com/photos/?client_id=${4cPAqXwaxFloyugDqWqXfmdJrJ8_lP9z3p5sJjGc5Is}")
// .then(res => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
    
// });



// console.log(fetch('https://api.unsplash.com/photos/?client_id=`${4cPAqXwaxFloyugDqWqXfmdJrJ8_lP9z3p5sJjGc5Is}`').then(res => {
//     res.json();
// }).then(data => {
//     console.log(data.message)
// })
// )

