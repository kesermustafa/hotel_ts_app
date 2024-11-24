import { useMutation } from '@tanstack/react-query';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deletePlace } from '../../api';
import { toast } from 'react-toastify';

const Buttons = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { isPending, mutate } = useMutation({
    mutationKey: ['deletePlace'],
    mutationFn: () => deletePlace(id as string),

    onSuccess: () => {
      toast.info('Accommodation place has been removed.');
      navigate('/')
    },
    onError: (err) => {
      console.log(err);
      toast.error('An error occurred.');
    },
  });

  return (
    <div className="flex justify-between mb-5">
      <Link to={'..'} className="btn">
        <MdKeyboardArrowLeft />
        Back
      </Link>

      <button disabled={isPending} onClick={() => mutate()} className="btn">
        <FaRegTrashAlt />
        Delete
      </button>
    </div>
  );
};

export default Buttons;
