const requestType = document.getElementById('requestType');

requestType.addEventListener('change', function() {
  const selectedOption = requestType.value;

  if (selectedOption === "dutyLeave" || selectedOption === "eventLeave" || selectedOption === "medicalLeave" || selectedOption === "personalLeave") {
    window.location.href = `${selectedOption}.html`;
  }
});
