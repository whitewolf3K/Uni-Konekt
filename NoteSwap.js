document.addEventListener('DOMContentLoaded', function() {
    var redirectButton = document.getElementById('redirectButton');
    if (redirectButton) {
        redirectButton.addEventListener('click', function() {
            var selectedSemester = document.getElementById('semesterDropdown').value;
            console.log('Selected Semester:', selectedSemester);
            if (selectedSemester) {
                window.location.href = selectedSemester + 'NoteS2.html'; // Replace .html with the file extension of the page you want to redirect to
            }
        });
    }
});

