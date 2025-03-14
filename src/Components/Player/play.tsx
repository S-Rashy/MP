import React, { createContext, useState, useRef, useEffect } from "react";
import "./play.css";
import { MdHome, MdLibraryMusic, MdSettings } from "react-icons/md";

const Songs = [
    {   
        id: 0,
        name: `Kese Dance`,
        author: `Wizkid`,
        file: `Wizkid_-_Kese_Dance_.mp3`,
        length: 3
    },
    {   
        id: 1,
        name: `Way Too Big`,
        author: `Burna Boy`,
        file: `Burna-Boy-Way-Too-Big.mp3`,
        length: 3
    },
    {   
        id: 2,
        name: `Fuji Vibes `,
        author: `Asake`,
        file: `Asake-Fuji-Vibe.mp3`,
        length: 5
    },
    {   
        id: 0,
        name: `Be There Still`,
        author: `Davido`,
        file: `Davido-Be-There-Still.mp3`,
        length: 4
    }
];

export const MusicPlayerContext = createContext({});

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="nav-item"><MdHome /> Home</div>
            <div className="nav-item"><MdLibraryMusic /> Library</div>
            <div className="nav-item"><MdSettings /> Settings</div>
        </aside>
    );
};

const Play: React.FC = () => {
    const [playingId, setPlayingId] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(new Audio(`public/songs/${Songs[playingId].file}`));

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = `public/songs/${Songs[playingId].file}`;
            if (isPlaying) audioRef.current.play();
        }
    }, [playingId, isPlaying]);

    const playPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const next = () => {
        let nextId = (playingId + 1) % Songs.length;
        setPlayingId(nextId);
    };

    const previous = () => {
        let prevId = playingId > 0 ? playingId - 1 : Songs.length - 1;
        setPlayingId(prevId);
    };

    return (
        <MusicPlayerContext.Provider value={{ playingId, isPlaying, playPause, next, previous }}>
            <div id="container">
                <Sidebar />
                <main id="player">
                    <div className="home">
                        <h1>Welcome to Your Music Player</h1>
                        <p>Browse and play your favorite songs.</p>
                    </div>

                    <div className="player">
                        <audio ref={audioRef} controls />
                        <div className="controls">
                            <button onClick={previous}>⏮</button>
                            <button onClick={playPause}>{isPlaying ? "⏸" : "▶"}</button>
                            <button onClick={next}>⏭</button>
                        </div>
                        <p>Now Playing: {Songs[playingId].name} - {Songs[playingId].author}</p>
                    </div>
                </main>
            </div>
        </MusicPlayerContext.Provider>
    );
};

export default Play;
