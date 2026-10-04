function waterRock() {
  document.getElementById("rockArea").style.backgroundColor = "lightblue";
  document.getElementById("waterStatus").innerHTML = "Condition: wet. It did not thank you.";
}

function growRock() {
  document.getElementById("rock").style.width = "240px";
  document.getElementById("sizeStatus").innerHTML = "Size: large. Now the rent is higher.";
}

function adoptRock() {
  let adopted = window.confirm("Adopt this rock? It has no job and will not pay rent.");

  if (adopted) {
    document.getElementById("adoptionStatus").innerHTML = "Home: adopted! You now own a rock.";
  } else {
    document.getElementById("adoptionStatus").innerHTML = "Home: still available. The rock will think about it.";
  }
}

function resetRock() {
  document.getElementById("rockArea").style.backgroundColor = "lightgray";
  document.getElementById("rock").style.width = "180px";
  document.getElementById("waterStatus").innerHTML = "Condition: dry.";
  document.getElementById("sizeStatus").innerHTML = "Size: ordinary.";
  document.getElementById("adoptionStatus").innerHTML = "Home: still available.";
}

document.getElementById("waterButton").addEventListener("click", waterRock);
document.getElementById("growButton").addEventListener("click", growRock);
document.getElementById("adoptButton").addEventListener("click", adoptRock);
document.getElementById("resetButton").addEventListener("click", resetRock);
