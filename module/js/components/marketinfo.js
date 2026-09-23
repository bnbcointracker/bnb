class MarketInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- MARKET INFORMATION STRUCTURE -->
            <div class="market-info-page-display">
                <!-- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -->
                <div class="market-parent-wrap" style="padding-bottom:3em;">

                    <!-- -------------------- Token Header wrap -------------------- -->
                    <div class="token-header-wrap">

                        <!-- -------------------- Token Header Container -------------------- -->
                        <div class="help-header-wrap">
                            <div class="container">
                                <div class="help-header-container" id="market-header-container">
                                    <!-- Left container-->
                                    <div class="help-left-container">
                                        <div class="help-header-img btn-display" onclick="BackState()">
                                            <img src="svg/arrowleft.svg" class="img-fluid">
                                        </div>
                                        <span class="help-header-txt page-refresh">${CryptoLocalData[TokenPage].symbol}</span>
                                    </div>
                                    <!-- Right container-->
                                    <div class="market-header-img">
                                        <img src="svg/token/${CryptoLocalData[TokenPage].img}.svg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- -------------------- Container -------------------- -->
                        <div class="container">
                            <div class="market-head" id="market-info-head">
                                <p class="market-token-name line-height-zero">${CryptoLocalData[TokenPage].name}</p>
                                <div class="market-token-price">$${CryptoLocalData[TokenPage].price.slice(-1)[0]}</div>
                                <p class="market-query line-height">$${CryptoLocalData[TokenPage].query_change.slice(-1)[0]} <span style="padding-left: 1.5em">${CryptoLocalData[TokenPage].query.slice(-1)[0]}%</span></p>
                            </div>
                        </div>

                        <!-- -------------------- Graph absolute container Container -------------------- -->
                        <div class="market-graph-absolute-wrap">
                            <div class="market-graph-absolute-con" id="market-graph-absolute-con">
                                <!-- First set of five graphs -->
                                <!-- Btc graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[0].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[0].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[0].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="btcChart"></canvas>
                                </graph>
                                <!-- Eth graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[1].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[1].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[1].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="ethChart"></canvas>
                                </graph>
                                <!-- LTC graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[2].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[2].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[2].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="ltcChart"></canvas>
                                </graph>
                                <!-- DOGE graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[3].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[3].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[3].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="dogeChart"></canvas>
                                </graph>
                                <!-- Usdt graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[4].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[4].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[4].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="usdtChart"></canvas>
                                </graph>

                                <!-- Second set of five graphs -->
                                <!-- TRX graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[5].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[5].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[5].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="trxChart"></canvas>
                                </graph>
                                <!-- Usdt graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[6].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[6].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[6].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="usdtTChart"></canvas>
                                </graph>
                                <!-- USD Coin graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[7].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[7].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[7].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="usdcChart"></canvas>
                                </graph>
                                <!-- BNB graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[8].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[8].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[8].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="bnbChart"></canvas>
                                </graph>   
                                <!-- BUSD graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[9].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[9].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[9].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="busdChart"></canvas>
                                </graph>

                                <!-- Third set of five graphs -->
                                <!-- AVAX graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[10].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[10].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[10].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="avaxChart"></canvas>
                                </graph>  
                                <!-- BUSD graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[11].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[11].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[11].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="busdTChart"></canvas>
                                </graph>
                                <!-- SOL graph -->
                                <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[12].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[12].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[12].color} 0.08);" class="crypto-token-graph">
                                    <div style="height: 3.5em;width: 100%;"></div>
                                    <canvas id="solChart"></canvas>
                                </graph>
                            </div>
                        </div>
                    </div>
                    <div class="market-bottom-radius"></div>

                    <!-- -------------------- SETTINGS LINKS -------------------- -->
                    <div class="settings-link-wrap market-link-space">
                        <div class="container">
                            
                            <!-- Market Cap -->
                            <div class="token-main-wrap">
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Market Cap</span>
                                        </div>
                                        <div class="market-sub-token-right-con one-line" id="market-sub-token-market">
                                            $${CryptoLocalData[TokenPage].market.slice(-1)[0]} 
                                        </div>
                                    </div>			
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                            <!-- Volume (24 Hrs) -->
                            <div class="token-main-wrap">
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Volume (24 Hrs)</span>
                                        </div>
                                        <div class="market-sub-token-right-con one-line" id="market-sub-token-volume">
                                            ${CryptoLocalData[TokenPage].volume.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                        </div>
                                    </div>			
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                        
                            <!-- Total Top-Tier Volume (24 Hrs) -->
                            <div class="token-main-wrap">
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Total Top-Tier Volume (24 Hrs)</span>
                                        </div>
                                        <div class="market-sub-token-right-con one-line" id="market-sub-token-market-change">
                                            ${CryptoLocalData[TokenPage].market_change.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                        </div>
                                    </div>			
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                            <!-- Supply -->
                            <div class="token-main-wrap">
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Supply</span>
                                        </div>
                                        <div class="market-sub-token-right-con one-line" id="market-sub-token-total-supply">
                                            ${CryptoLocalData[TokenPage].total_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                        </div>
                                    </div>			
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                            <!-- Circulating Supply -->
                            <div class="token-main-wrap">
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">Circulating Supply</span>
                                        </div>
                                        <div class="market-sub-token-right-con one-line pricy" id="market-sub-token-circle-supply">
                                            ${CryptoLocalData[TokenPage].circle_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                        </div>
                                    </div>			
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                            <!-- TICK HIGH (24 HRS) -->
                            <div class="token-main-wrap">
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">TICK HIGH (24 HRS)</span>
                                        </div>
                                        <div class="market-sub-token-right-con one-line" id="market-sub-token-cap">
                                            $${CryptoLocalData[TokenPage].cap.slice(-1)[0]}
                                        </div>
                                    </div>			
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>
                            
                            <!-- TICK LOW (24 Hrs) -->
                            <div class="token-main-wrap">
                                <div class="settings-img-wrap">
                                    <div class="settings-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>		
                                <div class="hmepg-sub-token-left-wrap">
                                    <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                        <div class="hmepg-sub-token-left-con">
                                            <span class="hmepg-token-name settings-token-name one-line">TICK LOW (24 Hrs)</span>
                                        </div>
                                        <div class="market-sub-token-right-con one-line pricy" id="market-sub-market-change-percent">
                                            $${CryptoLocalData[TokenPage].market_change_percent.slice(-1)[0]}
                                        </div>
                                    </div>			
                                    <div class="hmepg-sub-token-line"></div>				
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        `;
    }
}

customElements.define("market-info-page", MarketInfo);


// -------------------- HELPER FUNCTIONS --------------------
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}


// -------------------- UNIFIED CHART RENDERING --------------------

// 1. One reusable function replaces your 13 identical drawing functions
async function fetchAndDrawChart(chartId, index, tooltipBg) {
    try {
        const response = await fetch(CryptoLocalData[index].graph);
        const json = await response.json();
        const data = json.prices;
        const times = data.map(item => new Date(item[0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        const prices = data.map(item => item[1]);

        let ctx = document.getElementById(chartId).getContext('2d');
        let gradient = ctx.createLinearGradient(0, 0, 0, 500);

        // Replicates your exact original gradient opacities based on the token index
        let topOpacity = [0, 1, 4, 6, 8].includes(index) ? '.45' : '.55';
        let bottomOpacity = [0, 1, 4, 6, 8].includes(index) ? '.025' : '.1';

        gradient.addColorStop(0, `rgba(${CryptoLocalData[index].color}${topOpacity})`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[index].color}${bottomOpacity})`);
        
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: times,
                datasets: [{
                    label: '$',
                    data: prices,
                    backgroundColor: gradient,
                    borderColor: `rgba(${CryptoLocalData[index].color} 1)`,
                    borderJoinStyle: 'round',
                    borderCapStyle: 'round',
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    lineTension: .2,
                }]
            },
            options: {
                title: { display: false, text: 'Binance', fontSize: 35 },
                legend: { display: false },
                layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                scales: {
                    xAxes: [{ display: false, gridLines: {} }],
                    yAxes: [{ display: false, gridLines: {} }]
                },
                tooltips: {
                    callbacks: { title: function () { } },
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: tooltipBg,
                    bodyFontSize: 15,
                    bodyFontColor: '#303030'
                }
            }
        });
    } catch (error) {
        console.error(`Error loading chart ${chartId}:`, error);
    }
}


