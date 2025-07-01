class Settings extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="settings-page-display">
                
                <!-- -------------------- -------------------- SETTINGS PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="settings-parent-wrap" >
                        <!-- -------------------- Assets header container -------------------- -->
                        <div class="assets-header settings-header">
                            <div class="container">
                                <!-- Assets link container-->
                                <div class="assets-header-link-wrap">
                                    <div class="settings-header-img">
                                        <img src="svg/user.svg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <!-- assets large image -->
                            <div class="assets-img">
                                <img src="svg/binancebackground.svg" class="img-fluid">
                            </div>
                            <div  class="assets-header-circle"></div>
                            <!-- Username Container -->
                            <div class="container">
                                <!-- Username -->
                                <div class="settings-username-wrap">
                                    <span class="assets-username-txt cont-dark-font one-line">Hello, <span class="user-personal-name cont-dark-font"></span></span>
                                    <div class="assets-unverified-btn setting-verify-img">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        <!-- -------------------- Header Bottom -------------------- -->
                        <div class="asset-header-bottom-wrap">
                            <div class="asset-header-bottom"></div>
                            <div class="asset-header-bottom"></div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrapped" style="border-radius: 0 0 0.5em 0.75em;padding-top: 1em">
                            <div class="container">
                                
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToAsset()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/totalasset.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Total Assets</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToHistory()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/transactionhistory.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Transaction History</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToForward()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/bell.svg" class="img-fluid">
                                        </div>
                                        <div class="setting-notification-alarm" id="settingNotifyDisplay"></div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Notification</span>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                
                                
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToCommunity()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/community.svg" class="img-fluid">
                                        </div>
                                        <div class="setting-notification-alarm" id="settingCommunityDisplay"></div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Community</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap settings-margin" id="verification-setting-background" onclick="SettingToVerification()">
                            <div class="container">
                                
                                <!-- Token container -->
                                <div class="token-main-wrap setting-verify-wrap">

                                </div>
                            
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap settings-margin">
                            <div class="container">
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToUserInfo()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/user.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">User Profile</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>


                                
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToHelp()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/helpandsupport.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Help Center</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToAbout()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/info.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">About</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToReferral()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/referfriend.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Refer Friends and Earn</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap settings-margin">
                            <div class="container">
                                
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="HelpToSupport()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/supportbc.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Contact BNB Support</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="logout()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="svg/logout.svg" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name red one-line">LogOut</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="svg/cold.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->


            <!-- BOTTOM NAVIGATION MENU STRUCTURE -->
                <div class="bottom-nav-wrap">
                    <div class="container">
                        <div class="row">
                            <!-- Home --> 
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="homeNav()">
                                    <div class="bottom-nav-btn-sub" id="setting-screen-bottom-nav-left">
                                        <div class="bottom-nav-btn-img">
                                            <img src="svg/home.svg" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Setting -->
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="setNav()">
                                    <div class="bottom-nav-btn-sub" id="setting-screen-bottom-nav-right">
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
        `;
    }
}

customElements.define("settings-page", Settings);