$(document).ready(function () {
	let addButton = $('.add-button');
	let field = $('.add-feild');
    let tasks = $('.tasks');
    
    let removeButtons = $('.task-remove');
    let checkBoxes = $('.task-checked input');

	// Add task
	addButton.on('click', function(){
		let elem = `<li class="task">
					    <div class="task-checked col1">
						    <input type="checkbox">
					    </div>
					    <div class="task-text col2">${field.val()}</div>
					    <div class="task-remove col3"></div>
				    </li>`;
        tasks.append(elem);
        field.val('');
    })
    
    tasks.on('click','.task-remove', function(){
        $(this).parent().remove();
    })

    tasks.on('change','.task-checked input', function(){
        $(this).parent().next().toggleClass('checked');
    })

    $('#list-task').sortable();
});