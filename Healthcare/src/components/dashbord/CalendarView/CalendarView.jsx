const calendarData = {
  month: 'October 2021',
  days: [
    { day: 4, times: ['09:00', '11:00'] },
    { day: 6, times: ['13:00'] },
    { day: 7, times: ['15:00'] },
  ],
};

const appointments = [
  { title: 'Dentist', time: '09:00' },
  { title: 'Physiotherapy Appointment', time: '11:00' },
];

export default function CalendarView() {
  return (
    <div className="p-2 bg-gray-200 shadow rounded-lg w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Calendar - {calendarData.month}</h2>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600 mb-2">
        {[...Array(7)].map((_, i) => {
          const date = i + 1;
          const match = calendarData.days.find(d => d.day === date);
          return (
            <div key={i} className="border rounded-lg py-4 px-2 w-15 h-20 relative">
              <div className="font-bold">{date}</div>
              {match?.times.map((time, idx) => (
                <div key={idx} className="text-xs bg-blue-100 text-blue-600 rounded mt-1 px-1">
                  {time}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="m-6 space-x-6 flex flex-row">
        {appointments.map((appt, index) => (
          <div key={index} className="bg-blue-200 p-4 rounded-lg shadow-sm ml-18 w-40 h-25">
            <h3 className="font-semibold text-gray-800">{appt.title}</h3>
            <p className="text-sm text-gray-600">{appt.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
