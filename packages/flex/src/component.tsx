import styles from './styles.module.scss';
import type { FlexProps } from './types';

const Flex: React.FC<FlexProps> = () => {
	return <div className={styles['c-flex']}>flex component</div>;
};

export default Flex;
