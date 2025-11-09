class Rules extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- RULES STRUCTURE -->
            <div class="send-page-display">
        
                <!-- -------------------- Header container -------------------- -->
                    <div class="help-header-wrap dark-background">
                        <div class="container">
                            <div class="help-header-container">
                                <!-- Left container-->
                                <div class="help-left-container">
                                    <div class="help-header-img btn-display">
                                        <img src="svg/arrowleft.svg" onclick="BackState()" class="img-fluid">
                                    </div>
                                    <span class="help-header-txt">Refer and earn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->


                <!-- -------------------- -------------------- POLICY PAGE PARENT CONTAINER -------------------- -------------------- -->
                <div class="dashboard-stagnant-container">
                    <div class="rulespolicy-parent">
                        
                        <!-- --------------------  -------------------- -->
                            <div class="container">
                                <!--  -->
                                <div class="rulespolicy-txt">REFFERAL RULES</div>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">1.How do referrals work?</p>
                                <p class="rulespolicy-sm-txt">When your referred friend registers an account with BNB and makes a deposit through the link you have shared, both of you will benefit - you will receive double their first deposit amount, and your referred friend will receive six times the value they have deposited (for a total of eight times the initial deposit).</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">2. Who is a valid user?</p>
                                <p class="rulespolicy-sm-txt">A. The invitee's should be one that has not yet been registered and verified with BNB CoinTracker as at the time the inviter makes hes first deposit.
                                <br>
                                B. After signing up on BNB CoinTracker, the invitee should make deposits to get x6 their deposit.</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">3. About Promo reward</p>
                                <p class="rulespolicy-sm-txt">Once your friend has been invited to register and successfully made their initial deposit, both of you will be immediately rewarded. Our rate is the highest, with 20 seconds.</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">4. How can I check my referrals?</p>
                                <p class="rulespolicy-sm-txt">To determine the number or history of your invited friends, you can go to Home > Menu > Refer friend > Referral History to see if any of the people you have invited have made a deposit.</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">5. Other</p>
                                <p class="rulespolicy-sm-txt">A new user can only be bound by the inviter once, and one device and account can only participate once. Should there be any suspicious invitations, BNB reserves the right to withhold any rewards that may apply. There are a variety of uncertain factors on the internet, so please understand and accept that BNB CoinTracker holds the right to take measures such as eliminating irregularities or adjusting, suspending or canceling this event via different means due to unforeseen occurrences like force majeure, network issues, communication line failure, massive computer paralysis or large-scale cheating during this activity - without being held liable for any consequent losses incurred by you.</p>
                                
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("rules-page", Rules);