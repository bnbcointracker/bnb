class TransactionHistory extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- TRANSACTION HISTORY -->
            <div class="transaction-histoy-page-display">
                <!-- -------------------- -------------------- RECEIVE PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <!-- -------------------- Header container -------------------- -->
                        <div class="help-header-wrap dark-color">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container" id="transact-main-left-container">
                                            <div class="help-header-img btn-display-clone" id="transaction-back-btn">
                                                <img src="svg/arrowleft.svg" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt">Transaction History</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="help-header-img-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                        <div class="container">
                            <div class="trans-display-background" id="transaction-history-firebase">
                                <div class="hmepg-token-img-txt one-line">No Transactions has been made yet</div>
                                <!-- Images -->
                                <div class="transaction-none-display-img">
                                    <img src="svg/binance.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->
            </div>
        `;
    }
}

customElements.define("transaction-history-page", TransactionHistory);