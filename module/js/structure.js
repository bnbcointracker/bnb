// -------------------- -------------------- CREAQTED DURING STRUCTURE SCRIPT -------------------- -------------------- 
    // --------------------  -------------------- 
        //  Add padding to general page
        function addBootstrapContainer(bootstrapContainer) {
            var firstSection = document.getElementById('first-section');
            var secondSection = document.getElementById('second-section');
            var thirdSection = document.getElementById('third-section');
            if (bootstrapContainer.matches) {
                firstSection.classList.add("p-2");
                secondSection.classList.add("p-2");
                thirdSection.classList.add("p-2");
            } else {
                firstSection.classList.remove("p-2");
                secondSection.classList.remove("p-2");
                thirdSection.classList.remove("p-2");
            };
        };
        
        var bootstrapContainer = window.matchMedia("(min-width: 1200px)");
        addBootstrapContainer(bootstrapContainer) ;
        bootstrapContainer.addListener(addBootstrapContainer) ;
        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // --------------------  -------------------- 
        // Screen to display structures
        var firstDisplay = document.getElementById('first-section');
        var secondDisplay = document.getElementById('second-section');
        var thirdDisplay = document.getElementById('third-section');
        // -------------------- 
        
        // Screen to adjust second dcreen for tablet mode
        var structureSpacerVar = document.getElementById('structure-spacer');
        
        // -------------------- 

        //  Make first container display
        function firstContainer(){
            // first container
            firstDisplay.classList.remove("first-section-change");
            firstDisplay.classList.add("first-section-changed");
            secondDisplay.classList.add("second-section-change");
            secondDisplay.classList.remove("second-section-changed");
            thirdDisplay.classList.add("third-section-change");
            thirdDisplay.classList.remove("third-section-changed");
            
            // Statement to add spacer for responsiveness
            structureSpacerVar.classList.add("structure-spacer");
        };
        // -------------------- 

        //  Make Second container display
        function secondContainer(){
            firstDisplay.classList.add("first-section-change");
            firstDisplay.classList.remove("first-section-changed");
            secondDisplay.classList.remove("second-section-change");
            secondDisplay.classList.add("second-section-changed");
            thirdDisplay.classList.add("third-section-change");
            thirdDisplay.classList.remove("third-section-changed");
            
            // Statement to remove spacer for responsiveness
            structureSpacerVar.classList.remove("structure-spacer");
        };
        // -------------------- 

        //  Make Third container display
        function thirdContainer(){
            firstDisplay.classList.add("first-section-change");
            firstDisplay.classList.remove("first-section-changed");
            secondDisplay.classList.add("second-section-change");
            secondDisplay.classList.remove("second-section-changed");
            thirdDisplay.classList.remove("third-section-change");
            thirdDisplay.classList.add("third-section-changed");
            
            // Statement to remove spacer for responsiveness
            structureSpacerVar.classList.remove("structure-spacer");
        };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // --------------------  -------------------- 
        //  
        function selectBox (id) {
            eval(`${id}()`)
        }

        window.addEventListener('popstate', e => {
            selectBox(e.state.id);
        });
        function BackState() {
            window.history.back();
        }
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
    
// -------------------- -------------------- -------------------- -------------------- -------------------- 










// -------------------- -------------------- PAGE DISPLAY ONCLICK BUTTON FUNCTIONS -------------------- --------------------// --------------------  -------------------- 
        
    // -------------------- Page ID selectors -------------------- 
    
        //  
        var about = document.getElementById("about-page");
        // -------------------- 
    
        //  
        var account = document.getElementById("account-page");
        // -------------------- 
    
        //  
        var addtoken = document.getElementById("add-token-page");
        // -------------------- 
    
        //  
        var assets = document.getElementById("assets-page");
        // -------------------- 
    
        //  
        var bioauth = document.getElementById("bioauth-page");
        // -------------------- 
    
        //  
        var changepassword = document.getElementById("change-password-page");
        // -------------------- 
    
        //  
        var convert = document.getElementById("convert-page");
        // -------------------- 
    
        //  
        var convertselect = document.getElementById("convert-select-page");
        // -------------------- 
    
        //  
        var forgotpassword = document.getElementById("forgot-password-page");
        // -------------------- 
    
        //  
        var help = document.getElementById("help-page");
        // -------------------- 
    
        //  
        var home = document.getElementById("home-page");
        // -------------------- 
    
        //  
        var language = document.getElementById("language-page");
        // -------------------- 
    
        //  
        var marketinfo = document.getElementById("market-info-page");
        // -------------------- 
    
        //  
        var menu = document.getElementById("menu-page");
        // -------------------- 
    
        //  
        var message = document.getElementById("message-page");
        // -------------------- 
    
        //  
        var notification = document.getElementById("notification-page");
        // -------------------- 
    
        //  
        var passcode = document.getElementById("passcode-page");
        // -------------------- 
    
        //  
        var pattern = document.getElementById("pattern-page");
        // -------------------- 
    
        //  
        var paypin = document.getElementById("pay-pin-page");
        // -------------------- 
    
        //  
        var profile = document.getElementById("profile-page");
        // -------------------- 
    
        //  
        var receive = document.getElementById("receive-page");
        // -------------------- 
    
        //  
        var referral = document.getElementById("referral-page");
        // -------------------- 
    
        //  
        var rememberpassword = document.getElementById("remember-password-page");
        // -------------------- 
    
        //  
        var rules = document.getElementById("rules-page");
        // -------------------- 
    
        //  
        var sendselect = document.getElementById("select-send-page");
        // -------------------- 
    
        //  
        var receiveselect = document.getElementById("select-receive-page");
        // -------------------- 
    
        //  
        var send = document.getElementById("send-page");
        // -------------------- 
    
        //  
        var settingsfirst = document.getElementById("settings-first-page");
        // -------------------- 
    
        //  
        var settingssecond = document.getElementById("settings-second-page");
        // -------------------- 
    
        //  
        var support = document.getElementById("support-page");
        // -------------------- 
    
        //  
        var token = document.getElementById("token-page");
        // -------------------- 
    
        //  
        var transactionhistory = document.getElementById("transaction-history-page");
        // -------------------- 
    
        //  
        var verification = document.getElementById("verification-page");
        // -------------------- 
    
        //  
        var userinfoslide = document.getElementById("user-info-slide-page");
        // -------------------- 
    
        //  
        var invite = document.getElementById("invite-page");
        // -------------------- 
    
        //  
        var refhis = document.getElementById("refhis-page");
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
    
