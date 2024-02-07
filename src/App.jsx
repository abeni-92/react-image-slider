import { ImageSlider } from "./ImageSlider";

import car2 from "./img/car2.jpeg";
import car3 from "./img/car3.jpeg";
import car4 from "./img/car4.jpeg";
import car5 from "./img/car5.jpeg";
import car6 from "./img/car1.jpeg";

const Images = [car2, car3, car4, car5, car6];

function App() {
  return (
    <div className="">
      <ImageSlider imageUrls={Images} />
    </div>
  );
}

export default App;
