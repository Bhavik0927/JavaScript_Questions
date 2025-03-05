let currentProgress = 0;
let progressInterval = null;
/* const increaseProgress = (value) =>{
    if(currentProgress < 100){
        currentProgress = Math.min(currentProgress + value,100);
        updateProgressBar();
    }
} */

const startProgress = () => {
    if (progressInterval) return;

    progressInterval = setInterval(() => {
        if (currentProgress < 100) {
            currentProgress += 1;
            updateProgressBar();
        } else {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    }, 100);
}

const stopProgress = () => {
    clearInterval(progressInterval);
    progressInterval = null;
}
const clearProgress = () => {
    currentProgress = 0;
    updateProgressBar();

}
const updateProgressBar = () => {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = currentProgress + "%";
    progressBar.textContent = currentProgress + "%";
}