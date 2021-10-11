import React from "react"
import Layout from "components/Layout"
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const App: React.FC = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
		},
	})

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout />
			</ThemeProvider>
		</>
	)
}

export default App
