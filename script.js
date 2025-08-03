// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim task input

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove task when remove button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to li and li to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to input field for "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally call addTask on DOMContentLoaded (if needed)
    // This can be used if you want to load tasks from storage or initialize default tasks
    // addTask(); 
});
