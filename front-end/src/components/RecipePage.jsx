import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function RecipePage() {
	const [recipe, setRecipe] = useState([])
	const params = useParams()
	const recipeId = parseFloat(params.id)

	const getRecipe = () => {
		axios(`http://127.0.0.1:8000/recipes/${recipeId}/`).then((response) =>
			setRecipe(response.data)
		)
	}

	useEffect(() => {
		getRecipe()
	}, [])

	return (
		<>
			<h1>{recipe.name}</h1>
			<h5>{recipe.text}</h5>
		</>
	)
}

export default RecipePage;
