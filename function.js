const dateMujer = document.getElementById("iconMujer")
const dateMail = document.getElementById("iconMail")
const dateCalendar = document.getElementById("iconCalendar")
const dateMap = document.getElementById("iconMap")
const datePhone = document.getElementById("iconPhone")
const dateContainer = document.getElementById("containerTextIcon")

dateMujer.addEventListener("click", function() {
    dateContainer.innerHTML = 
    `<p class="textIcon">Mi nombre es</p>
    <h3>Lucy Gray</h3>    
    `;
  });

  dateMail.addEventListener("click", function() {
    dateContainer.innerHTML = 
    `<p class="textIcon">Mi mail es</p>
    <h3>lu.gray@gmail.com</h3>    
    `;
  });

  dateCalendar.addEventListener("click", function() {
    dateContainer.innerHTML = 
    `<p class="textIcon">Mi fecha de nacimiento es</p>
    <h3>03/05/1995</h3>    
    `;
  });

  dateMap.addEventListener("click", function() {
    dateContainer.innerHTML = 
    `<p class="textIcon">Mi dirección es</p>
    <h3>6109 Thornridge Cir</h3>    
    `;
  });

  datePhone.addEventListener("click", function() {
    dateContainer.innerHTML = 
    `<p class="textIcon">Mi telefono es</p>
    <h3>(354) 585-1455</h3>    
    `;
  });