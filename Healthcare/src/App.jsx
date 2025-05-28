import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import DashboardMainContent from './components/dashbord/DashboardMainContent.jsx';

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
}
