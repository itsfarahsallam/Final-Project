import React from 'react';
import Bird from '/src/components/BirdFaves';

const AppFaves = () => {
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
    habitat: "open deciduous forests"
  };

  const barnOwl = {
    name: "Barn Owl",
    sciname: "Tyto alba",
    habitat: "open areas, like prairies or farmlands, but can be found in a wide variety of habitats, including developed urban areas"
  };

  const treeSwallow = {
    name: "Tree Swallow",
    sciname: "Tachycineta bicolor",
    habitat: "close to water, as around ponds or marshes, but also nests away from water around meadows or brushy areas"
  };

  return (
    <>
      <div id="flex">
        <main>
          <div className="wrapper">
            <div className="title">My Favorite Birds</div>
            <div className="content">
              <div className='bird'>
                <Bird bird={cedarWaxwing} />
                <img src="https://www.allaboutbirds.org/guide/assets/photo/305837211-480px.jpg"/>
              </div>
              <br></br>
              <div className='bird'>
                <Bird bird={greatBlueHeron} />
                <img src="https://www.allaboutbirds.org/guide/assets/photo/60314281-480px.jpg"/>
              </div>
              <br></br>
              <div className='bird'>
                <Bird bird={downyWoodpecker} />
                <img src="https://www.allaboutbirds.org/guide/assets/photo/60397941-480px.jpg"/>
              </div>
              <br></br>
              <div className='bird'>
                <Bird bird={barnOwl} />
                <img src="https://www.allaboutbirds.org/guide/assets/photo/63738021-480px.jpg"/>
              </div>
              <br></br>
              <div className='bird'>
                <Bird bird={treeSwallow} />
                <img src="https://www.allaboutbirds.org/guide/assets/photo/305568421-480px.jpg"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AppFaves;
