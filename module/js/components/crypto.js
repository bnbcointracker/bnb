// -------------------- PAGE DATA --------------------    
var binanceBTC;
var isVerify = typeof isVerify !== 'undefined' ? isVerify : false;

var CryptoLocalData = [
    {
        balance: "0.00000",
        cap: [],
        cg_id: "bitcoin",
        color: '247, 147, 26,',
        graph: `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1`,
        img: "01",
        id: "1",
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        minimum: "",
        mini: "0.0",
        name: "Bitcoin",
        network: "Bitcoin",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "BTC",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "ethereum",
        color: '18, 16, 11,',
        graph: `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1`,
        img: "02",
        id: "2",
        market: [],
        market_change: [],
        market_change_percent: [],
        mini: "0.0",
        minimum: "a minimum of 0.005",
        name: "Ethereum",
        network: "Ethereum (ERC20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "ETH",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "litecoin",
        color: '52, 93, 157,',
        graph: `https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=usd&days=1`,
        img: "03",
        id: "3",
        link_home: [],
        market: [],
        market_change: [],
        minimum: "",
        market_change_percent: [],
        mini: "0.0",
        name: "Litecoin",
        network: "Litecoin",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "LTC",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "dogecoin",
        color: '249, 195, 37,',
        graph: `https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=1`,
        img: "04",
        id: "4",
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        minimum: "a minimum of 5",
        mini: "0.0",
        name: "Dogecoin",
        network: "Dogecoin",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "DOGE",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "tether",
        color: '38, 161, 123,',
        graph: `https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=1`,
        img: "05",
        id: "5",
        link_block: [],
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        mini: "0.0",
        minimum: "a Ethereum minimum of 1",
        name: "Tether USD",
        network: "Tether USD (ERC20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "USDT",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "tron",
        color: '236, 8, 41,',
        graph: `https://api.coingecko.com/api/v3/coins/tron/market_chart?vs_currency=usd&days=1`,
        img: "06",
        id: "6",
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        mini: "0.0",
        minimum: "a minimum of 10",
        name: "TRON",
        network: "Tron (TRX20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "TRX",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "tether",
        color: '38, 161, 123,',
        graph: `https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=1`,
        img: "07",
        id: "7",
        link_block: [],
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        mini: "0.0",
        minimum: "a Tron minimum of 1",
        name: "Tether USD",
        network: "Tether USD (TRX20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "USDT",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "usd-coin",
        color: '0, 51, 173, ',
        graph: `https://api.coingecko.com/api/v3/coins/usd-coin/market_chart?vs_currency=usd&days=1`,
        img: "08",
        id: "8",
        link_block: [],
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        mini: "0.0",
        minimum: "a minimum of 1",
        name: "USD Coin",
        network: "USD Coin (ERC20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "USDC",
        tip: 0.0045,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "binancecoin",
        color: '243, 186, 47,',
        graph: `https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=1`,
        img: "09",
        id: "9",
        link_block: [],
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        minimum: "a minimum of 0.003",
        mini: "0.0",
        name: "BNB Coin",
        network: "BNB Coin (BEP20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "BNB",
        tip: 0.0045,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "binance-usd",
        color: '243, 186, 47,',
        graph: `https://api.coingecko.com/api/v3/coins/binance-usd/market_chart?vs_currency=usd&days=1`,
        img: "10",
        id: "10",
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        minimum: "a minimum of 1",
        mini: "0.0",
        name: "Binance USD",
        network: "Binance USD (BEP20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "BUSD",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "avalanche-2",
        color: '232, 65, 66,',
        graph: `https://api.coingecko.com/api/v3/coins/avalanche-2/market_chart?vs_currency=usd&days=1`,
        img: "11",
        id: "11",
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        mini: "0.0",
        minimum: "",
        name: "Avalanche",
        network: "Avalanche",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "AVAX",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "binance-usd",
        color: '243, 186, 47,',
        graph: `https://api.coingecko.com/api/v3/coins/binance-usd/market_chart?vs_currency=usd&days=1`,
        img: "12",
        id: "12",
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        minimum: "a Ethereum minimum of 1",
        mini: "0.0",
        name: "Binance USD",
        network: "Binance USD (ERC20)",
        price: [],
        price_comma: [],
        qr: "",
        query: [],
        query_change: [],
        symbol: "BUSD",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    },
    {
        balance: "0.00000",
        cap: [],
        cg_id: "solana",
        color: '106, 147, 207,',
        graph: `https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=1`,
        img: "13",
        id: "13",
        link_home: [],
        market: [],
        market_change: [],
        market_change_percent: [],
        mini: "0.0",
        name: "Solana",
        network: "Solana",
        price: [],
        price_comma: [],
        qr: "",
        minimum: "a minimum of 0.5",
        query: [],
        query_change: [],
        symbol: "SOL",
        tip: 0.0005,
        total_supply: [],
        circle_supply: [],
        volume: [],
        wallet: ""
    }
];

