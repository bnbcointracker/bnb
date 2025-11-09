class Pattern extends HTMLElement{
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
                                <div class="community-header-img" onclick="CommunityToChatButton()">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <!-- Community header -->
                                <div class="comm-head-wrap" id="pc-id-conv-name-wrap">
                                    <div class="message-username messanger-name-border" style="background: var(--yellow-background);">B</div>
                                    <div class="comm-head-container">
                                        <div class="pc-comm-head-lg-text">
                                            BNB CoinTracker
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Right container-->
                            <div class="help-header-img-right btn-display"></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->
    
    

                <div class="mess-comment-notify-wrap" id="private-chat-chat-option-notify">
                    <div class="container">
                        <div class="send-notify-sub-wrap">
                            <div class="comment-edit-btn" onclick="editPrivateChatDisplayOn()" style="color: #fafafa;">Edit</div>
                            <div class="mesg-right-con">
                                <div class="comment-delete-btn" onclick="privateChatDeleteDisplayAbsoluteOn()" style="margin-right: 1.5em;"><img src="svg/delete.svg" class="img-fluid"></div>
                                <div class="message-user-exit-btn" onclick="pcDeleteDisplayAbsolute()"><img src="svg/exit.svg" class="img-fluid"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div class="chat-stagnant-container">
                    <!-- -------------------- Mid main container -------------------- -->
                    <div class="pc-comm-main-wrap">

                        <div class="pc-comm-main-con" id="pc-conversation-loader">  
                            <!-- -------------------- Mid sub container -------------------- -->
                            <div class="pc-null-img-con">
                                <div class="pc-null-img-sub-con">
                                    <div class="container px-4">
                                        <div class="pc-null-img-sub">
                                            <div class="pc-null-img-lg-txt">No Messages here...</div>
                                            <div class="pc-null-img-img"><img src="svg/binance.svg" class="img-fluid"></div>
                                            <div class="pc-null-img-sm-txt">Send a Message below</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                        </div>
                        <div id="pc-client-side-scrollpoint"></div>
                    </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                            
        
        
        
                
                    <!-- -------------------- Admin contact container -------------------- -->
                    <div class="pc-comm-chat-bottom">
                        <div class="container" id="pc-main-comment-post">
                            <div class="receive-send-link-btn">
                                <div class="receive-send-left-wrap">
                                    <div class="comm-chat-right-wrap">
                                        <div class="receive-send-right-img" id="pc-user-client-username">B</div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Message" class="message-input-style" id="pc-client-comment-input-style">
                                <div class="bio-chat-right-wrap" style="cursor: pointer;" onclick="privateCClientComment()">
                                    <div class="bio-send-right-img">
                                        <img src="svg/send.svg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                        <div class="container" id="pc-edit-comment-post">
                            <div class="receive-send-link-btn">
                                <div class="receive-send-left-wrap">
                                    <div class="comm-chat-right-wrap">
                                        <div class="receive-send-right-img" id="pc-user-client-username-edit">B</div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Message" class="edit-message-input-style" id="pc-client-edit-comment-input-style">
                                <div class="bio-chat-right-wrap" style="cursor: pointer;" onclick="editPrivateChatComment()">
                                    <div class="bio-send-right-img">
                                        <img src="svg/send.svg" class="img-fluid">
                                    </div>
                                </div>
                                <div class="user-exit-btn" onclick="editPrivateChatDisplayOff()"><img src="svg/exit.svg" class="img-fluid"></div>
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

customElements.define("pattern-page", Pattern);