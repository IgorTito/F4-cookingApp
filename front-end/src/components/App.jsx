import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import { Button } from 'react-bootstrap'

import Categories from './Categories'
import Recipes from './Recipes'
import CatPage from './CatPage'
import RecPage from './RecPage'


function App() {
	return (
		<Router>
			<div style={{ padding: '75px' }}>
				<Button

					size={"lg"}
					style={{ float: "right"}}

				>
					<Link to={'/categories'} style={{color: "black"}}>Категории</Link>
				</Button>

				<Button
						size={"lg"}
						style={{ marginRight: '20px', float: "right"}}
				>
					<Link to={'/recipes'} style={{color: "black"}}>Рецепты</Link>
				</Button>
			</div>
			<div style={{ padding: '75px' }}>
				<Routes>
					<Route
						exact
						path={'/categories'}
						element={<Categories />}
					/>
					<Route exact path={'/recipes'} element={<Recipes />} />
					<Route
						exact
						path={'/categories/:id'}
						element={<CatPage />}
					/>
					<Route
						exact
						path={'/recipes/:id'}
						element={<RecPage />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App;
