function check_message(message_element_name,message_error_element_name){
    message = document.getElementById(message_element_name);
    message_error = document.getElementById(message_error_element_name);
    if (message.value == ""){
        message_error.innerHTML = "The message is empty!";
        message_error.className = "error_message_visible";
        return false;
    }else if (String(message.value).length > 100){
        message_error.innerHTML = "The message exceeds the 100 characters!";
        message_error.className = "error_message_visible";
        return false;
    }
    else{
        message_error.className = "error_message_hiden";
        return true;
    }
}

function check_for_empty(element_name,error_elemet_name,visible_class,hiden_class){
    obg = document.getElementById(element_name)
    error = document.getElementById(error_elemet_name);
    if (obg.value == ""){
        error.className = visible_class;
        return false;
    }
    else{
        error.className = hiden_class;
        return true;
    }
}

$(".contact-form").on('submit',function(event) {
    event.preventDefault();

    //  Όλα τα πεδία να συμπληρωθούν υποχρεωτικά για να μπορέσει ο χρήστης να στείλει το μήνυμα. Αν κάποιο πεδίο δεν έχει συμπληρωθεί τότε να εμφανίζεται μήνυμα.
    var ok_email = check_for_empty("email_user","email_error","error_message_visible","error_message_hiden");
    var ok_name = check_for_empty("user_name","name_error","error_message_visible","error_message_hiden");

    // To πεδίο του μηνύματος να μην υπερβαίνει τους 100 χαρακτήρες. Όταν τους υπερβεί τότε να εμφανίζεται μήνυμα
    var ok_message = check_message("message","message_error");

    //  Όταν πατηθεί το κουμπί της αποστολή τότε να εξαφανίζεται η φόρμα και στην θέση της να εμφανίζεται το μήνυμα "Το μήνυμα σας στάλθηκε με επιτυχία".
    //! Na bgenei omorfo mhnhma otan kanw submit
    if(ok_email && ok_name && ok_message){
        document.getElementById("contact-form").className = "error_message_hiden"
    }
    alert("Message send successfully!")
});

$("#email_user").on('change',function() {
    check_for_empty("email_user","email_error","error_message_visible","error_message_hiden");
});

$("#user_name").on('change',function() {
    check_for_empty("user_name","name_error","error_message_visible","error_message_hiden");

});

$("#message").on('change',function() {
    check_message("message","message_error");
});
