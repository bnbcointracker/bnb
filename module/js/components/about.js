class About extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ABOUT STRUCTURE -->
            <div class="about-page-display">
                <!-- -------------------- -------------------- ABOUT PARENT CONTAINER -------------------- -------------------- -->

                    <!-- -------------------- Header CoinTracker -------------------- -->
                    <div class="help-header-wrap dark-background">
                        <div class="container">
                            <div class="help-header-container">
                                <!-- Left container-->
                                <div class="help-left-container">
                                    <div class="help-header-img btn-display-clone" id="about-header-back">
                                        <img src="svg/arrowleft.svg" class="img-fluid">
                                    </div>
                                    <span class="help-header-txt">About Us</span>
                                </div>
                                <!-- Right container-->
                                <div class="help-header-img-right"></div>
                            </div>
                        </div>
                    </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->



                    <div class="dashboard-stagnant-container pb-4">
                        <!-- -------------------- Founder Image container -------------------- -->
                            <div class="founder-detail-wrap">
                                <div class="founder-img-wrap">
                                    <div class="founder-img">
                                        <img src="img/founder.webp" class="img-fluid">
                                    </div>
                                </div>
                                <!---->
                                <div class="founder-name">Changpeng Zhao</div>
                                <div class="founder-status">BNB / CEO</div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- --------------------  -------------------- -->
                        <div class="container" id="about-firebase">
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.binance.com/en/about'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">About us</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="svg/cold.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.binance.com/en/terms'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Terms of use</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="svg/cold.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.binance.com/en/privacy'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Privacy policy</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="svg/cold.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.binance.com/en/terms-simple-earn'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Terms and conditions</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="svg/cold.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.binance.com/en/event/user_protection'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Our commitment to user protection</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="svg/cold.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                                
                            <!-- Token container -->
                            <div class="token-main-wrap" onclick="document.location.href='https://www.binance.com/en-NZ/blog'">
                                <!-- Token image container -->
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Binance blog</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con">
                                            <div class="settings-hover">
                                                <img src="svg/cold.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>			
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                        </div>

                    </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("about-page", About);