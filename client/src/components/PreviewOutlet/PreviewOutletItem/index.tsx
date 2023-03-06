import styles from './PreviewOutletItem.module.css';
import { VideoGame } from '@/model/types';
export  interface Props {
  item: VideoGame;
}

function PreviewOutletItem ({ item }: Props): JSX.Element {
  return (
    <div className={styles.PreviewOutletItem}>
      <div className={styles.cover}>
        <img src={item.imageUrl} alt={`${item.title} Cover`}/>
      </div>
      <div className={styles.info}>
        <p className={styles.title}> {item.title} </p>
        <p> Released at {item.releaseYear} </p>
        <p> By {item.developer} </p>
        <p> Metacritic: {item.rate} <span className={styles.star}>&#9733;</span> </p>
      </div>
    </div>
  );
}

export default PreviewOutletItem;
