import PropTypes from 'prop-types';
import { DateTime } from "luxon";

const ResultCard = ({ data }) => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    const dt = now.split(',').splice(0, 2).join(',')
    const time = now.split(',')[2]

  return (
    <div className='relative bg-white p-4 px-2 md:px-6 border rounded-3 space-y-3 shadow'>
        <div className='flex justify-between items-center'>
              <h1 className="font-bold md:text-lg text-sm">{dt}</h1>
            <p style= {{color:"#696969", fontSize:"13px"}}>show in drawn order</p>
        </div>
        <div className='flex justify-between items-center'>
              <p className="font-bold">Teatime Draw <span style={{ color: 'grey' }}>{time}</span></p>
            <p className="font-bold">Bonus</p>
        </div>
        <div className='flex space-x-1 md:space-x-6'>
            <span className='draw circle Blue'>{data[0]}</span>
            <span className='draw circle green'>{data[1]}</span>
            <span className='draw circle deepRed'>{data[2]}</span>
            <span className='draw circle red'>{data[3]}</span>
            <span className='draw circle purple'>{data[4]}</span>
            <span className='draw circle green'>{data[5]}</span>
            <span className='absolute right-2 md:right-5 draw circle Blue'>{data[6]}</span>
          </div>
    </div>
  )
}
// props validation should be propTypes
ResultCard.propTypes = {
    data: PropTypes.array.isRequired,
};
export default ResultCard
