const $FORM       = document.getElementById('form'),
      $INPUTS     = document.querySelectorAll('#form input'),
      EXPRESSIONS = {
        names: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      },
      fields = {
        names: false,
        email: false
      }

const formValidation = e =>{
    switch(e.target.name){
        case 'names':
            fieldValidation(EXPRESSIONS.names, e.target, 'names')
        break
        case 'email':
            fieldValidation(EXPRESSIONS.email, e.target, 'email')
        break
    }
}

const fieldValidation = (expression, input, field)=>{
    if(expression.test(input.value)){
        document.getElementById(`${field}`).classList.add('is-valid')
        document.getElementById(`${field}`).classList.remove('is-invalid')
        fields[field] = true
    }else{
        document.getElementById(`${field}`).classList.add('is-invalid')
        document.getElementById(`${field}`).classList.remove('is-valid')
    }
}

$INPUTS.forEach(input =>{
    input.addEventListener('keyup', formValidation)
    input.addEventListener('blur', formValidation)
})

$FORM.addEventListener('submit', e => {
    e.defaultPrevented()

    if(fields.names && fields.email){
        $FORM.reset()
    }
})

