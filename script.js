//script.js

const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
const closeButton = document.createElement('span');
closeButton.classList.add('close');
closeButton.innerHTML = '&times;';
modalContent.appendChild(closeButton);
modal.appendChild(modalContent);
document.body.appendChild(modal);

const eventDetails = {
  Chess: {
    description: "Test your strategic skills in the exciting Chess Tournament!",
    date: "Jan 21-22, 2025",
    registration: `<a href="https://forms.gle/qmbTfDC8tohqQHDF8" target="_blank">Register Here</a>`
  },
  Athletics: {
    description: "Show your speed and strength in Athletics! Events include 100m running, Disc throw, and Shotput throw.",
    date: "Jan 23, 2025",
    registration: `<a href="https://forms.gle/rdMub1v68HLDo1sY9" target="_blank">Register Here</a>`
  },
  Carrom: {
    description: "Compete in the Tournament! Show your skills and strategy.",
    date: "Jan 21, 2025",
    registration: `<a href="https://forms.gle/Y1GwcF6v41kRyV4z9" target="_blank">Register Here</a>`
  },
  TableTennis: {
    description: "Test your reflexes and accuracy in the Table Tennis tournament.",
    date: "Jan 20-21, 2025",
    registration: `<a href="https://forms.gle/KGcSPiboFNCmkARY6" target="_blank">Register Here</a>`
  },
  Volleyball: {
    description: "Join the Volleyball team and experience the thrill of teamwork!",
    date: "Jan 20-21, 2025",
    registration: `<a href="https://forms.gle/KGcSPiboFNCmkARY6" target="_blank">Register Here</a>`
  },
  Badminton: {
    description: "Show off your badminton skills in the exciting tournament!",
    date: "Jan 23, 2025",
    registration: `<a href="https://forms.gle/KGcSPiboFNCmkARY6" target="_blank">Register Here</a>`
  },
  Football: {
    description: "Be a part of the Football team and compete for glory!",
    date: "Jan 21, 2025",
    registration: `<a href="https://forms.gle/Y1GwcF6v41kRyV4z9" target="_blank">Register Here</a>`
  },
  Basketball: {
    description: "Experience the thrill of basketball action!",
    date: "Jan 21, 2025",
    registration: `<a href="https://forms.gle/qmbTfDC8tohqQHDF8" target="_blank">Register Here</a>`
  }
};

// Expand/collapse event boxes
document.querySelectorAll('.event-box').forEach(box => {
  box.addEventListener('click', () => {
    const eventName = box.getAttribute('data-event-name');
    const details = eventDetails[eventName];
    box.classList.toggle('expanded');

    box.innerHTML = box.classList.contains('expanded')
      ? `
        <p>${details.description}</p>
        <p><strong>Date:</strong> ${details.date}</p>
        <p><strong>Registration:</strong> ${details.registration}</p>
      `
      : `
        <img src="images/${eventName.toLowerCase()}-icon.png" alt="${eventName}" class="event-icon">
        <h3>${eventName}</h3>
      `;
  });
});

// Modal close logic
closeButton.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// Highlight active nav link
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Form validation and success message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll("input, select").forEach(input => {
        const value = input.value.trim();
        input.style.border = "1px solid #ccc";

        if (!value) {
          input.style.border = "2px solid red";
          valid = false;
        }

        if (input.name === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            input.style.border = "2px solid red";
            valid = false;
          }
        }

        if (input.name === "phone") {
          const phoneRegex = /^\d{10}$/;
          if (!phoneRegex.test(value)) {
            input.style.border = "2px solid red";
            valid = false;
          }
        }
      });

      if (!valid) {
        alert("Please correct the highlighted fields before submitting.");
      } else {
        successMessage.style.display = "block";
        form.reset();
      }
    });
  }
});
