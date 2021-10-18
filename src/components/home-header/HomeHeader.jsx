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
				<div className="input">
				<svg className='search-icon' fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
					<input
						type='text'
						className='search'
						placeholder='Cari Driver'
						onChange={searchDrivers}
					></input>
				</div>
				<button className='add-button'>
					Tambah Driver
					<svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
					</svg>
				</button>
			</div>
		</HomeHeaderStyles>
	)
}

export default HomeHeader
