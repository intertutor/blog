// git push origin master

// ssh keys : https://www.youtube.com/watch?v=nQDFBd5NFA8


$(function() {
    show(0);
    fillAside();
  });

function show(num) {
    var numposts=blogs.length,
        thisPost=num;
    if (num===-1) {
        thisPost=numposts-1;
    }
     
    document.querySelector("section").innerHTML="<h2 class='bloghead'>"+blogs[thisPost].title+"</h2><h3 class='blogsummary'> - "+blogs[thisPost].summary+"</h3><div>"+insertParas(blogs[thisPost].post)+"</div>";    

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