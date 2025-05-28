import bodylogo from '../../../../assets/bodylogo.jpg';
const anatomyData = [
  { label: 'Healthy Heart', icon: 'fa-heart', color: 'text-green-500', position: { top: 'top-15', left: 'left-25' }},
  { label: 'Lungs', icon: 'fa-lungs', color: 'text-red-500', position: { top: 'top-20', left: 'left-25' }},
  { label: 'Teeth', icon: 'fa-tooth', color: 'text-green-500', position: { top: 'top-7', left: 'left-18' }},
  { label: 'Bone', icon: 'fa-bone', color: 'text-red-500', position: { bottom: 'bottom-20', left: 'left-20' }},
];

export default function AnatomySection() {
  return (
    <div className='relative w-[400px] mx-auto'>
      <img
        src= {bodylogo}
        alt="Anatomy Illustration"
        className="w-[110px] h-auto"
      />
      <div className="flex flex-wrap gap-4">
        {anatomyData.map((item, index) => (
          <div key={index} className={`absolute ${item.position?.top || ''} ${item.position?.left || ''} ${item.position?.bottom || ''} ${item.position?.right || ''} flex items-center gap-1`}>
            <i className={`fas ${item.icon} ${item.color} text-xl`}></i>
            <span className="font-semibold text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
