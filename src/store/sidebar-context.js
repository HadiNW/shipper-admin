import { createContext, useState } from "react"

const SidebarContext = createContext({
	showSidebar: false,
	changeShowSidebar: () => {}
})

export const SidebarProvider = (props) => {
	const [showSidebar, setShowSidebar] = useState(false)

	const changeShowSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return <SidebarContext.Provider value={{
		showSidebar,
		changeShowSidebar,
		
	}}>
		{props.children}
	</SidebarContext.Provider>
}

export default SidebarContext
