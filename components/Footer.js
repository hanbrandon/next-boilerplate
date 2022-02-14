import { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Footer = ({ playerOpen, setPlayerOpen }) => {
  return (
    <footer id="footer-player" className="bg-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center lg:px-2">
        {/* <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div> */}
        <div className="flex-none flex items-center justify-evenly lg:w-fit">
          <button type="button" aria-label="Add to favorites">
            <svg width="24" height="24">
              <path
                d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* <button
            type="button"
            className="hidden sm:block lg:hidden xl:block"
            aria-label="Previous"
          >
            <svg width="24" height="24" fill="none">
              <path
                d="m10 12 8-6v12l-8-6Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6v12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" aria-label="Rewind 10 seconds">
            <svg width="24" height="24" fill="none">
              <path
                d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 5v3.111c0 .491.398.889.889.889H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Pause"
          >
            <svg width="24" height="24" fill="currentColor">
              <rect x="4" y="1" width="3" height="22" rx="2" />
              <rect x="16" y="1" width="3" height="22" rx="2" />
            </svg>
          </button>
          <button type="button" aria-label="Skip 10 seconds">
            <svg width="24" height="24" fill="none">
              <path
                d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="hidden sm:block lg:hidden xl:block"
            aria-label="Next"
          >
            <svg width="24" height="24" fill="none">
              <path
                d="M14 12 6 6v12l8-6Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 6v12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-gray-500 text-gray-500 dark:text-gray-100 dark:ring-0 dark:bg-gray-500"
          >
            1x
          </button> */}
        </div>
        <div className="flex-none flex items-center justify-evenly lg:w-9/12">
         {/*  <div className="space-y-2">
            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2"
                  role="progressbar"
                  aria-valuenow="1456"
                  aria-valuemin="0"
                  aria-valuemax="4550"
                ></div>
              </div>
              <div className="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-gray-900/5"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
              <div className="text-cyan-500 dark:text-gray-100">24:16</div>
              <div className="text-gray-500 dark:text-gray-400">75:50</div>
            </div>
          </div> */}
          <AudioPlayer
            autoPlay
            src="http://example.com/audio.mp3"
            onPlay={e => console.log("onPlay")}
            // other props here
          />
        </div>
        <div className="flex-none flex items-center justify-evenly lg:w-2/12">
          <div className="flex items-center space-x-4">
            <img
              src="/images/album.png"
              alt=""
              width="44"
              height="44"
              className="flex-none rounded-lg bg-gray-100"
            />
            <div className="min-w-0 flex-auto space-y-1 font-semibold">
              {/* <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
                <abbr title="Episode">Ep.</abbr> 128
              </p> */}
              <h2 className="text-gray-500 dark:text-gray-400 text-sm leading-6 truncate">
                Artist Name
              </h2>
              <p className="text-gray-900 dark:text-gray-50 text-lg">
                Music Title
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
