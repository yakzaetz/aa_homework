document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);

    
    // adding SF places as list items
  
    // --- your code here!


    // class favorite-input to grab value
    // class favorite submit listen for click
    //id sf-places to append new li
    
    
    const addFavorite = (e) => {
      e.preventDefault();
      
      const favoriteInput = document.querySelector('.favorite-input');
      const favoriteInputV = favoriteInput.value;
      favoriteInputV.value = "";
      
      
      const li = document.createElement("li");
      li.textContent = favoriteInputV;
      
      const sfPlaces = document.getElementById('sf-places');
      sfPlaces.appendChild(li);
    }
  const favoritSubmit = document.querySelector('.favorite-submit');
  favoritSubmit.addEventListener("click", addFavorite);



  });





  // adding new photos

  // --- your code here!



});
