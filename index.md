---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---
New kasm test

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

My journey starts here.

This is emphasis
> Did you know that sahaas spelled backwards is saahas?

### Markdown samples  [[markdown cheatsheet] ](https://www.markdownguide.org/cheat-sheet/)
Using markdown form index.md. We are learning Markdown


This text below is something called markdown

This is a heading, inside of code scaffolding

```Markdown
## Investing in Your Technical Future XXXYYY
'''

-This is emphasis

```markdown
> Explore the Computer Science Pathway at Del Norte High School and invest in your technical skills. All Del Norte CompSci classes are designed to provide a real-world development experience. Class time includes tech talks (lectures), peer collaboration, communication with teachers, critical thinking while coding, and creativity in projects. Grading is focused on time invested, participation with peers, and engagement in learning.
```

```Sample of bullets
- Introduction to concepts and requirements by the teacher
- Project-based learning with teacher support, performing Agile/Scrum development
- Coding, frontend, backend, devops, version control and algorithmic thinking
- Creativity, research, design, data structures, and utilizing ChatGPT
- Performing team work, team communication and collaboration, peer reviews/grading
- Focus on tehnical communications through project presentations and student led teaching
- Grades are on projects, learnt concepts, and live reviews between student(s) and teacher
```

Real
![image](https://github.com/user-attachments/assets/8d71b0ba-8eab-4f68-9170-bc052632707b)

### Projects that I feel that I did well on and enjoyed doing

## Snake Game

Took not as long as I thought, but still was a bit confusing. It was confusing because I didn't know much on the subject, but now Im probably better at doing stuff like that now than back then.

![image](https://github.com/user-attachments/assets/d503888f-c225-4ca1-98f5-47fe009c47c3)

## RPG game

Took a while because I wasn't doing everything and had everything for the game to work. It eventually worked, and I felt good. The game went from one character, the turtle, and a given background, the water, to a changed sprite and background and more.

![image](https://github.com/user-attachments/assets/91071e7f-d466-4c9c-84d9-bd16d4510fde)



### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/MaTThewB0rg/Matthew_2025">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
      </a>
    <a href="https://MaTThewB0rg.github.io/Matthew_2025/">
        <img src="https://img.shields.io/badge/GitHub%20Pages-327FC7?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
    </a>


### Hacks that I have done

>Sprint 2

 <a href="https://matthewb0rg.github.io/Matthew_2025/game/intro/json" style="text-decoration: none;">
      <div style="background-color: #eb34dc; color: white; padding: 15px 25px; border-radius: 10px; font-weight: bold;">
          JSON Objects
    </div>
<a href="https://matthewb0rg.github.io/Matthew_2025/csse/javascript/fundamentals/variables" style="text-decoration: none;">
      <div style="background-color: #eb34dc; color: white; padding: 15px 25px; border-radius: 10px; font-weight: bold;">
          Variables, Input, and Output
    </div>
  <a href="https://matthewb0rg.github.io/Matthew_2025/csse/javascript/fundamentals/data-types/" style="text-decoration: none;">
      <div style="background-color: #eb34dc; color: white; padding: 15px 25px; border-radius: 10px; font-weight: bold;">
          Data Types and Operators
    </div>
     <a href="https://matthewb0rg.github.io/Matthew_2025/csse/javascript/fundamentals/for-loops/" style="text-decoration: none;">
      <div style="background-color: #eb34dc; color: white; padding: 15px 25px; border-radius: 10px; font-weight: bold;">
          For Loops using Sprites
    </div>

       
  ### My game progress
  
  >Sprint 2

  <div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Snake Game
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg1" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.0
        </div>
    </a>
   <a href="{{site.baseurl}}/rpg2" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.1
        </div>
    </a>
   <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.2
        </div>

## Sprint 4

 >Platformer Game Review

  <a href="https://matthewb0rg.github.io/Matthew_2025/navigation/platformergame.md/" style="text-decoration: none;">
      <div style="background-color: #dfb60c; color: white; padding: 15px 25px; border-radius: 10px; font-weight: bold;">
          Platformer Review
    </div>
    
<br>
