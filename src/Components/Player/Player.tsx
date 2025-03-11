// import React, { useState, useRef } from "react";
// import { IconButton, Slider, TextField, Button } from "@mui/material";
// import { PlayArrow, Pause, SkipNext, SkipPrevious, VolumeUp, Search } from "@mui/icons-material";
// import "./Player.css"
// import { div } from "framer-motion/client";

// interface Song {
//   id: string;
//   title: string;
//   artist: string;
//   stream_url: string;
//   artwork_url: string;
// }

const Player: React.FC = () => {
  // const [songs, setSongs] = useState<Song[]>([]);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(50);
//   const [query, setQuery] = useState("");
//   const audioRef = useRef<HTMLAudioElement>(null);

//   // 🔎 Fetch songs from Audius API
//   const searchSongs = async () => {
//     const response = await fetch(
//       `https://discoveryprovider.audius.co/v1/tracks/search?query=${query}&app_name=MusicApp`
//     );
//     const data = await response.json();
//     const fetchedSongs = data.data.map((song: any) => ({
//       id: song.id,
//       title: song.title,
//       artist: song.user.name,
//       stream_url: song.stream_url,
//       artwork_url: song.artwork['150x150'] || '',
//     }));
//     setSongs(fetchedSongs);
//   };

//   const handlePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleNext = () => {
//     setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
//   };

//   const handlePrevious = () => {
//     setCurrentSongIndex((prevIndex) =>
//       prevIndex === 0 ? songs.length - 1 : prevIndex - 1
//     );
//   };

//   const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
//     if (audioRef.current) {
//       audioRef.current.volume = (newValue as number) / 100;
//     }
//     setVolume(newValue as number);
//   };

  return ( <div>   </div> )
//     <div className="music-player">
//       <h2>🎵 Full-Track Music Player</h2>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <TextField
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for a song..."
//           variant="outlined"
//           size="small"
//         />
//         <Button onClick={searchSongs} variant="contained">
//           <Search />
//         </Button>
//       </div>

//       {songs.length > 0 && (
//         <>
//           {/* Song Details */}
//           <div className="song-details">
//             <img src={songs[currentSongIndex].artwork_url} alt="Album Cover" />
//             <h3>{songs[currentSongIndex].title}</h3>
//             <p>{songs[currentSongIndex].artist}</p>
//           </div>

//           {/* Audio Player */}
//           <audio ref={audioRef} src={songs[currentSongIndex].stream_url} onEnded={handleNext} />

//           {/* Controls */}
//           <div className="controls">
//             <IconButton onClick={handlePrevious}><SkipPrevious /></IconButton>
//             <IconButton onClick={handlePlayPause}>{isPlaying ? <Pause /> : <PlayArrow />}</IconButton>
//             <IconButton onClick={handleNext}><SkipNext /></IconButton>
//           </div>

//           {/* Volume Control */}
//           <div className="volume-control">
//             <VolumeUp />
//             <Slider value={volume} onChange={handleVolumeChange} />
//           </div>
//         </>
//       )}
//     </div>
//   );
 };

export default Player;
