import { } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  increaseAge,
} from '../redux/modules/age/ageActions';

export default () => {

  const dispatch = useDispatch();
  const { age } = useSelector(state => state); // from saga initial state deconstucting

  return {
    age,
    increaseAge(data){
      dispatch(increaseAge(data));
    },
  };
}

