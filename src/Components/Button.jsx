import {useDispatch} from 'react-redux';
import { minus, plus } from '../reducers/slice';
export const Button = ({name}) => {
 const dispatch =  useDispatch()
  return (
    <div>
      <button onClick={()=>name=='+'?dispatch(plus(2)):dispatch(minus(1))}>{name}</button>
    </div>
  )
}
