console.log('Привет');

// const button = document.querySelector('.header__city-icon')
//  button.addEventListener('click', )


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



let filter = function () {
  let input = document.getElementById('filter-input');

  input.addEventListener('keyup', function () {
      let filter = input.value.toLowerCase(),
          filterElements = document.querySelectorAll('#filter-list li');

      filterElements.forEach(item => {
          if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
              item.style.display = '';
          } else {
              item.style.display = 'none';
          }
      })

  })

};

filter();

