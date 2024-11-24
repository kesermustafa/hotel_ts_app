const Rating = ({ point, expand }: { point: number; expand?: boolean }) => {
  const color =
    point >= 4.7
      ? 'bg-green-500'
      : point >= 4
      ? 'bg-blue-500'
      : point >= 3
      ? 'bg-yellow-500'
      : 'bg-red-500';
  const text =
    point >= 4.7
      ? 'Excellent'
      : point >= 4
      ? 'Good'
      : point >= 3
      ? 'Satisfactory'
      : point >= 2
      ? 'Disappointing'
      : 'Awful';

  return (
    <div>
      <span className={`p-2 rounded-lg text-white font-bold w-fit ${color}`}>
        {point}
      </span>

      {expand && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
