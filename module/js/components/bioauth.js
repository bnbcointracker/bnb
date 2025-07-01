class BioAuth extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- BOIMETRIC AUTHENTICATION STRUCTURE -->
            <div class="bio-auth-page-display">
                
                
                <!-- -------------------- Header container -------------------- -->
                <div class="help-header-wrap dark-color">
                    <div class="container">
                        <div class="help-header-container">
                            <!-- Left container-->
                            <div class="help-left-container">
                                <div class="bioauth-header-img" onclick="BackState()">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <span class="help-header-txt" id="send-sss-header-txt"><span id="comment-count-number">0</span> Comments</span>
                            </div>
                            <!-- Right container-->
                            <div class="scroll-comment-button" onclick="scrollCommentButton()"><img src="svg/scroll.svg" class="img-fluid"></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->
    
    
    
    
    
                <div class="chat-stagnant-container">
                    <!-- -------------------- Mid main container -------------------- -->

                    <div class="comment-main-wrap">
                        <div class="comment-main-con" id="comment-conversation-scroll-loader">


                            <!-- -------------------- Mid sub container -------------------- -->
                            <div class="member-container">
                                <div id="client-side-comment-scrollpoint"></div>
                                    
                                <div class="comment-notify-wrap" id="client-comment-notify">
                                    <div class="container">
                                        <div class="send-notify-sub-wrap">
                                            <div class="comment-edit-btn" onclick="editClientCommentBtn()">Edit</div>
                                            <div class="comment-delete-btn" onclick="clientDeleteDisplayAbsolute()"><img src="svg/delete.svg" class="img-fluid"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="container">
                                    <div class="comment-post-wrap">
                                        <!--Left container -->
                                        <div class="comment-post-left">
                                            
                                            
                                            <!-- Community header -->
                                            <div class="comm-head-container">
                                                <div class="comment-head-img">
                                                    <img src="svg/binance.svg" class="img-fluid">
                                                </div>
                                            </div>
                                            <div class="comm-head-container">
                                                <div class="comment-head-text comm-head-lg-text">
                                                    BNB CoinTracker
                                                </div>
                                                <div class="comment-head-text comm-head-sm-text">
                                                    <span id="bio-member-num">0</span> <span style="font-weight: 700;">·</span> Members
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <!-- Right container -->
                                        <div><div class="comm-post-date cont-dark-font" id="bio-datecomm-post-id"></div></div>
                                    </div>

                                    <!-- Post Text -->
                                    <div class="comment-post-txt" id="comment-post-txt">
                                    </div>

                                    <!-- Post Image -->
                                    <div class="comment-post-img"><div class="comment-post-img-sub" id="comment-post-img-sub"></div></div>

                                    <!--  -->
                                    <div class="comment-post-view-con">
                                        <div class="metadata">
                                            <div class="comm-post-view"><img class="comm-post-view-img" src="svg/eye.svg"><span id="view-count-number">0</span></div>
                                            <span class="time" id="bio-comm-date-format">0:00</span>
                                        </div>
                                        <div id="bio-comm-time-id">0000</div>
                                    </div>
                                </div>


                                <div class="comm-post-line"><div class="container"><div class="comm-seperation-line"></div></div></div>
                                
            
                                <!--  -->
                                <div class="container">
                                    <div style="position: absolute;margin: 0 auto" id="jump-to-id"></div>
                                    <div class="conversation-container-wrap bio-auth-conversation-container" id="bio-auth-conversation-container"></div>
                                    <!-- Loading -->
                                    <div class="container mb-2">
                                        <div class="loading" id="comment-loading">
                                            <div class="ball"></div>
                                            <div class="ball"></div>
                                            <div class="ball"></div>
                                            <div class="ball"></div>
                                        </div>
                                        <div class="member-end-message mb-3" id="comment-end-message">No more comments...</div>
                                    </div>
                                </div>

                            </div>  
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                            
                        </div>
                    </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->

                    
                
                    <!-- -------------------- Admin contact container -------------------- -->
                    <div class="comm-chat-bottom">
                        <div class="container" id="main-comment-post">
                            <div class="receive-send-link-btn">
                                <div class="receive-send-left-wrap">
                                    <div class="comm-chat-right-wrap">
                                        <div class="receive-send-right-img" id="user-client-username">B</div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Message" onchange="getClientComment(event)" class="message-input-style" id="client-comment-input-style">
                                <div class="bio-chat-right-wrap" style="cursor: pointer;" onclick="clientComment()">
                                    <div class="bio-send-right-img">
                                        <img src="svg/send.svg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                        <div class="container" id="edit-comment-post">
                            <div class="receive-send-link-btn">
                                <div class="receive-send-left-wrap">
                                    <div class="comm-chat-right-wrap">
                                        <div class="receive-send-right-img" id="user-client-username-edit">B</div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Message" class="edit-message-input-style" id="edit-comment-input-style">
                                <div class="bio-chat-right-wrap" style="cursor: pointer;" onclick="editPrivateChatComment()">
                                    <div class="bio-send-right-img">
                                        <img src="svg/send.svg" class="img-fluid">
                                    </div>
                                </div>
                                <div class="user-exit-btn" onclick="exitClientCommentBtn()"><img src="svg/exit.svg" class="img-fluid"></div>
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

customElements.define("bio-auth-page", BioAuth);