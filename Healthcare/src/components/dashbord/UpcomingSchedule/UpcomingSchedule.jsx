import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard.jsx';

const upcomingData = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Dentist', time: '09:00' },
      { title: 'Physiotherapy Appointment', time: '11:00' },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Health checkup complete', time: '09:00' },
      { title: 'Ophthalmologist', time: '11:00' },
    ],
  },
];

export default function UpcomingSchedule() {
  return (
    <div className=" bg-gray-200 shadow rounded-lg p-2 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">The Upcoming Schedule</h2>
      {upcomingData.map((dayBlock, index) => (
        <div key={index} className="mb-2">
          <h3 className="text-lg font-semibold text-gray-700 p-1 mb-2 bg-blue-400">{dayBlock.day}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
            {dayBlock.appointments.map((appt, idx) => (
              <SimpleAppointmentCard key={idx} title={appt.title} time={appt.time}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
