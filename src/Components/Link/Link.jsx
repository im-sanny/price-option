import PropTypes from 'prop-types';


const Link = ({ route }) => {
  return (
    <li className="mx-5 hover:bg-purple-400">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes ={
    route: PropTypes.object
}

export default Link;
