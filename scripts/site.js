
show(0);
fillAside();

function show(num) {
    document.querySelector("section").innerHTML="<h2 class='bloghead'>"+blogs[num].title+"</h2><h3 class='blogsummary'> - "+blogs[num].summary+"</h3><div>"+insertParas(blogs[num].post)+"</div>";    
}
function fillAside() {
    var temp=["<ul>"];
    for (var i=0; i < blogs.length; i++) {
      temp.push("<li title=' - "+ blogs[i].summary +"' onclick='show("+i+")'>"+blogs[i].title+"</li>");
    }
    document.querySelector("aside").innerHTML="<h4>Previous posts</h4>"+temp.join("")+"</ul>";
}

function insertParas(blog) {
    return "<p>"+blog.replace(/\|/g,"</p><p>") + "</p>";
}