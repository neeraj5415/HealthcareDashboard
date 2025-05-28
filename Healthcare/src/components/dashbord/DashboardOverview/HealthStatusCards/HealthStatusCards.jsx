const healthCards = [
  { title: 'Lungs', status: 'Checkup needed', color: 'text-red-500' },
  { title: 'Teeth', status: 'Healthy', color: 'text-green-500' },
  { title: 'Bone', status: 'Pain detected', color: 'text-red-500' },
];

export default function HealthStatusCards() {
  return (
    <div className="flex flex-row flex-wrap gap-6 ">
      {healthCards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-3 border border-gray-100 hover:shadow-md transition-shadow w-full"
        >
          <h3 className="text-lg font-bold text-gray-800 ">{card.title}</h3>
          <p className={`font-semibold ${card.color}`}>{card.status}</p>
        </div>
      ))}
    </div>
  );
}
