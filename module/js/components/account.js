class Account extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ACCOUNT STRUCTURE -->
            <div class="account-page-display">
            
                <!-- -------------------- Header container -------------------- -->
                <div class="help-header-wrap dark-color">
                    <div class="container">
                        <div class="help-header-container">
                            <!-- Left container-->
                            <div class="help-left-container" id="notify-main-left-container">
                                <div class="help-header-img btn-display-clone" id="notify-back-btn">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <span class="help-header-txt">Notification</span>
                            </div>
                            <!-- Right container-->
                            <div class="help-header-img-right"></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->


                <!-- Message Panel -->
                <div class="dashboard-stagnant-container">
                    <div class="notification-panel" id="notification-message-panel" style="padding-top: 1.25em;">
                        <div class="hmepg-token-img-txt one-line">Notification Inbox is empty.</div>
                        <!-- Images -->
                        <div class="transaction-none-display-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("account-page", Account);