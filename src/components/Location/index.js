import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Tag from '~/components/common/Tag';

const locationTypeColors = {
  attraction: 'blue',
  restaurant: 'red',
};

const Location = ({ location, locations }) => (
  <div className={styles.content}>
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>
          {`Recommendations for ${location}`}
        </h1>
      </header>
      <table className={styles.table}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>Name</th>
          <th className={styles.tableHeader}>Type</th>
        </tr>
        {locations.map(({ name, type }) => (
          <tr className={styles.tableRow}>
            <td className={styles.tableElement}>{name}</td>
            <td className={styles.tableElement}>
              <Tag text={type} color={locationTypeColors[type]} />
            </td>
          </tr>
        ))}
      </table>
    </div>
    <div className={styles.mapContainer}>Map will go here</div>
  </div>
);

Location.propTypes = {
  location: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Location;
