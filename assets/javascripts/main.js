$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "HIDDEN",
        authDomain: "HIDDEN",
        databaseURL: "HIDDEN",
        projectId: "HIDDEN",
        storageBucket: "HIDDEN",
        messagingSenderId: "HIDDEN"
    };
    firebase.initializeApp(config);

    var db = firebase.database();
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
//CONSTRUCTOR FUNCTIONS MODULE:

    //Catering Order Constructor
    var ctrObj = function(name, email, tel, loc, time, guests, message){
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.loc = loc;
        this.time = time;
        this.guests = guests;
        this.message = message;

    };

    //Construct Loyalty Member function:
        var Members = function (emailAdd){
            this.emailAdd = emailAdd;
        };

    //Franchise Opportunity Info Constructor
    var franObj = function(name, email, tel, message){
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.message = message;

    };
/* --------------------------------------------------------------------------------------------------------------------------------------------- */



    //Invoke modal
    $(".cateringBtn").click(function(){
        $("#myModal").modal();
    });

    //Invoke franModal
    $("#franInfo").click(function(){
        $("#franModal").modal();
    });

/* --------------------------------------------------------------------------------------------------------------------------------------------- */
    //CREATE MODULE:
        //onClick Catering Button event listener
        $(document).on('click','#cateringSubmit', function(){
            //user feedback
            $('#cateringSuccessMessage').append(`<h6> Your order has been sent! We will contact you within 24 hours</h6>`);
            //inheriting from Catering constructor taking user input 
            var msgBody = new ctrObj (
                $('#usrname').val().trim(),$('#email').val().trim(),
                $('#telInput').val().trim(),$('#eventLoc').val().trim(),
                $('#eventDate').val().trim(),
                $('#numGuests').val().trim(),
                $('#cateringMsg').val().trim());
            //pushing Object to NoSQL DB
            db.ref('/orders/').push(msgBody);
        });

    // LOYALTY PROGRAM: Upon clicking the 'join' button db will be updated with the new user sign up email address
    //onClick Join Button event listener
        $('#joinBtn').on('click', function(e){
            e.preventDefault();
            var getEmailAdd = $('#loyalEmail').val().trim(' ');

                // if successfull display the user email has been add to our loyalty program.
                if (getEmailAdd == "" || getEmailAdd == undefined || getEmailAdd == " ") {
                    $('#successMsg').text('Please enter a valid email address!');
                } else {
                    var newSignUp = new Members (getEmailAdd);
                    //Update DB with new member email address
                    db.ref('/users/').push(newSignUp);
                    //Display success message
                    $('#successMsg').text(`Thank You! Your email address: ${getEmailAdd} has been added to our loyalty program`)
                }
            //empty the input
            $('#loyalEmail').val('');
        });

        //onClick Franchise Inquiry Send Button evetn listener
        $(document).on('click','#franSubmit', function(){
            //inheriting from Franchise Opportunity constructor reading user input 
            var franMsgBody = new franObj ($('#franName').val().trim(),$('#franEmail').val().trim(),$('#franTelInput').val().trim(),$('#franMessage').val().trim());
            //pushing Object to NoSql DB
            db.ref('/franchiseInq/').push(franMsgBody);
        });
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
//READ MODULE:
    //CONTACT US
    // on Click event => update the location's relative address | hours 

    $(document).on('click', '#locations', function(event){
        event.preventDefault;
        console.log($(this).val());
        if($(this).val() === 'Halal5 W. Bellfort Truck'){
            $('#contactInfo').html(`
            <h2 id="contactHeader">Come See Us</h2>
            <h4>
            10714 West Bellfort St.<br>
            Houston, Texas 77099<br>
            </h4>
            <h4><span class="glyphicon glyphicon-phone"></span> 832.617.7817</h4>
            <h4><a href="mailto:info@halal5.com?subject=Question&body=Hi!"><span class="glyphicon glyphicon-envelope"></span> info@halal5.com</a></h4>
            <h4><a href="#franchise"><span class="glyphicon glyphicon-globe"></span> Franchise Info.</a></h4>
            <h4><span class="glyphicon glyphicon-time"></span> Hours<br><h5>Sunday - Saturday: 11AM - 12AM</h5></h4>
            `);
        }else if ($(this).val() === 'Halal5 Restaurant') {
                $('#contactInfo').html(`
                <h2 id="contactHeader">Come See Us</h2>
                <h4>
                3730-B S Gessner Rd<br>
                Houston, Texas 77063<br>
                </h4>
                <h4><span class="glyphicon glyphicon-phone"></span> 281.974.3918</h4>
                <h4><a href="mailto:info@halal5.com?subject=Question&body=Hi!"><span class="glyphicon glyphicon-envelope"></span> info@halal5.com</a></h4>
                <h4><a href="#franchise"><span class="glyphicon glyphicon-globe"></span> Franchise Info.</a></h4>
                <h4><span class="glyphicon glyphicon-time"></span> Hours<br><h5>Monday - Saturday: 11AM - 10PM | Sunday: Closed</h5></h4>
            `);
        } else if ($(this).val() === 'Halal5 Harwin Truck'){
            $('#contactInfo').html(`
            <h2 id="contactHeader">Come See Us</h2>
            <h4>
            6820 Harwin Dr.<br>
            Houston, Texas 77063<br>
            </h4>
            <h4><span class="glyphicon glyphicon-phone"></span> 713.998.0837</h4>
            <h4><a href="mailto:info@halal5.com?subject=Question&body=Hi!"><span class="glyphicon glyphicon-envelope"></span> info@halal5.com</a></h4>
            <h4><a href="#franchise"><span class="glyphicon glyphicon-globe"></span> Franchise Info.</a></h4>
            <h4><span class="glyphicon glyphicon-time"></span> Hours<br><h5>Sunday - Saturday: 11AM - 12AM</h5></h4>
            `);
        }
    });
//PRESENTATION MODULE:
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
    //backstretch.js enables background to maintain its resolution dynamically on all viewport
    $.backstretch('assets/images/events/basant.jpg');

    //scrollMagic.js allows elements to animate triggered by scroll position to have best UX. 
        if ($(window).width() >= 768) {
            var controller = new ScrollMagic.Controller();
            //Logo will fadeIn on page load
            var logo = new ScrollMagic.Scene({
                triggerElement: '#intro h1',
                triggerHook: 1,
                reverse: false,
            })
                .setClassToggle('#intro','fade-in')
                .addTo(controller);
            //abousUs section will fade in when the scroll position hits #aboutUs element
            var aboutUs = new ScrollMagic.Scene({
                triggerElement: '#aboutUs',
                triggerHook: 1,
                reverse: false,
            })
                .setClassToggle('#aboutUs','fade-in')
                .addTo(controller);
            //menu section will fade in when the scroll position hits #menuContent element    
            var menu = new ScrollMagic.Scene({
                triggerElement: '#menuContent',
                triggerHook: 1,
                reverse: false,
            })
                .setClassToggle('#menu','fade-in')
                .addTo(controller);
            //on tablets/smartphones animation won't display
        }else if ($(window).width() < 768) {
            $('#intro').css('opacity','1');
            $('#aboutUs').css('opacity', '1');
            $('#menu').css('opacity', '1');
        }
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
//END
});