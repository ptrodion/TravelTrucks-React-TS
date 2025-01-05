import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicles } from '../../redux/operations';
import {
  selectError,
  selectIsLoading,
  selectListOfVehicles,
} from '../../redux/selector';
import { AppDispatch } from '../..//redux/store';

const Vehicles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const listOfVehicles = useSelector(selectListOfVehicles);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h1>Vehicles</h1>
      <ul>
        {listOfVehicles.map((vehicle) => (
          <li key={vehicle.id}>{vehicle.name}</li>
        ))}
      </ul>
    </section>
  );
};
export default Vehicles;
