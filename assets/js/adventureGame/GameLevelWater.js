import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Npc from './Npc.js';
import Character from './Character.js';
import Player from './Player.js';

class GameLevelWater {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data
    const image_src_water = path + "/images/gamify/oregeon.png";
    const image_data_water = {
        id: 'Water',
        src: image_src_water,
        pixels: {height: 168, width: 300}
    };

    const sprite_src_octopus = path + "/images/gamify/rightnowman.png"; // be sure to include the path
    const OCTOPUS_SCALE_FACTOR = 10;
    const sprite_data_octopus = {
        id: 'Octopus',
        greeting: "Hi I am Liam, the lone operator no one knows about. I am looking for wisdome and adventure!",
        src: sprite_src_octopus,
        SCALE_FACTOR: OCTOPUS_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/OCTOPUS_SCALE_FACTOR) }, 
        pixels: {height: 183, width: 275},
        orientation: {rows: 4, columns: 6 },
        down: {row: 0, start: 0, columns: 6 },
        left: {row: 1, start: 0, columns: 6 },
        right: {row: 2, start: 0, columns: 6 },
        up: {row: 3, start: 0, columns: 6},
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC Data for Byte Nomad (Smaller Version)
    const sprite_src_nomad = path + "/images/gamify/soldier.png"; // be sure to include the path
    const sprite_data_nomad = {
        id: 'Javanomad',
        greeting: "Hello! I am Java Nomad, the Java Soldier.  I am very happy to spend some linux shell time with you, but we first have to go into site and plant defuser!",
        src: sprite_src_nomad,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 30,
        pixels: {height: 640, width: 2519},
        INIT_POSITION: { x: (width / 3), y: (height / 3)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
        quiz: { 
          title: "Jupyter Notebook Command Quiz",
          questions: [
            "Which keyword is used to define a class in Java?\n1. define\n2. class\n3. Class\n4. struct",
            "Which data type is used to store a single character in Java?\n1. String\n2. char\n3. Character\n4. ch",
            "What is the default value of an int variable in Java?\n1. 0\n2. null\n3. undefined\n4. -1",
            "Which of these is NOT a Java access modifier?\n1. public\n2. private\n3. protected\n4. external",
            "What is the purpose of the 'final' keyword in Java?\n1. It defines a constant variable\n2. It prevents method overriding\n3. It prevents class inheritance\n4. All of the above",
            "Which Java loop is guaranteed to execute at least once?\n1. for loop\n2. while loop\n3. do-while loop\n4. foreach loop",
            "What is the parent class of all Java classes?\n1. Object\n2. BaseClass\n3. Root\n4. Core",
            "How do you correctly create a new object in Java?\n1. Object obj = Object();\n2. Object obj = new Object();\n3. Object obj = new();\n4. new Object obj;",
            "Which Java keyword is used to handle exceptions?\n1. throw\n2. try\n3. error\n4. exception",
            "Which Java collection allows key-value pairs?\n1. ArrayList\n2. HashMap\n3. HashSet\n4. LinkedList"
          ] 
        }
      };



      // NPC Data for Byte Solder (Smaller Version)
    const sprite_src_soldier = path + "/images/gamify/classsoldier.png"; // be sure to include the path
    const sprite_data_soldier = {
        id: 'Soldier',
        greeting: "Hello! I am a Class Soldier, I am very happy to spend some Class knowledge with you, but we have to hold off site from those pesky Java soldiers!",
        src: sprite_src_soldier,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 40,
        pixels: {height: 204, width: 798},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 2 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
    // Linux command quiz
    quiz: { 
      title: "Jupyter Notebook Command Quiz",
      questions: [
        "Which keyword is used to define a class in Java?\n1. define\n2. class\n3. Class\n4. struct",
        "Which data type is used to store a single character in Java?\n1. String\n2. char\n3. Character\n4. ch",
        "What is the default value of an int variable in Java?\n1. 0\n2. null\n3. undefined\n4. -1",
        "Which of these is NOT a Java access modifier?\n1. public\n2. private\n3. protected\n4. external",
        "What is the purpose of the 'final' keyword in Java?\n1. It defines a constant variable\n2. It prevents method overriding\n3. It prevents class inheritance\n4. All of the above",
        "Which Java loop is guaranteed to execute at least once?\n1. for loop\n2. while loop\n3. do-while loop\n4. foreach loop",
        "What is the parent class of all Java classes?\n1. Object\n2. BaseClass\n3. Root\n4. Core",
        "How do you correctly create a new object in Java?\n1. Object obj = Object();\n2. Object obj = new Object();\n3. Object obj = new();\n4. new Object obj;",
        "Which Java keyword is used to handle exceptions?\n1. throw\n2. try\n3. error\n4. exception",
        "Which Java collection allows key-value pairs?\n1. ArrayList\n2. HashMap\n3. HashSet\n4. LinkedList"
      ] 
    }
  };

    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_water },
      { class: Player, data: sprite_data_octopus },
      { class: Npc, data: sprite_data_nomad },
      { class: Npc, data: sprite_data_soldier },
    ];
  }
}

export default GameLevelWater;