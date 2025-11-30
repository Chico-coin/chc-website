// Basic JS for placeholder interactions
document.addEventListener('DOMContentLoaded', ()=> {
  const connectBtn = document.getElementById('connectBtn');
  if(connectBtn){
    connectBtn.addEventListener('click', ()=> {
      // Simple placeholder: toggle connected state
      if(connectBtn.dataset.connected === "1"){
        connectBtn.dataset.connected = "0";
        connectBtn.textContent = "Connect Wallet";
        alert('Disconnected (placeholder)');
      }else{
        connectBtn.dataset.connected = "1";
        connectBtn.textContent = "0x1234...abcd";
        alert('Connected (placeholder)');
      }
    });
  }

  const stakeBtn = document.getElementById('stakeBtn');
  if(stakeBtn){
    stakeBtn.addEventListener('click', ()=>{
      const val = document.getElementById('stakeInput').value || '0';
      alert('Stake submitted (placeholder): ' + val + ' CHC');
    });
  }
});
