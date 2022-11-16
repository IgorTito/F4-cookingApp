import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import { Button } from 'react-bootstrap'

import Categories from './Categories'
import Recipes from './Recipes'
import CategoryPage from './CategoryPage'
import RecipePage from './RecipePage'


function App() {
	return (
		<Router>
			<div style={{ padding: '100px' }}>
				<Button
					variant={'outline-primary'}
					size={"lg"}
					style={{ float: "right"}}

				>
					<Link to={'/categories'} style={{color: "black"}}>Категории</Link>
				</Button>

				<Button variant={'outline-primary'}
						size={"lg"}
						style={{ marginRight: '20px', float: "right"}}
				>
					<Link to={'/recipes'} style={{color: "black"}}>Рецепты</Link>
				</Button>
			</div>
			<div style={{ padding: '100px' }}>
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
						element={<CategoryPage />}
					/>
					<Route
						exact
						path={'/recipes/:id'}
						element={<RecipePage />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App;
