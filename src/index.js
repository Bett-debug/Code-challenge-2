//samuel's code challenge 2
// This code manages a guest list for an event, allowing users to add guests, toggle their RSVP status, and remove them from the list.
  const form = document.getElementById('form');
  const input = document.getElementById('name');
  const list = document.getElementById('list');

  form.addEventListener('submit', function(maneno) {
    maneno.preventDefault(); // prevent form from reloading the page
    // Check if the input is empty
    // Get the value from the input, trim it, and check if it's not empty

    const name = input.value.trim();
    if (name === '') return;
    // Add the guest to the list
    // and clear the input field
    addGuest(name);
    input.value = '';


  function addGuest(name) {
    const li = document.createElement('li');
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

    // RSVP button
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = "Not Attending";
    rsvpBtn.addEventListener('click', function() {
      rsvpBtn.textContent =
        rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
    });

    // Remove button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });

    // Add everything to the <li> and then to the list
    li.append(nameSpan, rsvpBtn, deleteBtn);
    // Append the <li> to the list
    list.appendChild(li);
  }
});





