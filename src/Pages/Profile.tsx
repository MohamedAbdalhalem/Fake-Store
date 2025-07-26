import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { profileType } from "../Types/Profile.type";
import ErrorScreen from "../Components/ErrorScreen";

export default function Profile() {
    function getUserData() {
        return axios.get('https://fakestoreapi.com/users/1')
    }
    const {data,isLoading,isError} = useQuery({
        queryKey: ['getUserData'],
        queryFn: getUserData
    })
    if (isLoading) {
        return <div role="status" className="max-w-lg mx-auto p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5" />
  <span className="sr-only">Loading...</span>
</div>
    }
    if (isError) {
        return <ErrorScreen/>
    }
    const profile :profileType = data?.data
  return (
    <div className="px-4 pb-4 pt-12">
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg transition duration-300">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-circle-user  text-5xl text-gray-800"></i>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {profile.name.firstname} {profile.name.lastname}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Front-end Developer</p>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2`">
          <span className="font-medium text-gray-500 dark:text-gray-400">Email : </span>
          <span>{profile.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-500 dark:text-gray-400">Phone : </span>
          <span>{profile.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-500 dark:text-gray-400">City :</span>
          <span>{profile.address.city}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-500 dark:text-gray-400">Street :</span>
          <span>{profile.address.street}</span>
        </div>
      </div>
    </div>
    </div>
  )
}
