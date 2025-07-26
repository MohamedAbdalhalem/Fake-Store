import ErrorScreen from "../Components/ErrorScreen";
import MainLoadingScreen from "../Components/MainLoadingScreen";
import useProfile from "../Hooks/useProfile";

export default function Profile() {
    const {profile,isLoading,isError} = useProfile(1)
    if (isLoading) {
        return <MainLoadingScreen count={1}/>
    }
    if (isError) {
        return <ErrorScreen/>
    }
    
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
