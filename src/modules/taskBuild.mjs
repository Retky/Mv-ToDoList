// Create Li element
const newLi = (name, index, compleated, trashImg) => {
  const element = document.createElement('li');
  element.classList = 'task'
  if (compleated) {
    element.innerHTML = `<input type="checkbox" name="${index}" checked><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
    return element;
  }
  element.innerHTML = `<input class="task" type="checkbox" name="${index}"><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
  return element;
};

export default newLi
