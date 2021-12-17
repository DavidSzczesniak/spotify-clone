import { SwitchHorizontalIcon, VolumeUpIcon as VolumeDownIcon } from '@heroicons/react/outline';
import {
    PauseIcon,
    PlayIcon,
    ReplyIcon,
    FastForwardIcon,
    RewindIcon,
    VolumeUpIcon,
} from '@heroicons/react/solid';
import { debounce } from 'lodash';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSongInfo from '../hooks/useSongInfo';
import useSpotify from '../hooks/useSpotify';

function Player() {
    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(50);
    const songInfo = useSongInfo();

    const fetchCurrentSong = () => {
        if (!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then((data) => {
                console.log('playing:', data.body?.item.id);
                setCurrentTrackId(data.body?.item.id);
                spotifyApi.getMyCurrentPlaybackState().then((data) => {
                    setIsPlaying(data.body?.is_playingk);
                });
            });
        }
    };

    const handlePlayPause = () => {
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
            if (data.body.is_playing) {
                spotifyApi.pause();
                setIsPlaying(false);
            } else {
                spotifyApi.play();
                setIsPlaying(true);
            }
        });
    };

    useEffect(() => {
        if (spotifyApi.getAccessToken() && !currentTrackId) {
            fetchCurrentSong();
            setVolume(50);
        }
    }, [currentTrackIdState, spotifyApi, session]);

    useEffect(() => {
        if (volume > 0 && volume < 100) {
            debouncedAdjustVolume(volume);
        }
    }, [volume]);

    const debouncedAdjustVolume = useCallback(
        debounce((volume) => {
            spotifyApi.setVolume(volume).catch((err) => {});
        }, 300),
        []
    );

    return (
        <div className="text-white h-24 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8 border-t-[0.1px] border-gray-900">
            <div className="flex items-center space-x-4">
                <img
                    className="hidden md:inline h-10 w-10"
                    src={songInfo?.album.images?.[0]?.url}
                    alt="current song cover image"
                />
                <div>
                    <h3>{songInfo?.name}</h3>
                    <p>{songInfo?.artists?.[0]?.name}</p>
                </div>
            </div>
            <div className="flex items-center justify-evenly">
                <SwitchHorizontalIcon className="icon-button" />
                <RewindIcon className="icon-button" />
                {isPlaying ? (
                    <PauseIcon onClick={handlePlayPause} className="icon-button h-10 w-10" />
                ) : (
                    <PlayIcon onClick={handlePlayPause} className="icon-button h-10 w-10" />
                )}
                <FastForwardIcon className="icon-button" />
                <ReplyIcon className="icon-button" />
            </div>
            <div className="flex items-center space-x-3 md:space-x-4 justify-end">
                <VolumeDownIcon
                    className="icon-button"
                    onClick={() => volume > 0 && setVolume(volume - 10)}
                />
                <input
                    className="w-14 md:w-28"
                    type="range"
                    value={volume}
                    min={0}
                    max={100}
                    onChange={(e) => setVolume(Number(e.target.value))}
                />
                <VolumeUpIcon
                    className="icon-button"
                    onClick={() => volume < 100 && setVolume(volume + 10)}
                />
            </div>
        </div>
    );
}

export default Player;
