class Menu extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- HAMBURGER MENU STRUCTURE -->
            <div class="menu-page-display page-display">
                <!-- Remove container button -->
                <div class="menu-remove-btn" onclick="MenuToHome()"></div>
                
                <!-- -------------------- -------------------- MENU PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="menu-parent-container">



                        <!-- -------------------- Menu Header Container -------------------- -->
                            <div class="menu-header-wrapper">
                                <div class="container">
                                    <div class="menu-header-container">
                                        <div class="menu-header-img">
                                            <img src="svg/binance.svg" class="img-fluid">
                                        </div>
                                        <span class="menu-header-txt">Binance</span>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Menu user container -------------------- -->
                            <div class="menu-user-con">
                                <div class="menu-option-wrapper" onclick="MenuToHome()" id="menu1">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="svg/user.svg" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt">Dear, <span class="user-personal-name"></span></span>
                                            </div>
                                            <!-- Right container input -->
                                            <div class="menu-option-right-img" id="menu-option-right-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Total Asset Link -------------------- -->
                            <div class="menu-option-wrapper navigation-forward-command" onclick="MenuToAssets()" id="menu2">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="svg/totalasset.svg" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Total Asset</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Message Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="HomeToForward()" id="menu12">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="svg/bell.svg" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Notification</span>
                                            
                                        </div>
                                        
                                        <div class="menu-option-right-img"><img src="svg/bulletred.svg" class="img-fluid" id="menuNotifyDisplay"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                    
                        <!-- -------------------- Community Link -------------------- -->
                        <div class="menu-option-wrapper" id="menu13">
                            <div class="container">
                                <div class="menu-option-container">
                                    <div class="menu-option-left-container" onclick="HomeToCommunity()">
                                        <div class="menu-option-img">
                                            <img src="svg/community.svg" class="img-fluid">
                                        </div>
                                        <span class="menu-option-txt">Community</span>
                                    </div>
                                    
                                    <div class="menu-option-right-img"><div class="community-online-dot" id="onlineChatDisplay" onclick="CommunityToChatButtonMenu()">Chat</div></div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Notification Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="HomeToNotification()" id="menu3">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container" id="menu-option-right-2">
                                            
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Seperation line && All labels container-------------------- -->
                            <!-- All labels -->
                            <div class="container"><p class="menu-label-txt line-height">All Labels</p></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Add Token Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToAddToken()" id="menu4">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="svg/addtokenb.svg" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Add Tokens</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Convert Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToConvert()" id="menu5">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="svg/convert.svg" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Convert</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Transaction History Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToTransactionHistory()" id="menu6">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="svg/transactionhistory.svg" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Transaction History</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Refer Friends Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToReferral()" id="menu7">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="svg/referfriend.svg" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Refer Friends</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Language Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToLanguage()" id="menu8">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="svg/globeb.svg" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Language</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <div class="menu-seperation-line">
                            <!-- -------------------- Settings Link -------------------- -->
                                <div class="menu-option-wrapper" onclick="HomeToSettings()" id="menu9">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="svg/settings.svg" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt">Settings</span>
                                            </div>
                                            
                                            <div class="menu-option-right-img"></div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->



                            <!-- -------------------- Help & Support -------------------- -->
                                <div class="menu-option-wrapper" onclick="MenuToHelp()" id="menu10">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="svg/helpandsupport.svg" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt">Help & Support</span>
                                            </div>
                                            
                                            <div class="menu-option-right-img"></div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->



                            <!-- -------------------- LogOut -------------------- -->
                                <div class="menu-option-wrapper" id="menu11" onclick="logout()">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="svg/logout.svg" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt menu-red-txt">LogOut</span>
                                            </div>
                                            
                                            <div class="menu-option-right-img"></div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                        </div>



                        <!-- -------------------- Telegram button -------------------- -->
                            <div class="container">
                                <div class="menu-telegram-btn" onclick="HelpToSupport()">
                                    <span class="menu-telegram-txt">Contact BNB Support</span>
                                    <div class="menu-telegram-img">
                                        <img src="svg/supportb.svg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!--   -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("menu-page", Menu);