let randomNumber = parseInt(Math.random() * 100 + 1);

let usr_guess_input = document.querySelector('#usr-input-box');
let usr_submit_btn = document.querySelector('#usr-submit-btn');

let usr_previous_guess_number = document.querySelector('.usr-guess-number');
let usr_remains_chance = document.querySelector('.usr-remains-guess');

let usr_display_message = document.querySelector('.low-and-high-value-message');
let bottom_end_result = document.querySelector('.bottom-end');

let start_new_game = document.createElement('p');



let usr_guess_value = [];
let usr_remain_count = 1;
let play_game = true;

if(play_game) {
    usr_submit_btn.addEventListener('click', function(move) {
        move.preventDefault();
        const usr_input_guess_value = parseInt(usr_guess_input.value);
        console.log(usr_input_guess_value);
        check_guess_validation(usr_input_guess_value);
    });
}


function check_guess_validation(usr_input_guess_value){
    if(isNaN(usr_input_guess_value)){
        alert('please Enter Valid Number:');
    }else if(usr_input_guess_value < 1){
        alert('please enter the more than zero:');
    }else if(usr_input_guess_value >100){
        alert('please Enter Below value under the 100:');
    }else{
        usr_guess_value.push(usr_input_guess_value)
        if(usr_remain_count ===10){
            display_guess(usr_input_guess_value);
            screen_message(`Oops game over! random number was <span style="color: red;">${randomNumber}</span>`);
            end_game();
        }else{
            display_guess(usr_input_guess_value);
            check_guess(usr_input_guess_value);
        }
    }
};

function check_guess(usr_input_guess_value) {
    if (usr_input_guess_value === randomNumber) {
        screen_message('Number is match, Now you are win:')
        end_game();
        
    }else if(usr_input_guess_value <randomNumber){
        screen_message('Oops number is too low:')
    }else if(usr_input_guess_value >randomNumber){
        screen_message('Oops number is too high:')
    }
    
};

function display_guess(usr_input_guess_value){
    usr_guess_input.value = '';
    usr_previous_guess_number.innerHTML +=`${usr_input_guess_value},`;
    usr_remain_count++;
    usr_remains_chance.innerHTML = `<p>You have only chance</P> ${11 - usr_remain_count}`;
}


function screen_message(message) {
    usr_display_message.innerHTML = `<h4>${message} </h4>`
    
}

function end_game(params) {
usr_guess_input.value = '';
usr_guess_input.setAttribute("disabled", " ");
start_new_game.classList.add('button');
start_new_game.innerHTML =`<h4 id='newGame'> click for Start new Game </h4>`;
bottom_end_result.appendChild(start_new_game);
new_game();

}

function new_game(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        usr_guess_value = []
        usr_remain_count = 1;
        usr_previous_guess_number.innerHTML = '';
        usr_remains_chance.innerHTML = `${11 - usr_remain_count}`;
        usr_guess_input.removeAttribute('disabled');
        bottom_end_result.removeChild(start_new_game);
        
        play_game = true;

    })


}