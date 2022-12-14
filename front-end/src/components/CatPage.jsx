import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'

function CatPage() {
	const [categoryRecipes, setCategoryRecipes] = useState([])
	const [categoryData, setCategoryData] = useState({})
	const params = useParams()
	const catId = parseFloat(params.id)

	const getCategory = () => {
		axios(`http://127.0.0.1:8000/categories/${catId}/`).then(
			(response) => setCategoryData(response.data)
		)
	}
	const getRecipes = () => {
		axios(`http://localhost:8000/recipes/`).then((response) => {
			const data = response.data
			const data_filtered = data.filter(
				(item) => item.catId === catId
			)
			setCategoryRecipes(data_filtered)
		})
	}

	// }
	useEffect(() => {
		getCategory()
		getRecipes()
	}, [])

	return (
		<>
			<h1>{categoryData.categoryName}</h1>
			<Table style={{width: 450, float: "right", border: "none"}} >
				<thead>
					<tr>
						<th>Рецепты</th>
					</tr>
				</thead>
				<tbody>
					{categoryRecipes.map((recipe) => (
						<tr key={recipe.name}>
							<td>
								<a href={`/recipes/${recipe.id}`} style={{color: "white"}}>
									{recipe.name}
								</a>
							</td>
							<td >{recipe.text}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	)
}

export default CatPage;
