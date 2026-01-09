import fetch from "node-fetch";

// URL to ping (set in Railway environment variables)
const TARGET_URL = process.env.TARGET_URL || "https://mainserver.serv00.net/games/MotorWars2/track_xp.php";

// Interval in milliseconds (5 minutes)
const INTERVAL = 5 * 60 * 1000;

async function hitUrl() {
  try {
    const response = await fetch(TARGET_URL);
    console.log(`[${new Date().toISOString()}] Hit ${TARGET_URL} - Status: ${response.status}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Error hitting ${TARGET_URL}:`, err);
  }
}

// Run immediately, then every 5 minutes
hitUrl();
setInterval(hitUrl, INTERVAL);
