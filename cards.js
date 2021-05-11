const container=document.querySelector('.row');

const renderPosts=async()=>{
    let uri='http://localhost:3000/posts';

    const res=await fetch(uri);
    const posts=await res.json();
    console.log(posts);

       let template='';
       posts.forEach(post=>{
           template+=`
           <div class="card" style="width: 18rem;">
                <img src="${post.pic}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.Text}</p>
                  <a href="http://www.kuchewar.com/apjabdulkalam/drabjabdhulkalam.php" class="btn btn-primary">Read More</a>
                </div>
              </div>
           `
       })

       container.innerHTML=template;
}
window.addEventListener('DOMContentLoaded',()=>renderPosts())