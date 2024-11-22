let currentSongIndex = 0;

function playSong(index) {
    const song = songList[index];
    const audio = new Audio(song.file);
    audio.play();
    // Update UI, show playing song, etc.
}

document.getElementById('masterPlay').addEventListener('click', () => {
    playSong(currentSongIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    playSong(currentSongIndex);
});

document.getElementById('previous').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    playSong(currentSongIndex);
});
