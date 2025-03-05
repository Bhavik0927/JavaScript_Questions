const input = document.getElementById('task');
const button = document.getElementById('addBtn');
const list = document.getElementById('taskList');

button.addEventListener('click', () => {
    const task = input.value;
    if (task) {
        const Taskdiv = document.createElement('div');
        Taskdiv.setAttribute('id','taskDiv');

        const li = document.createElement('li');
        const button = document.createElement('button');
        const updateButton = document.createElement('button');
        updateButton.textContent = 'update';
        updateButton.addEventListener('click', () => {
            const newTask = prompt('Enter a New Tasl');
            if (newTask) {
                li.textContent = newTask;
                li.appendChild(button);
                li.appendChild(updateButton);
                Taskdiv.appendChild(li);

            }

        })

        button.textContent = "🗑️";

        button.addEventListener('click', () => { list.removeChild(Taskdiv); });

        const date = new Date();
        const createDate = date.toISOString().split('T')[0];
        
        const time = date.getHours() + ":" + date.getMinutes()
        
        li.textContent = task;
        li.appendChild(button);
        li.appendChild(updateButton);
        Taskdiv.appendChild(li);
        Taskdiv.appendChild(document.createTextNode('Created at: ' + createDate + ' ' + time));
        list.appendChild(Taskdiv);
        input.value = '';
    }
})
