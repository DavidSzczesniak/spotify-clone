import {
    HeartIcon,
    HomeIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon,
} from '@heroicons/react/outline';

function Sidebar() {
    const iconStyle = 'h5 w-5';
    return (
        <div className="text-gray-500 p-5 text-sm border-r border-grey-900">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className={iconStyle} />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <SearchIcon className={iconStyle} />
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className={iconStyle} />
                    <p>Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className={iconStyle} />
                    <p>Create Playlist</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className={iconStyle} />
                    <p>Liked Songs</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className={iconStyle} />
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
