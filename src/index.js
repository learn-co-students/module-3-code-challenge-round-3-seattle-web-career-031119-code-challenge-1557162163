document.addEventListener('DOMContentLoaded', function() {

	let URL = "http://localhost:3000/comments"

	function getComments(){
		fetch(URL)
			.then (res => res.json())
			.then(json => indexComments(json))
			console.log("comments got");
	}

	function indexComments(comments){
		for(let key in comments){

			showComments(comments[key])
			console.log("comments indexed");
		}
	}
	function showComments(comment){
		let ul = document.getElementById('comment-list')

		let li = document.createElement('li')
			li.classList.add("list-group-item")
			ul.appendChild(li)
			console.log('created element');


		let komment = document.createElement('span')
			komment.textContent = comment.content
			li.appendChild(komment)

		let deleteButton = document.createElement('button')
			deleteButton.textContent = 'Delete'
			deleteButton.classList.add("btn-btn-danger-btn-sm-pull-right")
			li.appendChild(deleteButton)
			deleteButton.addEventListener('click', () => {
				console.log("DELETING SOON");
				li.remove()
				deleteComment(comment.id)
			})

	}


	function newCommentForm(){
		let ul = document.getElementById('comment-list')

		let form = document.getElementById('comment-form')
		form.addEventListener('submit', handleSubmit)
		ul.appendChild(form)
	}


	function deleteComment(id) {
		return fetch(URL + '/' + id, {
			method: 'DELETE'
		} )
		.then(res => res.json())
		console.log('Deleted');
	}


	function handleSubmit(ev) {
		ev.preventDefault()

		console.log("submitting");
		fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			content: document.getElementById('add-comment-input').value
	})
})
	.then(res => res.json())
	.then(json =>showComments(json))
}



getComments()
newCommentForm()






})
