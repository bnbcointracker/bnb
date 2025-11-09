class PayPin extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- PAYMENT PIN STRUCTURE -->
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
                                <span class="help-header-txt">Deposit to Account</span>
                            </div>
                            <!-- Right container-->
                            <div class="help-header-img-right">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->
                        
                <!-- -------------------- -------------------- RECEIVE PAGE PARENT CONTAINER -------------------- -------------------- -->
                <div class="dashboard-stagnant-container">
                    <div class="receive-parent-wrap" style="padding-bottom: 2.5vh">
                        <div class="container">
                            
                            <div class="rulespolicy-txt">How to Deposit</div>
                            <p class="line-height-zero rulepolicy-lg-txt">1.Choose a payment method</p>
                            <p class="rulespolicy-sm-txt">Click on any of the payment method preferred by you. this action will navigate to customer care</p>
                            <p class="line-height-zero rulepolicy-lg-txt">2.Follow the instructions of the customer care.</p>
                            <p class="rulepolicy-lg-txt">3.Note to screenshot your payment, or better, keep your payment receipt safe.</p>
                            



                            <div class="rulespolicy-txt" style="padding-top: 2.5vh">Available Payment Options</div>
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/cashapp.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Cash App</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/paypal.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">PayPal</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/zelle.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Zelle</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/applepay.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Apple Pay</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/venmo.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Venmo</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/chime.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Chime</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/wellsfargo.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Wells Fargo</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/moneygram.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Money Gram</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/westernunion.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Western Union</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/america.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Bank of America</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="svg/citi.svg" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt">Citi Bank</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
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
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("pay-pin-page", PayPin);