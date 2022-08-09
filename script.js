var chocolatePieces = Number(
  prompt("How many pieces of chocolate do you want? (1-10)")
);
var leftoverChocolate = 10 - chocolatePieces;

if (leftoverChocolate >= 9) {
  console.log("Eat all the chocolate!!");
} else if (leftoverChocolate >= 6) {
  console.log(
    `There is enough chocolate to share, we have ${leftoverChocolate} pieces left!`
  );
} else if (leftoverChocolate <= 5) {
  console.log(
    alert(
      `Attention!! Time to buy more chocolate! Only ${leftoverChocolate} pieces left!`
    )
  );
} else {
  console.log("Time to get more chocolate,stat!");
}
