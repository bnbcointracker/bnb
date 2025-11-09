class Home extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- HOME STRUCTURE -->
                <div class="home-page-display page-display">
                    <!-- Home ~ Head container start -->
                        <div class="hmepg-head-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hmepg-head-container">
                                            
                                            <!-- Left Head container -->
                                            <div class="hmepg-left-head-container" onclick="HomeToUserInfoSlide()">
                                                <!-- Ripple effect -->
                                                <div class="ripple left-head-container-ripple"></div>
                                                <!-- User icon image in head container -->
                                                <div class="hmepg-user-icon-wrap">
                                                    <span class="hmepg-user-icon">
                                                        <img src="svg/user.svg" class="img-fluid">
                                                    </span>
                                                </div>
                                                
                                                <!-- User name and promo column -->
                                                <div class="hmepg-username-promo-wrap">
                                                    <!-- Username -->
                                                    <div class="hmepg-username-txt line-height one-line">Hello, <span class="user-personal-name"></span></div>
                                                    <!-- promo -->
                                                    <div class="hmepg-promo-wrap">
                                                        <div class="hmepg-promo-img">
                                                            <img src="svg/promo.svg" class="img-fluid">
                                                        </div>
                                                        <span class="line-height hmepg-promo-txt one-line">BNB Promo (x6)</span>	
                                                    </div>
                                                </div>
                                            </div>		
                                            
                                            
                                            <!-- Right Head container-->
                                            <div class="hmepg-right-head-container">
                                                <!-- Nav Links -->
                                                <div class="hmepg-nav-link" id="hmepg-nav-verify" onclick="HomeToNotification()">
                                                    
                                                </div>
                                                <!-------------------->
                                                <div class="hmepg-nav-link" onclick="HomeToHelp()">
                                                    <img src="svg/supportbc.svg" class="img-fluid">
                                                </div>
                                                <!-------------------->
                                                <div class="hmepg-nav-link-sub" id="menu-dis-btn" onclick="HomeToMenu()">
                                                    <img src="svg/menu.svg" class="img-fluid">
                                                </div>
                                                <!-------------------->
                                                <div class="hmepg-nav-link-sub" id="settings-dis-btn" onclick="HomeToSettings()">
                                                    <img src="svg/settings.svg" class="img-fluid">
                                                </div>
                                                <!-------------------->
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -->
                    
                    
                    
                    
                    
                    <!-- Home ~ Card container start -->
                        <div class="hmepg-card-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hmepg-card-container">
                                        
                                            <!-- First out of 3 containers -->
                                            <div class="card-top-container">
                                                <!-- Left part of the cards first container -->
                                                <div class="card-top-span">
                                                    <!-- Card logo Image-->
                                                    <span class="binance-icon">
                                                        <img src="svg/binance.svg" class="img-fluid">
                                                    </span>
                                                    <span class="card-txt one-line">Total Balance</span>
                                                    <div id="eyeHome" class="eye-icon">
                                                        <img src="svg/visibility.svg" class="img-fluid">
                                                        <div id="div-eye-cover"></div>
                                                    </div>
                                                </div>
                                                
                                                
                                                <!-- Right part of the cards first container -->
                                                <div class="card-top-span cursor" onclick="HomeToTransactionHistory()">
                                                    <span class="card-txt one-line">Transaction History</span>
                                                    <span class="card-logo-img">
                                                        <img src="svg/transactionarrow.svg" class="img-fluid">
                                                    </span>
                                                </div>			
                                            </div>
                                            
                                            <!-- Second out of three containers-->
                                            <p class="card-amount user-card-amount line-height one-line" id="user-balance">$0.00</p>
                                            
                                            <!-- Third container -->
                                            <div class="card-bottom-wrap">
                                                <div class="card-bottom-container">
                                                    <!-- card buttons-->
                                                    <div class="card-btns cursor" onclick="HomeToSendSelect()">
                                                        <div class="card-btn-img-wrap" style="border: 1.75px solid rgba(252, 212, 54, 0.55)">
                                                            <div class="card-btn-img">
                                                                <img src="svg/cardsend.svg" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <span class="card-btn-label line-height-zero" style="color: #fafafa;">Send</span>
                                                    </div>
                                                    
                                                    <div class="card-btns cursor" onclick="HomeToReceiveSelect()">
                                                        <div class="card-btn-img-wrap" style="border: 1.75px solid rgba(252, 212, 54, 0.55)">
                                                            <div class="card-btn-img">
                                                                <img src="svg/cardreceive.svg" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <span class="card-btn-label line-height-zero" style="color: #fafafa;">Receive</span>
                                                    </div>
                                                    
                                                    <div class="card-btns cursor" onclick="HomeToConvert()">
                                                        <div class="card-btn-img-wrap" style="border: 1.75px solid rgba(252, 212, 54, 0.55)">
                                                            <div class="card-btn-img">
                                                                <img src="svg/cardswap.svg" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <span class="card-btn-label line-height-zero" style="color: #fafafa;">Swap</span>
                                                    </div>
                                                </div>
                                            </div>
                                                            
                                        </div>
                                    </div>
                                </div>
                                            
                                <div class="row">
                                    <div class="col-12">
                                        <div class="home-to-ea-account-back">
                                            <div class="home-to-ea-account" onclick="HomeToEAAccount()">
                                                Electronic Bot Accountant <span style="padding-left: 1em">></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -->
                    
                    
                    
                    <!-- Home ~ Token container start -->
                    <div class="hmepg-token-wrap">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hmepg-token-container" style="padding-bottom:2.5em;">
                                        
                                        <span class="hmepg-token-acc-txt one-line">Your Token Accounts</span>
                                        
                                        <hmepgloopscript></hmepgloopscript>

                                        <div class="hmepg-display-background" id="hmepg-display-background">
                                            <!-- Images -->
                                            <div class="hmepg-display-img">
                                                <img src="svg/binance.svg" class="img-fluid">
                                            </div>
                                            <div class="hmepg-token-img-txt one-line">No added Tokens</div>
                                        </div>
                                                    
                                        <!-- Add token container -->
                                        <div class="hmepg-token-add-container">
                                            <div class="hmepg-token-add-span cursor" onclick="HomeToAddToken()">		
                                                <div class="hmepg-token-add-img">
                                                    <img src="svg/addtokenb.svg" class="img-fluid">
                                                </div>
                                                <span class="hmepg-token-add-txt one-line">Add Token</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- -->
                    <!-- -->
                    <!-- -->
                </div>


                <!-- BOTTOM NAVIGATION MENU STRUCTURE -->
                <div class="bottom-nav-wrap">
                    <div class="container">
                        <div class="row">
                            <!-- Home --> 
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="homeNav()">
                                    <div class="bottom-nav-btn-sub" id="home-screen-bottom-nav-left">
                                        <div class="bottom-nav-btn-img">
                                            <img src="svg/home.svg" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Setting -->
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="setNav()">
                                    <div class="bottom-nav-btn-sub" id="home-screen-bottom-nav-right">
                                        <div class="bottom-nav-btn-img">
                                            <img src="svg/settings.svg" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div
                    </div>
                </div>
                <!--  -------------------- -->
            <!--  -------------------- -->
        `;
    }
}

customElements.define("home-page", Home);
// intervalTiming()
