document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const input = document.querySelector('input[type=submit]')
  const text = document.querySelector('input[type=text]')
  const dueDate = document.querySelector('#due-date')
  const priority = document.querySelector('#Priority')

  
  addEventListener('click',(e)=> console.log(e))
  addEventListener("submit", (e) => {
    e.preventDefault()
    newToDo()
    })
  
function newToDo(){
  const p = document.createElement('p')

  // if a date is available, returns the date, else empty string
  const dueDateAvailable = dueDate.value ? ` -  Due: ${dueDate.value}` : "";

  //created the text and classes for the new paragraph
  p.textContent = `${text.value}${dueDateAvailable}`
  p.className = priority.value

  //Allows the new paragragh to be editable
  p.setAttribute('contenteditable', "true")

  //creates a new button using the new button function
  newButton(p, ' x ', 'deleteButton');

  //Identifies where new paragraph should go.
  const tasks = document.querySelector('#tasks')

  //ifentify if there's any red or yellow elements yet.
  const mostRecentYellow = document.querySelector(".yellow")
  const mostRecentRed = document.querySelector(".red");
 
  //This add the posts sorted by color
  if (p.className === 'green'){
    tasks.insertBefore(p, mostRecentYellow || mostRecentRed)
    }
    else if (p.className === 'yellow') 
    {tasks.insertBefore(p, mostRecentRed)}
    else {tasks.appendChild(p)}
    p.style.backgroundColor = `${priority.value}`;
    


  function newButton(paragraph, buttonName, className){
    const button = document.createElement('button')
    button.textContent = `${buttonName}`
    button.className = `${className}`
    paragraph.appendChild(button)
    button.addEventListener('click', removeButton)
    }
  function removeButton(e){
    const newForm = document.createElement('form')
    e.target.parentNode.replaceWith(newForm)
    }


}


});
