import boylogo from '../../assets/boy.png';
export default function Header() {
  return (
    <header className="header p-2 text-white bg-green-200 flex justify-between items-center rounded-sm">
      <div className="logo text-3xl font-bold text-sky-400">Healthcare.</div>
      <div className="search-notify flex items-center">
        <input type="search" placeholder="Search" className="search-inputbg-transparent w-110 text-black border border-gray-400 py-2 px-4 rounded-lg" />
       <i class="fa-solid fa-bell ml-4 text-yellow-400"></i>
      </div>
      <div className="profile-actions flex items-center">
        <img src={boylogo} alt="User" className="avatar w-10 h-10 rounded-full mr-4" />
        <button className="add-btn bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg ml-4">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </header>
  );
}