// Main function
function validationCheck(fullName, email, phone){

    if( !isfullNameValid(fullName) ){
        alert('Not valid full name!');
        return false;
    }
    else if( !isMailValid(email) ){
        alert('Not valid email address!');
        return false;
    }
    else if( !isPhoneValid(phone) ){
        alert('Not valid phone!');
        return false;
    }
    else return true;
}

// Full name
function isfullNameValid(fullName){

    // if empty
    if( fullName == '' ) return false;
    
    // if contains numbers
    for( let i = 0 ; i < fullName.length ; i++ ){
        if ( !((fullName.charAt(i).toUpperCase() >= 'A' && fullName.charAt(i).toUpperCase() <= 'Z') || fullName.charAt(i).toUpperCase() == ' ')) return false;
    }

    // if valid
    return true;
}

// Mail
function isMailValid(email){
    
    // if empty
    if( email == '' ) return false;

    // if no @ or .
    if( email.indexOf('@') == -1 || email.indexOf('.') == -1) return false;

    // if no chars before @ or after
    if( email.indexOf('@') == 0 || email.indexOf('@') == (email.length - 1) || email.indexOf('.') == (email.length - 1)) return false;

    // at lease one letter before
    if( (email.substring( email.indexOf('@') + 1, email.indexOf('.')).length == 0)) return false;

    // at least two letters after .
    if( email.substring( email.indexOf('.')).length < 3) return false;

    // if valid
    return true;

}

// Phone
function isPhoneValid(phone){

    // if empty
    if( phone == '' ) return false;

    // if less then 9 charachters
    if( phone.length < 9 ) return false;

    // if not numbers
    for( let i = 0 ; i < phone.length ; i++ ){
        if( !(phone.charAt(i) >= 0 && phone.charAt(i) <= 9)) return false;
    }

    // if valid
    return true;
}