// -------------------- PAGE FUNCTIONS --------------------         
var TokenPage = 0;

function SendPage(element) {
    TokenPage = element.dataset.changeId;
    if (typeof HomeToTokenPath === "function") HomeToTokenPath();
    if (typeof hmepgaddToken === "function") hmepgaddToken();
}

var hmepgDisplayToggle = [];

function openToggle(open) {
    hmepgDisplayToggle.push(open);
}

function closeToggle(close) {
    var index = hmepgDisplayToggle.indexOf(close);
    if (index > -1) {
        hmepgDisplayToggle.splice(index, 1);
    }
}

function hmepgImg() {
    var element = document.getElementById("hmepg-display-background");
    if (element) {
        if (hmepgDisplayToggle.length !== 0) {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    }
}

function ToggleDisplay(element) {
    var empId = element.dataset.employeeId;
    if (hmepgDisplayToggle.includes(empId)) {
        closeToggle(empId);
    } else {
        openToggle(empId);
    }

    let hmepgDisplay = ``;
    for (let i = 0; i < hmepgDisplayToggle.length; i++) {
        let tIndex = hmepgDisplayToggle[i];
        let token = CryptoLocalData[tIndex];
        if (!token) continue;

        let tokenPrice = token.price_comma.length ? token.price_comma.slice(-1)[0] : "0.00";
        let tokenQuery = token.query.length ? token.query.slice(-1)[0] : "0";

        hmepgDisplay += `
            <!-- Token container -->
            <div class="token-main-wrap" onclick="hmepgchangeIndex(this)" data-hmepage-id="${tIndex}">
                <!-- Token image container -->
                <div class="hmepg-token-img-wrap">
                    <img src="svg/token/${token.img}.svg" class="img-fluid">
                </div>
                
                <!-- Token container -->
                <div class="hmepg-sub-token-left-wrap cursor">
                    <div class="hmepg-main-token-con hmepg-main-token-con-pad">
                        <!-- Left container -->
                        <div class="hmepg-sub-token-left-con">
                            <span class="hmepg-token-name line-height one-line">${token.name}</span>
                            <span class="line-height">
                                <span class="hmepg-token-price">$${tokenPrice}</span>
                                <span class="hmepg-token-percent">${tokenQuery}%</span>
                            </span>
                        </div>
                        <!-- Right container-->
                        <div class="hmepg-sub-token-right-con one-line">
                        ${token.balance} ${token.symbol}
                        </div>
                    </div>
                    
                    <!-- Token line -->
                    <div class="hmepg-sub-token-line"></div>
                </div>
            </div>
        `;
    }

    var loopScriptEl = document.querySelector("hmepgloopscript");
    if (loopScriptEl) {
        loopScriptEl.innerHTML = hmepgDisplay;
    }

    hmepgImg();
}

function hmepgchangeIndex(element) {
    TokenPage = element.dataset.hmepageId;
    if (typeof HomeToToken === "function") HomeToToken();
    if (typeof hmepgaddToken === "function") hmepgaddToken();
}

function SendToken(element) {
    TokenPage = element.dataset.sendId;
    if (typeof HomeToSend === "function") HomeToSend();
    if (typeof hmepgaddToken === "function") hmepgaddToken();
}

function ReceiveToken(element) {
    TokenPage = element.dataset.receiveId;
    if (typeof HomeToReceive === "function") HomeToReceive();
    if (typeof hmepgaddToken === "function") hmepgaddToken();
}

var convertChoice = 1;
var swapPage = 0;
var from = 0;
var to = 3;

function From() {
    convertChoice = 1;
    var el = document.getElementById("swap-absolute");
    if (el) {
        el.style.left = "0.25em";
        el.style.right = "auto";
    }
    if (typeof ConvertToConvertPath === "function") ConvertToConvertPath();
}

function To() {
    convertChoice = 2;
    var el = document.getElementById("swap-absolute");
    if (el) {
        el.style.left = "auto";
        el.style.right = "0.25em";
    }
    if (typeof ConvertToConvertPath === "function") ConvertToConvertPath();
}

function getConvertRatio() {
    let fromPrice = Number(CryptoLocalData[from]?.price?.slice(-1)[0]) || 1;
    let toPrice = Number(CryptoLocalData[to]?.price?.slice(-1)[0]) || 1;
    return (fromPrice / toPrice).toFixed(5).toLocaleString();
}

function convertSwapToken(index) {
    swapPage = index.dataset.swapId;
    let ratio = getConvertRatio();

    if (convertChoice === 1) {
        from = swapPage;
        let setEl = (id, html) => { let el = document.getElementById(id); if (el) el.innerHTML = html; };
        
        setEl("convert-from-token-txt", `
            <div class="convertselect-token-img">
                <img src="svg/token/${CryptoLocalData[from].img}.svg" class="img-fluid page-refresh">
            </div>
            <span class="convertselect-token-txt">${CryptoLocalData[from].symbol}</span>
        `);
        setEl("red", `Minimum Amount: ${CryptoLocalData[from].mini} ${CryptoLocalData[from].symbol}`);
        setEl("convert-from-img", `<img src="svg/token/${CryptoLocalData[from].img}.svg" class="img-fluid page-refresh">`);
        setEl("convert-from-selectbtn", `${CryptoLocalData[from].symbol}`);
        setEl("convert-available-txt", `Available Balance: ${CryptoLocalData[from].balance} ${CryptoLocalData[from].symbol}`);
        setEl("convert-form-bottom", `1 ${CryptoLocalData[from].symbol} <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${ratio}</span> ${CryptoLocalData[to].symbol}`);
        setEl("convert-convert-btn-id", `Convert ${CryptoLocalData[from].symbol} to ${CryptoLocalData[to].symbol}`);

        if (typeof MenuToConvert === "function") MenuToConvert();
    } else {
        to = swapPage;
        let setEl = (id, html) => { let el = document.getElementById(id); if (el) el.innerHTML = html; };

        setEl("convert-to-token-txt", `
            <div class="convertselect-token-img">
                <img src="svg/token/${CryptoLocalData[to].img}.svg" class="img-fluid page-refresh">
            </div>
            <span class="convertselect-token-txt">${CryptoLocalData[to].symbol}</span>
        `);
        setEl("convert-to-img", `<img src="svg/token/${CryptoLocalData[to].img}.svg" class="img-fluid page-refresh">`);
        setEl("convert-to-selectbtn", `${CryptoLocalData[to].symbol}`);
        setEl("convert-form-bottom", `1 ${CryptoLocalData[from].symbol} <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${ratio}</span> ${CryptoLocalData[to].symbol}`);
        setEl("convert-convert-btn-id", `Convert ${CryptoLocalData[from].symbol} to ${CryptoLocalData[to].symbol}`);

        if (typeof MenuToConvert === "function") MenuToConvert();
    }
}

function convertPointerEvent() {
    var convertFailure = document.getElementsByClassName("convert-token-failure");
    for (let i = 0; i < convertFailure.length; i++) {
        let targetIndex = (convertChoice === 1) ? to : from;
        if (convertFailure[targetIndex]) {
            convertFailure[targetIndex].style.pointerEvents = "none";
            convertFailure[targetIndex].style.opacity = "0.65";
        }
    }
}

setInterval(() => {
    let elem = document.getElementById("convert-form-bottom");
    if (elem) {
        let ratio = getConvertRatio();
        elem.innerHTML = `
            1 ${CryptoLocalData[from].symbol} <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${ratio}</span> ${CryptoLocalData[to].symbol}
        `;
    }
}, 2000);

function homeNav() {
    if (typeof MenuToHome === "function") MenuToHome();
    history.replaceState({ id: `MenuToHome` }, `Binance`, `./#dashboard`);
}

function setNav() {
    if (typeof HomeToSettings === "function") HomeToSettings();
}

function ReceiveChanger() {
    let setEl = (id, html) => { let el = document.getElementById(id); if (el) el.innerHTML = html; };
    setEl("receive-header-txt", `Receive ${CryptoLocalData[TokenPage].symbol}`);
    setEl("receive-header-img", `<img src="svg/token/${CryptoLocalData[TokenPage].img}.svg" class="img-fluid">`);
    setEl("receive-wallet-address-un", `${CryptoLocalData[TokenPage].name}`);
    setEl("receive-qr-code-v", `<img src="${CryptoLocalData[TokenPage].qr}" class="img-fluid">`);
    setEl("receive-wallet-address", `${CryptoLocalData[TokenPage].wallet}`);
    setEl("receive-network", `Token: ${CryptoLocalData[TokenPage].network}`);
    setEl("receive-send-txt", `Go to Send ${CryptoLocalData[TokenPage].symbol}`);
    setEl("receive-note-2", `
        Send only <span style="color: rgb(166, 50, 50);">${CryptoLocalData[TokenPage].minimum}</span> ${CryptoLocalData[TokenPage].name} (${CryptoLocalData[TokenPage].symbol}) to this Address.<br>
        Failure to do so, may result in permanent loss!
    `);
}

var binanceCalculate;
var binanceCounted;

function tokenDollar() {
    let latestPrice = Number(CryptoLocalData[TokenPage]?.price?.slice(-1)[0]) || 0;
    binanceCalculate = Number(CryptoLocalData[TokenPage].balance) * latestPrice;
    binanceCounted = Number(binanceCalculate.toFixed(2)).toLocaleString();
}

function tokenmainChanger() {
    tokenDollar();
    let setEl = (id, html) => { let el = document.getElementById(id); if (el) el.innerHTML = html; };
    
    let latestPriceComma = CryptoLocalData[TokenPage].price_comma.slice(-1)[0] || "0.00";
    let latestQuery = CryptoLocalData[TokenPage].query.slice(-1)[0] || "0";

    setEl("token-ccc-header-txt", `${CryptoLocalData[TokenPage].name} (${CryptoLocalData[TokenPage].symbol})`);
    setEl("token-ccc-price-txt", `$${latestPriceComma}`);
    setEl("token-ccc-rate-txt", `${latestQuery}%`);
    setEl("token-ccc-logo-img", `<img src="svg/token/${CryptoLocalData[TokenPage].img}.svg" class="img-fluid page-refresh">`);
    setEl("token-ccc-exchange-rate", `${CryptoLocalData[TokenPage].balance} ${CryptoLocalData[TokenPage].symbol} ≈ $<span>${binanceCounted}</span>`);
}

function sendmainChanger() {
    let setEl = (id, html) => { let el = document.getElementById(id); if (el) el.innerHTML = html; };

    setEl("send-header-changer", `
        <!-- Left container-->
        <div class="help-left-container">
            <div class="help-header-img btn-display" onclick="typeof BackState === 'function' && BackState()">
                <img src="svg/arrowleft.svg" class="img-fluid">
            </div>
            <span class="help-header-txt">Send ${CryptoLocalData[TokenPage].symbol}</span>
        </div>
        <!-- Right container-->
        <div class="help-header-img-right">
            <img src="svg/token/${CryptoLocalData[TokenPage].img}.svg" class="img-fluid">
        </div>
    `);

    setEl("send-vvv-input-absolute", `${CryptoLocalData[TokenPage].name} Address`);
    setEl("send-sss-amount-div", `${CryptoLocalData[TokenPage].symbol}`);
    setEl("send-zzz-input-absolute", `Send Amount (${CryptoLocalData[TokenPage].symbol})`);
    setEl("send-zzz-xxx-ccc", `<span style="padding-right: 0.5em;">${CryptoLocalData[TokenPage].symbol} Balance: </span> ${CryptoLocalData[TokenPage].balance} ${CryptoLocalData[TokenPage].symbol}`);
    setEl("send-zzz-convert-lg-txt", `Total≈ <div id="total-token" class="one-line">0.0</div> ${CryptoLocalData[TokenPage].symbol}/<div id="total-curr" class="one-line">0.0</div> USD`);
    setEl("receive-send-zzz-txt", `Go to Receive ${CryptoLocalData[TokenPage].symbol}`);
}

function SendChanger() {
    let setEl = (id, html) => { let el = document.getElementById(id); if (el) el.innerHTML = html; };
    setEl("receive-network", `NETWORK: ${CryptoLocalData[TokenPage].network}`);
    setEl("receive-note-2", `
        Send only ${CryptoLocalData[TokenPage].name} (${CryptoLocalData[TokenPage].symbol}) to the Network "${CryptoLocalData[TokenPage].network}".<br>
        Failure to do so, may result in permanent loss!
    `);
}

function copyTextTokenV() {
    var el = document.getElementById("receive-wallet-address");
    if (!el) return;
    var $copyText = el.innerText;
    var button = document.getElementById("token-copy-btn-img");
    navigator.clipboard.writeText($copyText).then(function () {
        if (button) {
            button.innerHTML = `<img src="svg/checkmark.svg" class="img-fluid">`;
            setTimeout(function () {
                button.innerHTML = `<img src="svg/copy.svg" class="img-fluid">`;
            }, 1500);
        }
    }, function () {
        if (button) {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        }
    });
}

function copyTextTokenUn() {
    var el = document.getElementById("receive-wallet-address-un");
    if (!el) return;
    var $copyText = el.innerText;
    var button = document.getElementById("token-copy-btn-img");
    navigator.clipboard.writeText($copyText).then(function () {
        if (button) {
            button.innerHTML = `<img src="svg/checkmark.svg" class="img-fluid">`;
            setTimeout(function () {
                button.innerHTML = `<img src="svg/copy.svg" class="img-fluid">`;
            }, 1500);
        }
    }, function () {
        if (button) {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        }
    });
}

function copyTokenOption() {
    if (typeof isVerify !== 'undefined' && isVerify === true) {
        copyTextTokenV();
    } else {
        copyTextTokenUn();
    }
}

function callTabUp() {
    tabUp();
    if (typeof MenuToHome === "function") MenuToHome();
}

function callTabDown() {
    tabDown();
    if (typeof HomeToSettings === "function") HomeToSettings();
}

function tabUp() {
    let elUp = document.getElementById("tab-up");
    let elDown = document.getElementById("tab-down");
    if (elUp) elUp.style.background = "#f3ba2f39";
    if (elDown) elDown.style.background = "transparent";
}

function tabDown() {
    let elUp = document.getElementById("tab-up");
    let elDown = document.getElementById("tab-down");
    if (elUp) elUp.style.background = "transparent";
    if (elDown) elDown.style.background = "#f3ba2f39";
}

function callResUp() {
    resUp();
    if (typeof MenuToHome === "function") MenuToHome();
}

function callResDown() {
    resDown();
    if (typeof HomeToSettings === "function") HomeToSettings();
}

function resUp() {
    let elUp = document.getElementById("res-up");
    let elDown = document.getElementById("res-down");
    if (elUp) elUp.style.background = "#f3ba2f39";
    if (elDown) elDown.style.background = "transparent";
}

function resDown() {
    let elUp = document.getElementById("res-down");
    let elDown = document.getElementById("res-down");
    if (elUp) elUp.style.background = "transparent";
    if (elDown) elDown.style.background = "#f3ba2f39";
}

// -------------------- SINGLE BATCH FETCH (OPTIMIZED FOR COINGECKO) -------------------- 

// Extract unique coin IDs from array to prevent duplicate API fetches
const allCoinIds = [...new Set(CryptoLocalData.map(item => item.cg_id))].join(',');

// Single request fetches market data for ALL coins at once
fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${allCoinIds}`)
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) return;

        // Map retrieved data back to CryptoLocalData array
        CryptoLocalData.forEach(item => {
            const coin = data.find(c => c.id === item.cg_id);
            if (coin) {
                item.price_comma.push(Number((coin.current_price || 0).toFixed(2)).toLocaleString());
                item.price.push((coin.current_price || 0).toFixed(2));
                item.query_change.push(Number((coin.price_change_24h || 0).toFixed(2)).toLocaleString());
                item.query.push(Number((coin.price_change_percentage_24h || 0).toFixed(2)).toLocaleString());

                item.cap.push(Number((coin.high_24h || 0).toFixed(2)).toLocaleString());
                item.market.push(Number((coin.market_cap || 0).toFixed(2)).toLocaleString());
                item.volume.push(Number((coin.total_volume || 0).toFixed(2)).toLocaleString());
                item.market_change.push(Number((coin.total_volume || 0).toFixed(2)).toLocaleString()); 
                item.market_change_percent.push(Number((coin.low_24h || 0).toFixed(2)).toLocaleString());

                item.total_supply.push(Number((coin.total_supply || 0).toFixed(2)).toLocaleString());
                item.circle_supply.push(Number((coin.circulating_supply || 0).toFixed(2)).toLocaleString());
            } else {
                console.warn(`CoinGecko data not found for ID: ${item.cg_id}`);
            }
        });
    })
    .catch(err => console.error("CoinGecko Fetch Error:", err));

// -------------------- GRAPH & MARKET INFO DISPLAY --------------------         
function displayGraphIndex() {
    var dynamicStyles = document.getElementById("dynamicStyles");
    var real = Number(Number(TokenPage) + 1);
    if (dynamicStyles) {
        dynamicStyles.textContent = `
            #market-graph-absolute-con .crypto-token-graph:not(:nth-child(${real})){
                display: none;
            }
        `;
    }

    let setEl = (id, html) => { let el = document.getElementById(id); if (el) el.innerHTML = html; };

    setEl("market-header-container", `
        <!-- Left container-->
        <div class="help-left-container">
            <div class="help-header-img btn-display" onclick="typeof BackState === 'function' && BackState()">
                <img src="svg/arrowleft.svg" class="img-fluid">
            </div>
            <span class="help-header-txt page-refresh">${CryptoLocalData[TokenPage].symbol}</span>
        </div>
        <!-- Right container-->
        <div class="market-header-img">
            <img src="svg/token/${CryptoLocalData[TokenPage].img}.svg" class="img-fluid">
        </div>
    `);

    let latestPriceComma = CryptoLocalData[TokenPage].price_comma.slice(-1)[0] || "0.00";
    let latestQueryChange = CryptoLocalData[TokenPage].query_change.slice(-1)[0] || "0.00";
    let latestQuery = CryptoLocalData[TokenPage].query.slice(-1)[0] || "0";

    setEl("market-info-head", `
        <p class="market-token-name line-height-zero">${CryptoLocalData[TokenPage].name}</p>
        <div class="market-token-price">$${latestPriceComma}</div>
        <p class="market-query line-height">$${latestQueryChange} <span style="padding-left: 1.5em">${latestQuery}%</span></p>
    `);

    setEl("market-sub-token-cap", `$${CryptoLocalData[TokenPage].cap.slice(-1)[0] || "0"}`);
    setEl("market-sub-token-market", `$${CryptoLocalData[TokenPage].market.slice(-1)[0] || "0"}`);
    setEl("market-sub-token-volume", `${CryptoLocalData[TokenPage].volume.slice(-1)[0] || "0"} ${CryptoLocalData[TokenPage].symbol}`);
    setEl("market-sub-token-market-change", `${CryptoLocalData[TokenPage].market_change.slice(-1)[0] || "0"} ${CryptoLocalData[TokenPage].symbol}`);
    setEl("market-sub-market-change-percent", `$${CryptoLocalData[TokenPage].market_change_percent.slice(-1)[0] || "0"}`);
    setEl("market-sub-token-total-supply", `${CryptoLocalData[TokenPage].total_supply.slice(-1)[0] || "0"} ${CryptoLocalData[TokenPage].symbol}`);
    setEl("market-sub-token-circle-supply", `${CryptoLocalData[TokenPage].circle_supply.slice(-1)[0] || "0"} ${CryptoLocalData[TokenPage].symbol}`);

    sendmainChanger();
}
