"use strict"
let script=document.createElement("script");
script.innerHTML=` // script injected by sakai keepalive plugin
function refresh_sakai(){
    setTimeout(refresh_sakai,900000); // 15 minutes
    keep_session_alive();
    console.log("Sakai keepalive endponit polled")
}

setTimeout(refresh_sakai,900000);
console.log("Sakai keepalive extension loaded")
`;
document.head.appendChild(script);
