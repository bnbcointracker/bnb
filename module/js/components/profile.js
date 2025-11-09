class Profile extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- FORGET PASSWORD STRUCTURE -->
            <div class="forget-password-page-display">
                <!-- -------------------- Header container -------------------- -->
                <div class="help-header-wrap dark-color">
                    <div class="container">
                        <div class="help-header-container">
                            <!-- Left container-->
                            <div class="help-left-container">
                                <div class="help-header-img btn-display" onclick="BackState()">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <span class="help-header-txt" id="send-sss-header-txt">Messenger</span>
                            </div>
                            <!-- Right container-->
                            <div></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- Container -------------------- -->
                <div class="mess-comment-notify-wrap" id="mess-chat-option-notify">
                    <div class="container">
                        <div class="send-notify-sub-wrap">
                            <div class="comment-delete-btn" onclick="messengerDeleteDisplayAbsolute()"><img src="svg/delete.svg" class="img-fluid"></div>
                            <div class="mesg-right-con">
                                <div class="message-user-exit-btn" onclick="exitMessengerOffBtn()"><img src="svg/exit.svg" class="img-fluid"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->




                <!-- -------------------- Header container -------------------- -->
                <div class="bio-main-wrap">
                    <div class="comment-main-con" id="my-member-scrollbar-event" style="padding-bottom: 1em">
                        <!-- Members container -->
                        <div class="my-member-list-container" id="my-member-list-container"></div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("profile-page", Profile);