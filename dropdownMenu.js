// Fisierul controleaza dropdown menu

// 1. adaugam clasa show-dropdown pe uL-ul din nav

// selectam ul-ul
const dropdownList = document.querySelector('.menu-icon-container ul')

// adaugam clasa show-dropdown
dropdownList.classList.add('show-dropdown');

// adaugam proprietateaq de visibility: hidden;
dropdownList.style.visibility = 'hidden';

// 2. Adaugam un event listener pe hamburger care ne va trigerui dropdownmenu si va apela o functie care ca verifica daca proprietatea visibility este hidden sau nu.

// selectam hamburger
const hamburger = document.querySelector('.material-icons');
hamburger.addEventListener('click', function (){
    console.log('click pe hamburger');
    
    // salvam proprietatile lui dropdownList intr-un obiect pentru a putea verifica valorile CSS
    const getAllStyles = getComputedStyle(dropdownList);
    
    const checkVisiblility = getAllStyles.getPropertyValue('visibility');

    if(checkVisiblility === 'hidden'){
        dropdownList.style.visibility = "visible";
    }
    if(checkVisiblility === 'visible'){
        dropdownList.style.visibility = "hidden";
    }
});