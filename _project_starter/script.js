const panels=document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        panel.removeActivefunc()
        panel.classList.add('active')

    })
})
function removeActivefunc(){
    panels.foreach(panel => {
        panel.classList.remove('active')

    })
}