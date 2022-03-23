// remove
const item = todoList.querySelector('.remove')

const remove = (item, index, taskList) => {
  item.addEventListener('click', () => {
    const newList = taskList;
    newList.splice(index, 1);
    taskList = newList;
    taskList.forEach((item, i) => {
      item.index = i
    });
    todoList.removeChild(item)
    console.log(taskList);
  })
}

export default remove
