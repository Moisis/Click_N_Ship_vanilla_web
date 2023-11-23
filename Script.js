window.onload = function() {

    document.getElementById('header').innerHTML = `

    <div class="header_top" >
        <div class="left_group_buttons">
        <select id="Language_Selector">
            <option> English </option>
            <option>Arabic</option>
        </select>
        <select id="Currency_Selector">
            <option> $USD </option>
            <option>EGP</option>
        </select>
        </div>


        <p>
            <b>Free Shipping</b>
            Only this Week with Orders Over - $55 🔥🔥
        </p>

        <div class="Right_group_buttons">
         <button id="My Account" style="visibility: hidden" >
            Account 
        </button>
        <button id="Signup_go" >
            Sign up
        </button>

        <button id="Signin_go" >
            Sign in
        </button>
        
       
        </div>

    </div>

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
    <div class="header_bottom">
        <nav>
            <ul>
                <li><a href="index.html" >Home</a></li>
                <li class="submenu">
                    <a href="Men_Clothing.html">Men's Clothing</a>
                    <ul>
                        <li><a href="page1.html">Page 1</a></li>
                        <li><a href="page2.html">Page 2</a></li>
                        <li><a href="page3.html">Page 3</a></li>
                    </ul>
                </li>
                <li class="submenu">
                    <a href="Woman_Clothing.html">Women's Clothing</a>
                    <ul>
                        <li><a href="page4.html">Page 4</a></li>
                        <li><a href="page5.html">Page 5</a></li>
                        <li><a href="page6.html">Page 6</a></li>
                    </ul>
                </li>
            
            </ul>
        </nav>
    </div>
`;


    document.getElementById('footer').innerHTML = `
 <h2>NEED HELP ? CONTACT US ON OUR HOTLINE 19991</h2>
    <table id="footer_table">
        <thead>
            <tr>
                <th>SHOPPING & ORDERS</th>
                <th> <a class ="Hidden_link" href="about.html" target="_parent" >About Us</th>
                <th>Social Media</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Delivery Information</td>
                <td><a class ="Hidden_link" href="about.html#introduction" target="_parent" >About Click 'N Ship</td>
                <td><a href="mailto:moisisgeorge97@gmail.com" style="text-decoration: none; color: #cccccc">Contact Us</td>
            </tr>
            <tr>
                <td>Returns & Refund </td>
                <td><a class ="Hidden_link" href="about.html#our-story" target="_parent" >Our Story</td>
                <td></td>
            </tr>
              <tr>
                <td>Terms & Conditions</td>
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
}





