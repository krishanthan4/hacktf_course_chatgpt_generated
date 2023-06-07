// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get references to DOM elements
    const chapterList = document.querySelector(".chapter-list");
    const chapters = chapterList.querySelectorAll(".chapter");
    const chapterTitle = document.querySelector(".chapter-title");
    const chapterContent = document.querySelector(".chapter-content");
    const chapterInput = document.querySelector(".chapter-input");
    const addChapterBtn = document.querySelector(".add-chapter-btn");
  
    // Add event listener to each chapter in the list
    chapters.forEach(function(chapter) {
      chapter.addEventListener("click", function() {
        // Remove active class from all chapters
        chapters.forEach(function(chapter) {
          chapter.classList.remove("active");
        });
  
        // Set current chapter as active
        this.classList.add("active");
  
        // Update chapter title and content
        chapterTitle.textContent = this.textContent;
        chapterContent.textContent = `This is the content of ${this.textContent}.`;
      });
    });
  
    // Add event listener to the "Add Chapter" button
    addChapterBtn.addEventListener("click", function() {
      const newChapterTitle = chapterInput.value.trim();
  
      if (newChapterTitle !== "") {
        const newChapter = document.createElement("li");
        newChapter.classList.add("list-group-item", "chapter");
        newChapter.textContent = newChapterTitle;
  
        // Remove active class from all chapters
        chapters.forEach(function(chapter) {
          chapter.classList.remove("active");
        });
  
        // Append the new chapter to the list
        chapterList.appendChild(newChapter);
  
        // Clear the input field
        chapterInput.value = "";
  
        // Add event listener to the new chapter
        newChapter.addEventListener("click", function() {
          // Remove active class from all chapters
          chapters.forEach(function(chapter) {
            chapter.classList.remove("active");
          });
  
          // Set current chapter as active
          this.classList.add("active");
  
          // Update chapter title and content
          chapterTitle.textContent = this.textContent;
          chapterContent.textContent = `This is the content of ${this.textContent}.`;
        });
      }
    });
  });
  