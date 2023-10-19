let taskCountMustDo = 1;
let taskCountMaybeDo = 1;
let taskCountAnother = 1; 

document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const task = document.getElementById('todo-input').value.trim();
    if (task) {
        addToTaskList(task, 'todo-list', 'todo-input', taskCountMustDo);
        taskCountMustDo++;
    }
});

document.getElementById('maybe-do-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const task = document.getElementById('maybe-do-input').value.trim();
    if (task) {
        addToTaskList(task, 'maybe-do-list', 'maybe-do-input', taskCountMaybeDo);
        taskCountMaybeDo++;
    }
});


document.getElementById('another-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const task = document.getElementById('another-input').value.trim();
    if (task) {
        addToTaskList(task, 'another-list', 'another-input', taskCountAnother);
        taskCountAnother++;
    }
});

function addToTaskList(task, listId, inputId, taskCount) {
    const table = document.getElementById(listId);
    const row = table.insertRow(-1);
    const slNoCell = row.insertCell(0);
    const taskCell = row.insertCell(1);
    const actionCell = row.insertCell(2);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '-';
    deleteButton.className = 'delete-button';
    actionCell.appendChild(deleteButton);

    slNoCell.textContent = taskCount;
    taskCell.textContent = task;

    deleteButton.addEventListener('click', function () {
        deleteTask(row, listId);
    });

    document.getElementById(inputId).value = '';
}

function deleteTask(row, listId) {
    const table = document.getElementById(listId);
    const rowIndex = row.rowIndex;
    table.deleteRow(rowIndex);
    updateTaskIndex(listId);
}

function updateTaskIndex(listId) {
    const rows = document.querySelectorAll(`#${listId} tr`);
    let taskCount = 1;
    for (const row of rows) {
        row.cells[0].textContent = taskCount;
        taskCount++;
    }
}
