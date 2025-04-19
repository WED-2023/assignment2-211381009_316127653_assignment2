/**
 * Audio Manager for the Galactic Defenders game
 * This file handles all game sounds and music
 */

// Audio elements
let shootSound, enemyExpolsionSound, hurtByEnemiesSound, gameMusic;
let audioEnabled = true;

/**
 * Initialize audio system
 */
function initAudio() {
  // Create audio elements
  shootSound = createAudioElement("shoot");
  enemyExpolsionSound = createAudioElement("enemyExpolsion");
  hurtByEnemiesSound = createAudioElement("hurtByEnemies");
  gameMusic = createAudioElement("music", true);

  // Set default volume levels
  setVolumeLevels();

  console.log("Audio system initialized");
}

/**
 * Create an audio element
 * @param {string} type - The type of sound (shoot, enemyExpolsion, hurtByEnemies, music)
 * @param {boolean} loop - Whether the audio should loop
 * @returns {HTMLAudioElement} - The created audio element
 */
function createAudioElement(type, loop = false) {
  const audio = new Audio();
  audio.loop = loop;

  switch (type) {
    case "shoot":
      // Shoot sound
      audio.src = "../assets/audio/shoot.mp3";
      break;
    case "enemyExpolsion":
      // enemyExpolsion sound
      audio.src = "../assets/audio/target_hit.OGG";
      break;
    case "hurtByEnemies":
      // hurtByEnemies sound
      audio.src = "../assets/audio/target_hit.mp3";
      break;
    case "music":
      // Background music
      audio.src = "../assets/audio/background.mp3";
      break;
  }

  return audio;
}

/**
 * Set volume levels for audio elements
 */
function setVolumeLevels() {
  if (shootSound) shootSound.volume = 0.1;
  if (enemyExpolsionSound) enemyExpolsionSound.volume = 0.05;
  if (hurtByEnemiesSound) hurtByEnemiesSound.volume = 0.2;
  if (gameMusic) gameMusic.volume = 0.2; // Lower volume for background music
}

/**
 * Play a sound effect
 * @param {HTMLAudioElement} sound - The sound to play
 */
function playSound(sound) {
  if (!audioEnabled || !sound || !sound.src) return;

  try {
    // Clone the sound to allow overlapping playback
    const soundClone = sound.cloneNode();
    soundClone.volume = sound.volume;
    soundClone.play().catch((error) => {
      console.warn("Error playing sound:", error);
    });
  } catch (error) {
    console.warn("Error playing sound:", error);
  }
}

/**
 * Start background music
 */
function startGameMusic() {
  if (!audioEnabled || !gameMusic || !gameMusic.src) return;

  try {
    gameMusic.currentTime = 0;
    gameMusic.play().catch((error) => {
      console.warn("Error playing background music:", error);
    });
  } catch (error) {
    console.warn("Error playing background music:", error);
  }
}

/**
 * Stop background music
 */
function stopGameMusic() {
  if (!gameMusic) return;

  try {
    gameMusic.pause();
    gameMusic.currentTime = 0;
  } catch (error) {
    console.warn("Error stopping music:", error);
  }
}

/**
 * Toggle audio on/off
 * @returns {boolean} - New audio state
 */
function toggleAudio() {
  audioEnabled = !audioEnabled;

  if (!audioEnabled) {
    // Mute all sounds
    stopGameMusic();
  } else if (gameStarted && !gameEnded) {
    // Resume music if game is in progress
    startGameMusic();
  }

  return audioEnabled;
}

/**
 * Preload all audio files
 * @returns {Promise} - Resolves when all audio is loaded or on timeout
 */
function preloadAudio() {
  const audioElements = [shootSound, enemyExpolsionSound, hurtByEnemiesSound, gameMusic];
  const promises = [];

  for (const audio of audioElements) {
    if (!audio || !audio.src) continue;

    const promise = new Promise((resolve) => {
      // Set up event listeners for loading
      audio.addEventListener("canplaythrough", resolve, { once: true });
      audio.addEventListener("error", resolve, { once: true });

      // Add timeout to prevent hanging if loading takes too long
      setTimeout(resolve, 3000);

      // Start loading
      audio.load();
    });

    promises.push(promise);
  }

  return Promise.all(promises);
}
