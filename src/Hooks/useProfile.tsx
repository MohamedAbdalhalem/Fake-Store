import { useQuery } from "@tanstack/react-query"
import { profileType } from "../Types/Profile.type"
import axios from "axios"

export default function useProfile(profileId : number) {
  function getUserData() {
        return axios.get(`https://fakestoreapi.com/users/${profileId}`)
    }
    const {data,isLoading,isError} = useQuery({
        queryKey: ['getUserData',profileId],
        queryFn: getUserData
    })
    const profile: profileType = data?.data
    return{ profile,isLoading,isError }
}
