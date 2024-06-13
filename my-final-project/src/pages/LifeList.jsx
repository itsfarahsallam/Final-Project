import React from 'react';

const BirdCard = ({ src, alt, name, date }) => (
  <div className="grid-item">
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <img src={src} alt={alt} width="300px" height="200px" />
        </div>
        <div className="flip-box-back">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  </div>
);

const birds = [
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/308065631-480px.jpg",
    alt: "Rock Pigeon",
    name: "Rock Pigeon",
    date: "Since Childhood"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/59858041-480px.jpg",
    alt: "American Crow",
    name: "American Crow",
    date: "Since Childhood"
  },
  {
    src: "https://media.audubon.org/nas_birdapi_hero/h_a1_6937_6_canada_goose_ethel_oneal_adult.jpg?width=1200&height=630&auto=webp&quality=90&fit=crop&enable=upscale",
    alt: "Canada Goose",
    name: "Canada Goose",
    date: "Since Childhood"
  },
  {
    src: "https://varmentguard.com/uploads/permanent/f8f2098da824b77447887be569c8990d",
    alt: "Seagull",
    name: "Glacous-Winged Gull",
    date: "Since Childhood"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sterna-caspia-010.jpg",
    alt: "Caspian Tern",
    name: "Caspian Tern",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/66026051-480px.jpg",
    alt: "Pelagic Cormorant",
    name: "Pelagic Cormorant",
    date: "June 8th, 2024"
  },
  {
    src: "https://media.audubon.org/nas_birdapi_hero/web_belted-kingfisher_02-20-2013-200-adult-female.jpg",
    alt: "Belted Kingfisher",
    name: "Belted Kingfisher",
    date: "June 8th, 2024"
  },
  {
    src: "https://greatecology.com/wp-content/uploads/2022/04/Great-Blue-Heron.jpg",
    alt: "Great Blue Heron",
    name: "Great Blue Heron",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/301825191-480px.jpg",
    alt: "Willow Flycatcher",
    name: "Willow Flycatcher",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.hww.ca/kaboom/images/Birds/barn-swallow/barn-swallow-1.jpg",
    alt: "Barn Swallow",
    name: "Barn Swallow",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/305568151-480px.jpg",
    alt: "Tree Swallow",
    name: "Tree Swallow",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/og/75236421-1200px.jpg",
    alt: "Marsh Wren",
    name: "Marsh Wren",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/282223081-480px.jpg",
    alt: "Swainson's Thrush",
    name: "Swainson's Thrush",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/og/526210021-1200px.jpg",
    alt: "American Goldfinch",
    name: "American Goldfinch",
    date: "June 8th, 2024"
  },
  {
    src: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297084201/1800",
    alt: "Western Tanager",
    name: "Western Tanager",
    date: "June 8th, 2024"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5e121baa8aa5803c29b93200/1600021712266-A4QADC5LQUN12XRHM20Q/cedar-waxwing-Feb4-2018-arparkway-cconard.JPG",
    alt: "Cedar Waxwing",
    name: "Cedar Waxwing",
    date: "June 8th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/308564891-480px.jpg",
    alt: "Red-breasted Nuthatch",
    name: "Red-breasted Nuthatch",
    date: "May 26th, 2024"
  },
  {
    src: "https://cdn.britannica.com/55/118455-004-C07B0CCE.jpg",
    alt: "Osprey",
    name: "Osprey",
    date: "May 26th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/og/75707621-1200px.jpg",
    alt: "Lazuli Bunting",
    name: "Lazuli Bunting",
    date: "May 26th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/68054141-480px.jpg",
    alt: "Chestnut-backed Chickadee",
    name: "Chestnut-backed Chickadee",
    date: "April 21st, 2024"
  },
  {
    src: "https://www.lyricbirdfood.com/media/1542/male-red-winged-blackbird-ts-512163964.jpg?crop=0.25009872318020293,0.14227752440979036,0.091746742135052586,0.30131572834477943&cropmode=percentage&width=700&height=365&rnd=132743519320000000",
    alt: "Red-winged Blackbird",
    name: "Red-winged Blackbird",
    date: "April 21st, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/64896301-480px.jpg",
    alt: "Black-throated Gray Warbler",
    name: "Black-throated Gray Warbler",
    date: "April 21st, 2024"
  },
  {
    src: "https://media.cnn.com/api/v1/images/stellar/prod/230331170616-rufous-hummingbird-flight.jpg?c=16x9&q=h_833,w_1480,c_fill",
    alt: "Rufous Hummingbird",
    name: "Rufous Hummingbird",
    date: "April 20th, 2024"
  },
  {
    src: "https://www.nps.gov/articles/000/images/raven-CC-BY-NC-ND-2.jpg?maxwidth=1300&autorotate=false",
    alt: "Common Raven",
    name: "Common Raven",
    date: "April 20th, 2024"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/92/White-crowned-Sparrow.jpg",
    alt: "White-crowned Sparrow",
    name: "White-crowned Sparrow",
    date: "April 20th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/64978541-480px.jpg",
    alt: "Golden-crowned Sparrow",
    name: "Golden-crowned Sparrow",
    date: "April 20th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/299678301-480px.jpg",
    alt: "Spotted Towhee",
    name: "Spotted Towhee",
    date: "April 20th, 2024"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/640px-Turdus-migratorius-002.jpg",
    alt: "American Robin",
    name: "American Robin",
    date: "April 17th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/308597451-480px.jpg",
    alt: "Brown Creeper",
    name: "Brown Creeper",
    date: "April 17th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/og/75375121-1200px.jpg",
    alt: "Hermit Thrush",
    name: "Hermit Thrush",
    date: "April 17th, 2024"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Song_sparrow_in_Prospect_Park_%2893031%29.jpg",
    alt: "Song Sparrow",
    name: "Song Sparrow",
    date: "April 17th, 2024"
  },
  {
    src: "https://s7d1.scene7.com/is/image/isp/wabfoxsparrow-p5?qlt=100&wid=1200&ts=1705517807370&$ImageComponent$&fit=constrain",
    alt: "Fox Sparrow",
    name: "Fox Sparrow",
    date: "April 17th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/306363961-480px.jpg",
    alt: "Red Crossbill",
    name: "Red Crossbill",
    date: "April 17th, 2024"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5a6390338a02c77bf05da4ab/1567011561284-8K0RVD6W6VDWFATN6WYR/33721607850_f40c2ac436_o.jpg",
    alt: "European Starling",
    name: "European Starling",
    date: "April 17th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/og/615440015-1200px.jpg",
    alt: "Northern Flicker",
    name: "Northern Flicker",
    date: "April 17th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/309038471-480px.jpg",
    alt: "Hairy Woodpecker",
    name: "Hairy Woodpecker",
    date: "April 17th, 2024"
  },
  {
    src: "https://abcbirds.org/wp-content/uploads/2019/08/BOTW-Facebook_Downy-Woodpecker.jpg",
    alt: "Downy Woodpecker",
    name: "Downy Woodpecker",
    date: "April 17th, 2024"
  },
  {
    src: "https://s7d1.scene7.com/is/image/isp/wabbewickswren-am?qlt=100&wid=1200&ts=1702400170647&$ImageComponent$&fit=constrain",
    alt: "Bewick's Wren",
    name: "Bewick's Wren",
    date: "April 13th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/308552891-480px.jpg",
    alt: "Bushtit",
    name: "Bushtit",
    date: "April 13th, 2024"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/578ff19b9f7456c15b63f7e7/0ed5c65e-34da-45b3-80f2-9c87fb888bbe/AAb+dark+eyed+junco.jpg",
    alt: "Dark-eyed Junco",
    name: "Dark-eyed Junco",
    date: "April 13th, 2024"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsX4fadcjeLp3JBDzllPxPPQUjLEJXTRmLfQ&s",
    alt: "Black-capped Chickadee",
    name: "Black-capped Chickadee",
    date: "April 13th, 2024"
  },
  {
    src: "https://abcbirds.org/wp-content/uploads/2021/02/BOTW-Homepage-Thumbnail_Stellers-Jay_dimostudio-Shutterstock-1.jpg",
    alt: "Steller's Jay",
    name: "Steller's Jay",
    date: "April 13th, 2024"
  },
  {
    src: "https://www.ndow.org/wp-content/uploads/2021/10/anas_platyrhynchos.jpg",
    alt: "Mallard",
    name: "Mallard",
    date: "April 13th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/216531741-480px.jpg",
    alt: "Bufflehead",
    name: "Bufflehead",
    date: "April 6th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/og/75335191-1200px.jpg",
    alt: "Common Goldeneye",
    name: "Common Goldeneye",
    date: "April 6th, 2024"
  },
  {
    src: "https://wizardpins.com/cdn/shop/articles/Artboard_Copy_62_1740x.jpg?v=1628627151",
    alt: "Bald Eagle",
    name: "Bald Eagle",
    date: "April 6th, 2024"
  },
  {
    src: "https://abcbirds.org/wp-content/uploads/2019/01/BOTW-Homepage-Thumbnail_Mountain-Bluebird_Double-Brow-Imagery_Shutterstock.jpg",
    alt: "Mountain Bluebird",
    name: "Mountain Bluebird",
    date: "April 6th, 2024"
  },
  {
    src: "https://www.allaboutbirds.org/guide/assets/photo/306334001-480px.jpg",
    alt: "Purple Finch",
    name: "Purple Finch",
    date: "April 6th, 2024"
  },
];

const Birds = () => (
<div className="wrapper">
  <div className="title">Birds I've Seen!</div>
  <div className="content">
    <p>Disclaimer: These Photos are NOT my own. All photography belongs to their respective owners.</p>
  <div className="container">
    <div className="grid-container">
      {birds.map((bird, index) => (
        <BirdCard
          key={index}
          src={bird.src}
          alt={bird.alt}
          name={bird.name}
          date={bird.date}
        />
      ))}
    </div>
  </div>
  </div>
</div>
);

export default Birds;
