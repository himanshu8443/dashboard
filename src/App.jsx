import { FcCalendar } from 'react-icons/fc'
import { AiFillCaretDown } from 'react-icons/ai'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './App.css'
import NewUsers from './components/NewUsers';
import Options from './components/Options';
import CoursesBlog from './components/CoursesBlog';
import EventLog from './components/EventLog';
import Premium from './components/Premium';
import Invite from './components/Invite';
import Navigation from './components/Navigation';


function App() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'users',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: '#76c9c1',
        backgroundColor: '#76c9c1',
      },
    ],
  };


  return (
    <>
      <Navigation />
      <div className=' flex max-md:flex-col gap-10 w-full bg-white rounded-b-md shadow-sm shadow-gray-500 p-2'>
        <div className=' w-8/12'>
          <div className=' flex p-3 justify-between '>
            <div className=' flex gap-3 items-center font-medium' >
              <FcCalendar size={30} /> Your School
            </div>
            <div className=' md:flex gap-7 items-center font-medium mb-5 hidden' >
              <button className=' border-b-4 border-primary p-1 hover:bg-gray-200 rounded-sm'>New Signups</button>
              <button className='p-1 hover:bg-gray-200 rounded-sm text-slate-500'>Revenue</button>
              <button className='p-1 hover:bg-gray-200 rounded-sm text-slate-500'>Product sales</button>
              <button className='p-1 hover:bg-gray-200 rounded-sm text-slate-500'>Active learners</button>
              <button className=' bg-gray-300 rounded-full flex py-1 px-2 items-center gap-1 text-sm'>
                last 7 days <AiFillCaretDown />
              </button>
            </div>
          </div>
          <div className=' w-[350px] md:w-full h-[250px]'>
            <Line options={options} data={data} />
          </div>
        </div>
        <Options />
      </div>
      <div className=' flex gap-6 mt-5 max-md:flex-wrap'>
        <NewUsers />
        <CoursesBlog />
        <EventLog />
        <div className='flex flex-col gap-4 max-sm:w-full '>
          <Premium />
          <Invite />
        </div>
      </div>
    </>
  )
}

export default App
