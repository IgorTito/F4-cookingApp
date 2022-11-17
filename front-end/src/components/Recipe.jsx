import React from 'react'


function Recipe({ name, id }) {
	return (
		<tr key={name}>
			<td>
				<a href={`/recipes/${id}`} style={{marginRight: 15, color: "white"}}>{name}</a>
			</td>
		</tr>
	)
}

export default Recipe;
