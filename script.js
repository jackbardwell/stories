/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

let btn = document.getElementsByClassName('btn')[0];
        btn.addEventListener('click', () => {
            if (btn.dataset.visible == 'false') {
                document.body.classList.add('white');
                btn.dataset.visible ='true';
              
            } else {
                document.body.classList.remove('white');
              btn.dataset.visible = 'false';
            }
        });




