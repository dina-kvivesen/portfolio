import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title = '' }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? ' | ' : ''}Portfolio CA
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.oneOfType ([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default Head;