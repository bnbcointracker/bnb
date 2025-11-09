class Message extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- MESSAGE STRUCTURE -->
            <div class="message-page-display">
                
                <!-- -------------------- Header container -------------------- -->
                <div class="help-header-wrap dark-color">
                    <div class="container">
                        <div class="help-header-container">
                            <!-- Left container-->
                            <div class="help-left-container">
                                <div class="community-header-img btn-display-clone" id="community-back-btn">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <!-- Community header -->
                                <div class="comm-head-wrap pointer-event" onclick="CommunityToInfo()">
                                    <div class="comm-head-container">
                                        <div class="comm-head-img">
                                            <img src="svg/binance.svg" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="comm-head-container">
                                        <div class="comm-head-text comm-head-lg-text">
                                            BNB CoinTracker
                                        </div>
                                        <div class="comm-head-text comm-head-sm-text">
                                            <span id="message-member-num">0</span> <span style="font-weight: 700;">·</span> Members
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Right container-->
                            <div class="help-header-img-right btn-display" onclick="CommunityToInfo()"><img src="svg/dots.svg" class="img-fluid"></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->
    
    
    
    
                <div class="chat-stagnant-container">
                    <!-- -------------------- Mid main container -------------------- -->
                    <div class="comm-main-wrap">
                        <div class="comm-main-con" id="message-conversation-loader">
                            <div class="container">
                
                                <!-- -------------------- Mid sub container -------------------- -->
                                <div class="container">
                                    <div class="chat-page-floating-buttons" id="scroll-chat-button">
                                        <div class="scroll-chat-button" onclick="scrollChatButton()"><img src="svg/scroll.svg" class="img-fluid"></div>
                                        <div class="chat-page-button" onclick="CommunityToChatButton()"><img src="svg/comment.svg" class="img-fluid"></div>
                                    </div>
                                    <!-- Loading -->
                                    <div class="container mb-2">
                                        <div class="loading" id="post-loading">
                                            <div class="ball"></div>
                                            <div class="ball"></div>
                                            <div class="ball"></div>
                                            <div class="ball"></div>
                                        </div>
                                        <div class="member-end-message mb-3" id="post-end-message">Welcome to BNB CoinTracker...</div>
                                    </div>
                                    
                                    <!-- Display container -->
                                    <div class="conversation-container" id="message-conversation-container" style="padding-bottom: 1em"></div>
                                    <div id="client-side-scrollpoint"></div>
                                </div>   
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                            </div>
                        </div>
                    </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                            
        
        
        
                
                    <!-- -------------------- Admin contact container -------------------- -->
                    <div class="comm-chat-bottom" onclick="HelpToSupport()">
                        <div class="container">
                            <div class="receive-send-link-btn">
                                <div class="receive-send-left-wrap">
                                    <div class="receive-send-left-img">
                                        <img src="svg/user.svg" class="img-fluid">
                                    </div>
                                    <span class="receive-send-txt">Contact Community Admin</span>
                                </div>
                                <div class="comm-chat-right-wrap">
                                    <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                        <img src="svg/chevronb.svg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                </div>

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("message-page", Message);