import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Tag from '~/components/common/Tag';

const locationTypeColors = {
  attraction: 'blue',
  food: 'red',
};

const Location = ({ location, locations }) => {
  const [rowHovered, setRowHovered] = useState({});

  const toggleRowHover = (index, value) => {
    setRowHovered((prevRowHovered) => ({ ...prevRowHovered, [index]: value }));
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>
            {`Recommendations for ${location}`}
          </h1>
        </header>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeader}>Name</th>
              <th className={styles.tableHeader}>Type</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(({ name, type }, index) => (
              <tr
                key={name}
                className={
                  classNames(
                    styles.tableRow,
                    rowHovered[index] && styles.tableRowHovered,
                  )
                }
                onMouseEnter={() => toggleRowHover(index, true)}
                onMouseLeave={() => toggleRowHover(index, false)}
              >
                <td className={styles.tableElement}>{name}</td>
                <td className={styles.tableElement}>
                  <Tag text={type} color={locationTypeColors[type]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.mapContainer}>Map will go here</div>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Location;
