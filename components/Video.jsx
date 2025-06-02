// import { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// const VideoPlayer = ({ src }) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     if (!playerRef.current) {
//       const options = {
//         controls: true,
//         autoplay: true,
//         loop: true,
//         // muted: true,
//         fluid: true,
//         responsive: true,
//         playsinline: true,
//         preload: 'auto',
//         sources: [{
//           src: src,
//           type: 'video/mp4'
//         }],
//         controlBar: {
//           children: [
//             'playToggle',
//             'volumePanel',
//             'progressControl',
//             'currentTimeDisplay',
//             'timeDivider',
//             'durationDisplay',
//             'fullscreenToggle',
//           ],
//           volumePanel: {
//             inline: false
//           }
//         }
//       };

//       playerRef.current = videojs(videoRef.current, options);
      
//       // Start playing when ready
//       playerRef.current.ready(function() {
//         this.play().catch(function(error) {
//           console.log("Autoplay prevented:", error);
//         });
//       });
//     }

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [src]);

//   return (
//     <div className="w-full h-full">
//       <video
//         ref={videoRef}
//         className="video-js vjs-theme-city vjs-big-play-centered h-full w-full object-cover"
//         data-setup="{}"
//         playsInline
//       />
//     </div>
//   );
// };

// export default VideoPlayer;
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Only initialize on client side
    if (typeof window === 'undefined') return;
  if (!playerRef.current) {
      const options = {
        controls: true,
        autoplay: true,
        muted: true, // Add muted option
        loop: true,
        fluid: true,
        responsive: true,
        playsinline: true,
        sources: [{ src, type: 'video/mp4' }],
        controlBar: {
          children: [
            'playToggle',
            'volumePanel',
            'progressControl',
            'currentTimeDisplay',
            'timeDivider',
            'durationDisplay',
            'fullscreenToggle',
          ]
        }
      };

      playerRef.current = videojs(videoRef.current, options);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src]);

  return (
    <div className="w-full h-full">
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-theme-city vjs-big-play-centered"
          playsInline
        />
      </div>
    </div>
  );
};

export default VideoPlayer;