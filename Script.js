// On Load Document

function get_headertop(){
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



    if (sessionStorage.getItem('Current') === "true"){``
        right_top=`
           <div id="Right_group_buttons"  class="Right_group_buttons">
        <button id="My_Account" style="visibility: visible">
            Account
        </button>
    <button id="Signup_go" style="visibility: hidden">
        Sign up
    </button>

    <button id="Signin_go" style="visibility: hidden">
        Sign in
    </button>
    </div>
        
        `
    }else {
         right_top=`
          <div id="Right_group_buttons"  class="Right_group_buttons">
         <button id="My_Account" style="visibility: hidden">
            Account 
        </button>
        <button id="Signup_go"  style="visibility: visible">
            Sign up
        </button>

        <button id="Signin_go" style="visibility: visible">
            Sign in
        </button>
        </div>    
         
         `
    }



    return (left_top+mid_top+right_top);

}


function get_headertmid(){


    return `
     
    <div class="header_middle">
        <img src="assets/icon/Logo_grey.png" HEIGHT="100px" alt="Logo" />


        <h1> Click 'N Ship </h1>

        <div class="search-container">
            <input type="text" placeholder="Search...">
            <button type="submit">
                <img src="assets/icon/search-icon.png" alt="Search Icon">
            </button>
        </div>

      <a href="Cart.html">
      <img src="assets/icon/Logo_grey(bagonly).png" HEIGHT="100px"  alt="cart"/>
      </a> 
      
    </div> 

    
    `

}
function get_headerbottom(){

    return `
    
    <div class="header_bottom">
        <nav>
            <ul>
                <li><a href="index.html" >Home</a></li>
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
        </nav>
    </div>
    
    `

}

window.onload = function() {

    // Writing the header on each file (or a desired page )


    var headertop = get_headertop()
    let headermid = get_headertmid()
    let headerbottom = get_headerbottom()

    document.getElementById('header').innerHTML+= headertop
    document.getElementById('header').innerHTML+= headermid
    document.getElementById('header').innerHTML+= headerbottom



// Writing the  footer on each file (or a desired page )
    document.getElementById('footer').innerHTML = `
 <h2>NEED HELP ? CONTACT US ON OUR HOTLINE 19991</h2>
    <table id="footer_table">
        <thead>
            <tr>
                <th> <a href="ShoppingDetails.html" target="_self">SHOPPING & ORDERS</a></th>
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
  
    Copyright © <a href="" style="text-decoration: none ;">Click 'N Ship </a> all rights reserved to Miso.

`;


    /// Nav for auth
    //Sign up

    let signupButton = document.getElementById('Signup_go');

// Add a click event listener to the button
    signupButton.addEventListener('click', function() {
        window.location.href = 'Signup.html'
    });


    let signinButton = document.getElementById('Signin_go');

// Add a click event listener to the button
    signinButton.addEventListener('click', function() {
        window.location.href = 'Signin.html'
    });






    let AccountButton = document.getElementById('My_Account');

// Add a click event listener to the button
    AccountButton.addEventListener('click', function() {
        window.location.href = 'my_account.html'
    });



    //Men

    let cardsContainer = document.getElementById("MJacket_cards-container");

    men_jackets_list.forEach(object => {
        const card = createCard(object);
        cardsContainer.appendChild(card);
    });

    let SignoutButton = document.getElementById('Sign_out');

// Add a click event listener to the button
    SignoutButton.addEventListener('click', function() {
        sessionStorage.setItem('Current', "false");
        window.location.href = 'index.html'
    });



}
// Function to create a card
function createCard(object) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Populate card content
    card.innerHTML = `
              <img class="MJ-img" src="${object.photo_url}" height="200px" alt="${object.jacket_name}"> 
            <h6 class="MJ-name">${object.jacket_name}</h6>
            <p class="MJ-price">Price: ${object.price} USD </p>
           
        `;

    return card;
}


//Show / hide
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
    constructor(firstName, lastName, username, email, password, phoneNumber, country, address, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.address = address;
        this.gender = gender;
    }
}
//Data Base ??
// Create a list of users
let userList = [
    new User("John", "Doe", "john_doe123", "john.doe@example.com", "securepassword", "123-456-7890", "United States", "123 Main Street", "Male"),
    new User("Alice", "Smith", "alice_smith456", "alice.smith@example.com", "strongpassword", "987-654-3210", "Egypt", "456 Oak Avenue", "Female"),
    new User("Bob", "Johnson", "bob_j", "bob.johnson@example.com", "password123", "555-123-4567", "Egypt", "789 Pine Street", "Male")
];

class Men_Jackets {
    constructor(id , jacket_name ,photo_url , price  ) {
        this.id = id;
        this.jacket_name =jacket_name;
        this.photo_url = photo_url;
        this.price = price;


    }
}

let men_jackets_list =[
    new Men_Jackets(1 , "SLIM FIT TRUCKER CORDUROY JACKET" , "assets/Men/Jacket/Jacket1.jpg" ,123  ),
    new Men_Jackets(2 , "SLIM  olive FIT TRUCKER CORDUROY JACKET" , "assets/Men/Jacket/Jacket2.jpg" ,125  ),
    new Men_Jackets(3 , "REGULAR FIT CORDUROY JACKET" , "assets/Men/Jacket/Jacket3.jpg" ,110 ),
    new Men_Jackets(4 , "TRUCKER DENIM JACKET" , "assets/Men/Jacket/Jacket4.jpg" ,115 ),
    new Men_Jackets(5 , "COW LEATHER BIKER JACKET" , "assets/Men/Jacket/Jacket5.jpg" ,300 ),
]


function onSubmit() {
    // Disable the submit button to prevent double submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;


    userList.forEach((currentUser) => {
        if (username === currentUser.username && password === currentUser.password && email === currentUser.email) {
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



function onSubmit2() {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirmPassword").value;
    const phone_number = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    const Gender = document.querySelector('input[name="gender"]:checked');

    const country = document.getElementById("country");

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
        userList += new User(firstName,lastName,username,email,password,phone_number,country, address,Gender);
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




