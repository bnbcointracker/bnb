class Assets extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ASSETS STRUCTURE -->
            <div class="assets-page-display">
                
                <!-- -------------------- -------------------- ASSETS PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="assets-parent-container">
                        <!-- -------------------- Assets header container -------------------- -->
                        <div class="assets-header">
                            <div class="container">
                                <!-- Assets link container-->
                                <div class="assets-header-link-wrap" id="assets-header-link-wrapper">
                                    <div class="help-header-img asset-visi" id="assets-back-svg-btn">
                                        <img src="svg/backarrowb.svg" class="img-fluid">
                                    </div>
                                    <div class="help-header-img-right" id="language-index">
                                        <img src="svg/globe.svg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <!-- assets large image -->
                            <div class="assets-img">
                                <img src="svg/binancebackground.svg" class="img-fluid">
                            </div>
                            <div  class="assets-header-circle" id="trans-1"></div>
                            <!-- Username Container -->
                            <div class="container">
                                <!-- Username -->
                                <div class="assets-username-wrap">
                                    <span class="assets-username-txt cont-dark-font">Hello, <span class="user-personal-name cont-dark-font"></span></span>
                                    <div class="assets-unverified-btn" id="assets-unverified-identifier-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Header Bottom -------------------- -->
                        
                        <div class="asset-header-bottom-wrap" id="trans-2">
                            <div class="asset-header-bottom"></div>
                            <div class="asset-header-bottom"></div>
                        </div>
                        
                        <!-- Assets  -->
                        <div class="container"><p class="assets-txt-main">Total Assets</p></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Assets Binance card container --- The first container -------------------- -->
                        <div class="assets-card-wrap">
                            <div class="assets-card-background"></div>
                            <div class="container">
                                <div class="assets-card-first-pad">
                                    <div class="container">
                                        <!-- Asset card first row -->
                                        <div class="assets-card-first-row">
                                            <div class="assets-card-first-left">
                                                <div class="assets-card-binance-logo">
                                                    <img src="svg/binance.svg" class="img-fluid">
                                                </div>
                                                <span class="assets-card-user-txt one-line">BNB User</span>
                                            </div>
                                            <div class="assets-card-first-img">
                                                <img src="svg/user.svg" class="img-fluid">
                                            </div>
                                        </div>
                                        
                                        <!-- Asset card second set of containers -->
                                        <div class="assets-card-value"><span id="assetaccountbal">$0.00</span></div>
                                        <div class="assets-card-value-txt one-line">BNB Cryptic Vault</div>
                                            
                                        <div class="assets-card-second-row">
                                            <div class="assets-unverified-btn" style="margin: 0px" id="assets-unverified-identifier-2">
                                                
                                            </div>
                                            <!-- Date -->
                                            <span id="assets-date"></span>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <!-- Seperation line -->
                            <div class="assets-card-line"></div>
                            
                            <div class="assets-card-second-pad">
                                <div class="container-fluid">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-9 p-2">
                                                <div class="assets-card-btn" id="assets-card-btn-1"><span id="assets-card-verify-txt" class="assets-card-btn-txt one-line"></span></div>
                                            </div>
                                            
                                            <div class="col-3 p-2">
                                                <div class="assets-card-btn" id="assets-card-btn-2" onclick="AssetsToAbout()">
                                                    <div class="assets-card-btn-img">
                                                        <img src="svg/infob.svg" class="img-fluid" style="padding: 0.2em">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Assets Binance card container --- The first container -------------------- -->
                        <div class="assets-card-wrap mt-3">
                            <div class="assets-card-background"></div>
                            <div class="container">
                                <div class="assets-card-first-pad">
                                    <div class="container">
                                        <!-- Asset card first row -->
                                        <div class="assets-card-first-row">
                                            <div class="assets-card-first-left">
                                                <div class="assets-card-binance-logo">
                                                    <img src="svg/dollarsymbol.svg" class="img-fluid">
                                                </div>
                                                <span class="assets-card-user-txt one-line">EA Account</span>
                                            </div>
                                            <div class="assets-card-first-img" style="transform: rotate(180deg);">
                                                <img src="svg/qrcode.svg" class="img-fluid">
                                            </div>
                                        </div>
                                            
                                        <div class="dollar-card-second-row mb-3 mt-4">
                                            <div class="ml-3">
                                                <!-- Asset card second set of containers -->
                                                <div class="assets-card-value">$<span id="dollaraccountbal" class="one-line">0.00</span></div>
                                                <div class="assets-card-value-txt one-line">BNB EA</div>
                                            </div>
                                            <!-- Date -->
                                            <div style="height: auto; width: fit-content;">
                                                <div class="token-header-btn" onclick="AssetToDollar()" style="padding: 0.55em 1em; border: 2px solid var(--yellow-background)">
                                                    <!-- link image container -->
                                                    <div class="token-header-btn-img-wrap">
                                                        <div class="token-header-btn-img">
                                                            <img src="svg/cardsend.svg" class="img-fluid">
                                                        </div>
                                                    </div>
                                                    <div class="dollar-header-btn-txt">Open Account</div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- User information container -------------------- -->
                            <div class="asset-info-wrap">
                                <div class="container">
                                    <div class="assets-info">
                                        <div class="assets-info-txt">Name</div>
                                        <div class="assets-info-txt"><span class="user-personal-name"></span></div>
                                    </div>
                                    
                                    <div class="assets-info">
                                        <div class="assets-info-txt">Email</div>
                                        <div class="assets-info-txt"><span class="user-personal-email"></span></div>
                                    </div>
                                </div>
                                
                                <!-- Seperation line -->
                                <div class="assets-user-seperation-line"></div>
                                
                                <div class="container">
                                    <div class="row">
                                        <div class="col-6 p-2">
                                            <div class="assets-card-btn assets-btn-border" id="assets-card-btn-id"><span class="assets-card-btn-txt" >User Information</span></div>
                                        </div>
                                
                                        <div class="col-6 p-2">
                                            <div class="assets-card-btn yellow-color" id="assets-card-settings-btn">
                                                <span class="assets-card-btn-txt cont-dark-font">Go to Settings</span>
                                                <div class="verify-img">
                                                    <img src="svg/settingsb.svg" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Support button -------------------- -->
                        <div class="assets-support-btn-wrap" onclick="AssetsToSupport()">
                            <div class="container">
                                <div class="assets-support-btn">
                                    <div class="assets-support-left-wrap">
                                        <div class="assets-support-img-wrap">
                                            <div class="assets-support-img-left">
                                                <img src="svg/supportbc.svg" class="img-fluid">
                                            </div>			
                                        </div>
                                        <span class="assets-support-txt">Go to support for more</span>
                                    </div>
                                    <div class="assets-support-img-right">
                                        <img src="svg/backarrowbc.svg" style="rotate: 180deg;" class="img-fluid">
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
        `;
    }
}

customElements.define("assets-page", Assets);
//  -------------------- -------------------- --------------------  





// -------------------- Assets page -------------------- 
    //  Display date in assets page
    function showDate() {
        let date = new Date();
        let d = date.getDate();
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let m = months[date.getMonth()];
        let y = date.getFullYear();
        let assetsDate = document.querySelector("#assets-date");
        assetsDate.innerHTML = `${d} · ${m} · ${y}`;
    };
    showDate();
    // -------------------- 
//  -------------------- -------------------- --------------------  