// 2. ONE function call to initialize everything simultaneously
async function loadAllChartsOnce() {
    // Promise.all fires all 13 requests concurrently in a single operation
    await Promise.all([
        fetchAndDrawChart('btcChart',   0, '#F8F7FA'),
        fetchAndDrawChart('ethChart',   1, '#F8F7FA'),
        fetchAndDrawChart('ltcChart',   2, 'rgba(255,255,255,1)'),
        fetchAndDrawChart('dogeChart',  3, 'rgba(255,255,255,1)'),
        fetchAndDrawChart('usdtChart',  4, '#F8F7FA'),
        fetchAndDrawChart('trxChart',   5, 'rgba(255,255,255,1)'),
        fetchAndDrawChart('usdtTChart', 6, '#F8F7FA'),
        fetchAndDrawChart('usdcChart',  7, 'rgba(255,255,255,1)'),
        fetchAndDrawChart('bnbChart',   8, '#F8F7FA'),
        fetchAndDrawChart('busdChart',  9, 'rgba(255,255,255,1)'),
        fetchAndDrawChart('avaxChart',  10, 'rgba(255,255,255,1)'),
        fetchAndDrawChart('busdTChart', 11, 'rgba(255,255,255,1)'),
        fetchAndDrawChart('solChart',   12, 'rgba(255,255,255,1)')
    ]);
}

// 3. Execute
loadAllChartsOnce();
