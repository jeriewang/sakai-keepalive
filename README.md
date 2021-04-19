# Sakai Keepalive

This is a simple browser extension that prevents your Sakai @ Claremont portal session from timing out while at least one tab to the site exists. It injects the following script into every single portal page

```js
// script injected by sakai keepalive plugin
function refresh_sakai(){
    setTimeout(refresh_sakai,900000); // 15 minutes
    keep_session_alive();
    console.log("Sakai keepalive endponit polled")
}

setTimeout(refresh_sakai,900000);
console.log("Sakai keepalive extension loaded")
```
which is the same as clicking on the "keep my session alive" button (but before it shows up) every 15 minutes. 


