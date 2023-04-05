import { useState } from 'react';
import './App.css';
import Slots from './Components/Slots';
import { BsCalendar, BsFillFolderFill } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import {
  HiOutlineDocumentText,
  HiCurrencyDollar,
  HiDotsVertical,
} from 'react-icons/hi';
import MyButton from './Components/MyButton';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

function App() {
  return (
    <div
      className='d-flex flex-row bg-black gx-4 py-2'
      style={{ height: '700px' }}
    >
      <div className='col-3 d-flex flex-column gap-3 align-items-center '>
        <div className='bg-gray h-25 d-flex flex-column px-4 justify-content-center w-75 rounded-4'>
          <div className='mb-3'>
            <p className='fw-bold pb-0 mb-0' style={{ color: '#fe4167' }}>
              Hira R.
            </p>
            <span className='fw-lighter' style={{ fontSize: 'small' }}>
              UX/UI Designer
            </span>
          </div>
          <div className='d-flex text-center justify-content-between'>
            <div>
              <span className='fw-bold'>125</span>
              <p>Projects</p>
            </div>
            <div>
              <span className='fw-bold'>$124</span>
              <p>Revenue</p>
            </div>
          </div>
        </div>
        <div className='bg-gray h-50 w-75 d-flex flex-column px-4 justify-content-center rounded-4'>
          <div className='mt-3'>
            <span className='px-3 py-2 bg-black rounded me-2'>
              <BsFillFolderFill />
            </span>
            <span className='fw-semibold'>Dashboard</span>
          </div>
          <div className='ms-3'>
            <div className='my-4 d-flex gap-2 align-items-center'>
              <TfiEmail />
              <span>Email</span>
            </div>
            <div className='my-4 d-flex gap-2 align-items-center'>
              <AiOutlineCalendar />
              <span>Calendar</span>
            </div>
            <div className='my-4 d-flex gap-2 align-items-center'>
              <GoGraph /> <span>Graphs</span>
            </div>
            <div className='my-4 d-flex gap-2 align-items-center'>
              <HiOutlineDocumentText />
              <span>Forms</span>
            </div>
          </div>
        </div>
        <div
          className='h-25 w-75 d-flex flex-column justify-content-center rounded-4 px-3 position-relative'
          style={{ backgroundColor: '#3535bec4' }}
        >
          <span className='fw-bold pb-0'>Go Pro</span>
          <p className=''>Upgrade your plan to get pro benefits</p>
          <input
            type='button'
            value="Let's Start"
            className='w-50 position-relative'
            style={{
              right: '-45%',
              backgroundColor: 'black',
              fontWeight: 'bold',
              color: 'white',
              borderRadius: '12px 0 12px 12px',
              padding: '5px',
              border: 'none',
              fontSize: '12px',
            }}
          />
        </div>
      </div>
      <div className='col-4 d-flex flex-column gap-3'>
        <div
          className='bg-gray rounded-4 w-90 d-flex py-3'
          style={{ minHeight: '15%' }}
        >
          <div className='d-flex col-4 justify-content-center align-items-center '>
            <HiCurrencyDollar size={50} />
          </div>
          <div className='col-8'>
            <span>Total Revenue</span>
            <p className='fw-bold'>$92,983</p>
            <div
              className='progress mt-4 w-75'
              style={{ height: '10px', borderRadius: '0px' }}
            >
              <div
                className='progress-bar w-75'
                role='progressbar'
                aria-label='Basic example'
                aria-valuenow='75'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>
        </div>
        <div
          className=' rounded-4 w-90 d-flex gap-3'
          style={{ minHeight: '25%' }}
        >
          <div className='d-flex flex-column col bg-gray rounded-4 justify-content-center py-2 px-4'>
            <p className='fw-bold mb-0'>Travel</p>
            <span style={{ fontSize: 'small', display: 'inline' }}>
              Mobile Application
            </span>
            <span style={{ fontSize: 'x-small' }}>Seen by</span>
            <div className='d-flex my-1'>
              <FaUserCircle size={25} />
              <FaUserCircle
                size={25}
                style={{ position: 'relative', left: '-9px' }}
              />
              <FaUserCircle
                size={25}
                style={{ position: 'relative', left: '-18px' }}
              />
            </div>

            <div className='mt-2'>
              <MyButton text={'Tour'} bg={'blue'} />
              <MyButton text={'Trip'} bg={'black'} />
              <MyButton text={'Transport'} bg={'black'} />
            </div>
          </div>
          <div className='d-flex flex-column col bg-gray rounded-4 justify-content-center py-2 px-4'>
            <p className='fw-bold mb-0'>Hotel</p>
            <span style={{ fontSize: 'small', display: 'inline' }}>
              Dashboard
            </span>
            <span style={{ fontSize: 'x-small' }}>Seen by</span>

            <div className='d-flex my-1'>
              <FaUserCircle size={25} />
              <FaUserCircle
                size={25}
                style={{ position: 'relative', left: '-9px' }}
              />
              <FaUserCircle
                size={25}
                style={{ position: 'relative', left: '-18px' }}
              />
            </div>

            <div className='mt-2'>
              <MyButton text={'Tour'} bg={'blue'} />
              <MyButton text={'Trip'} bg={'black'} />
              <MyButton text={'Transport'} bg={'black'} />
            </div>
          </div>
        </div>
        <div className='d-flex flex-column rounded-4 w-90 h-50 bg-gray justify-content-center'>
          <div className='d-flex px-4 justify-content-between'>
            <p className='fw-bold'>Free slots Available</p>
            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='flexSwitchCheckChecked'
                defaultChecked
              />
            </div>
          </div>
          <div className='d-flex flex-row flex-wrap justify-content-center'>
            <Slots className='col' date='12' month='June' bg='#fe4167' />
            <Slots className='col' date='18' month='June' bg='black' />
            <Slots className='col' date='20' month='June' bg='black' />
            <Slots className='col' date='02' month='July' bg='black' />
            <Slots className='col' date='10' month='July' bg='black' />
            <Slots className='col' date='15' month='July' bg='black' />
          </div>
        </div>
      </div>
      <div className='col-5 d-flex flex-column gap-3'>
        <div className='bg-gray rounded-4 w-90 d-flex h-25 align-items-center justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <FaUserCircle size={60} />
          </div>
          <div className='col-8'>
            <p className='fw-bold d-inline'>Dear Client</p>
            <span style={{ marginLeft: '50%' }}>
              <RiArrowDropDownLine size={25} />
            </span>
            <p style={{ fontWeight: 'lighter' }}>
              Join Our Online Community. It helps in managing your projects
            </p>
          </div>
        </div>
        <div className='bg-gray rounded-4 w-90 h-50 align-items-center justify-content-center'>
          <div className='d-flex mt-3 px-4 justify-content-center align-items-center'>
            <div className='col-8'>
              <p className='fw-bold'>Transaction Details</p>
              <span>Hi Hira</span>
            </div>
            <div className='col-4 text-end'>
              <FaUserCircle size={50} />
            </div>
          </div>
          <div className='d-flex mt-3 px-4 justify-content-center align-items-center'>
            <div className='col-8'>
              <p className='fw-semibold'>$4763.40</p>
              <span className='fw-lighter'>Available Balance</span>
            </div>
            <div className='col-4 text-end'>
              <span>**** 3863</span>
            </div>
          </div>
          <div className='d-flex px-4 mt-3 gap-3'>
            <FaUserCircle size={30} />
            <FaUserCircle size={30} />
            <FaUserCircle size={30} />
            <FaUserCircle size={30} />
            <FaUserCircle size={30} />
          </div>

          <button
            style={{
              borderRadius: '25px',
              border: 'none',
              backgroundColor: '#fe4167',
              padding: '5px 20px',
              position: 'relative',
              right: '-75%',
              fontWeight: '600',
              color: 'white',
            }}
          >
            Send
          </button>
        </div>
        <div className=' rounded w-90 h-50 d-flex gap-3'>
          <div className='d-flex flex-column justify-content-center col bg-gray rounded-4 px-4'>
            <div>
              <span className='fw-semibold'>Project Details</span>
              <span className='ms-5'>
                <HiDotsVertical />
              </span>
            </div>
            <p className='fw-bold' style={{ color: '#fe4167' }}>
              Hira R.
            </p>
            <span className='mb-3 fw-light'>UX/UI Designer</span>
            <p className='fw-bold mb-3'>Project Progress</p>
            <div className='progress' style={{ height: '15px' }}>
              <div
                className='progress-bar w-75'
                role='progressbar'
                aria-label='Basic example'
                aria-valuenow='75'
                aria-valuemin='0'
                aria-valuemax='100'
              >
                75%
              </div>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center col bg-gray rounded-4 px-4'>
            <p className='fw-bold mb-0'>Project Progress</p>

            <div className='radial-01 radial-three-quarters'>
              <span className='radial-01-number'>
                75
                <span className='radial-01-syb'>
                  <sup>%</sup>
                </span>
              </span>
              <span className='radial-01-border-r'></span>
              <span className='radial-01-border-l'></span>
            </div>

            <span>3 Remaining Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
