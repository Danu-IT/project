import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPet } from '../store/petReducer';

const Profile = () => {
  const dispatch = useDispatch();
  const pet = useSelector(state => state.pet)
  useEffect(() => {
    dispatch(fetchPet());
  }, []);
  const refreshImg = () => dispatch(fetchPet())
  return (
    <>
    {!pet.loading ? <img width={'400px'} height={'400px'} src={pet.pets && pet.pets[0]}></img> : 'Загрузка...'}
    {pet.error && <button onClick={refreshImg}>Загрузить повторно</button>}
    </>
)}

export default Profile