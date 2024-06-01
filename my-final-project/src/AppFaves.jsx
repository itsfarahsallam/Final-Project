import React, { useEffect, useState } from 'react';
import './App.css';
import Bird from '.components/BirdFaves';


function AppFaves() {

    const cedarWaxwing = {
        name: "Cedar Waxwing",
        sciname: "Bombycilla cedrorum",
        habitat: "open woodlands, fruiting trees, orchards; in winter, widespread, including towns."
    };

    const greatBlueHeron = {
        name: "Great Blue Heron",
        sciname: "Ardea herodias",
        habitat: "lakes, ponds, rivers, flooded farmlands and meadows, irrigation ditches, and wetlands"
    };

    const downyWoodpecker = {
        name: "Downy Woodpecker",
        sciname: "Picoides pubescens",
        habitat: " open deciduous forests"
    };

    const barnOwl = {
        name: "Barn Owl",
        sciname: "Tyto alba",
        habitat:"open areas, like prairies or farmlands, but can be found in a wide variety of habitats, including developed urban areas"
    }

  return (
    <>
    <body>
      <header className="App-header">
        <h1>My Birding Website</h1>
      </header>
      <div id="flex">
        <main>
          <nav>
            <div class ="navbar">
              <ul>
                <li><a href="App.jsx">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">My Life List</a></li>
                <li><a href="AppFaves.jsx">My Faves</a></li>
              </ul>
            </div>
          </nav>
          <div class="wrapper">
            <div class="title">My Favorite Birds</div>
                    <div class="content">
                    <div className='bird1'>
                        <Bird Bird={cedarWaxwing} />
                    </div>
                    <div className='bird2'>
                        <Bird Bird={greatBlueHeron} />
                    </div>
                    <div className='bird3'>
                        <Bird Bird={downyWoodpecker} />
                    </div>
                    <div className='bird4'>
                        <Bird Bird={barnOwl} />
                    </div>
                  
                    </div>
          </div>
          </main>
        </div>
        </body>
    </>
  );
}
