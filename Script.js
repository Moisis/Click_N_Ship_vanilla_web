// On Load Document

function get_header_top(){
    let right_top;

    let left_top=
    `
        <div class="header_top" >
        <div class="left_group_buttons">
        <select id="Language_Selector" DISABLED>
            <option> English </option>
            <option>Arabic</option>
        </select>
        <select id="Currency_Selector" DISABLED>
            <option> $USD </option>
            <option>EGP</option>
        </select>
        </div>

    `
    ;
    let mid_top =`
    
        <div>
        <p>
            <b>Free Shipping</b>
            Only this Week with Orders Over - $55 🔥🔥
        </p>
        </div>
    
    
    `;

         right_top=`
          <div id="Right_group_buttons"  class="Right_group_buttons">
         <button id="My_Account" >
            Account 
        </button>

        <button id="Signin_go" >
            Sign in
        </button>
        </div>    
         
         `




    return (left_top+mid_top+right_top);

}


function get_header_mid(){


    return `
     
    <div class="header_middle">
        <img src="assets/icon/Logo_grey.png" HEIGHT="100px" alt="Logo" />


        <h1><a href="index.html" > Click 'N Ship </a> </h1>

        <div class="search-container">
            <input type="text" placeholder="Search...">
            <button type="submit">
                <img src="assets/icon/search-icon.png" alt="Search Icon">
            </button>
        </div>

      <a href="Cart.html">
      <img src="assets/icon/Cart_icon.png" HEIGHT="100px"  alt="cart"/>
      </a> 
      
    </div> 

  
    `
}
function get_header_bottom(){

    return `
    
    <div class="header_bottom">
        <nav>
            <ul>
                <li><a href="index.html" >Home</a></li>
                
                <li class="Big_submenu"> 
 
                 <p>Clothings</p>   
                
               
                <ul>
                
                <li class="submenu">
                    <a href="Men_Clothing.html">Men's Clothing</a>
                    <ul>
                        <li><a href="Men_Jacket.html">Jackets</a></li>
                        <li><a href="Men_Pullovers.html">Pullovers</a></li>
                        <li><a href="Men_Trousers.html">Trousers</a></li>
                    </ul>
                </li>
                <li class="submenu">
                    <a href="Woman_Clothing.html">Women's Clothing</a>
                    <ul>
                        <li><a href="Woman_Clothing.html">Jackets</a></li>
                        <li><a href="Woman_Clothing.html">Sweaters</a></li>
                        <li><a href="Woman_Clothing.html">Pants </a></li>
                    </ul>
                </li>
                </ul>
                 </li>
            <li> 
                    <a href="about.html" >About</a>
            </li>
            </ul>
        </nav>
    </div>
    
    `

}

function get_footer(){

    return `
    
    <h2>NEED HELP ? CONTACT US ON OUR HOTLINE 19991</h2>
    <table id="footer_table">
        <thead>
            <tr>
                <th> <a href="ShoppingDetails.html" target="_self" style="text-decoration: none; color: #cccccc">SHOPPING & ORDERS</a></th>
                <th> <a class ="Hidden_link" href="about.html" target="_self" >About Us</th>
                <th>Social Media</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td onclick="Show_article(0)" style="cursor: pointer">
     
           Delivery Information
          
            </td>                
            <td><a class ="Hidden_link" href="about.html#introduction" target="_parent" >About Click 'N Ship</td>
                <td><a href="mailto:ContactUs@clicknship.com" style="text-decoration: none; color: #cccccc">Contact Us</td>
            </tr>
            <tr>
                <td onclick="Show_article(1)" style="cursor: pointer">Returns & Refund </td>
                <td><a class ="Hidden_link" href="about.html#our-story" target="_parent" >Our Story</td>
                <td></td>
            </tr>
              <tr>
                <td onclick="Show_article(2)" style="cursor: pointer">Terms & Conditions</td>
                <td><a class ="Hidden_link" href="about.html#sustainable-practices" target="_parent" >Sustainable Practices</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><a class ="Hidden_link" href="about.html#team" target="_parent" >Meet Our Team</td>
                <td></td>
            </tr>
        </tbody>
    </table>
  
    Copyright © <a href="" style="text-decoration: none ; color: #cccccc;">Click 'N Ship </a> all rights reserved to Miso.

    
    ` ;
}


