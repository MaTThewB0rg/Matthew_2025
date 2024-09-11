---
layout: page
title: About
permalink: /about/
---
<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
     .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - forever"},
        {"flag": "0/05/Flag_of_Brazil.svg", "greeting": "ola", "description": "Brazil"},
        {"flag": "4/4c/Flag_of_Sweden.svg", "greeting": "Hej", "description": "Sweden"},
        {"flag": "a/a4/Flag_of_the_United_States.svg", "greeting": "Hello", "description": "USA"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>
## Schools I Went To

Here are some schools I sent to

- Monterey Ridge: My elementary school
- Oak Valley Middle School: My middle school
- Del Norte High School: The school im at right now

  ## My Family

  Here are some things about me and my family

  - I have one sister
  - My mom is in biotech and my dad is in engineering
  - My Mom is from Brazil and my Dad is from Sweden
  - My sister goes to Monterey Ridge currently
 
  <div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/download (6).jpeg" alt="Image 1">
  <img src="{{site.baseurl}}/images/about/download (7).jpeg" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/download (8).jpeg" alt="Image 3">
  <img src="{{site.baseurl}}/images/about/download (9).jpeg" alt="Image 4">
  <img src="{{site.baseurl}}/images/about/download (10).jpeg" alt="Image 5">

</div>

<script src="https://utteranc.es/client.js"
        repo="MaTThewB0rg/Matthew_2025"
        issue-term="title"
        label="blogpost-comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
-->


Creator of Student 2025
