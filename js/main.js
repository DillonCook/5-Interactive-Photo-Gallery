
const searchFilter = document.querySelector(".search-gallery").addEventListener("keyup", displayImages);

    function displayImages(){
        
        let input = document.querySelector(".search-gallery").value.toLowerCase();
        let a = document.getElementsByTagName("a")
    
        for (let i = 0; i < a.length; i ++){
            let content = a[i].getAttribute("data-search").toLowerCase();
            
            if (content.includes(input)){
                a[i].style.display = '';
            } else {
                a[i].style.display = 'none';
            }
        }
    }
