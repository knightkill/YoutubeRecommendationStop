
document.addEventListener("DOMSubtreeModified",function(){
    var allColumns = document.getElementsByTagName("ytd-item-section-renderer");

    for(var i = 0;i< allColumns.length;i++){
        var title = allColumns.item(i).querySelector("#title-annotation");
        if(title!=null && title.textContent.includes("Recommended")){
            allColumns.item(i).remove();
        }
    }
});

