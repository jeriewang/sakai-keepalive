# Sakai Keepalive

This is a simple chrome extension that prevents your Sakai @ Claremont portal session from timing out while at least one tab to the site exists. It injects exactly the following script into every single portal page

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
which basically clicks on the invisible "keep my session alive" button (before it shows up) for you once every 15 minutes. 

## Installation

To install it, download the `sakai_keepalive.zip` file from this repository. Then, navigate to `chrome://extensions`, flip on the switch for developer mode, and drag the downloaded zip file into the window. And then you are done! No more annoying pop-up windows or asking you to log back in when you really need to get an assignment submitted before 11:59:59 PM. 

Alternatively, you can install it from [Chrome Store](https://chrome.google.com/webstore/detail/sakai-keepalive/nphojjhgnickcliigohhbnmldidgakik).
