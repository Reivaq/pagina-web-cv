import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <h1> Antonio Quiroz </h1>
      <p> Ingeniero Mecatrónico </p>
      </header>
      <div className='imagen_fondo'>
      <img src='ia.PNG'/>
      </div>
        <article className='barra_izq'>
          <h3> Contacto </h3>
          <div> <img className='dos' src='telef.jpeg'/> </div>
          <p> 9563215874</p>
          
          <img className='arrob' src='arroba.jpeg'/>
          <p className='correo'> gowafaf473@naymedia.com </p>
        <div className='lista'>
          <h3 className='aptitud'> Aptitudes </h3>
          <u1>
            <li> Diseño y modelado en CAD </li>
            <li> Alta capacidad resolutiva </li>
            <li> Programación en C/C++, Python, MATLAB, Java, JavaScript, HTML, CSS </li>
            <li> Electrónica y sistemas de control </li>
            <li> Automatización y robótica </li>
            <li> Trabajo en equipo multidisciplinario</li>
            <li> Sistemas embebidos y microcontroladores </li>
            <li>Diseño y fabricación de sistemas mecánicos</li>
            <li> Gestión de proyectos y planificación </li>
          </u1>
        </div>
        <h3> Idiomas </h3>
        <div className='lunguages'> 
          <u1>
            <li>Español: Idioma Nativo</li>
            <li>Ingles : C1 </li>
          </u1>
          
        </div>
      </article> 

      <article className='centro'>
       <div className='Mi_persona'> 
          <h3> Descripcion de mi persona </h3>
          <p>Soy un estudiante entusiasta de la carrera de Ingeniería en Mecatrónica con una pasión por la innovación y la resolución de problemas. Mi formación académica en ingeniería mecatrónica me ha proporcionado una base sólida en áreas interdisciplinarias que abarcan la mecánica, la electrónica y la informática.
             A lo largo de mi trayectoria académica y profesional, he adquirido un sólido conocimiento y experiencia en el manejo de diversos software de ingeniería, como SolidWorks, PcSimu y AutoCAD, Mathlab, maneo de PLC's ademas de conocimiento en diferentes lenguajes de programacion como lo son C,Java, JavaScript, HTML, CSS lo que me ha permitido diseñar y modelar soluciones ingeniosas para problemas técnicos complejos.</p>
       </div>
       
       <div className='academia'>
          
          <h3> Formacion academica</h3>
          <u1>
            <li>2018-2024</li>
            <li> Universidad Tecnologica de la mixteca</li>
            <li> 2019-2022</li>
            <li>Curso de Ingles de Cambrige </li>
          </u1>

          <h3> Experiencia laboral </h3>
          <u1 className='silla_cama'>
            <h4> Ingeniero de Diseño Mecanico--Proyecto de desarrollo de una silla de ruedas cama para personas con problemas de movilidad</h4>
            <p> Universidad Tecnologica de la Mixteca enero-2022 a junio 2022</p>

            <li> Diseñé el prototipo utilizando software de modelado en 3D para optimizar la estructura y funcionalidad del producto.</li>
            <li>Colaboré con ingenieros eléctricos y de materiales para seleccionar los materiales adecuados y garantizar la seguridad y durabilidad del producto.</li>
            <li>Realicé análisis y pruebas de ingeniería para validar el rendimiento y la resistencia del diseño.
            </li>
            </u1>
            <h3> Ingeniero de Diseño Mecanico-Diseño de una compactadora de aluminio</h3>
              <u1>
                <li> Participé en un equipo de ingenieros para el diseño y simulación de una compactadora de aluminio eficiente y de alto rendimiento.</li>
                <li>Realizamos el diseño completo de las piezas y componentes de la compactadora, calculando y optimizando cada elemento para garantizar su rendimiento y seguridad.</li>
                <li> Utilicé software de modelado en 3D(SolidWorks) para desarrollar el diseño detallado de la compactadora, teniendo en cuenta los requisitos de rendimiento y especificaciones técnicas.</li>
                <li>Todos los elementos mecánicos fueron calculados desde cero, teniendo en cuenta factores como la carga de trabajo, el desgaste y la vida útil.</li>
              </u1>
              <h3>Estancias profecionales en Empresa de Desarrollo de Software</h3>
              <u1>
                <li> Participé en un programa de estancias en una empresa de desarrollo de software, donde adquirí experiencia práctica en el desarrollo y diseño de páginas web.</li>
                <li>Aprendí a trabajar con diferentes lenguajes de programación, incluyendo JavaScript, HTML y CSS, para crear sitios web interactivos y atractivos.</li>
              </u1>

       </div>
     
      </article>
    </div>

  );
}
export default App;
