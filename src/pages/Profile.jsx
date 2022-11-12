import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state);
  const visibleContent = () => dispatch({type: 'TOGGLE'});
  return (
    <>
       <input onChange={visibleContent} type='checkbox'></input>
       {visible && <div>Изменияем Store</div>}
    </>
)}

export default Profile