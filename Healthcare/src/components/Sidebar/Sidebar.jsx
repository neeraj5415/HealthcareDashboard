export default function Sidebar() {
  const navLinks = [
    <i class="fa-solid fa-boxes-stacked"> Dashboard</i>,
    <i class="fa-solid fa-clock-rotate-left">'History</i>,
    <i class="fa-solid fa-calendar-days">Calendar</i>,
    <i class="fa-regular fa-calendar-check">Appointments</i>,
    <i class="fa-solid fa-chart-simple">Statistics</i>,
    'Tools',
    <i class="fa-solid fa-comment">Chat</i>,
    <i class="fa-solid fa-headset">Support</i>,
    <i class="fa-solid fa-gear">Setting</i>,
  ];

  return (
    <aside className="w-64 py-6 px-4 min-h-screen bg-gray-200 rounded-sm">
      <h2 className="text-lg mb-6 px-2 text-gray-600/50">General</h2>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} className="mb-8 px-8">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
