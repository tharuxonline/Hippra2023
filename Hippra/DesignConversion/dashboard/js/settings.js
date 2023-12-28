// Handle Profile Picture Upload
const uploadButton = document.querySelector("#uploadProfilePictureBtn");
const uploadInput = document.querySelector("#uploadProfilePictureInput");
const profilePicture = document.querySelector(".settings-profile-preview img");

// Trigger Upload
if (uploadButton) {
  uploadButton.addEventListener("click", () => {
    uploadInput.click();
  });
  // Show Preview
  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      profilePicture.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}

// Handle Forgot Password
const forgotPasswordButton = document.querySelector("#forgotPasswordBtn");
const forgotPasswordInput = document.querySelectorAll(".forgotPasswordInputs");
const newPassword = document.querySelector("#newPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const passwordChangeSection = document.querySelector(
  ".settings-password-change"
);

if (forgotPasswordButton) {
  forgotPasswordButton.addEventListener("click", () => {
    forgotPasswordInput.forEach((input) => {
      if (input.hasAttribute("disabled")) {
        input.removeAttribute("disabled");
        passwordChangeSection.classList.add("visible");
      } else {
        input.setAttribute("disabled", "disabled");
        passwordChangeSection.classList.remove("visible");
      }
    });
  });
}

if (newPassword && confirmPassword) {
  newPassword.addEventListener("input", () => {
    if (newPassword.value !== confirmPassword.value) {
      confirmPassword.classList.add("is-invalid");
    } else {
      confirmPassword.classList.remove("is-invalid");
    }
  });

  confirmPassword.addEventListener("input", () => {
    if (newPassword.value !== confirmPassword.value) {
      confirmPassword.classList.add("is-invalid");
    } else {
      confirmPassword.classList.remove("is-invalid");
    }
  });
}

// Handle Edit Input

const accountInputs = document.querySelectorAll(".account-inputs");
const editButtons = document.querySelectorAll(".setting-edit-action");

if (accountInputs.length > 0 && editButtons.length > 0) {
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.getAttribute("data-button");

      const accountInputsArray = Array.from(accountInputs);

      const filteredInputs = accountInputsArray.filter(
        (accountInput) => accountInput.getAttribute("data-input") === input
      );

      filteredInputs.forEach((input) => {
        if (input.hasAttribute("disabled")) {
          input.removeAttribute("disabled");
          input.classList.add("editable");
        } else {
          input.setAttribute("disabled", "disabled");
          input.classList.remove("editable");
        }
      });
    });
  });
}

// Handle Setting Nav Active State
const settingNavLinks = document.querySelectorAll(".settings-nav-item a");

if (settingNavLinks.length > 0) {
  const url = window.location.href;

  console.log("url", url);

  settingNavLinks.forEach((link) => {
    console.log("xd", link.href);
    if (link.href === url) {
      link.classList.add("active");
      link.parentElement.classList.add("active");
    } else {
      link.classList.remove("active");
      link.parentElement.classList.remove("active");
    }
  });
}
