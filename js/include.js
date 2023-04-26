function includeHTML(){
    let z, elmnt, file, xhttp;
 
    z = document.getElementsByTagName("*");
    
    for (let i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("data-include");
      
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("data-include");
            includeHTML();
          }//if
        }//onreadystatechange
 
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }//if - file
    }//for

// JavaScript Document
 


$("document").ready(function(){
  const $hamburger = $(".hamburger");

  const $list = $(".header .nav > ul > li");
  const $m_list = $(".m-nav > ul > li");
  $m_list.click(function(){
    let i = $(this).index();
    console.log($m_list.eq(i).find("ul").css("height"), $m_list.eq(i).find("ul").css("height", ($(this).find("ul li").length*50)+"px"))
    if(i == 0 || i == 5 || i == 1 || i == 4){
      if($m_list.eq(i).find("ul").css("height") > "0px"){
        $m_list.find("ul").css("height", "")
      }else{
        $m_list.find("ul").css("height", "")
        $m_list.eq(i).find("ul").css("height", ($m_list.eq(i).find("ul li").length*50)+"px")
      }
    }
  })
  $list.mouseover(function(){
    let i = $(this).index();
      $list.eq(i).find("ul").css("height", ($(this).find("ul li").length*50)+"px")
    console.log($(this).find("ul li").length)
  }).mouseout(function(){
    $list.find("ul").css("height", "")
  })
  $hamburger.click(function(){
    $(this).toggleClass("on")
    $(".m-nav").toggleClass("on")
  })
  
})

}
 
/* ✨ 실행 */
window.addEventListener('DOMContentLoaded',()=>{
    includeHTML();
});
