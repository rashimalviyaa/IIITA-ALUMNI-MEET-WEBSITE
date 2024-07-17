document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const closeBtn = document.querySelector('.close-btn');
    let currentPhotos = []; // Array to hold current photos being displayed
    let currentIndex = 0;

    // Define photo sets for each activity
    const photoSets = {
        "Activity 1": [
            'images/gallery-img5.jpg',
            'images/gallery-img6.jpg',
            'images/gallery-img7.jpg'
        ],
        "Activity 2": [
            'images/activity2_photo1.jpg',
            'images/activity2_photo2.jpg',
            'images/activity2_photo3.jpg'
        ],
        // Add more activities and their respective photo sets as needed
    };

    // Function to update lightbox content with current activity photos
    function updateLightbox(activityTitle) {
        currentPhotos = photoSets[activityTitle];
        currentIndex = 0; // Reset index to start at the first image

        // Clear previous content
        lightboxContent.innerHTML = '';

        // Create image element for the current photo
        const img = document.createElement('img');
        img.src = currentPhotos[currentIndex];
        img.classList.add('lightbox-img'); // Add a class to style the images
        lightboxContent.appendChild(img);
    }

    // Event listeners for gallery items
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const activityTitle = item.getAttribute('data-title');

            // Update lightbox content for the clicked activity
            updateLightbox(activityTitle);

            // Show lightbox
            lightbox.style.display = 'flex';
        });
    });

    // Previous button event
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            const img = document.createElement('img');
            img.src = currentPhotos[currentIndex];
            img.classList.add('lightbox-img'); // Add a class to style the images
            lightboxContent.innerHTML = '';
            lightboxContent.appendChild(img);
        }
    });

    // Next button event
    nextBtn.addEventListener('click', function() {
        if (currentIndex < currentPhotos.length - 1) {
            currentIndex++;
            const img = document.createElement('img');
            img.src = currentPhotos[currentIndex];
            img.classList.add('lightbox-img'); // Add a class to style the images
            lightboxContent.innerHTML = '';
            lightboxContent.appendChild(img);
        }
    });

    // Close lightbox on close button click
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
