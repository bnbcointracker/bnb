class Language extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- LANGUAGE STRUCTURE -->
            <div class="language-page-display" s>
                
                <!-- -------------------- -------------------- RECEIVE PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="receive-parent-wrap">
                    
                        <!-- -------------------- Header container -------------------- -->
                        <div class="help-header-wrap dark-color">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container" id="asset-help-left-container">
                                            <div class="help-header-img btn-display-clone">
                                                <img src="svg/arrowleft.svg" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt">Langage</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="help-header-img-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <div class="trans-display-background">
                            <div class="hmepg-token-img-txt one-line">This feature will soon be available</div>
                            <!-- Images -->
                            <div class="hmepg-display-img">
                                <img src="svg/binance.svg" class="img-fluid">
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- --> 
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("language-page", Language);