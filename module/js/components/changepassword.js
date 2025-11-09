class ChangePassword extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="send-page-display">
                
                <!-- -------------------- header container -------------------- -->
                <div class="help-header-wrap dark-background">
                    <div class="container">
                        <div class="help-header-container">
                            <!-- Left container-->
                            <div class="help-left-container">
                                <div class="help-header-img btn-display" onclick="BackState()">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <span class="help-header-txt">EA Trader</span>
                            </div>
                        </div>
                    </div>
                </div>
                        
                <!-- -------------------- -------------------- SETTINGS PAGE PARENT CONTAINER -------------------- -------------------- -->
                <div class="dashboard-stagnant-container">
                    <div class="refhis-parent">
                        <div class="container">
                            <!-- Card container -->
                            <div class="ea-card-wrap">
                                <div class="ea-card-wrap-sub-con">
                                    <!-- Left -->
                                    <div class="refhis-card-txt-con">
                                        <span class="refhis-card-sm-txt">Total Balance</span>
                                        <div class="refhis-card-lg-txt"><span class="refhis-card-lg-b4">$</span><span id="EAHistoryBalance" class="one-line">0</span></div>
                                    </div>
                                    
                                    <!-- Right -->
                                    <div class="refhis-card-txt-con">
                                        <span class="refhis-card-sm-txt">Profit(%)</span>
                                        <span id="EAHistoryNumber" class="refhis-card-lg-txt"><span id="EAHistoryPercent" class="one-line">-</span>%</span>
                                    </div>
                                </div>
                                
                                <div class="ea-card-wrap-sub-con">
                                    <div class="ea-card-wrap-sub-con" id="dollar-change-header-btn">
                                        <!-- Send Button -->
                                        <div class="col-8 p-1">
                                            <div class="token-header-btn" onclick="HomeToVerification()" style="border: 2px solid var(--yellow-background)">
                                                <!-- link image container -->
                                                <div class="token-header-btn-img-wrap">
                                                    <div class="token-header-btn-img">
                                                        <img src="svg/unverifiedtick.svg" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="dollar-header-btn-txt" style="color: var(--white-font)">Verify your Account</div>
                                            </div>
                                        </div>
                                        <!-- Send Button -->
                                        <div class="col-4 p-1">
                                            <div class="token-header-btn" id="dollar-copy-btn-img" onclick="copyAccountIDOption()" style="border: 4px solid var(--yellow-background);background: var(--yellow-background)">
                                                <div class="dollar-header-btn-txt">Copy ID</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->



                    <!-- --------------------  -------------------- -->
                        <div class="hmepg-token-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hmepg-token-container">
                                            
                                            <span class="hmepg-token-acc-txt">EA's Trade History</span>
                                            
                                            <!-- Image container-->
                                            <div class="refhis-img-wrap" id="ea-transaction-history-firebase">
                                                <!-- -->
                                                <div class="refhis-img" style="opacity:0.25;margin-top: 2em"><img src="svg/binance.svg" class="img-fluid"></div>
                                                <span class="refhis-img-txt">Your trading bot from BNB CoinTracker has not been authorized to start BNB CoinTracker.</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("change-password-page", ChangePassword);