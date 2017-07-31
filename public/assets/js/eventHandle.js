$(document).ready(function() {

    // handles the UI button hover for login/Signup event index page. 
    $('.navLabel').hover(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).find('.icon').toggleClass("iconDown");
    });

// handles the UI button hover for login/Signup event modals.
    $('.modalBtn').hover(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).find('.modalIcon').toggleClass('iconRight');
    });

    // handles Modal forms for either sign in or sign up events
    $('.navContainer').on('click', '.signInBtn', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.signInModal').show();
    });

    $('.navContainer').on('click', '.signUpBtn', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('clicking signUp')
        $('.signUpModal').show();
    });

    // handles Modal appearance for form exit
    $('.modalDisplay').on('click', '.xClose, .btn-SignUp', function(e) {
        e.preventDefault
        e.stopPropagation
        $('.signInModal, .signUpModal').hide();

    });
    // handles login submit on modal to displays login message (upper right of index-page)
    $('.modalForm').on('click', '.btn-LogIn', function(e) {
        $('.navContainer').hide();
        $('.logContainer').addClass('display');
    });


    // handles sign-up submit from modal form
    $('.logContainer').on('click', '#btnLogout', function(e) {
        $('.navContainer').show();
        $('.logContainer').removeClass('display');
    });
}); // on document ready closing


//============================================================================
//========== just another way to handle modal appearence event. ==============

    // $('.signInBtn').on('click', function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     // console.log('clicking');
    //     $('.signInModal').toggleClass('modalDisplay');
    // });

    // $('.signUpBtn').on('click', function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     $('.signUpModal').toggleClass('modalDisplay');
    // });