function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="simple-appointment-card bg-blue-300 rounded-sm p-2">
      <h3>{title}</h3>
      <p>Time: {time}</p>
    </div>
  );
}

export default SimpleAppointmentCard;