/* eslint-disable @next/next/no-sync-scripts */
import styles from "./index.module.scss";

const Video = ({ id }) => {
  return (
    <div>
      <div className={styles.container}>
        <iframe
          src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&quality=1080p&background=1&dnt=1`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className={styles.video}
          title="Vinitur"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
  );
};
export default Video;
