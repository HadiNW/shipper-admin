import { createContext, useEffect, useState } from "react"
import AxiosInstance from "../axios/axios"
import { useHistory, useParams, useLocation } from 'react-router-dom'

const DriversListContext = createContext({
	drivers: [],
	isFetching: false,
	error: null,
	shownDrivers: [],
	getDrivers: () => {},
	getPaginationData: () => {},
	getSearchedDrivers: () => {}
})

export const DriversListProvider = (props) => {
	const [drivers, setDerivers] = useState([])
	const [shownDrivers, setShownDrivers] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState(null)

	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	let page = Number(queryParams.get('page'))
	if(!page) {
		page = 1
	}


	const getDrivers = async (page, limit) => {
		try {
			const localData = getLocalDriversData()
			if (localData && localData.length > 0) {
				setIsFetching(true)
				setDerivers(localData)
				// setShownDrivers(localData.slice(0, 5))
				getPaginationData(page)
				setIsFetching(false)
			} else {
				setIsFetching(true)
				const payload = await getDriversFromApi()
				setDerivers(payload)
				getPaginationData(page)
				// setShownDrivers(payload.slice(0, 5))
				sessionStorage.setItem('drivers', JSON.stringify(payload))
				setIsFetching(false)
			}
		} catch(e) {
			setIsFetching(false)
			setError(e)
		}
	}

	useEffect(() => {
		getPaginationData(page)
	}, [page, drivers])

	const getPaginationData = (page, limit = 5) => {
		let offset = (page * limit) - limit
		if (page === 1) {
			offset = 0;
		}
		const data = [...drivers].splice(offset, limit)
		setShownDrivers(data)
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

	const getSearchedDrivers = (keyword) => {
		const result = drivers.filter(driver => driver.firstName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
		setShownDrivers(result)
	}

	return <DriversListContext.Provider value={{
		drivers,
		shownDrivers,
		isFetching,
		error,
		getDrivers,
		getPaginationData,
		
	}}>
		{props.children}
	</DriversListContext.Provider>
}

export default DriversListContext