// -------------------- -------------------- -------------------- -------------------- -------------------- 











    
    



    // -------------------- IF FUNCTION -------------------- 
        //  SETTING FIRST CONTAINEWR
        function SettingsFirstClose() {
            if (settingsfirst.classList.contains("setting-first-show")) {
                settingsfirst.classList.add("page-hide");
                settingsfirst.classList.remove("setting-first-show");
            };
        }

        function SettingsFirstOpen() {
            if (settingsfirst.classList.contains("page-hide")) {
                settingsfirst.classList.add("setting-first-show");
                settingsfirst.classList.remove("page-hide");
            };
        }
        // -------------------- 

        //  SETTING FIRST CONTAINEWR
        function SettingsSecondClose() {
            if (settingssecond.classList.contains("setting-second-show")) {
                settingssecond.classList.add("page-hide");
                settingssecond.classList.remove("setting-second-show");
            };
        }

        function SettingsSecondOpen() {
            if (settingssecond.classList.contains("page-hide")) {
                settingssecond.classList.add("setting-second-show");
                settingssecond.classList.remove("page-hide");
            };
        }
        
        function communityInterval() {
            setTimeout(function(){
                scrollChatButton();
            }, 50);
        }
        function privateChatInterval() {
            setTimeout(function(){
                scrollPrivateChatButton();
            }, 50);
        }

        function commentInterval() {
            setTimeout(function(){
                scrollCommentButton();
            }, 50);
        }

        function memberNmaeInterval() {
            setTimeout(function(){
                document.getElementById("member-page-scrollpoint").scrollIntoView();
            }, 50);
        }
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
// -------------------- -------------------- -------------------- -------------------- -------------------- 










