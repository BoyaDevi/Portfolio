const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tabs.forEach(tab=>{
  tab.onclick = () => {
    tabs.forEach(t=>t.classList.remove("active"));
    sections.forEach(s=>s.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  }
});

// CONTACT FORM BACKEND CONNECTION
document.getElementById("contactForm").addEventListener("submit", async (e)=>{
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  const res = await fetch("http://localhost:5000/contact",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("status").innerText = result.msg;
});
function toggleMenu(){
  const nav=document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
// Get the footer element
const footer = document.getElementById('footer');

// Get current year automatically
const year = new Date().getFullYear();

// Set the copyright text
footer.innerHTML = `© ${year} Boya Devi. All rights reserved.`;
