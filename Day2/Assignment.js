// Monthly Activities Data
const monthlyActivities = [
    { id: 1, activity: "Create project file which contains tables between 12 to 19", subject: "maths" },
    { id: 2, activity: "Complete chapter on Newton's Laws of Motion", subject: "physics" },
    { id: 3, activity: "Practice chemical equations and balancing", subject: "chemistry" },
    { id: 4, activity: "Study human anatomy - digestive system", subject: "biology" },
    { id: 5, activity: "Write an essay on environmental conservation", subject: "english" },
    { id: 6, activity: "Create a simple calculator using JavaScript", subject: "computer" },
    { id: 7, activity: "Solve quadratic equations practice set", subject: "maths" },
    { id: 8, activity: "Lab experiment on electricity and circuits", subject: "physics" },
    { id: 9, activity: "Prepare for periodic table test", subject: "chemistry" },
    { id: 10, activity: "Research paper on genetic disorders", subject: "biology" }
];

// User credentials
const validUsers = [
    { username: "student", password: "password123" },
    { username: "john", password: "test123" }
];

// Page Navigation Functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    if (pageId) {
        document.getElementById(pageId).classList.add('active');
    }
}

// Filter activities by subject
function filterActivities(subject) {
    const activitiesList = document.getElementById('activitiesList');
    activitiesList.innerHTML = '';
    
    const filteredActivities = subject === 'all' 
        ? monthlyActivities 
        : monthlyActivities.filter(activity => activity.subject === subject);
    
    if (filteredActivities.length === 0) {
        activitiesList.innerHTML = '<p class="text-center">No activities found for this subject.</p>';
        return;
    }
    
    filteredActivities.forEach(activity => {
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        activityCard.innerHTML = `
            <div class="activity-subject">${activity.subject.charAt(0).toUpperCase() + activity.subject.slice(1)}</div>
            <div class="activity-text">${activity.activity}</div>
        `;
        activitiesList.appendChild(activityCard);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Show login page first
    showPage('loginPage');

    // Login/Register navigation
    document.getElementById('showRegister').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('registerPage');
    });

    document.getElementById('showLogin').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('loginPage');
    });

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        const isValidUser = validUsers.some(user => 
            user.username === username && user.password === password
        );
        
        if (isValidUser) {
            showPage('welcomePage');
            // Clear login form
            document.getElementById('loginForm').reset();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    // Register form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        
        // Check if username already exists
        if (validUsers.some(user => user.username === username)) {
            alert('Username already exists. Please choose a different username.');
            return;
        }
        
        // Add new user
        validUsers.push({ username, password });
        alert('Registration successful! You can now login.');
        showPage('loginPage');
        // Clear registration form
        document.getElementById('registerForm').reset();
    });

    // Navigation button handlers
    document.addEventListener('click', function(e) {
        // Handle Monthly Chart button
        if (e.target.textContent === 'Monthly Chart' && e.target.classList.contains('nav-button')) {
            e.preventDefault();
            showPage('monthlyActivitiesPage');
            filterActivities('all');
        }
        
        // Handle Login button in navigation
        if (e.target.textContent === 'Login' && e.target.classList.contains('nav-button')) {
            e.preventDefault();
            showPage('loginPage');
        }
        
        // Handle Home button in navigation
        if (e.target.textContent === 'Home' && e.target.classList.contains('nav-button')) {
            e.preventDefault();
            showPage('welcomePage');
        }
        
        // Handle Time Table button
        if (e.target.textContent === 'Time Table' && e.target.classList.contains('nav-button')) {
            // This will open the external timetable page
            // No need to prevent default as it's an external link
        }
    });

    // Back to Welcome button in monthly activities page
    document.getElementById('backToWelcomeBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('welcomePage');
    });

    // Logout button in monthly activities page
    document.getElementById('logoutBtn2').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('loginPage');
        alert('Logged out successfully!');
    });

    // Subject filter
    document.getElementById('subjectFilter').addEventListener('change', function(e) {
        filterActivities(e.target.value);
    });
});