window.onload = function() {


    // Writing the header on each file (or a desired page )

    if (document.getElementById('header' )  ) {
        let header_top = get_header_top()
        let header_mid = get_header_mid()
        let header_bottom = get_header_bottom()

        document.getElementById('header').innerHTML += header_top
        document.getElementById('header').innerHTML += header_mid
        document.getElementById('header').innerHTML += header_bottom


        if (sessionStorage.getItem('Current') === "true") {

            document.getElementById('My_Account').style.visibility = 'visible';
            document.getElementById('Signin_go').style.visibility = 'hidden';

        } else {

            document.getElementById('My_Account').style.visibility = 'hidden';

            document.getElementById('Signin_go').style.visibility = 'visible';

        }

// Writing the  footer on each file (or a desired page )
        document.getElementById('footer').innerHTML =  get_footer() ;
 

    }


    /// Nav for auth

    let signinButton = document.getElementById('Signin_go');

    if (signinButton) {

// Add a click event listener to the button
    signinButton.addEventListener('click', function () {
        window.location.href = 'Signup&Signin.html'
    });
    }



    let AccountButton = document.getElementById('My_Account');

    if (AccountButton) {
// Add a click event listener to the button
        AccountButton.addEventListener('click', function () {
            window.location.href = 'my_account.html'
        });

    }

    //Men

    let JacketcardsContainer = document.getElementById("MJacket_cards-container")

    if(JacketcardsContainer){
    men_jackets_list.forEach(object => {
        const card = createCard(object);
       JacketcardsContainer.appendChild(card);
    });
    }

    let Trousers_cardsContainer = document.getElementById("MTrousers_cards-container");


    if (Trousers_cardsContainer) {
        men_trousers_list.forEach(object => {
            const card = createCard(object);
            Trousers_cardsContainer.appendChild(card);
        });
    }


    let Pullovers_cardsContainer = document.getElementById("MPullovers_cards-container");


    if (Pullovers_cardsContainer) {
        men_Pullovers_list.forEach(object => {
            const card = createCard(object);
            Pullovers_cardsContainer.appendChild(card);
        });
    }



    if(document.getElementById("Product_details_img")) {
        var objectString = sessionStorage.getItem('myObject');
        var receivedObject = JSON.parse(objectString);

        console.log(receivedObject)
        // Update HTML elements Content
        document.getElementById("Product_details_img").src = receivedObject.photo_url;
        document.getElementById("Product_details_name").innerHTML = receivedObject.name;
        document.getElementById("Product_details_price").innerHTML = receivedObject.price + '$';
        document.getElementById("Product_details_description").innerHTML = receivedObject.Description;

    }



}


//Sign Out
function Signout(){
    sessionStorage.setItem('Current', "false");
    alert("Signing Out Successfully")
    window.location.href = 'index.html'
}

// Redirect
function Go_to_Product_Screen() {
    // Redirect to the receiver page
    window.location.href = 'Product_Details.html';
}

// Function to create a card
function createCard(object) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Populate card content
    card.innerHTML = `

              <img class="MJ-img" src="${object.photo_url}" height="600px" alt="${object.jacket_name}"> 
            <h6 class="MJ-name">${object.name}</h6>
            <p class="MJ-price">Price: ${object.price} USD </p>
           
        `;


    card.addEventListener("click" , function (){
        alert( "You choose " +object.name) ;
        // Convert the object to a JSON string
        var objectString = JSON.stringify(object);
        // Store the object in localStorage
        sessionStorage.setItem('myObject', objectString);
         Go_to_Product_Screen();


    })
    return card;
}


//Show / hide Function
function Show_article(x){

    var myArticle0 = document.getElementById("Delivery_Info");
    var myArticle1 = document.getElementById("Returns-page");
    var myArticle2 = document.getElementById("Terms_Conditions");

    switch (x){
        case 0 :
            myArticle0.style.display =  'block' ;
            myArticle1.style.display = "none";
            myArticle2.style.display = "none";
            break;
        case 1:
            myArticle0.style.display = "none";
            myArticle1.style.display =  'block' ;
            myArticle2.style.display = "none";
            break;
        case 2 :
            myArticle0.style.display = "none";
            myArticle1.style.display = "none";
            myArticle2.style.display =  'block' ;
            break;
        default:
            myArticle0.style.display = "none";
            myArticle1.style.display = "none";
            myArticle2.style.display = "none";
            break;

    }
}

