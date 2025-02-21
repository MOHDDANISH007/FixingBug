import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashBoard = ({ logginUserData, setUser}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] min-h-screen w-full overflow-auto'>
      <Header setUser={setUser}  />
      <h1 className="mt-10 text-white text-2xl font-bold">Admin Dashboard</h1>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
