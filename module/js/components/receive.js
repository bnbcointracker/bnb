class Receive extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- RECEIVE STRUCTURE -->
            <div class="verification-page-display">
                <!-- -------------------- Header container -------------------- -->
                    <div class="help-header-wrap dark-color">
                        <div class="container">
                            <div class="help-header-container">
                                <!-- Left container-->
                                <div class="help-left-container">
                                    <div class="help-header-img btn-display" onclick="BackState()">
                                        <img src="svg/arrowleft.svg" class="img-fluid">
                                    </div>
                                    <span class="help-header-txt" id="receive-header-txt">Receive ${ CryptoLocalData[TokenPage].symbol }</span>
                                </div>
                                <!-- Right container-->
                                <div class="help-header-img-right" id="receive-header-img">
                                    <img src="svg/token/${ CryptoLocalData[TokenPage].img }.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->
                            
                        
                            

                <!-- -------------------- -------------------- RECEIVE PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="dashboard-stagnant-container">
                        <div class="receive-parent-wrap">
                            <div>
                                <!-- --------------------  -------------------- -->
                                <div class="container">
                                    <!-- Qr code -->
                                    <div class="receive-qr-code" id="receive-qr-code-un">
                                        <img src="svg/qrcode.svg" class="img-fluid">
                                    </div>
                                    <!-- wallet address -->
                                    <div id="receive-wallet-address-un" class="receive-wallet-address one-line">${ CryptoLocalData[TokenPage].name }</div>
                                    
                                    <!-- Qr code -->
                                    <div class="receive-qr-code" id="receive-qr-code-v">
                                        <img src="${ CryptoLocalData[TokenPage].qr }" class="img-fluid">
                                    </div>
                                    <!-- wallet address -->
                                    <div id="receive-wallet-address" class="receive-wallet-address one-line">${ CryptoLocalData[TokenPage].wallet }</div>

                                    <!-- wallet address -->
                                    <div id="receive-network" class="receive-network one-line">Token: ${ CryptoLocalData[TokenPage].network }</div>
                                </div>
                            </div>



                            <div class="container">
                                <!-- receive note  -->
                                <div class="receive-note" id="receive-note-1">
                                    You must have a verified account with BNB CoinTracker before depositing in BNB CoinTracker <br>
                                    <div class="receive-get-verify" onclick="AssetsToVerification()"> Get verified now! </div>
                                </div>
                                <!-- receive note  -->
                                <div class="receive-note" id="receive-note-2">
                                    Send only ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol }) to this Address.<br>
                                    Failure to do so, may result in permanent loss!
                                </div>
                            </div>


                            <div class="container">
                                <!-- Button container -->
                                <div class="receive-btn-wrap">
                                    <div class="receive-btn" id="receive-copy-btn">
                                        <div class="receive-btn-img-wrap">
                                            <div class="receive-btn-img">
                                                <img src="svg/copy.svg" class="img-fluid">
                                            </div>
                                        </div>
                                        <span class="receive-btn-txt" id="receive-share">Copy</span>	
                                    </div>
                                </div>

                                <div class="withdrawal-btn" onclick="SendToDeposit()">Deposit Options</div>
                                
                                <!-- Link to send token -->
                                <div class="receive-send-link-btn-wrap" onclick="TokenToSendPath()">
                                    <div class="container">
                                        <div class="receive-send-link-btn">
                                            <div class="receive-send-left-wrap">
                                                <div class="receive-send-left-img">
                                                    <img src="svg/backarrowbc.svg" class="img-fluid">
                                                </div>
                                                <span class="receive-send-txt" id="receive-send-txt">Go to Send ${ CryptoLocalData[TokenPage].symbol }</span>
                                            </div>
                                            <div class="receive-send-right-wrap">
                                                <div class="receive-send-right-img">
                                                    <img src="svg/expandingopposite.svg" class="img-fluid">
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

customElements.define("receive-page", Receive);
 




// --------------------  - PAGE --------------------         
    //  
    function copyText() {
        var $copyText = document.getElementById("receive-wallet-address").innerText;
        var button = document.getElementById("receive-share");
        navigator.clipboard.writeText($copyText).then(function() {
            var originalText = button.innerText;
            let imgTag = '<img src="svg/checkmark.svg" style="height:1.25em;width:1.25em;margin-left: 0.125em">'
            button.innerHTML = `Copied ${imgTag}`;
            setTimeout(function(){
            button.innerText = originalText;
            }, 1500);
        }, function() {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        });
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 


// --------------------  - PAGE --------------------         
    //  
    function copyTextUn() {
        var $copyText = document.getElementById("receive-wallet-address-un").innerText;
        var button = document.getElementById("receive-share");
        navigator.clipboard.writeText($copyText).then(function() {
            var originalText = button.innerText;
            let imgTag = '<img src="svg/checkmark.svg" style="height:1.25em;width:1.25em;margin-left: 0.125em">'
            button.innerHTML = `Copied ${imgTag}`;
            setTimeout(function(){
                button.innerText = originalText;
            }, 1500);
        }, function() {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        });
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 