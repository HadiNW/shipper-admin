import React from 'react'
import { HomeHeaderStyles } from './HomeHeaderStyles'

const HomeHeader = () => {
	return (
		<HomeHeaderStyles>
			<div className='left-header'>
				<p className='title'>DRIVER MANAGEMENT</p>
				<p className='subtitle'>Data driver yang bekerja dengan anda</p>
			</div>
			<div className='right-header'>
				<input type='text' className='search'></input>
				<button className='add-button'>Tambah Driver</button>
			</div>
		</HomeHeaderStyles>
	)
}

export default HomeHeader