// Local Database

class User {
    constructor(username, email, password, phoneNumber, gender , birthday ) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.birthday = birthday ;
    }
}


//Data Base ??
// Create a list of users
let userList = [
    new User("john_doe123", "john.doe@example.com", "securepassword", "123-456-7890", "Male","2000-05-23"),
    new User("alice_smith456", "alice.smith@example.com", "strongpassword", "987-654-3210", "Female","2000-07-01"),
    new User( "bob_j", "bob.johnson@example.com", "password123", "555-123-4567", "Male" ,"2000-01-01")
];

class Men_Jackets {
    constructor(id , name , Description,photo_url , price  ) {
        this.id = id;
        this.name =name;
        this.Description = Description;
        this.photo_url = photo_url;
        this.price = price;


    }
}



class Men_Pullovers {
    constructor(id , name ,Description,photo_url , price  ) {
        this.id = id;
        this.name =name;
        this.Description = Description;
        this.photo_url = photo_url;
        this.price = price;


    }
}
class Men_Trousers {
    constructor(id , name ,Description,photo_url , price  ) {
        this.id = id;
        this.name =name;
        this.Description = Description;
        this.photo_url = photo_url;
        this.price = price;


    }
}



let men_jackets_list =[
    new Men_Jackets(1 , "SLIM FIT TRUCKER CORDUROY JACKET" ,"Slim-fit trucker corduroy jacket made of 100% cotton. Featuring shearling lining and front button fastening.", "assets/Men/Jacket/Jacket1.jpg" ,123  ),
    new Men_Jackets(2 , "SLIM  olive FIT TRUCKER CORDUROY JACKET" ,"Slim-fit trucker corduroy jacket made of 100% cotton. Featuring shearling lining and front button fastening.", "assets/Men/Jacket/Jacket2.jpg" ,125  ),
    new Men_Jackets(3 , "REGULAR FIT CORDUROY JACKET" , "Navy regular fit corduroy jacket made of 100% cotton. Featuring a full zip front, chest patch pockets with buttons, and side welt pockets.","assets/Men/Jacket/Jacket3.jpg" ,110 ),
    new Men_Jackets(4 , "TRUCKER DENIM JACKET" , "Indigo trucker denim jacket made of denim cotton lycra featuring a slim fit and metal buttons.","assets/Men/Jacket/Jacket4.jpg" ,115 ),
    new Men_Jackets(5 , "COW LEATHER BIKER JACKET" , "Vintage tanned biker jacket made of cow leather. Featuring a slim fit, band collar, front zipper fastening, and zipper pockets.","assets/Men/Jacket/Jacket5.jpg" ,300 ),
    new Men_Jackets(6 , "SLIM FIT TRUCKER JACKET" , "Navy slim fit trucker jacket made of tricotine 100% cotton. Featuring a zip front and snap cuffs.","assets/Men/Jacket/Jacket6.jpg" ,210),
    new Men_Jackets(7 , "SLIM FIT LIGHT JACKET" , "Slim fit light jacket. Featuring a full zip front, chest flap pockets with buttons, and side welt pockets.","assets/Men/Jacket/Jacket7.jpg" ,230 ),
    new Men_Jackets(8 , "DENIM JACKET WITH FAUX FUR COLLAR & LINING","Trucker denim jacket featuring a slim fit, metal buttons, and faux fur collar & lining." , "assets/Men/Jacket/Jacket8.jpg" ,180 ),
    new Men_Jackets(9 , "DENIM JACKET WITH FAUX FUR COLLAR & LINING" , "Trucker denim jacket featuring a slim fit, metal buttons, and faux fur collar & lining.","assets/Men/Jacket/Jacket9.jpg" ,150),
    new Men_Jackets(10 , "REGULAR FIT SAFARI OVERSHIRT" , "Navy regular fit safari overshirt. Featuring a button front, chest patch pocket, two lower patch pockets, inner pockets, and buttoned cuffs.","assets/Men/Jacket/Jacket10.jpg" ,120 ),

]

