const endDate = "1 August 2024 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000; //mili seconds to seconds

    if(diff < 0) {
        return;
    }
    // console.log(diff)
    //convert to days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //remaining hours
    inputs[1].value = Math.floor((diff / 3600) % 24);
    //remaining minutes
    inputs[2].value = Math.floor((diff / 60) % 60);
    //remaining seconds
    inputs[3].value = Math.floor(diff % 60)

}


setInterval(
    () => {
        clock()
    }, 1000
)