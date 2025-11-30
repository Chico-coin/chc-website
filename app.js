document.addEventListener('DOMContentLoaded', ()=>{
  // Loading animation: hide after assets ready (simulate 1.2s)
  setTimeout(()=>{
    const overlay = document.getElementById('loadingOverlay');
    if(overlay) overlay.classList.add('hidden');
  }, 1200);

  // mini sparkline chart
  const miniCtx = document.getElementById('miniChart').getContext('2d');
  new Chart(miniCtx, {
    type: 'line',
    data: { labels: Array.from({length:20},(_,i)=>i), datasets:[{data:Array.from({length:20},()=>Math.random()*10+10),fill:true,tension:0.4,borderColor:'#2b86ff',backgroundColor:'rgba(43,134,255,0.12)'}]},
    options:{responsive:true,plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
  });

  // price candlestick chart sample data
  const priceCanvas = document.getElementById('priceChart').getContext('2d');
  // sample candlestick data (time omitted for demo)
  const candleData = {
    datasets: [{
      label: 'Price',
      data: [
        {o:0.22,h:0.32,l:0.18,c:0.28},
        {o:0.28,h:0.35,l:0.21,c:0.30},
        {o:0.30,h:0.42,l:0.27,c:0.38},
        {o:0.38,h:0.44,l:0.32,c:0.33},
        {o:0.33,h:0.39,l:0.29,c:0.36},
        {o:0.36,h:0.48,l:0.31,c:0.43},
        {o:0.43,h:0.51,l:0.40,c:0.46},
        {o:0.46,h:0.46,l:0.30,c:0.34},
        {o:0.34,h:0.40,l:0.28,c:0.38},
        {o:0.38,h:0.45,l:0.33,c:0.42}
      ]
    }]
  };
  const priceChart = new Chart(priceCanvas, {
    type: 'candlestick',
    data: candleData,
    options: {
      responsive:true,
      plugins:{legend:{display:false}},
      scales:{ x:{ display:false }, y:{ display:true } }
    }
  });

  // donut chart
  const donutCtx = document.getElementById('donutChart').getContext('2d');
  new Chart(donutCtx, {
    type: 'doughnut',
    data: { labels:['Staking','Liquidity','Development','Marketing','Airdrop'], datasets:[{data:[35,20,20,15,5], backgroundColor:['#2b86ff','#19b1c8','#7b4cff','#ff8a3d','#ffd54a']}] },
    options:{responsive:true,plugins:{legend:{display:false}}}
  });

  // Stake button placeholder
  const stakeBtn = document.getElementById('stakeBtn');
  if(stakeBtn) stakeBtn.addEventListener('click', ()=>{
    const v = document.getElementById('stakeInput').value || '0';
    alert('Stake submitted (placeholder): ' + v + ' CHC');
  });
});
