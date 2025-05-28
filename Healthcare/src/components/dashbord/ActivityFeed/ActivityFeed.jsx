export default function ActivityFeed() {
  const activityBars = [
    { day: 'Mon', height: 'h-10' },
    { day: 'Tue', height: 'h-16' },
    { day: 'Wed', height: 'h-8' },
    { day: 'Thu', height: 'h-20' },
    { day: 'Fri', height: 'h-12' },
    { day: 'Sat', height: 'h-6' },
    { day: 'Sun', height: 'h-14' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6 w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Activity</h2>
      <p className="text-gray-600 mb-2">3 appointments this week</p>
      <div className="flex items-end space-x-8 h-35">
        {activityBars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center justify-end">
            <div className={`w-4 ${bar.height} bg-blue-500 rounded-md`} />
            <span className="mt-2 text-sm text-gray-600">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
