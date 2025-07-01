class Convert extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- CONVERT STRUCTURE -->
            <div class="convert-page-display">
                
                <!-- -------------------- -------------------- CONVERT PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="convert-parent">
                        <!-- --------------------  -------------------- -->
                        <!-- --------------------  -------------------- -->
                            <div class="comment-notify-wrap" id="convert-notification">
                                <div class="container">
                                    <div class="send-notify-sub-wrap">
                                        <div class="convert-notify-btn convert-no-btn" onclick="displayConvertNoOption()">No</div>
                                        <div class="convert-notify-btn convert-yes-btn" onclick="displayConvertYesOption()">Yes</div>
                                    </div>
                                </div>
                            </div>
                        <!-- --------------------  -------------------- -->
                        <!-- --------------------  -------------------- -->
                            <div class="comment-notify-wrap" id="exceed-convert-notification">
                                <div class="container">
                                    <div class="send-notify-con">
                                        <div class="send-notify-img">
                                            <img src="svg/bulletred.svg" class="img-fluid">
                                        </div>
                                        <div class="send-notify-txt one-line" style="color: #000;">Amount Exceeds Current Balance</div>
                                    </div>
                                </div>
                            </div>
                        <!-- --------------------  -------------------- -->
                        <!-- --------------------  -------------------- -->
                        <div class="convert-parent">
                            <!-- -------------------- Header container -------------------- -->
                                <div class="help-header-wrap" style="margin-bottom: 0.5em">
                                    <div class="container">
                                        <div class="help-header-container">
                                            <!-- Left container-->
                                            <div class="help-left-container">
                                                <div class="help-header-img btn-display-clone" onclick="BackState()">
                                                    <img src="svg/backarrowbw.svg" class="img-fluid">
                                                </div>
                                                <span class="convert-nav-txt">Convert</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->


                            <div class="container">
                                <!-- Header text for convert page -->
                                <p class="convert-header-txt">Convert</p>
                            </div>
                            <!-- Fira container -->
                            <div class="send-page-fira-display" id="fira-convert-status">
                                <!-- Images -->
                                <div class="fira-display-img">
                                    <img src="svg/binance.svg" class="img-fluid">
                                </div>
                                <div class="fira-img-txt">This account is under investigation by the Financial Industry Regulatory Authority (FIRA). Please contact our customer support for clarification.</div>
                            </div>
                            <div class="main-convert-container" id="main-convert-container-id">
                                <!-- --------------------  -------------------- -->
                                    <div class="container">
                                        
                                        <!-- Form Container -->
                                        <form class="convert-form">
                                                <!-- From first container -->
                                                <div class="convert-from-wrap">
                                                    <span class="convert-from-txt">From</span>
                                                    <span class="red" id="red">Minimum Amount: ${ CryptoLocalData[from].mini } ${ CryptoLocalData[from].symbol }</span>
                                                </div>
                                                <!-- From input container -->
                                                <div class="convert-input-con">
                                                    <div class="container">
                                                    <div class="convert-input-wrap">
                                                        <!-- Right container for convert input -->
                                                        <div class="convert-right-wrap" onclick="From()">
                                                            <div class="convert-img" id="convert-from-img">
                                                                <img src="svg/token/${ CryptoLocalData[from].img }.svg" class="img-fluid page-refresh">
                                                            </div>
                                                            <span id="convert-from-selectbtn" class="convert-selectbtn">${ CryptoLocalData[from].symbol }</span>
                                                            <div class="convert-selectimg">
                                                                <img src="svg/caretdown.svg" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <!-- Middle container for the convert input -->
                                                        <input type="text" id="from-input" class="convert-input" placeholder="3.3 - 19000" readonly>
                                                        
                                                        <!-- Left container for convert input -->
                                                        <span class="convert-max-txt">MAX</span>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            <!-- Available balance container -->
                                            <span id="convert-available-txt" class="convert-available-txt">Available Balance: Choose Token</span>
                                                
                                            <!-- Switch button -->
                                            <div class="convert-switch-btn" onclick="ConvertToConvert()">
                                                <img src="img/switch.png" class="img-fluid">
                                            </div>
                                                
                                            <!-- From container -->
                                            <div class="convert-from-wrap">
                                                <span class="convert-from-txt">To</span>
                                            </div>
                                            <!-- From input container -->
                                            <div class="convert-input-con">
                                                <div class="container">
                                                    <div class="convert-input-wrap" style="justify-content: start;">
                                                        <!-- Right container for convert input -->
                                                        <div class="convert-right-wrap" onclick="To()">
                                                            <div id="convert-to-img" class="convert-img" >
                                                                <img src="svg/token/${ CryptoLocalData[to].img }.svg" class="img-fluid page-refresh">
                                                            </div>
                                                            <span class="convert-selectbtn" id="convert-to-selectbtn">${ CryptoLocalData[to].symbol }</span>
                                                            <div class="convert-selectimg">
                                                                <img src="svg/caretdown.svg" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <!-- Middle container for the convert input -->
                                                        <span id="convert-amount" class="one-line">...</span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div class="convert-form-bottom" id="convert-form-bottom" >1 ${ CryptoLocalData[from].symbol } <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> -·-</span> ${ CryptoLocalData[to].symbol }</div>
                                        </form>
                                    </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->



                                <!-- -------------------- Buttons container -------------------- -->
                                    <div class="convert-num">
                                        <div class="container">
                                            <!-- Buttons [1 - 3] -->
                                            <div class="row">
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(1)">1</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(2)">2</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(3)">3</div>
                                                </div>
                                            </div>
                                            
                                            <!-- Buttons [4 - 6] -->
                                            <div class="row">
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(4)">4</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(5)">5</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(6)">6</div>
                                                </div>
                                            </div>
                                            
                                            <!-- Buttons [7 - 9] -->
                                            <div class="row">
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(7)">7</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(8)">8</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn"  onclick="addNum(9)">9</div>
                                                </div>
                                            </div>
                                            
                                            <!-- Buttons [1 - 3] -->
                                            <div class="row">
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum('.')">·</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="addNum(0)">0</div>
                                                </div>
                                                <div class="col-4 p-2">
                                                    <div class="convert-num-btn" onclick="clearNum()">
                                                        <div class="convert-num-img">
                                                            <img src="svg/deletenumber.svg" class="img-fluid">
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="convert-convert-btn" id="convert-convert-btn-id">Convert ${ CryptoLocalData[from].symbol } to ${ CryptoLocalData[to].symbol }</div>
                                            <div class="convert-margin-bottom"></div>
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

customElements.define("convert-page", Convert);