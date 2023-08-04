var cl = console.log ;  //first class function(FCF)

//When API Call then Javascript behave Asynchronous.

let apiUrl = `https://jsonplaceholder.typicode.com/posts`; 

function fetchProductInfo(){
   setTimeout(() =>{
      //we are fetching data from DB >> HTTP
      let error = false;
      if(error){
         alert(`Something went wrong  !!!`)
      }else{
         cl(`Data is fetched from DB`); //Here we get data
        let prodId = 123;
      }
      getProductStatus(prodId);
   },3000)
}

function getProductStatus(id){
   setTimeout(() => {
      //API Call
      let error = false;
      if(error){
         alert("Somthing went wrong with Product Id")
      }else{
         alert(`Product with id ${id} :: Out of Stock`)
      }
   }, 3000);
   
}

function templating(){
   cl(`Templating is DOne !!!`)
}
fetchProductInfo();