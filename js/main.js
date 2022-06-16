function  Check(e){
    let el = document.getElementById(e)
    let search = document.getElementById("search").parentNode
    let submit = document.getElementById("Submit")
    if(e.includes("char")) {
        let tmp =  document.getElementById("str")
        tmp.removeAttribute("checked")
        el.setAttribute("checked", "")
        search.style.display = 'none'
        submit.removeAttribute("onclick")
        submit.setAttribute("onclick", "SearchChar()")
    }else{
        let tmp = document.getElementById("char")
        tmp.removeAttribute("checked")
        el.setAttribute("checked", "")
        search.style.display = ''
        submit.removeAttribute("onclick")
        submit.setAttribute("onclick", "SearchStr()")
    }
}