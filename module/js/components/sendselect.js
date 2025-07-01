class SendSelect extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- SELECT STRUCTURE -->
            <div class="select-page-display">
                <!-- Add token to remove parent container-->
                <div class="add-token-removebtn" onclick="BackState()"></div>



                <!-- Add token parent container-->
                <div class="add-token-parent">
                    
                    <!-- Header of the add token menu-->
                    <div class="add-token-sepline">
                        <div class="container">
                            <!-- Add token to remove parent container-->
                            <div class="addtoken-exit-btn btn-display" onclick="BackState()"><img src="svg/exit.svg" class="img-fluid"></div>
                            <div class="add-token-header">
                                <!-- Left container -->
                                <div class="add-token-left-wrap cursor">
                                    <div class="add-token-txt-img">
                                        <img src="svg/addtoken.svg" class="img-fluid">
                                    </div>
                                    <span class="add-token-txt one-line">Send Token</span>
                                </div>
                                <!-- Right container-->
                                <div class="add-token-right-wrap">
                                    <input class="add-token-input" type="text" id="sendselecttoken" onkeyup="SearchSend()" placeholder="Search tokens here..." >
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- -------------------- -------------------- -->
                    <div class="token-scroll-background"><sendtokenloopscript></sendtokenloopscript></div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                    
                    <div class="add-token-display-background" id="send-select-token-display-background">
                        <!-- Images -->
                        <div class="hmepg-display-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                        <div class="hmepg-token-img-txt one-line">No assets found</div>
                    </div>
                    
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("select-send-page", SendSelect);





// -------------------- ADD TOKEN  - PAGE --------------------         
    function SendTokenLoopCall() {
        // Loop event
        function SendTokenLoop(arg) {
            let SendTokenString = ``;
            for (let i = 0; i < arg.length; i++) {
                SendTokenString += `
                    <!-- Token container -->
                    <div class="send-select-token-main-wrap" data-toggle-id="${ CryptoLocalData[i].name }">
                        <div class="container">
                            <div class="add-token-sub-wrap">
                                <!-- Token image container -->
                                <div class="hmepg-token-img-wrap">
                                    <img src="svg/token/${ CryptoLocalData[i].img }.svg" class="img-fluid page-refresh">
                                </div>		
                                <!-- Token container -->
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <!-- Left container -->
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name send-select-token-toggle line-height one-line">${ CryptoLocalData[i].name }</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="hmepg-sub-token-right-con convertselect-sub-token-right-con">
                                            (Bal: ${ CryptoLocalData[i].balance } ${ CryptoLocalData[i].symbol })
                                        </div>
                                    </div>		
                                    <!-- Token line -->
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                        </div>
                        <div class="add-token-absolute" onclick="SendToken(this)" data-send-id="${ i }"></div>
                    </div>
                `;
            }
            return SendTokenString;
        }
        
        document.querySelector("sendtokenloopscript").innerHTML = `
            ${SendTokenLoop(CryptoLocalData)}
        `;
        // -------------------- 
    }
//  -------------------- -------------------- -------------------- 





// --------------------  - PAGE --------------------         
    //  
    function SearchSend() {
        let searchList = document.getElementsByClassName("send-select-token-main-wrap");
        var filter = document.getElementById("sendselecttoken").value.toUpperCase();
        for(let i = 0; i < searchList.length; i++) {
            a = searchList[i].getElementsByClassName("send-select-token-toggle")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                searchList[i].style.display = "flex";
            } else {
                searchList[i].style.display = "none";
            };
        };

        // 
        var display = document.getElementById("send-select-token-display-background")
        if (document.querySelectorAll(".send-select-token-main-wrap").length !== document.querySelectorAll(".send-select-token-main-wrap[style='display: none;']").length) {
            display.style.display = "none";
        } else {
            display.style.display = "flex";
        }
    };
    // -------------------- 
//  -------------------- -------------------- --------------------  
