const announcements = [
  {
    title: "Virtual Cooking Classes Available Now!",
    description:
      "Explore the world of culinary delights from the comfort of your own kitchen! Join our virtual cooking classes led by professional chefs and learn to create mouthwatering dishes from various cuisines.",
  },
  {
    title: "Community Cleanup Event: Join Us!",
    description:
      "Make a positive impact on the environment and your community by participating in our upcoming cleanup event! Grab your gloves and join us in removing litter and beautifying local parks and neighborhoods.",
  },
  {
    title: "Tech Talk: Exploring the Future of AI",
    description:
      "Dive into the fascinating world of artificial intelligence with our tech talk event! Discover the latest advancements, applications, and ethical considerations shaping the future of AI technology.",
  },
  {
    title: "Book Club Meeting: April Edition",
    description:
      "Calling all bookworms! Join our book club meeting this April as we discuss the latest literary masterpiece. Share your insights, connect with fellow book enthusiasts, and expand your reading horizons.",
  },
  {
    title: "Yoga Retreat: Rejuvenate Your Mind and Body",
    description:
      "Escape the hustle and bustle of daily life and embark on a journey of self-discovery at our upcoming yoga retreat. Immerse yourself in serene surroundings, practice mindfulness, and restore balance to your mind, body, and soul.",
  },
];

// Function to generate announcement items
function generateAnnouncementItems() {
  const container = document.getElementById("announcement-container");

  // Loop through the announcements array and generate HTML for each announcement
  announcements.forEach((announcement, index) => {
    const announcementItem = document.createElement("div");
    announcementItem.classList.add("announcement-item");

    const title = document.createElement("p");
    title.classList.add("announcement-title");
    title.textContent = announcement.title;

    const description = document.createElement("p");
    description.classList.add("announcement-desc");
    description.textContent = announcement.description;

    announcementItem.appendChild(title);
    announcementItem.appendChild(description);

    container.appendChild(announcementItem);
    // Add a line separator after each announcement except for the last one
    if (index < announcements.length - 1) {
      container.appendChild(document.createElement("hr"));
    }
  });
}

// Call the function to generate announcement items
generateAnnouncementItems();
