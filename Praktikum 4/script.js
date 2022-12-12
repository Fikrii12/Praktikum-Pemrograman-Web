if(localStorage.getItem('theme') == 'dark')
    setDarkMode(true) 
function setDarkMode(isDark){
    document.body.classList.toggle('darkmode')
    if (isDark){
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.removeItem('theme')
    }
}