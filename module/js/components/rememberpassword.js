class RememberPassword extends HTMLElement{
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
                                <span class="help-header-txt">U.S Dollar Account</span>
                            </div>
                        </div>
                    </div>
                </div>
                        
                <!-- -------------------- -------------------- SETTINGS PAGE PARENT CONTAINER -------------------- -------------------- -->
                <div class="dashboard-stagnant-container">
                    <div class="refhis-parent">
                        <div class="container">
                            <!-- Card container -->
                            <div class="dollar-card-wrap">
                                <div class="ea-card-wrap-sub-con" style="padding: 0 1em">
                                    <!-- Left -->
                                    <div class="refhis-card-txt-con">
                                        <span class="dollar-card-sm-txt">Total Balance</span>
                                        <div class="dollar-card-lg-txt"><span class="refhis-card-lg-b4">$</span><span id="dollarHistoryBalance" class="one-line">0</span></div>
                                    </div>
                                </div>
                                
                                <div class="dollaracc-card-wrap-sub-line"></div>
                                
                                <div class="ea-card-wrap-sub-con" style="padding: 0 1em" id="trader-card-wrap-sub-con">
                                    <!-- Send Button -->
                                    <div class="col-8 p-1">
                                        <div class="token-header-btn" onclick="EAToSupport()" style="border: 2px solid var(--yellow-background)">
                                            <!-- link image container -->
                                            <div class="token-header-btn-img-wrap">
                                                <div class="token-header-btn-img">
                                                    <img src="svg/helpandsupport.svg" class="img-fluid">
                                                </div>
                                            </div>
                                            <div class="dollar-header-btn-txt">Start EA</div>
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
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->



                    <!-- --------------------  -------------------- -->
                        <div class="hmepg-token-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hmepg-token-container">
                                            
                                            <span class="hmepg-token-acc-txt">Dollar History</span>
                                            
                                            <!-- Image container-->
                                            <div class="refhis-img-wrap" id="dollar-transaction-history-firebase">
                                                <!-- -->
                                                <div class="refhis-img new-margin-display" style="opacity:0.25;margin-top: 2em"><img src="svg/binance.svg" class="img-fluid"></div>
                                                <span class="refhis-img-txt">No trade has been made with your Dollar Account BNB CoinTracker.</span>
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

customElements.define("remember-password-page", RememberPassword);