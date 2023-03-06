import PreviewOutletItem from './PreviewOutletItem';
import styles from './PreviewOutlet.module.css';
import { VideoGame } from '@/model/types';

export interface Props {
  data: VideoGame[];
}

function PreviewOutlet({ data }: Props): JSX.Element {
  return (
    <div className={styles.PreviewOutlet}>
      {
        data.length > 0
          ? data.map((item) => {
            return <PreviewOutletItem item={item} key={`${item.title}-${item.releaseYear}`}/>
          })
          : null
      }
    </div>
  );
}

export default PreviewOutlet;
