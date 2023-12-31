import { getValidYears } from '../../utils/chartHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedYear } from '../../store/features/chartYearSelectorSlice';

const ChartFilter = ({ width, height }) => {
  const selectedYear = useSelector((state) => state.chartYearSelector.selectedYear);
  const dispatch = useDispatch();
  const years = getValidYears();
  return (
    <div className="relative">
      <select
        required
        className={`shadow-md self-end block appearance-none  ${width} ${height} font-medium text-lg text-center bg-lim-100 border border-gray-200 text-gray-700 py-1 px-3 rounded leading-tight focus:bg-white focus:ring-4 focus:outline-none focus:ring-lime-300 focus:bg-white`}
        id="chart"
        onChange={(e) => dispatch(setSelectedYear(e.target.value))}
        value={selectedYear}
        name="chart">
        <option className="font-bold" disabled>
          Year
        </option>
        {years?.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default ChartFilter;
