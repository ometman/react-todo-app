import PropTypes from 'prop-types'

import styles from '@/styles/Header.module.css';
Header.propTypes = {
  children: PropTypes.string.isRequired
}

const Header = (props) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };


  return (
    <header style={headerStyle} className={styles.header}>
      {props.children}
    </header>
  );
};
export default Header;
