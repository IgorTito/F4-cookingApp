import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import Recipe from './Recipe'

function Recipes(props) {
	const [data, setData] = useState([])

	const getRecipes = () => {
		axios
			.get('http://localhost:8000/recipes/')
			.then((response) => setData(response.data))
	}
	useEffect(() => {
		getRecipes()
	}, [])
	return (
		<Table style={{width: 450, float: "right", border: "brown", textAlign: "left"}} >
			<thead>
				<tr>
					<th style={{textAlign: "center", color: "white", fontSize: 50}}>Рецепты</th>
				</tr>
			</thead>
			<tbody>
				{data.map((value) => (
					<Recipe
						name={value.name}
						id={value.id}
						key={value.name}
					/>
				))}
			</tbody>
		</Table>
	)
}

export default Recipes;
