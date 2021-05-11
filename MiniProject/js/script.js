const { error } = require("jquery");

$('#get-blogs').on('click',()=>{
    $.ajax(
        {
            type:'Get',
            url:'http://localhost:3000/blogs',
            dataType:'json',
            async:true,
            success:(data)=>
            {
                let blog="";
                $.each(data,(index,record)=>
                {
                    blog+=
                    <div class="blog">
                        <h1>$(record.id)</h1>
                        <h1>$(record.title)</h1>
                        <h1>$(record.category)</h1>
                        <h1>$(record.content)</h1>
                    </div>;
                    });
                  $('.my-div').append(blog);
                },
                error:(err)=>
                {
                    console.log("Error"+err);
                }
            })
        });