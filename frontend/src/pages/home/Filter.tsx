import { useQuery } from '@tanstack/react-query';
import { getPlaces } from '../../api';
import { sortOptions } from '../../constants';
import { Place } from '../../types';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [params, setParams] = useSearchParams();

  const { isPending, data } = useQuery<Place[]>({
    queryKey: ['places'],
    queryFn: () => getPlaces(),
  });

  const locations = [...new Set(data?.map((i) => i.location.split(',')[0]))];

  const handleChange = (name: string, value: string) => {
    params.set(name, value);

    setParams(params);
  };

  const hasParams = Array.from(params.entries()).length > 0;

  console.log(params.get('location'));
  console.log(params.get('title'));
  console.log(params.get('order'));
  
  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
      <div className="field">
        <label htmlFor="">Destination or City</label>

        {!isPending && (
          <select
            value={hasParams && (params.get('location')) || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            className="input"
          >
            <option>Please Select</option>
            {locations?.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="field">
        <label htmlFor="">Search by hotel name</label>
        <input
           value={hasParams && (params.get('title')) || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Exp:Seaside Villa"
          className="input"
        />
      </div>

      <div className="field">
        <label htmlFor="">Order By</label>

        <select
           value={hasParams && (params.get('order')) || ''}
          onChange={(e) => handleChange('order', e.target.value)}
          className="input"
        >
          {sortOptions.map((i, index) => (
            <option key={index} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setParams({})}
          type="reset"
          className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit"
        >
          Clear Filter
        </button>
      </div>
    </form>
  );
};

export default Filter;
