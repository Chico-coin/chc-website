
// Price chart
const priceCtx = document.getElementById('priceChart');
if (priceCtx) {
  new Chart(priceCtx, {
    type: 'candlestick' in Chart ? 'line' : 'line',
    data: {
      labels: ['1H','4H','8H','12H','1D','2D'],
      datasets: [{
        label: 'CHC Price',
        data: [0.08,0.1,0.07,0.11,0.09,0.12],
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124,58,237,0.12)',
        tension:0.3,
        fill:true
      }]
    },
    options: {responsive:true,plugins:{legend:{display:false}},scales:{y:{beginAtZero:false}}}
  });
}

// Donut chart on dashboard
const donut = document.getElementById('donutChart');
if (donut) {
  new Chart(donut, {
    type:'doughnut',
    data:{
      labels:['Liquidity','Staking Rewards','Treasury','Burn','Team'],
      datasets:[{data:[10,30,40,10,10],backgroundColor:['#3b82f6','#7c3aed','#06b6d4','#f59e0b','#ef4444']}]
    },
    options:{responsive:true,cutout:'65%',plugins:{legend:{display:false}}}
  });
}
