let cl = console.log;

const postForm = document.getElementById("postForm");
const titleControl = document.getElementById("title");
const contentControl = document.getElementById("content");

let blogs =[
    {title : "Anguler 15", content : "Signals are intrdoduced in this version"},
    {title : "Anguler 16", content : "Standardalon components are added in 16"}
]

function creatPost(){
  
    setTimeout(() => {
        let error = false;
        if(!error){
            //API call to create POST in DB
            let postObj = {
                title : "ES6",
                content : "Nullish Collision"
            }
            cl(`New Post is created`)
            blogs.push(postObj)
            readBlogs();
        }else{
            cl(`Something went wrong while creating new blog post !!!`);
        }
        
    }, 3000);
}

function readBlogs(){
    // API Call to get blogpost Data from DB
    setTimeout(() => {
        let error = false;
        if(!error){
            let data = blogs;
            //templating
            cl(`Data is fetched and templting is done`,data)
            templating(data);
        }else{
            cl(`Something went wrong while fetching Post Data...!!`)
        }
        
    }, 2000);
}

function templating(arr){
    let result = ''
    arr.forEach((ele)=>{
        result +=`
        <div class="card">
            <div class="card-header">
                ${ele.title}
            </div>
            <div class="card-body">
            ${ele.content}
            </div>
      </div>
        `
        
    });
    postContainer.innerHTML = result
    templating();
}

creatPost();
// readBlogs();
