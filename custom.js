let navBar = document.querySelector('.site-navbar.bg-light');
let navItems = document.querySelector('#navbar-nav');

function navChng(){

    let scrolled = this.window.scrollY;

    console.log(scrolled);

    if(this.scrollY>100){
        navBar.setAttribute('style', 'border-bottom: 1px solid #bac964; background:#fff !important;');
        navItems.classList.add('active');
    }
    else{
        navBar.setAttribute('style', 'border-bottom:none; background:none;');
        navItems.classList.remove('active');
    }
};

function contentMove(){

    var reveals = this.document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){

       var windowheight = this.window.innerHeight;
       var revealtop = reveals[i].getBoundingClientRect().top;
       var revealpoint = 90;

       if(revealtop < windowheight - revealpoint){

        reveals[i].classList.add('active');

       }else{

        reveals[i].classList.remove('active');

       }

    }

};

window.addEventListener('scroll', function(){

    navChng();
    contentMove();

});

window.addEventListener('load',function(){

    navChng();
    contentMove();
    
});



let app = Vue.createApp({
    data: function(){
        return{
            activeClass: "all",
        };
    },
    methods: {
        setClass(className) {
            this.activeClass = className;
        }
    }
}); 

app.mount("#app");

let app1 = Vue.createApp({
    data: function(){
        return{

            commentDocuments: [
                {
                    pesonPhoto: 'images/xperson_1.jpg',
                    personName: 'Ethan McCown, CEO',
                    personCommenst: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live in Bookmarksgrove right atthe coast of the Semantics, a large language ocean."
                },
                {
                    pesonPhoto: 'images/xperson_2.jpg',
                    personName: 'Ethan McCown, CEO',
                    personCommenst: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live in Bookmarksgrove right atthe coast of the Semantics, a large language ocean."
                },
                {
                    pesonPhoto: 'images/xperson_3.jpg',
                    personName: 'Ethan McCown, CEO',
                    personCommenst: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live in Bookmarksgrove right atthe coast of the Semantics, a large language ocean."
                },
                {
                    pesonPhoto: 'images/xperson_4.jpg',
                    personName: 'Ethan McCown, CEO',
                    personCommenst: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live in Bookmarksgrove right atthe coast of the Semantics, a large language ocean."
                }
                
            ],

            newDocuments: {
                
                pesonPhoto: 'images/xperson_1.jpg',
                personName: '',
                personCommenst: ''
            }
   
        };
    },
    
    methods: {

        addComment(){
            this.commentDocuments.push(this.newDocuments);
            this.newDocuments={ pesonPhoto: 'images/xperson_2.jpg',
            personName: '',
            personCommenst: ''
           }
        }
    }
}); 


app1.mount("#app-1");

let app2 = Vue.createApp({
    data: function(){
        return{
            name: "",
            email: "",
            phone: "",
        };
    },
    methods: {

        validation(){

            if(this.name == ""){
                document.querySelector('.warningName').innerHTML = " *** Please fill You Name.";
                return false;
            }else if(this.email == ""){
                document.querySelector('.warningEmail').innerHTML = " *** Please fill the email adress.";
                return false;
            }else if(this.phone == ""){
                document.querySelector('.warningNum').innerHTML = " *** Please fill You Name."; 
                return false;
            }else if (isNaN(this.phone)){
                document.querySelector('.warningNum').innerHTML = " *** Only number are allowed.";
                return false;
            }else if (this.phone.length !== 11) {
                document.querySelector('.warningNum').innerHTML = " *** your phone number should 11 digit.";
                return false;
            }else{
                document.querySelector('.warningName').innerHTML = "";
                document.querySelector('.warningEmail').innerHTML = ""; 
                document.querySelector('.warningNum').innerHTML = ""; 
            }

        }
 
    }
});

app2.mount("#app-2");


/*

app1.component(commentForm, {

    props: {
        cart: {
            type:"array",
            requere: 'true'
        }
    }
    tamplete:{

    }
});

*/