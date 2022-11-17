import React from 'react'

function Category({ categoryName, id }) {
	return (
		<tr key={categoryName}>
			<td>
				<a
					href={`/categories/${id}`}
					style={{ textDecoration: "none", marginRight: 15, color: "white"}}
				>
					{categoryName}
				</a>
			</td>
		</tr>
	)
}

export default Category;
