function myFunction() {
    // Declare variables
    var input, filter, pictureName, a, i, txtValue;
    input = document.getElementsByClassName('search-gallery');
    filter = input.value.toLowerCase();
    a = document.getElementsByTagName('a');
    pictureName = a.querySelectorAll('data-search');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      j = pictureName[i];
      txtValue = j.textContent || j.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        j[i].style.display = "";
      } else {
        j[i].style.display = "none";
      }
    }
  }