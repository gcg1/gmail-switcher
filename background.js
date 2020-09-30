console.log("Gmail Switcher (Chrome Extension) is running");

let url = window.location.href;
const primary = "https://mail.google.com/mail/u/0/";
const secondary = "https://mail.google.com/mail/u/1/";

const switchTo = (account) => {
  window.location.href = account;
};

const switchInbox = () => {
  url.includes(primary) ? switchTo(secondary) : switchTo(primary);
};

const keydown = (e) => {
  // if (!e) e = event;
  if (e.shiftKey && e.keyCode == 220) {
    // shift + backslash
    console.log("Shortcut pressed");
    switchInbox();
  }
};

document.onkeydown = keydown;
