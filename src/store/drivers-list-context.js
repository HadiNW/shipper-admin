import { createContext, useState } from "react"
import AxiosInstance from "../axios/axios"

const DriversListContext = createContext({
	drivers: [],
	isFetching: false,
	error: null,
	getDrivers: () => {},
	shownDrivers: []
})

export const DriversListProvider = (props) => {
	const [drivers, setDerivers] = useState([])
	const [shownDrivers, setShownDrivers] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState(null)

	const getDrivers = async () => {
		const localData = getLocalDriversData()
		if (localData && localData.length > 0) {
			setDerivers(localData)
			setShownDrivers(localData.slice(0, 5))
		} else {
			const payload = await getDriversFromApi()
			setDerivers(payload)
			setShownDrivers(payload.slice(0, 5))
			sessionStorage.setItem('drivers', JSON.stringify(payload))
		}
	}

	const getDriversFromApi = async () => {
		const { data } = await AxiosInstance.get('/', {params: {results: 30}})
		const payload = data.results.map(result => ({
			id: result.id.value,
			firstName: result.name.first,
			lastName: result.name.last,
			email:  result.email,
			dob: result.dob.date,
			avatar: result.picture.large,
			phone: result.phone,
		}))
		return payload
	}

	const getLocalDriversData = () => {
		return JSON.parse(sessionStorage.getItem('drivers'))
	}

	return <DriversListContext.Provider value={{
		drivers,
		isFetching,
		error,
		getDrivers,
		shownDrivers
	}}>
		{props.children}
	</DriversListContext.Provider>
}

export default DriversListContext
