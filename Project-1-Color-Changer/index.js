const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(changeColor){
        console.log(changeColor)
        console.log(changeColor.target)
        if(changeColor.target.id == 'color-1'){
            body.style.backgroundColor = 'rgb(162, 103, 138)'
        }

        if(changeColor.target.id == 'color-2'){
            body.style.backgroundColor = 'rgb(77, 60, 119)'
        }

        if(changeColor.target.id =='color-3'){
            body.style.backgroundColor = 'rgb(83, 100, 147)'
        }

       if(changeColor.target.id == 'color-4'){
        body.style.backgroundColor = 'rgb(218, 114, 151)'
       }


    })
})