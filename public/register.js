
jQuery('#frm2').validate({
    rules: {
        name: 'required',
        username:'required',
        email:'required',
        password: {
            required: true,
            minlength: 5
        }

    }, messages: {
        name: 'Enter you name',
        username:'Set a username',
        email:'Enter a valid email',
        password: {
            required: 'Please enter your password',
            minlength: 'Password too small'
        }
    }
});
