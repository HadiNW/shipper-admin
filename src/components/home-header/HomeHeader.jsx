import { useContext } from 'react'
import { useHistory } from 'react-router'
import DriversListContext from '../../store/drivers-list-context'
import { HomeHeaderStyles } from './HomeHeaderStyles'

const HomeHeader = () => {
	const ctx = useContext(DriversListContext)
	const history = useHistory()

	const searchDrivers = (e) => {
		if (!e.target.value.trim()) {
			
		}
		ctx.getSearchedDrivers(e.target.value.trim())
		history.push('/?page=1')
	}

	return (
		<HomeHeaderStyles>
			<div className='left-header'>
				<p className='title'>DRIVER MANAGEMENT</p>
				<p className='subtitle'>Data driver yang bekerja dengan anda</p>
			</div>
			<div className='right-header'>
				<input
					type='text'
					className='search'
					onChange={searchDrivers}
				></input>
				<button className='add-button'>Tambah Driver</button>
			</div>
		</HomeHeaderStyles>
	)
}

export default HomeHeader
