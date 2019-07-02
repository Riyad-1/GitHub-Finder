// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Seach Input
const searchUser = document.getElementById('searchUser');

// Seach input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear prfoile
    ui.clearProfile();
  }

});