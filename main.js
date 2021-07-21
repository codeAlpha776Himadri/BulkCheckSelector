const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes)
let lastChecked;
function selectCheck(e) {

    // if(this.checked === true){
    //     let parent = this.parentElement
    //     let parentPara = parent.children[1]
    //     parentPara.classList.toggle('strikeThrough')
    //}

    let inBetween = false;
    //check for holding shift keydown and checking
    if (e.shiftKey && this.checked == true) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            // let parent = this.parentElement
            // let parentPara = parent.children[1]

            // parentPara.classList.toggle('strikeThrough')
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('checking in between')
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', selectCheck);
})