class MarketInfo extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- MARKET INFORMATION STRUCTURE -->
            <div class="market-info-page-display">
                <!-- -------------------- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -------------------- -->
                    
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
                                                <span class="help-header-txt page-refresh">${ CryptoLocalData[TokenPage].symbol }</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-header-img">
                                                <img src="svg/token/${ CryptoLocalData[TokenPage].img }.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

                                <!-- --------------------  Container -------------------- -->
                                <div class="container">
                                    <div class="market-head" id="market-info-head">
                                        <p class="market-token-name line-height-zero">${ CryptoLocalData[TokenPage].name }</p>
                                        <div class="market-token-price">$${ CryptoLocalData[TokenPage].price.slice(-1)[0] }</div>
                                        <p class="market-query line-height">$${ CryptoLocalData[TokenPage].query_change.slice(-1)[0] } <span style="padding-left: 1.5em">${ CryptoLocalData[TokenPage].query.slice(-1)[0] }%</span></p>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

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
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                            </div>
							<div class="market-bottom-radius"></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

						

                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap market-link-space">
                            <div class="container">
								
							    <!-- Token container -->
                                <div class="token-main-wrap">
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
                                                <span class="hmepg-token-name settings-token-name one-line">Market Cap</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-market">
                                                $${CryptoLocalData[TokenPage].market.slice(-1)[0]} 
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
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
                                                <span class="hmepg-token-name settings-token-name one-line">Volume (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-volume">
                                                ${CryptoLocalData[TokenPage].volume.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
							
							
                                <!-- Token container -->
                                <div class="token-main-wrap">
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
                                                <span class="hmepg-token-name settings-token-name one-line">Total Top-Tier Volume (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-market-change">
                                                ${CryptoLocalData[TokenPage].market_change.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
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
                                                <span class="hmepg-token-name settings-token-name one-line">Supply</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-total-supply">
                                                ${CryptoLocalData[TokenPage].total_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
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
                                                <span class="hmepg-token-name settings-token-name one-line">Circulating Supply</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line pricy" id="market-sub-token-circle-supply">
												${CryptoLocalData[TokenPage].circle_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                
                                <!-- Token container -->
                                <div class="token-main-wrap">
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
                                                <span class="hmepg-token-name settings-token-name one-line">TICK HIGH (24 HRS)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-cap">
                                                $${CryptoLocalData[TokenPage].cap.slice(-1)[0]}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
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
                                                <span class="hmepg-token-name settings-token-name one-line">TICK LOW (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line pricy" id="market-sub-market-change-percent">
                                                $${CryptoLocalData[TokenPage].market_change_percent.slice(-1)[0]}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
								
							</div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                    </div>
                
                <!--   -------------------- -------------------- -------------------- -------------------- -------------------- -->
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("market-info-page", MarketInfo);










// --------------------  --------------------
function checkStatus(response) {
	if (response.ok) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}
// -------------------- -------------------- --------------------



// -------------------- Bitcoin - PAGE --------------------
    const btcData = async () => {
        const response = await fetch(CryptoLocalData[0].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBtcChart;
    async function printBtcChart() {
        let { times, prices } = await btcData()
        let btcChart = document.getElementById('btcChart').getContext('2d');
        let gradient = btcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[0].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[0].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBtcChart = new Chart(btcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[0].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBtcChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Ethereum - PAGE --------------------
    const ethData = async () => {
        const response = await fetch(CryptoLocalData[1].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createEthChart;
    async function printEthChart() {
        let { times, prices } = await ethData()
        let ethChart = document.getElementById('ethChart').getContext('2d');
        let gradient = ethChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[1].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[1].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createEthChart = new Chart(ethChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[1].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printEthChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Litecoin - PAGE --------------------
    const ltcData = async () => {
        const response = await fetch(CryptoLocalData[2].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createLTCChart;
    async function printLTCChart() {
        let { times, prices } = await ltcData()
        let ltcChart = document.getElementById('ltcChart').getContext('2d');
        let gradient = ltcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[2].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[2].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createLTCChart = new Chart(ltcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[2].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printLTCChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Dogecoin - PAGE --------------------
    const dogeData = async () => {
        const response = await fetch(CryptoLocalData[3].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createDOGEChart;
    async function printDOGEChart() {
        let { times, prices } = await dogeData()
        let dogeChart = document.getElementById('dogeChart').getContext('2d');
        let gradient = dogeChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[3].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[3].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createDOGEChart = new Chart(dogeChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[3].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printDOGEChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Tether - PAGE --------------------
    const usdtData = async () => {
        const response = await fetch(CryptoLocalData[4].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUsdtChart;
    async function printUsdtChart() {
        let { times, prices } = await usdtData()
        let usdtChart = document.getElementById('usdtChart').getContext('2d');
        let gradient = usdtChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[4].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[4].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUsdtChart = new Chart(usdtChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[4].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUsdtChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Tron - PAGE --------------------
    const trxData = async () => {
        const response = await fetch(CryptoLocalData[5].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createTRXChart;
    async function printTRXChart() {
        let { times, prices } = await trxData()
        let trxChart = document.getElementById('trxChart').getContext('2d');
        let gradient = trxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[5].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[5].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createTRXChart = new Chart(trxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[5].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printTRXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Tether - PAGE --------------------
    const usdtTData = async () => {
        const response = await fetch(CryptoLocalData[6].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUsdtTChart;
    async function printUsdtTChart() {
        let { times, prices } = await usdtTData()
        let usdtTChart = document.getElementById('usdtTChart').getContext('2d');
        let gradient = usdtTChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[6].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[6].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUsdtTChart = new Chart(usdtTChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[6].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUsdtTChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- USD Coin - PAGE --------------------
    const usdcData = async () => {
        const response = await fetch(CryptoLocalData[7].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUSDCChart;
    async function printUSDCChart() {
        let { times, prices } = await usdcData()
        let usdcChart = document.getElementById('usdcChart').getContext('2d');
        let gradient = usdcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[7].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[7].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUSDCChart = new Chart(usdcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[7].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUSDCChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- BNB - PAGE --------------------
    const bnbData = async () => {
        const response = await fetch(CryptoLocalData[8].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBnbChart;
    async function printBnbChart() {
        let { times, prices } = await bnbData()
        let bnbChart = document.getElementById('bnbChart').getContext('2d');
        let gradient = bnbChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[8].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[8].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBnbChart = new Chart(bnbChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[8].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBnbChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Binance USD - PAGE --------------------
    const busdData = async () => {
        const response = await fetch(CryptoLocalData[9].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBUSDChart;
    async function printBUSDChart() {
        let { times, prices } = await busdData()
        let busdChart = document.getElementById('busdChart').getContext('2d');
        let gradient = busdChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[9].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[9].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBUSDChart = new Chart(busdChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[9].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBUSDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Avalanche - PAGE --------------------
    const avaxData = async () => {
        const response = await fetch(CryptoLocalData[10].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAVAXChart;
    async function printAVAXChart() {
        let { times, prices } = await avaxData()
        let avaxChart = document.getElementById('avaxChart').getContext('2d');
        let gradient = avaxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[10].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[10].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAVAXChart = new Chart(avaxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[10].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAVAXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- --------------------  



// -------------------- Binance USD - PAGE --------------------
    const busdTData = async () => {
        const response = await fetch(CryptoLocalData[11].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBUSDTChart;
    async function printBUSDTChart() {
        let { times, prices } = await busdData()
        let busdTChart = document.getElementById('busdTChart').getContext('2d');
        let gradient = busdTChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[11].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[11].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBUSDTChart = new Chart(busdTChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[11].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBUSDTChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Solana - PAGE --------------------
    const solData = async () => {
        const response = await fetch(CryptoLocalData[12].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createSOLChart;
    async function printSOLChart() {
        let { times, prices } = await solData()
        let solChart = document.getElementById('solChart').getContext('2d');
        let gradient = solChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[12].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[12].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createSOLChart = new Chart(solChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[12].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printSOLChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 