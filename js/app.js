const form = document.querySelector('form');

form.addEventListener('submit' , (e)=>{
    //alert('some text');
    form.classList.add('was-validated');
    e.preventDefault();
} );