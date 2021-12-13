import {
    HeartIcon,
    HomeIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon,
    BanIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';

function Sidebar() {
    const { data: session } = useSession();
    return (
        <div className="text-gray-500 p-5 text-sm border-r border-grey-900">
            <div className="space-y-4">
                <button
                    className="flex items-center space-x-2 hover:text-white"
                    onClick={() => signOut()}>
                    <BanIcon className="h5 w-5" />
                    <p>Log Out</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h5 w-5" />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <SearchIcon className="h5 w-5" />
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className="h5 w-5" />
                    <p>Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="h5 w-5" />
                    <p>Create Playlist</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="h5 w-5" />
                    <p>Liked Songs</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className="h5 w-5" />
                    <p>Your Episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                {/* Playlists... */}
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
                <p className="cursor-pointer hover:text-white">Playlist name</p>
            </div>
        </div>
    );
}

export default Sidebar;
