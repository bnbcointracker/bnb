class Token extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `  
            <!-- TOKEN STRUCTURE -->
            <div class="token-page-display">
                
                <!-- -------------------- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -------------------- -->
                    
                    <div class="token-parent-wrap">

                        <!-- -------------------- Token Header wrap -------------------- -->
                            <div class="token-header-wrap">

                                <!-- -------------------- Token Header Container -------------------- -->
                                <div class="help-header-wrap">
                                    <div class="container">
                                        <div class="help-header-container">
                                            <!-- Left container-->
                                            <div class="help-left-container">
                                                <div class="help-header-img" onclick="BackState();clearSendInput()">
                                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                                </div>
                                                <span id="token-ccc-header-txt" class="help-header-txt page-refresh">${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol })</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="token-header-right-img" onclick="TokenToMarketInfo()" style="background: rgba(250, 250, 250, 0.2);border: 1.75px solid rgba(250, 250, 250, 0.55);backdrop-filter: blur(7.5px);border-radius: 0.75em;padding: 0.3em 1.2em;border-radius: 0.5em;height: auto;width: 4.3em;display: flex;flex-direction: row;">
                                               <img src="svg/tokenanalytics.svg" class="img-fluid">
                                               <span class="token-header-btn-txt" style="font-size: 0.85em;padding-left: 0.5em;">Info</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->

                                <div class="container">
                                    <!-- Logo section-->
                                    <div class="token-weblogo-wrap">
                                        <div class="token-web-logo">
                                            <img src="svg/binance.svg" class="img-fluid">
                                        </div>
                                        <!-- price and rate container -->
                                        <div class="token-price-rate-wrap">
                                            <div id="token-ccc-price-txt" class="token-price-txt page-refresh">$${ CryptoLocalData[TokenPage].price_comma }</div>
                                            <div id="token-ccc-rate-txt" class="token-rate-txt page-refresh">${ CryptoLocalData[TokenPage].query }%</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Token logo container-->
                                    <div class="token-logo-wrap">
                                        <!-- Token logo image -->
                                        <div id="token-ccc-logo-img" class="token-logo-img">
                                            <img src="svg/token/${ CryptoLocalData[TokenPage].img }.svg" class="img-fluid page-refresh">
                                        </div>
                                        <div id="token-ccc-exchange-rate" class="token-exchange-rate page-refresh one-line">${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol } ≈ $<span>0.00</span></div>
                                    </div>
                                    
                                    <!-- Header buttons section -->
                                    <div class="row token-btn-section">
                                        <!-- Send Button -->
                                        <div class="col-4 p-2">
                                            <div class="token-header-btn" onclick="TokenToSend()" style="border: 1.75px solid rgba(250, 250, 250, 0.55)">
                                                <!-- link image container -->
                                                <div class="token-header-btn-img-wrap">
                                                    <div class="token-header-btn-img">
                                                        <img src="svg/cardsend.svg" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="token-header-btn-txt">Send</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Receive Button -->
                                        <div class="col-4 p-2">
                                            <div class="token-header-btn" onclick="TokenToReceive()" style="border: 1.75px solid rgba(250, 250, 250, 0.55)">
                                                <!-- link image container -->
                                                <div class="token-header-btn-img-wrap">
                                                    <div class="token-header-btn-img">
                                                        <img src="svg/qrcode.svg" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="token-header-btn-txt">Receive</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Copy Button -->
                                        <div class="col-4 p-2">
                                            <div class="token-header-btn" onclick="copyTokenOption()" style="border: 1.75px solid rgba(250, 250, 250, 0.55)">
                                                <!-- link image container -->
                                                <div class="token-header-btn-img-wrap">
                                                    <div class="token-header-btn-img" id="token-copy-btn-img">
                                                        <img src="svg/copy.svg" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="token-header-btn-txt">Copy</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                        <!-- -------------------- Menu Header Container -------------------- -->
                            <div class="container">
                                <!-- In and Out section -->
                                <div class="token-transfer-wrap">
                                    <div class="token-transfer-con" id="token-ccc-transfer-con"></div>
                                    <img src="svg/calender.svg" class"img-fluid">
                                </div>
                                <!-- Transaction History -->
                                <div class="token-history-txt">Transaction History</div>

                                <!-- Bottom image -->
                                
                                <div class="transaction-display-background" id="transaction-history-token">
                                    <div class="hmepg-token-img-txt one-line">No Transactions has been made yet</div>
                                    <!-- Images -->
                                    <div class="transaction-none-display-token-img">
                                        <img src="svg/binance.svg" class="img-fluid">
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
    };
}

customElements.define("token-page", Token);