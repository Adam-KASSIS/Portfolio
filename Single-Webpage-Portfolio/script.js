function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);  // Added after appending recommendation

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}


// Typed text effect
const typedText = "Hi, I'm Adam! I build scalable systems and explore frontier physics concepts.";
let i = 0;
const typeElement = document.querySelector(".typed-text");

function type() {
  if(i < typedText.length) {
    typeElement.textContent += typedText.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
if(typeElement) type();








//This section is for index2.html and style3.css
// Animate skill bars on scroll
const skillSpans = document.querySelectorAll(".skill-bar span");

function animateSkills() {
  skillSpans.forEach((span) => {
    const width = span.getAttribute("data-width");
    span.style.width = width;
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const sectionTop = skillsSection.offsetTop - window.innerHeight + 100;
  if(window.scrollY > sectionTop) {
    animateSkills();
  }
});
