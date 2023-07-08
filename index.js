$(document).ready(function() {
    // Function to fetch and display courses
    function fetchCourses() {
      // Clear the course container
      $(".course-container").empty();
  
      // Make API request to fetch courses
      $.ajax({
        url: "https://api.codingninjas.in/api/v3/courses",
        method: "GET",
        success: function(response) {
          // Iterate over each course
          response.data.courses.forEach(function(course) {
            // Create course card
            var courseCard = $("<div>", {
              class: "course-details",
              click: function() {
                // Handle click event if required
              }
            });
  
            // Add course image
            var courseImage = $("<div>", {
              class: "head-img"
            });
  
            // Check if the image URL is available
            if (course.preview_image_url) {
              $("<img>", {
                src: course.preview_image_url,
                alt: course.name,
                onerror: function() {
                  $(this).remove(); // Remove the image element if it fails to load
                }
              }).appendTo(courseImage);
            } else {
              $(courseImage).addClass("no-image");
            }
  
            courseCard.append(courseImage);
  
            // Add course name
            var courseName = $("<div>", {
              class: "course-name",
              text: course.name
            });
            courseCard.append(courseName);
  
            // Add course level
            var courseLevel = $("<div>", {
              class: "course-level",
              text: "Level: " + course.level
            });
            courseCard.append(courseLevel);
  
            // Append course card to container
            $(".course-container").append(courseCard);
          });
        },
        error: function() {
          // Handle error if required
        }
      });
    }
  
    // Fetch courses when button is clicked
    $("#fetch-courses").click(function() {
      fetchCourses();
    });
  });
  