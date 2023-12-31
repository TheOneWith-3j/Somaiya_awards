import React, { useState } from 'react'
import SideBar from '../../../components/SideBar'
import Field from '../../../components/utils/Field'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const ManageUsers = () => {

  const institutionOptions = [
    "The Somaiya School",
    "S. K. Somaiya Prathmik Shala",
    "S K Somaiya Vinay Mandir High School",
    "Somaiya Vidyamandir- Sakarwadi",
    "Shri Sharda English Medium School Kopargaon",
    "Somaiya Vidya Mandir- Laxmiwadi",
    "Somaiya Shishu Niketan Primary School- Sameerwadi",
    "Somaiya Vinaymandir High School- Sameerwadi",
    "KJ Somaiya English Medium School Sameerwadi",
    "Nareshwadi Learning Centre- Dahanu",
    "SK Somaiya Vinay Mandir High School, Mumbai",
    "KJ Somaiya Junior College of Arts, Commerce and Science",
    "SK Somaiya Vinay Mandir Junior College, Mumbai",
    "KJ Somaiya Private Industrial Training Institute",
    "Smt. Sakarben Somaiya Junior College of Education (DEd)",
    "KJ Somaiya Institute of Engineering and Information Technology, Ayurvihar",
    "KJ Somaiya College of Engineering",
    "KJ Somaiya Institute of Management",
    "KJ Somaiya Polytechnic College",
    "KJ Somaiya College of Arts and Commerce",
    "KJ Somaiya College of Science and Commerce",
    "K.J Somaiya College of Comprehensive College of Education , Training and Research",
    "KJ Somaiya Bhartiya Sanskriti Peetham",
    "KJ Somaiya Centre for Buddhish Studies",
    "KJ Somaiya Centre for Studies in Jainism",
    "KJ Somaiya Medical College and Research Centre",
    "KJ Somaiya College of Physiotherapy",
    "KJ Somaiya School and College of Nursing",
    "Somaiya Sports Academy",
    "SK Somaiya College (SVU)",
    "SK Somaiya College of Arts, Science and Commerce (MU)"
  ];

  const [credentials, setCredentials] = useState({})

  const handleChange = (event) => {

    const { name, value } = event.target
    setCredentials({ ...credentials, [name]: value })
    console.log(credentials);
  }

  const handleSubmit = async()=>{

    if (Object.keys(credentials).length < 3) {

      toast.error('All fields required', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
    else {
      console.log(credentials);

      await axios.post('http://localhost:5001/auth/register',credentials)
      .then((res)=>{
        console.log(res);
        setCredentials({})
        toast.success('User created successfully', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      })
      .catch((err)=>{
        console.log(err);

        toast.error('Failed to create User', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      })
      
    }
  }

  return (
    <div>

      <div className='flex h-screen'>
        <SideBar />
        <div className='flex flex-col w-full p-5 overflow-y-scroll'>
          <div className='font-Poppins text-2xl font-semibold'>
            <h2>Manage Users</h2>
          </div>
          <div className='flex justify-center'>

            <div className='w-[50%]  shadow-xl p-4 m-5'>

              <h2 className='font-Poppins text-center text-2xl my-3 text-red-700 font-semibold'>
                Add User
              </h2>

              <div className='px-3'>

                <Field
                  title='Email ID'
                  type='email'
                  placeholder="anurag@somaiya.edu"
                  name='user_email_id'
                  value={credentials['user_email_id'] || ''}
                  onChange={handleChange}
                />

                <Field
                  title='Institution'
                  type='dropdown'
                  name='user_institution'
                  value={credentials['user_institution'] || ''}
                  options={institutionOptions}
                  onChange={handleChange}
                />

                <Field
                  title='Role'
                  type='dropdown'
                  name='user_role'
                  value={credentials['user_role'] || ''}
                  options={["ADMIN","IEAC","HOI"]}
                  onChange={handleChange}
                />

                <Field
                  title='Password'
                  type='password'
                  name='user_password'
                  value={credentials['user_password'] || ""}
                  placeholder='set default password'
                  onChange={handleChange}
                />

              </div>

              <div className='flex justify-center my-4'>
                <div
                  onClick={handleSubmit}
                  className='bg-red-700 rounded-lg p-3 w-[30%] text-center text-white font-Poppins hover:bg-red-600'>
                  Create User
                </div>
                <ToastContainer />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageUsers
