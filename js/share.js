function shareApp() {
  const message = `Hello!!
Now you can track your Institution buses' location 24/7 — from anywhere! 🚍
🔗 Visit: https://nvts-whereismybus.vercel.app
👤 Username: NVTS@2004
🔒 Password: NVTS@2004`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
