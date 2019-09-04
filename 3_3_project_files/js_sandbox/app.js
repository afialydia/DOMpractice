// document.getElementById()

console.log(document.getElementById('task-title'));

//get things from element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//can use this in place of document.getelementbyid
const taskTitle = document.getElementById('task-title')

//change styling
document.getElementById('task-title').style.background = 'grey';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '8px';
// document.getElementById('task-title').style.display = 'none';


//change content
document.getElementById('task-title').textContent = "Task List"
document.getElementById('task-title').innerText = "My Tasks"
document.getElementById('task-title').innerHTML = '<span style="color:purple">Task List</SPAN>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color = "blue";

document.querySelector('li:last-child').style.color = "green";
document.querySelector('li:nth-child(3)').style.color = "hotpink";
document.querySelector('li:nth-child(4)').textContent = "hotpink";
document.querySelector('li:nth-child(odd)').style.background = "hotpink";
document.querySelector('li:nth-child(even)').style.background = "orange";



