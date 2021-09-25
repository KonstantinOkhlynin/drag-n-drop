const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}


function dragStart (event) {
event.target.classList.add('hold')
setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd (event) {
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}

function dragover (event) {
   event.preventDefault()
   event.target.removeAttribute('style')
}

function dragenter (event) {
    event.target.classList.add('hovered')
    
}

function dragleave (event) {
    event.target.classList.remove('hovered')
    event.target.setAttribute('style', 'background: none;')
   
}

function drop (event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
    event.target.setAttribute('style', 'background: none;')
}