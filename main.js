const search = ()=>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");//returns all elements that match CSS selectors
    const prodName = storeItems.getElementsByTagName("h2");



    for (var i=0;i <prodName.length ;i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else {
                product[i].style.display ="none";
            }
        }

    }
}