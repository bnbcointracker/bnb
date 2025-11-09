class Send extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- SEND STRUCTURE -->
            <div class="send-page-display">
                <!-- -------------------- Header container -------------------- -->
                <div class="help-header-wrap dark-color">
                    <div class="container">
                        <div class="help-header-container" id="send-header-changer">
                            <!-- Left container-->
                            <div class="help-left-container">
                                <div class="help-header-img btn-display" onclick="BackState()">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <span class="help-header-txt">Send ${ CryptoLocalData[TokenPage].symbol }</span>
                            </div>
                            <!-- Right container-->
                            <div class="help-header-img-right">
                                <img src="svg/token/${ CryptoLocalData[TokenPage].img }.svg" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="send-notify-wrap" id="send-notify-wrap-green">
                    <div class="container">
                        <div class="send-notify-sub-wrap">
                            <div class="send-notify-con">
                                <div class="send-notify-img">
                                    <img src="svg/checkmark.svg" class="img-fluid">
                                </div>
                                <div class="send-notify-txt one-line">Yes I'm sure about transaction?</div>
                            </div>
                            <div class="send-notify-btn" onclick="sendMoney()">Yes</div>
                        </div>
                    </div>
                </div>
                <div class="send-notify-wrap" id="send-notify-wrap-red">
                    <div class="container">
                        <div class="send-notify-con">
                            <div class="send-notify-img">
                                <img src="svg/bulletred.svg" class="img-fluid">
                            </div>
                            <div class="send-notify-txt one-line">Amount Exceeds Current Balance</div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->
    
    
    
                
                <!-- -------------------- -------------------- SEND PAGE PARENT CONTAINER -------------------- -------------------- -->
                <div class="dashboard-stagnant-container">
                    <!-- Fira container -->
                    <div class="send-page-fira-display" id="fira-send-status">
                        <!-- Images -->
                        <div class="fira-display-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                        <div class="fira-img-txt">This account is under investigation by the Financial Industry Regulatory Authority (FIRA). Please contact our customer support for clarification.</div>
                    </div>
                    <!-- Main send container -->
                    <div class="send-parent-wrap" id="fira-send-display">
                        <div class="send-child-wrap">
                            <!-- -------------------- Main container body -------------------- -->
                            <div class="container">

                                <!-- Token balance-->
                                <div class="send-token-balance"><div class="container" id="send-zzz-xxx-ccc"><span style="padding-right: 0.5em;">${ CryptoLocalData[TokenPage].symbol } Balance: </span> ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol }</div></div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Token address to send to -->
                                <div class="send-address-input-wrap">
                                    <input placeholder="..." class="send-input" id="send-input-address" autocomplete="off" onkeyup="sendAmountAddress()" required>
                                    <div class="send-input-absolute" id="send-vvv-input-absolute">${ CryptoLocalData[TokenPage].name } Address</div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Scan Qr-code container -->
                                <div class="send-qrcode-btn" onclick="scanin()">
                                    <span>Scan QR</span>
                                    <div class="send-qrcode-img">
                                        <img src="svg/qrcode.svg" class="img-fluid">
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Amount container-->
                                <div class="send-amount-wrap">
                                    <div class="send-amount-div-wrap">
                                        <div class="send-amount-div" id="send-sss-amount-div">${ CryptoLocalData[TokenPage].symbol }</div>
                                        <div class="send-input-absolute">Current Token</div>
                                    </div>
                                    <div class="send-amount-input-wrap">
                                        <div id="send-input-wrap-script"><input type="number" autocomplete="off" placeholder="..." class="send-input" id="send-input" onkeyup="sendAmount()" readonly></div>
                                        <div class="send-input-absolute" id="send-zzz-input-absolute">Send Amount (${ CryptoLocalData[TokenPage].symbol })</div>
                                        <div class="send-input-exchange" id="send-parent-exchange"> <div id="send-input-exchange" class="one-line">≈ $0</div> <div id="send-bottom-txt" style="visibility: hidden;">Amount exceeds balance</div></div>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                            </div>
                        </div>





                        <div class="send-child-wrap">
                            <div class="container">    
                                <!-- Conversion rate -->
                                <div class="send-convert-wrap" id="send-convert-wrap-id">
                                    <div class="send-convert-sm-txt one-line">Fee≈ <div id="tip-token" class="one-line"> 0.0</div>/<div id="tip-curr" class="one-line">0.00</div> USD</div>
                                    <div class="send-convert-lg-txt one-line" id="send-zzz-convert-lg-txt">Total≈ <div id="total-token" class="one-line">0.0</div> ${ CryptoLocalData[TokenPage].symbol }/<div id="total-curr" class="one-line">0.0</div> USD</div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Send Button -->
                                <div id="send-info-btn"><div class="userinfoslide-btn">Send</div></div>
                                <!-- -------------------- -------------------- -->
                                <div class="withdrawal-btn" onclick="SendToWithdraw()">Withdrawal Options</div>
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Link to send token -->
                                <div class="receive-send-link-btn-wrap" onclick="TokenToReceivePath()">
                                    <div class="container">
                                        <div class="receive-send-link-btn">
                                            <div class="receive-send-left-wrap">
                                                <div class="receive-send-right-wrap">
                                                    <div class="receive-send-right-img">
                                                        <img src="svg/expandingopposite.svg" class="img-fluid">
                                                    </div>
                                                </div>
                                                <span class="receive-send-txt" id="receive-send-zzz-txt">Go to Receive ${ CryptoLocalData[TokenPage].symbol }</span>
                                            </div>
                                            <div class="receive-send-left-img">
                                                <img src="svg/backarrowbc.svg" class="img-fluid" style="rotate: 180deg;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                        </div>

                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->


            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("send-page", Send);