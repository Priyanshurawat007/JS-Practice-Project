const logDiv=document.getElementById('log');
    const  stateDiv = document.getElementById("state");
    const StartBtn = document.getElementById('Start-btn');
    const StopBtn = document.getElementById('Stop-btn');

    StartBtn.addEventListener("click",()=>{
        document.addEventListener("keydown",handledown);
        document.addEventListener("keyup",handleUp)
        StartBtn.disabled=true;
        StopBtn.disabled=false;
        
    })
    StopBtn.addEventListener("click",()=>{
        document.removeEventListener("keydown",handledown);
        document.removeEventListener("keyup",handleUp)
        logDiv.textContent="";
        stateDiv.textContent=" ";
       
        StopBtn.disabled=true;
        StartBtn.disabled=false;
    })

    function handleUp(e) {
        logDiv.textContent=`key ${e.key} pressed Up`;
        stateDiv.textContent="key is Up";
        
    }
    function handledown(e) {
        logDiv.textContent=`key ${e.key} pressed down`;
        stateDiv.textContent="key is Down";
        
    }
    