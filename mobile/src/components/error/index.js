import { Text } from 'react-native';
import styles from './style';

const Error = ({ error, style }) => {
  return (
    <>
      { error ? (<Text style={ [styles, style] }>{ error }</Text>) : (<></>) }
    </>
  );
}

export default Error