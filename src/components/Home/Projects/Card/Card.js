import { Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'text-provider';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

export default function Card({
  nameId, descriptionId, githubLink, winner,
}) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className={styles.cardInfo} data-testid="Card-container">
        <a href={githubLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.github} icon={['fab', 'github']} />
        </a>
        <p className={styles.name}>
          <FormattedMessage id={nameId} />
        </p>
        <p className={styles.description}>
          <FormattedMessage id={descriptionId} />
        </p>
        {winner
          && (
          <Badge className={styles.badge}>
            <FormattedMessage id="WINNER" />
          </Badge>
          )}
      </div>
    </div>
  );
}

Card.defaultProps = {
  winner: 'false',
};

Card.propTypes = {
  nameId: PropTypes.string.isRequired,
  descriptionId: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  winner: PropTypes.bool,
};
