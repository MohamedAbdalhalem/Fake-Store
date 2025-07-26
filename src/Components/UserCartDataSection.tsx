import useProfile from "../Hooks/useProfile"
import ProductDetialsLoadingScreen from "./ProductDetialsLoadingScreen"

export default function UserCartDataSection({userId} : {userId :number}) {
    const { profile, isLoading } = useProfile(userId)
    if (isLoading) {
        return <ProductDetialsLoadingScreen/>
    }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
      🧑 Customer Information
    </h2>
    <div className="grid sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-200">
              <p><span className="font-medium">Full Name: </span>{profile.name.firstname} { profile.name.lastname }</p>
      <p><span className="font-medium">Email: </span> {profile.email} </p>
              <p><span className="font-medium">Phone: </span>{ profile.phone }</p>
              <p><span className="font-medium">Address:</span>{profile.address.city} - { profile.address.street }</p>
    </div>
  </div>
  )
}
