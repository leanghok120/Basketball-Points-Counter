let home = document.getElementById("home")
let guest = document.getElementById("guest")
let pointsHome = 0
let pointsGuest = 0

function increasePoints(amount, team) {
  if (team === "home") {
    pointsHome += amount
    home.textContent = pointsHome 
  } else if (team === "guest") {
    pointsGuest += amount
    guest.textContent = pointsGuest
  } else {
    console.log("Team not found.")
  }
}