let men_Pullovers_list =[
    new Men_Pullovers(40 , "SMART FIT TURTLENECK PULLOVER" , "Fine-gauge turtleneck pullover made of 100% cotton. Featuring a smart fit, long sleeves, and ribbed trims." , "assets/Men/Pullovers/Pullover1.jpg" ,120 ),
    new Men_Pullovers(41, "SMART FIT CARDIGAN" , "Black fine gauge cardigan featuring a smart fit, notch lapel collar, patch pockets, and button front." , "assets/Men/Pullovers/Pullover2.jpg" ,123 ),
    new Men_Pullovers(42 , "SMART FIT PULLOVER" , "Black smart fit v-neck pullover made of 100% cotton knits." , "assets/Men/Pullovers/Pullover3.jpg" ,210 ),
    new Men_Pullovers(43 , "SMART FIT HALF ZIP KNITTED POLO" , "Bordeaux smart fit pullover made of 100% cotton knits." , "assets/Men/Pullovers/Pullover4.jpg" ,180 ),
    new Men_Pullovers(44 , "CREW NECK KNITTED PULLOVER" , "Black Smart fit crew neck pullover made of 100% cotton knits." , "assets/Men/Pullovers/Pullover5.jpg" ,170  ),
    new Men_Pullovers(45 , "SMART FIT KNITTED POLO" , "Navy smart fit fine gauge knitted polo made of 100% cotton knits." , "assets/Men/Pullovers/Pullover6.jpg" ,123  ),
    new Men_Pullovers(46 , "SMART FIT FULL ZIP CARDIGAN" , "Black full zip cardigan made of 100% cotton knits. Featuring a smart fit and side pockets." , "assets/Men/Pullovers/Pullover7.jpg" ,132 ),
    new Men_Pullovers(47 , "WOOL/CASHMERE BLENDED PULLOVER" , "Luxury crewneck pullover made of wool cashmere blend. Featuring a regular fit, cable-knits, ribbed trims, and long sleeves." , "assets/Men/Pullovers/Pullover8.jpg" ,100 ),
    new Men_Pullovers(48 , "SMART FIT V-NECK CARDIGAN" , "Fine-gauge V-neck cardigan made of 100% cotton. Featuring a smart-fit, front button fastening, ribbed cuffs & hem, and long sleeves." , "assets/Men/Pullovers/Pullover9.jpg" ,133  ),
    new Men_Pullovers(49 , "REGULAR FIT CARDIGAN" , "Olive regular fit cardigan made of lambswool bled. Featuring a button front, shawl collar, and patch pockets." , "assets/Men/Pullovers/Pullover10.jpg" ,212  ),

]


