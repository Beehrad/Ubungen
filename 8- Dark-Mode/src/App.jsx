import { useState } from "react";
import Header from "./components/Header";
import { useThemeContext } from "./Context";

function App() {
  const theme = useThemeContext();
  const darkMode = theme.darkMode;
  return (
    <div className={`${darkMode ? "bg-slate-700 text-slate-200" : "bg-white"}`}>
      <Header />
      <div className="container mx-auto p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc
        id cursus metus aliquam. Volutpat sed cras ornare arcu dui vivamus arcu.
        Pharetra massa massa ultricies mi. Sit amet purus gravida quis blandit.
        Amet mattis vulputate enim nulla aliquet porttitor lacus. Pellentesque
        eu tincidunt tortor aliquam nulla. Nec nam aliquam sem et tortor
        consequat. Nisl nunc mi ipsum faucibus. Felis bibendum ut tristique et
        egestas quis ipsum suspendisse. Rhoncus mattis rhoncus urna neque
        viverra justo. Varius vel pharetra vel turpis nunc eget lorem. Cursus
        vitae congue mauris rhoncus aenean. Diam maecenas sed enim ut. Risus
        pretium quam vulputate dignissim suspendisse in. Scelerisque eleifend
        donec pretium vulputate sapien nec sagittis aliquam. Congue quisque
        egestas diam in arcu. Velit ut tortor pretium viverra suspendisse
        potenti nullam. Eget egestas purus viverra accumsan. Aliquet bibendum
        enim facilisis gravida neque convallis a cras. Suspendisse sed nisi
        lacus sed. A erat nam at lectus urna duis convallis convallis. At auctor
        urna nunc id cursus metus aliquam eleifend mi. Interdum velit laoreet id
        donec ultrices tincidunt arcu non. Etiam tempor orci eu lobortis
        elementum nibh tellus molestie nunc. Varius duis at consectetur lorem
        donec. Sem nulla pharetra diam sit. Enim diam vulputate ut pharetra sit
        amet. Tortor id aliquet lectus proin nibh nisl condimentum id. Convallis
        tellus id interdum velit laoreet id. Dui ut ornare lectus sit amet est
        placerat. Cursus euismod quis viverra nibh cras pulvinar mattis nunc
        sed. Pellentesque pulvinar pellentesque habitant morbi tristique
        senectus et netus. Id consectetur purus ut faucibus pulvinar elementum
        integer enim. Non arcu risus quis varius. Mattis enim ut tellus
        elementum. Tellus integer feugiat scelerisque varius morbi enim. Nec dui
        nunc mattis enim ut tellus elementum. Sed cras ornare arcu dui vivamus
        arcu felis bibendum. Enim eu turpis egestas pretium. Turpis egestas
        pretium aenean pharetra magna. Vel pretium lectus quam id leo in vitae
        turpis. In fermentum et sollicitudin ac orci phasellus egestas. Gravida
        neque convallis a cras. Tempor nec feugiat nisl pretium. Scelerisque
        viverra mauris in aliquam sem fringilla ut morbi. Morbi tristique
        senectus et netus et malesuada fames ac turpis. Elit scelerisque mauris
        pellentesque pulvinar pellentesque. Elit pellentesque habitant morbi
        tristique senectus et netus. Non pulvinar neque laoreet suspendisse
        interdum consectetur libero id. Turpis in eu mi bibendum neque egestas
        congue quisque. Consequat id porta nibh venenatis cras sed. Ante in nibh
        mauris cursus. Urna nunc id cursus metus aliquam eleifend. Amet dictum
        sit amet justo donec. Consequat id porta nibh venenatis. Curabitur vitae
        nunc sed velit. Dolor sit amet consectetur adipiscing elit pellentesque
        habitant morbi. Pellentesque id nibh tortor id aliquet lectus. Tellus
        orci ac auctor augue mauris augue neque gravida in. Quis blandit turpis
        cursus in hac habitasse. Tempor orci dapibus ultrices in iaculis nunc
        sed augue lacus. Et odio pellentesque diam volutpat commodo sed. Eu mi
        bibendum neque egestas congue quisque egestas diam. Amet purus gravida
        quis blandit turpis cursus in hac. Arcu bibendum at varius vel pharetra
        vel turpis nunc. Egestas maecenas pharetra convallis posuere morbi leo
        urna. Diam donec adipiscing tristique risus nec feugiat. Sit amet tellus
        cras adipiscing enim. Cursus in hac habitasse platea dictumst. Auctor
        elit sed vulputate mi. Leo vel fringilla est ullamcorper eget nulla
        facilisi etiam. Ultricies lacus sed turpis tincidunt id aliquet risus
        feugiat in. Lectus mauris ultrices eros in.
      </div>
    </div>
  );
}

export default App;
