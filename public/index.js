

var randomInsults = ["&quot;Your fandom will never come out of the basement&quot;",
                        "&quot;Hate will only consume u&period;&quot;",
                        "&quot;You are a sour kpop stan you opinion don't matter just like your existence. Stay pathetic&quot;",
                        "&quot;Jealousy is a disease &lt;3&quot;"];

function buttonFunction() {
	var randomInsult = randomInsults[Math.floor(Math.random() * (randomInsults.length))];
	
	document.getElementById("insult").innerHTML = randomInsult;
insult.classList.add("fade-in");

	setTimeout(function () {
      insult.classList.remove("fade-in");
      setTimeout(function () {
        insult.classList.add("hide");
				 }, 1000);
        }, 5000);
  }