let men_trousers_list =[
    new Men_Trousers(80 , "REGULAR FIT JEANS" , "Regular fit denim pants featuring a button fly, five-pocket design, and leather patch label printed with Concrete logo." , "assets/Men/Trousers/Trousers1.jpg" ,120 ),
    new Men_Trousers(81 , "SLIM FIT FIVE-POCKET TROUSERS" , "Slim fit heavy twill garment dye pants made of cotton elastane. Featuring a five-pocket design, button fly fastening, and a genuine leather patch label." , "assets/Men/Trousers/Trousers2.jpg" ,122),
    new Men_Trousers(82 , "SLIM FIT FIVE-POCKET TROUSERS" , "Slim fit heavy twill garment dye pants made of cotton elastane. Featuring a five-pocket design, button fly fastening, and a genuine leather patch label." , "assets/Men/Trousers/Trousers3.jpg" ,212),
    new Men_Trousers(83 , "SLIM FIT TROUSERS" , "Slim fit heavy twill garment dye pants made of cotton elastane. Featuring a five-pocket design, button fly fastening, and a genuine leather patch label." , "assets/Men/Trousers/Trousers4.jpg" ,130),
    new Men_Trousers(84 , "REGULAR FIT TWILL TROUSERS" , "Black slim fit twill trousers featuring a button fly, five-pocket design, belt loops, and a leather patch label with concrete logo." , "assets/Men/Trousers/Trousers5.jpg" ,180),
    new Men_Trousers(85 , "PREMIUM REGULAR FIT MOLESKIN TROUSERS" , "Khaki regular fit premium moleskin trousers. Featuring a zip fly, coin pocket, two slant pockets, and two double welt pockets with hidden buttons." , "assets/Men/Trousers/Trousers6.jpg" ,170 ),
    new Men_Trousers(86 , "REGULAR FIT PREMIUM TROUSERS" , "Natural yarn dyed moleskin trousers made of premium fabric. Featuring a regular fit, zip fly, two single welt pockets with snaps, and belt loops." , "assets/Men/Trousers/Trousers7.jpg" ,210),
    new Men_Trousers(87 , "REGULAR FIT PULL-ON TROUSERS" , "Navy regular fit pull-on trousers made of interlock fabric. Featuring a zip fly, drawcord, elastic waistband, slant pockets, and back welt pockets." , "assets/Men/Trousers/Trousers8.jpg" ,133),
    new Men_Trousers(88 , "REGULAR FIT CARGO TROUSERS" , "Black regular fit interlock cargo trousers. Featuring a zip fly, elastic waistband with cord, and snap flap pockets." , "assets/Men/Trousers/Trousers9.jpg" ,123),
    new Men_Trousers(89 , "JOGGER PANTS" , "Jogger pants made of twill cotton lycra. Featuring cargo pockets, zip fly, elastic waistband with draw cord, and back flap pockets." , "assets/Men/Trousers/Trousers10.jpg" ,134),


]


//Login Function
function onSubmit() {
    // Disable the submit button to prevent double submission
    var password = document.getElementById("password_login").value;
    var email = document.getElementById("email_login").value;
    console.log(password)
    console.log(email)

    userList.forEach((currentUser) => {
        if (password === currentUser.password && email === currentUser.email) {
            alert("Signing Successful");
            sessionStorage.setItem('Current', "true");
            resetForm(); // Reset the form on success
            redirectToIndex(); // Redirect to index.html on success

        }
    });

    if (!sessionStorage.getItem('Current')) {
        alert("Signing failed");
        sessionStorage.setItem('Current', "false");
        resetForm(); // Reset the form on failure
    }
    // Re-enable the submit button
    document.getElementById("SUBMIT").disabled = false;

    // Prevent the default form submission
    return false;
}

//Signup Function
function onSubmit2() {


    //Getting all the inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirmPassword").value;
    const phone_number = document.getElementById("phone").value;
    const birthday = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const Gender = document.querySelector('input[name="gender"]:checked');




    let  is_exists = false;
    userList.forEach((currentUser) => {
        if ( username === currentUser.username  && email === currentUser.email && password !== confirm_password ) {
            alert("Signing up failed account already exits ");
            sessionStorage.setItem('Current', "false");
            is_exists = true;
            resetForm2();

        }
    });

    if (!is_exists) {
        alert("Signing Up Successful");
        userList += new User(username,email,password,phone_number,Gender ,birthday);
        sessionStorage.setItem('Current', "true");
        // Reset the form on success
        resetForm2();
        redirectToIndex(); // Redirect to index.html on success

    }
    // Re-enable the submit button
    document.getElementById("SUBMIT2").disabled = false;

    // Prevent the default form submission
    return false;


}

function resetForm() {
    document.getElementById("Signin_form").reset();
}

function resetForm2() {
    document.getElementById("Signup_form").reset();
}

function redirectToIndex() {
    window.location.href = "index.html";
}


const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const mainContainer = document.querySelector(".container");


if(document.getElementById("signup-btn")) {
    signupBtn.addEventListener("click", () => {
        mainContainer.classList.toggle("change");
    });
    signinBtn.addEventListener("click", () => {
        mainContainer.classList.toggle("change");
    });
}

//Product_Details

function addToCart(){
    let userConfirmation = confirm("Are you sure?");
    if (userConfirmation) {
        alert("Item added to cart Successfully");
        history.go(-1);

    }

}


//Changing background
function changeBackground(button) {
    // Remove the "selected" class from all buttons
    const buttons = document.querySelectorAll('.size-choose button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add the "selected" class to the clicked button
    button.classList.add('selected');
}


