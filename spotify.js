
    const songs = [
      { title: 'Song Title 1', artist: 'Artist 1', duration: '3:45', src: 'path/to/song1.mp3' },
      { title: 'Song Title 2', artist: 'Artist 2', duration: '4:20', src: 'path/to/song2.mp3' }
    ];

    let currentSongIndex = 0;
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const currentSongTitle = document.getElementById('current-song-title');
    const currentArtist = document.getElementById('current-artist');
    const currentAlbumArt = document.getElementById('current-album-art');

    // Load the current song
    function loadSong(songIndex) {
      const song = songs[songIndex];
      audio.src = song.src;
      currentSongTitle.innerText = song.title;
      currentArtist.innerText = song.artist;
      currentAlbumArt.src = 'https://via.placeholder.com/50'; // Placeholder for album art
    }

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = '⏸️'; // Pause icon
      } else {
        audio.pause();
        playPauseBtn.innerText = '⏯️'; // Play icon
      }
    });

    // Load the first song on page load
    loadSong(currentSongIndex);

    // Handle song click
    document.querySelectorAll('.song').forEach((songElement, index) => {
      songElement.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        audio.play();
        playPauseBtn.innerText = '⏸️'; // Change to pause icon
      });
    });

    // Next and Previous buttons
    document.getElementById('next-btn').addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex);
      audio.play();
      playPauseBtn.innerText = '⏸️'; // Change to pause icon
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      loadSong(currentSongIndex);
      audio.play();
      playPauseBtn.innerText = '⏸️'; // Change to pause icon
    });
