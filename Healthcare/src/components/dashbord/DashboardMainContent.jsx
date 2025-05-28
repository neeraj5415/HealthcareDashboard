import DashboardOverview from './DashboardOverview/DashboardOverview.jsx';
import AnatomySection from './DashboardOverview/AnatomySection/AnatomySection.jsx';
import HealthStatusCards from './DashboardOverview/HealthStatusCards/HealthStatusCards.jsx';
import CalendarView from './CalendarView/CalendarView.jsx';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule.jsx';
import ActivityFeed from './ActivityFeed/ActivityFeed.jsx';

export default function DashboardMainContent() {
  return (
    <main className="flex-1 bg-white overflow-y-auto">
      <section className="mb-8">
        <DashboardOverview />
      </section>
      <section className="flex flex-col xl:flex-row gap-6 items-start">
        <div lassName="flex flex-col space-y-*">
        <div className="flex flex-col xl:flex-row gap-8">
          <AnatomySection className="w-full xl:w-1/3"/>
          <HealthStatusCards className="w-full xl:w-1/3 flex flex-row flex-wrap gap-4 items-start"/>
        </div> 
          <section>
          <ActivityFeed />
          </section>
          </div>
      <div className="flex flex-col overflow-hidden mt-[-60px] bg-gray-200 p-2 rounded-sm">
        <CalendarView className="w-full xl:w-1/3" />
      <section className="">
        <UpcomingSchedule />
      </section>
      </div>
      </section>
    </main>
  );
}