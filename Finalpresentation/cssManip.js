

function cssManip() {
    let button2 = document.getElementById("hide1");
//if the css #hide1 id display is set to inline- block hide it
        if (button2.style.display === "inline-block") {
            button2.style.display = "none";
            document.getElementById('see').innerText = 'See';
//otherwise show it
        } else {
        button2.style.display = "inline-block";
        document.getElementById('see').innerText = 'Hide';
        }
    }

