const discordWebhookUrl = 'https://discord.com/api/webhooks/1424476999644086292/CxzZBh4y4kzPFh16qkOqLF7_HsIjAqI5KqocV65KXriMdCYpTUzhuljCUx36qjQU_cO5'; // Replace with your actual webhook URL

var fugumonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var fugudays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var fugud = new Date();
var fuguyear = fugud.getFullYear();
var fugumonth = fugud.getMonth();
var fugudate = fugud.getDate();
var fuguday = fugud.getDay();
var fuguhours = fugud.getHours();
var fuguminutes = fugud.getMinutes();
var fuguseconds = fugud.getSeconds();
var fugumilliseconds = fugud.getMilliseconds();

const fEt = fugumonths[fugumonth] + " " + fugudate + ", " + fuguyear;
const fEd = fugudays[fuguday] + ", " + fugumonths[fugumonth] + " " + fugudate + ", " + fuguyear + " | " + fuguhours + ":" + fuguminutes + ":" + fuguseconds + " | " + fugumilliseconds;

const quotGhalib = "محبت کی جنگ میں میرے پاؤں زخمی ہیں، نہ بھاگ سکتا ہوں، نہ ٹھہر سکتا ہوں";
const messageToSend = "Happy " + fugudays[fuguday] + "! <hr/>" + quotGhalib;
sendDiscordWebhookMessage(discordWebhookUrl, messageToSend, fEt, fEd);
