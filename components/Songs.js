import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song';

function Songs() {
    let playlist = useRecoilValue(playlistState);
    playlist = playlist?.tracks.items.filter((item) => item.track.id);
    console.log(playlist);
    return (
        <div className="text-white flex flex-col space-y-1 px-8 pb-28">
            {playlist?.map((item, idx) => (
                <Song key={idx} order={idx} track={item} />
            ))}
        </div>
    );
}

export default Songs;
