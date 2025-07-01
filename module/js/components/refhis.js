class Refhis extends HTMLElement{
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
                                <span class="help-header-txt">Referral History</span>
                            </div>
                        </div>
                    </div>
                </div>
                        
                <!-- -------------------- -------------------- SETTINGS PAGE PARENT CONTAINER -------------------- -------------------- -->
                <div class="dashboard-stagnant-container">
                    <div class="refhis-parent">
                        <div class="container">
                            <!-- Card container -->
                            <div class="refhis-card-wrap">
                                <!-- Left -->
                                <div class="refhis-card-txt-con">
                                    <span class="refhis-card-sm-txt">Earn Money</span>
                                    <span class="refhis-card-lg-txt"><span class="refhis-card-lg-b4">$</span><span id="inviteHistoryBalance">0</span></span>
                                </div>
                                
                                <!-- Right -->
                                <div class="refhis-card-txt-con">
                                    <span class="refhis-card-sm-txt">Invites</span>
                                    <span id="inviteHistoryNumber" class="refhis-card-lg-txt">- -</span>
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
                                            
                                            <span class="hmepg-token-acc-txt">Successful Invitations</span>
                                            
                                            <div class="refhis-wrap">
                                                <div class="container">
                                                    <div class="refer-news-con">
                                                        <!-- Left -->
                                                        <div class="refer-news-left">
                                                            <div class="refer-news-icon">
                                                                <img src="svg/sound.svg" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <!-- Right -->
                                                        <div class="refer-news-right">Your friends need to fund their account before you get x2 their first deposit as referral reward.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <!-- Image container-->
                                            <div class="refhis-img-wrap">
                                                <!-- -->
                                                <div class="refhis-img" style="opacity:0.25"><img src="svg/binance.svg" class="img-fluid"></div>
                                                <span class="refhis-img-txt">Your reward bonus will show up immediately your referred user makes their first deposit on BNB CoinTracker.</span>
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

customElements.define("refhis-page", Refhis);