// -------------------- -------------------- PAGE DISPLAY ONCLICK BUTTON FUNCTIONS -------------------- --------------------
    
    // -------------------- HOME PAGE LINKING BUTTON FUNCTIONS -------------------- 
        //  Home to menu     ##### 1
            function HomeToMenu() {
                var id = `HomeToMenuPath`;
                selectBox(id);
            };
            function HomeToMenuPath() {
                firstContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex";  // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "flex" //; -------------------- Container -------------------- 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to token     ##### 2
            function HomeToAddToken() {
                var id = `HomeToAddTokenPath`;
                history.pushState({id: `HomeToTokenPath`}, `Binance`, `./#token`);
                selectBox(id);
            };
            function HomeToAddTokenPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "flex"; // -------------------- Container -------------------- 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
        // --------------------
        
        //  Home to token     ##### 2
            function MenuToAddToken() {
                var id = `MenuToAddTokenPath`;
                history.pushState({id: `HomeToTokenPath`}, `Binance`, `./#token`);
                selectBox(id);
            };
            function MenuToAddTokenPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "flex"; // -------------------- Container -------------------- 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
        // --------------------
        
        //  Home to setting     ##### 3
            function HomeToSettings() {
                var id = `HomeToSettingsPath`;
                history.pushState({id}, `Binance`, `./#settings`);
                selectBox(id);
            };
            function HomeToSettingsPath() {
                secondContainer();
                resDown();
                tabDown();

                //  first container
                SettingsFirstOpen(); // -------------------- Container -------------------- 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex";  // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondOpen(); // -------------------- Container -------------------- 
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            }
        // -------------------- 
        
        //  Home to user information slide     ##### 4
            function HomeToUserInfoSlide(){
                var id = `HomeToUserInfoSlidePath`;
                history.pushState({id: `MenuToHome`}, `Binance`, `./#profile`);
                selectBox(id);
            };
            function HomeToUserInfoSlidePath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex";  // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container --------------------
                invite.style.display = "none";
                refhis.style.display = "none";
                
                document.getElementById("userinfoslide-btn").classList.remove("userinfoslide-btn-res");
                document.getElementById("userinfoslide-btn").classList.add("userinfoslide-btn");
                document.getElementById("user-info-removebtn").onclick = function() { BackState() };
                document.getElementById("user-exit-btn").onclick = function() { BackState() };
                document.getElementById("userinfoslide-btn").onclick = function() { MenuToAssets() };
                document.getElementById("language-index").onclick = function() { MenuToLanguage() };
                document.getElementById("userinfoslide-btn").style.display = "flex";
            };
        // -------------------- 
        
        //  Home to notification page     ##### 5
            function HomeToVerification(){
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex"; // -------------------- Container -------------------- 
                referral.style.display = "none";
                bioauth.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("verification-back-button-changer").onclick = function() { MenuToHomePath() };
            };
        // --------------------  
        
        //  Home to EA page     ##### 5
            function HomeToEAAccount(){
                var id = `HomeToEAAccountPath`;
                history.pushState({id}, `Binance`, `./#ea_trader`);
                selectBox(id);
            };
            function HomeToEAAccountPath(){
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = 
                referral.style.display = "none";
                bioauth.style.display = "none";
                SettingsSecondClose(); "none";
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "flex"; // -------------------- Container -------------------- 
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
            };

            function EAToDollar(){
                var id = `EAToDollarPath`;
                history.pushState({id}, `Binance`, `./#dollar_account`);
                selectBox(id);
            };
            function EAToDollarPath(){
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = 
                referral.style.display = "none";
                bioauth.style.display = "none";
                SettingsSecondClose(); "none";
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "flex"; // -------------------- Container -------------------- 
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
            };
        // --------------------  
        
        //  Home to notification page     ##### 5
            function HomeToNotification(){
                var id = `HomeToNotificationPath`;
                history.pushState({id}, `Binance`, `./#verification`);
                selectBox(id);
            };
            function HomeToNotificationPath(){
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex"; // -------------------- Container -------------------- 
                referral.style.display = "none";
                bioauth.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("verification-back-button-changer").onclick = function() { BackState() }
            };
        // -------------------- 
        
        //  Home to notification page     ##### 5
            function OtherHomeToNotification(){
                var id = `OtherHomeToNotificationPath`;
                history.pushState({id}, `Binance`, `./#verification`);
                selectBox(id);
            };
            function OtherHomeToNotificationPath(){
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex"; // -------------------- Container -------------------- 
                referral.style.display = "none";
                bioauth.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("verification-back-button-changer").onclick = function() { BackState() }
            };
        // -------------------- 
        
        //  Home to notification page     ##### 5
            function HomeToForward(){
                var id = `HomeToForwardPath`;
                history.pushState({id}, `Binance`, `./#notification`);
                selectBox(id);
            };
            function HomeToForwardPath(){
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "flex"; // -------------------- Container -------------------- 
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
                
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("notify-main-left-container").innerHTML = `
                    <div class="help-header-img btn-display-clone" onclick="BackState()">
                        <img src="svg/arrowleft.svg" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Notification</span>
                `;
            };
        // -------------------- 
        
        //  Home to help page     ##### 6
            function HomeToHelp() {
                var id = `HomeToHelpPath`;
                history.pushState({id}, `Binance`, `./#help_support`);
                selectBox(id);
            };
            function HomeToHelpPath() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container -------------------- 
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(75, 181, 67, 0.4";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("help-header-back").setAttribute("onclick", "javascript: BackState()");
                document.getElementById("help-right-back").setAttribute("onclick", "javascript: HelpToSupport()");
                document.getElementById("help-bottom-back").setAttribute("onclick", "javascript: HelpToSupport()");
                
                var accordionBtn = document.getElementsByClassName("accordion-btn-changer");
                for (let i = 0; i < accordionBtn.length; i++) {
                    accordionBtn[i].setAttribute("onclick", "javascript: SettingToSupport()")
                }
            };
        // -------------------- 
        
        //  Home to transaction history page     ##### 7
            function HomeToTransactionHistory() {
                var id = `HomeToTransactionHistoryPath`;
                history.pushState({id}, `Binance`, `./#transaction_history`);
                selectBox(id);
            };
            function HomeToTransactionHistoryPath() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "flex"; // -------------------- Container -------------------- 

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("transact-main-left-container").innerHTML = `
                    <div class="help-header-img btn-display-clone" onclick="BackState()">
                        <img src="svg/arrowleft.svg" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Transaction History</span>
                `;
            };
        // -------------------- 
        
        //  Home to transaction history page     ##### 7
            function MenuToTransactionHistory() {
                var id = `HomeToTransactionHistoryPath`;
                history.pushState({id}, `Binance`, `./#transaction_history`);
                selectBox(id);
            };
            function MenuToTransactionHistoryPath() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "flex"; // -------------------- Container -------------------- 

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("transact-main-left-container").innerHTML = `
                    <div class="help-header-img btn-display-clone" onclick="BackState()">
                        <img src="svg/arrowleft.svg" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Transaction History</span>
                `;
            };
        // -------------------- 
        
        //  Home to Community page     ##### 7
            function HomeToCommunity(){
                var id = `HomeToCommunityPath`;
                history.pushState({id: `BackToCommunity`}, `Binance`, `./#community`);
                selectBox(id);
            };
            function HomeToCommunityPath(){
                secondContainer();
                communityInterval();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex"; // -------------------- Container -------------------- 
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "flex"; // -------------------- Container -------------------- 
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = ""; 
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background ="rgba(75, 181, 67, 0.4)";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "rgba(166, 50, 50, 0.4)";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                
                document.getElementById("community-back-btn").setAttribute("onclick", "javascript: BackState()");
            };
        // -------------------- 
        
        //  Home to token main land page     ##### 8
            function HomeToToken() {
                var id = `HomeToTokenPath`;
                history.pushState({id}, `Binance`, `./#token`);
                selectBox(id);
            };
            function HomeToTokenPath() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "flex"; // -------------------- Container -------------------- 
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to select page     ##### 9
            function HomeToSendSelect() {
                var id = `HomeToSendSelectPath`;
                history.pushState({id: `HomeToTokenPath`}, `Binance`, `./#token`);
                selectBox(id);
            };
            function HomeToSendSelectPath() {
                thirdContainer();
                SendTokenLoopCall()
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "flex"; // -------------------- Container --------------------
                receiveselect.style.display = "none";  
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to select page     ##### 9
            function HomeToReceiveSelect() {
                var id = `HomeToReceiveSelectPath`;
                history.pushState({id: `HomeToTokenPath`}, `Binance`, `./#token`);
                selectBox(id);
            };
            function HomeToReceiveSelectPath() {
                thirdContainer();
                ReceiveTokenLoopCall();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "flex";  // -------------------- Container --------------------
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to Convert page     ##### 9
            function HomeToConvert() {
                var id = `HomeToConvertPath`;
                history.pushState({id}, `Binance`, `./#swap`);
                selectBox(id);
            };
            function HomeToConvertPath() {
                secondContainer();
                ConvertTokenLoopCall();
                convertPointerEvent();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "flex"; // -------------------- Container -------------------- 
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "flex"; // -------------------- Container -------------------- 
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
            function HomeToSend() {
                var id = `HomeToSendPath`;
                history.pushState({id}, `Binance`, `./#send_token`);
                selectBox(id);
            };
            function HomeToSendPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 
        
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";
        
                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "flex"; // -------------------- Container --------------------  
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        
        
        
        
        
        
        
        
        
        
        
        
        //  Token to receive page     ##### 2
            function HomeToReceive(){
                var id = `HomeToReceivePath`;
                history.pushState({id}, `Binance`, `./#receive_token`);
                selectBox(id);
            };
            function HomeToReceivePath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 
        
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";
        
                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "flex"; // -------------------- Container -------------------- 
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
    //  -------------------- -------------------- -------------------- 
    
    



    
    



    
    



    // -------------------- MENU LINKING BUTTON FUNCTIONS -------------------- 
        //  Menu to home     ##### 1
            function MenuToHome() {
                var id = `MenuToHomePath`;
                history.pushState({id}, `Binance`, `./#dashboard`);
                selectBox(id);
            };
            function MenuToHomePath(){
                secondContainer();
                tabUp();
                resUp();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex";  // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "flex" //; -------------------- Container -------------------- 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
        // -------------------- 
        
        //  Menu to assets     ##### 2
            function MenuToAssets(){
                var id = `MenuToAssetsPath`;
                history.pushState({id}, `Binance`, `./#assets`);
                selectBox(id);
            };
            function MenuToAssetsPath(){
                // 
                secondContainer();
                
                //  first container
                SettingsFirstClose();
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "flex"; // -------------------- Container -------------------- 
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
                
                // 
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("assets-card-btn-id").onclick = function() { AssetsToProfileMen() };
                document.getElementById("assets-back-svg-btn").onclick = function() { BackState() };
                document.getElementById("language-index").onclick = function() { AssetsToLanguage() };
                document.getElementById("assets-card-settings-btn").onclick = function() { AssetToSettings() };
            };
            function AssetToSettings(){
                var id = `HomeToSettingsPath`;
                history.replaceState({id}, `Binance`, `./#settings`);
                selectBox(id);
            }
        // --------------------
        
        //  Menu to convert token page     ##### 3
            function MenuToConvert() {
                var id = `MenuToConvertPath`;
                history.pushState({id}, `Binance`, `./#swap`);
                selectBox(id);
            };
            function MenuToConvertPath() {
                secondContainer();
                ConvertTokenLoopCall();
                convertPointerEvent();

                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "flex"; // -------------------- Container -------------------- 
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "flex"; // -------------------- Container -------------------- 
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            }
        // -------------------- 
        
        //  Menu to referral     ##### 4
            function MenuToReferral() {
                var id = `MenuToReferralPath`;
                history.pushState({id}, `Binance`, `./#referral_link`);
                selectBox(id);
            };
            function MenuToReferralPath() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "flex"; // -------------------- Container -------------------- 
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "flex"; // -------------------- Container --------------------

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("referral-back-btn").setAttribute("onclick", "javascript: BackState()");
            };
        // -------------------- 
        
        //  Menu to language page     ##### 5
            function MenuToLanguage() {
                var id = `MenuToLanguagePath`;
                history.pushState({id}, `Binance`, `./#language`);
                selectBox(id);
            };
            function MenuToLanguagePath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "flex"; // -------------------- Container --------------------
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("asset-help-left-container").onclick = function() { BackState() }
            };
        // -------------------- 
        
        //  Menu to support page     ##### 6
            function MenuToHelp() {
                var id = `MenuToHelpPath`;
                history.pushState({id}, `Binance`, `./#help`);
                selectBox(id);
            };
            function MenuToHelpPath() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("help-header-back").setAttribute("onclick", "javascript: BackState()");
                document.getElementById("help-right-back").setAttribute("onclick", "javascript: HelpToSupport()");
                document.getElementById("help-bottom-back").setAttribute("onclick", "javascript: HelpToSupport()");

                var accordionBtn = document.getElementsByClassName("accordion-btn-changer");
                for (let i = 0; i < accordionBtn.length; i++) {
                    accordionBtn[i].setAttribute("onclick", "javascript: SettingToSupport()")
                }
            };
        // --------------------         
    //  -------------------- -------------------- -------------------- 





    
    



    
    



    // -------------------- HELP BUTTON LINK FUNCTION -------------------- 
        //  Help to support page     ##### 1
            function HelpToSupport() {
                var id = `HelpToSupportPath`;
                history.pushState({id}, `Binance`, `./#help_support`);
                selectBox(id);
            };
            function HelpToSupportPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // --------------------
        
        //  Help to support page     ##### 1
            function EAToSupport() {
                var id = `EAToSupportPath`;
                history.pushState({id}, `Binance`, `./#ea_support`);
                selectBox(id);
            };
            function EAToSupportPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container --------------------
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 

    
    



    
    







    // -------------------- NOTIFICATION BUTTON LINK FUNCTION --------------------         
        //  Menu to support page     ##### 1
            function NotificationToMessage() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex"; // -------------------- Container --------------------
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container --------------------  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 

    
    



    
    







    // -------------------- SUPPORT BUTTON LINK FUNCTION --------------------         
        //  Support to assets page     ##### 1
            function SupportToAssets() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------  
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 




    
    



    
    




    // -------------------- ASSETS BUTTON LINK FUNCTION --------------------         
        //  Assets to verification page     ##### 1
            function AssetsToVerification(){
                var id = `AssetsToVerificationPath`;
                history.pushState({id}, `Binance`, `./#verification`);
                selectBox(id);
            };
            function AssetsToVerificationPath(){
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex"; // -------------------- Container -------------------- 
                referral.style.display = "none";
                bioauth.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
            
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("verification-back-button-changer").onclick = function() { BackState() }
            };
        // -------------------- 

        //  Assets to profile page     ##### 2
            function AssetsToProfileSet() {
                var id = `AssetsToProfileSetPath`;
                history.pushState({id}, `Binance`, `./#profile`);
                selectBox(id);
            };
            function AssetsToProfileSetPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";  
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container --------------------
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("userinfoslide-btn").classList.add("userinfoslide-btn-res")
                document.getElementById("userinfoslide-btn").classList.remove("userinfoslide-btn")
                document.getElementById("user-info-removebtn").onclick = function() { BackState() }
                document.getElementById("user-exit-btn").onclick = function() { BackState() }
                document.getElementById("userinfoslide-btn").style.display = "none";
            };
        // -------------------- 

        //  Assets to profile page     ##### 3
            function AssetsToProfileMen(){
                var id = `AssetsToProfileMenPath`;
                history.pushState({id}, `Binance`, `./#profile`);
                selectBox(id);
            };
            function AssetsToProfileMenPath(){
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";  
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container --------------------
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("userinfoslide-btn").classList.add("userinfoslide-btn-res")
                document.getElementById("userinfoslide-btn").classList.remove("userinfoslide-btn")
                
                document.getElementById("user-info-removebtn").onclick = function() { BackState() }
                document.getElementById("user-exit-btn").onclick = function() { BackState() }
                document.getElementById("userinfoslide-btn").style.display = "none";
            };
        // -------------------- 
        
        //  Assets to support page     ##### 1
            function AssetsToSupport(){
                var id = `AssetsToSupportPath`;
                history.pushState({id}, `Binance`, `./#support`);
                selectBox(id);
            };
            function AssetsToSupportPath(){
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none"; 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 

        //  Assets to about page     ##### 1
            function AssetsToAbout(){
                var id = `AssetsToAboutPath`;
                history.pushState({id}, `Binance`, `./#about`);
                selectBox(id);
            }
            function AssetsToAboutPath(){
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("about-header-back").setAttribute("onclick", "javascript: BackState()");
            };
        // -------------------- 

        //  About to assets page     ##### 1
            function AboutToAssets() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Assets to language page     ##### 5
            function AssetsToLanguage(){
                var id = `AssetsToLanguagePath`;
                history.pushState({id}, `Selected: ${id}`, `./#language`);
                selectBox(id);
            }
            function AssetsToLanguagePath(){
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                token.style.display = "none";
                transactionhistory.style.display = "none";
                SettingsSecondClose();

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "flex"; // -------------------- Container -------------------- 
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("asset-help-left-container").onclick = function() { BackState() }
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 



    


    // -------------------- TOKEN BUTTON LINK FUNCTION --------------------         
        //  Token to Send page     ##### 1
            function TokenToSend() {
                var id = `TokenToSendPath`;
                history.pushState({id}, `Binance`, `./#send_token`);
                selectBox(id);
            };
            function TokenToSendPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "flex"; // -------------------- Container --------------------  
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 

        //  Token to receive page     ##### 2
            function TokenToReceive() {
                var id = `TokenToReceivePath`;
                history.pushState({id}, `Binance`, `./#receive_token`);
                selectBox(id);
            };
            function TokenToReceivePath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "flex"; // -------------------- Container -------------------- 
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
            };
        // -------------------- 
        
        //  Token to Send page     ##### 3
            function TokenToMarketInfo() {
                var id = `TokenToMarketInfoPath`;
                history.pushState({id}, `Binance`, `./#crypto_info`);
                selectBox(id);
            };
            function TokenToMarketInfoPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "flex"; // -------------------- Container --------------------  
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // --------------------
        
        //  Token to market information page     ##### 1
            function SendToDeposit() {
                var id = `SendToDepositPath`;
                history.pushState({id}, `Binance`, `./#receive_options`);
                selectBox(id);
            };
            function SendToDepositPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "flex"; // -------------------- Container --------------------  
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Token to market information page     ##### 1
            function SendToWithdraw() {
                var id = `SendToWithdrawPath`;
                history.pushState({id}, `Binance`, `./#send_options`);
                selectBox(id);
            };
            function SendToWithdrawPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "flex"; // -------------------- Container --------------------  
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
        
        //  Token to market information page     ##### 1
            function EAToWithdraw() {
                var id = `EAToWithdrawPath`;
                history.pushState({id}, `Binance`, `./#ea_trade_options`);
                selectBox(id);
            };
            function EAToWithdrawPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "flex"; // -------------------- Container --------------------  
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // -------------------- MENU LINKING BUTTON FUNCTIONS -------------------- 
        //  Menu to home     ##### 1
        function BackToHome() {
            secondContainer();
            tabUp();
            resUp();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none"; //
            bioauth.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "flex"; // -------------------- Container -------------------- 
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "none";
            token.style.display = "none";
            transactionhistory.style.display = "none";
            SettingsSecondClose();

            //  third container
            about.style.display = "none";
            addtoken.style.display = "flex"; // -------------------- Container -------------------- 
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none";
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "none";
            // -------------------- 

               
            function isVerifiedMenu() {
                document.getElementById("menu1").style.background = "rgba(75, 181, 67, 0.4)";
                document.getElementById("menu2").style.background = "";
                document.getElementById("menu3").style.background = "";
                document.getElementById("menu4").style.background = "";
                document.getElementById("menu5").style.background = "";
                document.getElementById("menu6").style.background = "";
                document.getElementById("menu7").style.background = "";
                document.getElementById("menu8").style.background = "";
                document.getElementById("menu9").style.background = "";
                document.getElementById("menu10").style.background = "";
                document.getElementById("menu11").style.background = "";
                document.getElementById("menu12").style.background = "";
                document.getElementById("menu13").style.background = "";
            }
            function isUnverifiedMenu() {
                document.getElementById("menu1").style.background = "rgba(166, 50, 50, 0.4)";
                document.getElementById("menu2").style.background = "";
                document.getElementById("menu3").style.background = "";
                document.getElementById("menu4").style.background = "";
                document.getElementById("menu5").style.background = "";
                document.getElementById("menu6").style.background = "";
                document.getElementById("menu7").style.background = "";
                document.getElementById("menu8").style.background = "";
                document.getElementById("menu9").style.background = "";
                document.getElementById("menu10").style.background = "";
                document.getElementById("menu11").style.background = "";
                document.getElementById("menu12").style.background = "";
                document.getElementById("menu13").style.background = "";
            }
            function isVerificationMenu() {
                if (isVerify === true) {
                    isVerifiedMenu();
                } else{
                    isUnverifiedMenu()
                };
            }isVerificationMenu();
        };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
// -------------------- -------------------- -------------------- -------------------- -------------------- 





    // -------------------- SETTINGS BUTTON LINK FUNCTION -------------------- 
        //  
            function BackToSetting() {
                secondContainer();
                resDown();
                tabDown();

                //  first container
                SettingsFirstOpen(); // -------------------- Container -------------------- 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex";  // -------------------- Container -------------------
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondOpen(); // -------------------- Container -------------------- 
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            }
        // -------------------
    
        //  
            function SettingToAsset() {
                var id = `SettingToAssetPath`;
                history.pushState({id}, `Binance`, `./#assets`);
                selectBox(id);
            };
            function SettingToAssetPath() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("assets-card-btn-id").onclick = function() { AssetsToProfileSet() };
                document.getElementById("assets-back-svg-btn").onclick = function() { BackState() };
                document.getElementById("language-index").onclick = function() { SettingToLanguage() };
                document.getElementById("assets-card-settings-btn").onclick = function() { BackState() };
            };
        // -------------------- 
        
        //  
            function SettingToCommunity() {
                var id = `SettingToCommunityPath`;
                history.pushState({id: `BackToCommunity`}, `Binance`, `./#community`);
                selectBox(id);
            };
            function SettingToCommunityPath() {
                secondContainer();
                communityInterval();

                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex"; // -------------------- Container --------------------
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "flex"; // -------------------- Container -------------------- 
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
                
                document.getElementById("community-back-btn").setAttribute("onclick", "javascript: BackState()");
            };
        // -------------------- 

        
            function BackToCommunity() {
                secondContainer();
                commentBoolean = false;
                document.getElementById("comment-end-message").style.display = "none";
                
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex"; // -------------------- Container --------------------
                notification.style.display = "none";
                referral.style.display = "none";
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "flex"; // -------------------- Container -------------------- 
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
                document.getElementById("scroll-chat-button").style.zIndex= `1`;
            };
        // -------------------- 
    
            function CommunityToInfo(){
                var id = `CommunityToInfoPath`;
                history.pushState({id}, `Binance`, `./#community_members`);
                selectBox(id);
            };
            function CommunityToInfoPath(){
                thirdContainer();
                memberNmaeInterval();
                    
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex";
                notification.style.display = "none";
                referral.style.display = "none";
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "flex"; // -------------------- Container -------------------- 
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
                document.getElementById("scroll-chat-button").style.zIndex= `0`;
            };
        // -------------------- 
    
        //  
            function SettingToUserInfo() {
                var id = `SettingToUserInfoPath`;
                history.pushState({id: `HomeToSettingsPath`}, `Binance`, `./#profile`);
                selectBox(id);
            };
            function SettingToUserInfoPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex";
                referral.style.display = "none";
                SettingsSecondOpen();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container -------------------- 
                invite.style.display = "none";
                refhis.style.display = "none";
                
                document.getElementById("user-info-removebtn").onclick = function() { BackState() };
                document.getElementById("user-exit-btn").onclick = function() { BackState() };
                document.getElementById("userinfoslide-btn").onclick = function() { SettingToAsset() };
                document.getElementById("userinfoslide-btn").style.display = "flex";
                document.getElementById("assets-back-svg-btn").onclick = function() { BackState() }
                document.getElementById("language-index").onclick = function() { SettingToLanguage() }
            };

        // -------------------- //  
            function SettingToVerification() {
                var id = `SettingToVerificationPath`;
                history.pushState({id}, `Binance`, `./#verification`);
                selectBox(id);
            };
            function SettingToVerificationPath() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container -------------------- 
                invite.style.display = "none";
                refhis.style.display = "none";
                
                document.getElementById("verification-back-button-changer").onclick = function() { BackState() }
            };
        // -------------------- 
    
        //  
        function SettingToHistory() {
            var id = `SettingToHistoryPath`;
            history.pushState({id}, `Binance`, `./#transaction_history`);
            selectBox(id);
        };
        function SettingToHistoryPath() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "flex"; // -------------------- Container --------------------

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("transact-main-left-container").innerHTML = `
                    <div class="help-header-img btn-display-clone" onclick="BackState()">
                        <img src="svg/arrowleft.svg" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Transaction History</span>
                `;
            };
        // -------------------- 
    
        //  
        function SettingToForward(){
            var id = `SettingToForwardPath`;
            history.pushState({id}, `Binance`, `./#notification`);
            selectBox(id);
        };
        function SettingToForwardPath(){
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "flex"; // -------------------- Container --------------------
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("notify-main-left-container").innerHTML = `
                    <div class="help-header-img btn-display-clone" onclick="BackState()">
                        <img src="svg/arrowleft.svg" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Notification</span>
                `;
            };
        // --------------------
        
        //  Menu to referral     ##### 4
            function SettingToReferral() {
                var id = `SettingToReferralPath`;
                history.pushState({id}, `Binance`, `./#referral`);
                selectBox(id);
            };
            function SettingToReferralPath() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "flex"; // -------------------- Container -------------------- 
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "flex"; // -------------------- Container --------------------
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("referral-back-btn").setAttribute("onclick", "javascript:  HomeToSettings()");
            };
        // -------------------- 
        //  Help to support page     ##### 1
            function SettingToSupport() {
                var id = `SettingToSupportPath`;
                history.pushState({id}, `Binance`, `./#help_support`);
                selectBox(id);
            };
            function SettingToSupportPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
        
        //  Menu to support page     ##### 6
            function SettingToHelp() {
                var id = `SettingToHelpPath`;
                history.pushState({id}, `Binance`, `./#help`);
                selectBox(id);
            };
            function SettingToHelpPath() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu11").style.background = "";
                    document.getElementById("menu12").style.background = "";
                    document.getElementById("menu13").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("help-header-back").setAttribute("onclick", "javascript: BackState()");
                document.getElementById("help-right-back").setAttribute("onclick", "javascript: SettingToSupport()");
                document.getElementById("help-bottom-back").setAttribute("onclick", "javascript: SettingToSupport()");

                var accordionBtn = document.getElementsByClassName("accordion-btn-changer");
                for (let i = 0; i < accordionBtn.length; i++) {
                    accordionBtn[i].setAttribute("onclick", "javascript: SettingToSupport()")
                }
            };
        // --------------------  

        //  Assets to about page     ##### 1
            function SettingToAbout() {
                var id = `SettingToAboutPath`;
                history.pushState({id}, `Binance`, `./#about`);
                selectBox(id);
            };
            function SettingToAboutPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("about-header-back").setAttribute("onclick", "javascript: BackState()");
            };
        // -------------------- 
        
        //  Menu to language page     ##### 5
            function SettingToLanguage() {
                var id = `SettingToLanguagePath`;
                history.pushState({id}, `Binance`, `./#language`);
                selectBox(id);
            };
            function SettingToLanguagePath() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "flex"; // -------------------- Container --------------------
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("asset-help-left-container").onclick = function() { BackState() }
            };
        // -------------------- 

        
        //  Home to token main land page     ##### 8
            function ConvertToConvert() {
                var id = `ConvertToConvertPath`;
                history.pushState({id}, `Binance`, `./#swap_page`);
                selectBox(id);
            };
            function ConvertToConvertPath() {
                thirdContainer();
                ConvertTokenLoopCall();
                convertPointerEvent();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "flex"; // -------------------- Container -------------------- 
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "flex"; // -------------------- Container -------------------- 
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
            
        //  
        function ReferalToRules() {
            var id = `ReferalToRulesPath`;
            history.pushState({id}, `Binance`, `./#referral_rules`);
            selectBox(id);
        };
        function ReferalToRulesPath() {
            thirdContainer();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            bioauth.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "flex"; // -------------------- Container -------------------- 
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "flex"; // -------------------- Container -------------------- 
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "none";
        }
        // -------------------
        
        //
        function ReferalToHistory() {
            var id = `ReferalToHistoryPath`;
            history.pushState({id}, `Binance`, `./#referral_history`);
            selectBox(id);
        };
        function ReferalToHistoryPath() {
            thirdContainer();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            bioauth.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "flex"; // -------------------- Container -------------------- 
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none"; 
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "flex"; // -------------------- Container --------------------
        }
        // -------------------
        
        // 
        function ReferalToInvite() {
            var id = `ReferalToInvitePath`;
            history.pushState({id}, `Binance`, `./#referral_invites`);
            selectBox(id);
        };
        function ReferalToInvitePath() {
            thirdContainer();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            bioauth.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "flex"; // -------------------- Container -------------------- 
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none"; 
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "flex"; // -------------------- Container --------------------
            refhis.style.display = "none";
        }
        // -------------------

        
        
        //  Home to Community page     ##### 7
        function CommunityToChat(){
            var id = `CommunityToChatPath`;
            history.pushState({id}, `Binance`, `./#community_post`);
            selectBox(id);
        };
        function CommunityToChatPath(){
            secondContainer();
            commentInterval();
            
            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            bioauth.style.display = "flex"; // -------------------- Container -------------------- 
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "none";
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "flex"; // -------------------- Container -------------------- 
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none";
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "none";
        };
    // -------------------- 
        function AssetToDollar(){
            var id = `AssetToDollarPath`;
            history.pushState({id}, `Binance`, `./#dollar_account`);
            selectBox(id);
        };
        function AssetToDollarPath(){
            thirdContainer();
            
            //  second container
            account.style.display = "none";
            assets.style.display = "flex"; // -------------------- Container -------------------- 
            bioauth.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "none";
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            changepassword.style.display = "flex"; // -------------------- Container -------------------- 
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none";
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "none";
        };
    // -------------------- 
        
        // Login
        function login() {
            var logg = document.getElementsByClassName("log-out-main");
            BackState();
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "none";
            }
        }
        // -------------------- 
        
        // Login
        function logout()  {
            history.pushState({id: `login`}, `Binance`, `./#logout`);
            var logg = document.getElementsByClassName("log-out-main");
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "flex";
            }
        }
        // --------------------   
        
        // Scan
        function scanin() {
            var logg = document.getElementsByClassName("scan-out-main");
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "flex";
            }
        }
        // -------------------- 
        
        // Scan
        function scanout() {
            var logg = document.getElementsByClassName("scan-out-main");
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "none";
            }
        }
        // --------------------   

        function CommunityToChatHome(){
                var id = `CommunityToChatHomePath`;
                history.pushState({id}, `Binance`, `./#community_friends`);
                selectBox(id);
            };
            function CommunityToChatHomePath(){
                thirdContainer();
                    
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex";
                notification.style.display = "none";
                referral.style.display = "none";
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "flex"; // -------------------- Container -------------------- 
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
                document.getElementById("scroll-chat-button").style.zIndex= `0`;
            };
        // -------------------- 

        function MessangerMessages(){
                var id = `MessangerMessagesPath`;
                history.pushState({id}, `Binance`, `./#private_chat`);
                selectBox(id);
            };
            function MessangerMessagesPath(){
                thirdContainer();
                    
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                bioauth.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex";
                notification.style.display = "none";
                referral.style.display = "none";
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "flex"; // -------------------- Container -------------------- 
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
                // document.getElementById("scroll-chat-button").style.zIndex= `0`;
                privateChatInterval();
            };
        // -------------------- Home to token     ##### 2
            function ChatButtonToPChatFunc() {
                var id = `ChatButtonToPChatFuncPath`;
                history.pushState({id}, `Binance`, `./#private_chat`);
                selectBox(id);
            };
            function ChatButtonToPChatFuncPath() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "flex"; // -------------------- Container -------------------- 
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
                privateChatInterval();
            };
        // --------------------
    //  -------------------- -------------------- -------------------- 
