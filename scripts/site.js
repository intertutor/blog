
show(0);
fillAside();

function show(num) {
    document.querySelector("section").innerHTML="<h2>"+blogs[num].title+"</h2><h3> - "+blogs[num].summary+"</h3><div>"+insertParas(blogs[num].post)+"</div>";    
}
function fillAside() {
    var temp=[];
    for (var i=1; i < blogs.length; i++) {
      temp.push("<li data-post='"+ i +"' onclick='show("+i+")'>"+blogs[i].title+"</li>");
    }
    document.querySelector("aside").innerHTML=temp.join("<br>");
}

function insertParas(blog) {
    return "<p>"+blog.replace("|","</p><p>") + "</p>";
}