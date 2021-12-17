import { atom } from 'recoil';

// currently selected track for player
export const currentTrackIdState = atom({
    key: 'currentTrackIdState',
    default: null,
});

// if player is playing a track
export const isPlayingState = atom({
    key: 'isPlayingState',
    default: false,
});
