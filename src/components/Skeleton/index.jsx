import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.module.scss';

const skeletonTypes = {
  productCard: <div className={styles.productCardSkeleton} />
};

const Skeleton = ({ width, height, dark, absoluteSkeleton, type }) => {
  const skeletonClass = cn({
    [styles.skeleton]: true,
    [styles.dark]: !!dark
  });

  return (
    skeletonTypes[type] || (
      <div
        style={{
          minWidth: width,
          minHeight: height,
          position: absoluteSkeleton ? 'absolute' : 'unset',
          zIndex: absoluteSkeleton ? '-1' : undefined
        }}
        className={skeletonClass}
      />
    )
  );
};

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  dark: PropTypes.bool,
  absoluteSkeleton: PropTypes.bool,
  type: PropTypes.oneOf(['productCard'])
};
Skeleton.defaultProps = {
  width: '',
  height: '',
  dark: false,
  absoluteSkeleton: false,
  type: null
};
export default Skeleton;
