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
        <button >
            Sign up
        </button>

        <button >
            Login
        </button>
        </div>

    </div>

    <div class="header_middle">
        <img src="../Images/icon/Logo_grey.png" HEIGHT="100px" alt="Logo" />


        <h1> Click 'N Ship </h1>

        <div class="search-container">
            <input type="text" placeholder="Search...">
            <button type="submit">
                <img src="../Images/icon/search-icon.png" alt="Search Icon">
            </button>
        </div>

        <img src="../Images/icon/Logo_grey.png" HEIGHT="100px"  alt="cart"/>


    </div>
    <div class="header_bottom">
        <nav>
            <ul>
                <li><a href="../Html/index.html" >Home</a></li>
                <li class="submenu">
                    <a href="#">Men's Clothing</a>
                    <ul>
                        <li><a href="page1.html">Page 1</a></li>
                        <li><a href="page2.html">Page 2</a></li>
                        <li><a href="page3.html">Page 3</a></li>
                    </ul>
                </li>
                <li class="submenu">
                    <a href="#">Women's Clothing</a>
                    <ul>
                        <li><a href="page4.html">Page 4</a></li>
                        <li><a href="page5.html">Page 5</a></li>
                        <li><a href="page6.html">Page 6</a></li>
                    </ul>
                </li>
                <li >
                    <a href="#">Jewelry</a>
                </li>
                <li class="submenu2">
                    <a href="../Html/about.html"  >About</a>
                    <ul>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Terms and policies </a></li>
                        <li><a href="../Html/about.html#contact">Contact Us</a></li>
                        
                    </ul>

                </li>

            </ul>
        </nav>
    </div>
`;


    document.getElementById('footer').innerHTML = `
  
    Copyright © <a href="" style="text-decoration: none ;">Click 'N Ship </a> all rights reserved to Miso.

`;
}

