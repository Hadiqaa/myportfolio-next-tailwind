
import PulsingSparkle from '../sparkle/PulsingSparkle';



const TimelineItem = ({
  dateRange = '',
  primaryText = '',
  secondaryText = '',
  optionalText ='',
  sparkleColor='',
  textColor = 'black',
  primaryTextSize = 'text-3xl',

}) => {

  return (
    <div className="flex flex-row mt-1 py-5">
      <div className=' px-2'>
        <PulsingSparkle color={sparkleColor} />
      </div>
      <div className={`flex  px-4 `}>
        <p className={`text-4xl font-AbrilFatface text-${textColor}`}>{dateRange}</p>
      </div>
      <div className='flex flex-col px-4 '>
        <p className={`text-${textColor} font-monsterrat font-bold  ${primaryTextSize} leading-none`}>{primaryText}</p>
        <p className={`text-${textColor} font-monsterrat font-extralight text-2xl leading-none`}>{secondaryText}</p>
        <p className={`text-${textColor} font-NATS text-3xl leading-none`}>{optionalText}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

