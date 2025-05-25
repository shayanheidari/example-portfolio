import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import {
  PiNumberCircleOneFill,
  PiNumberCircleOneLight,
  PiNumberCircleTwoFill,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeFill,
  PiNumberCircleThreeLight,
  PiNumberCircleFourFill,
  PiNumberCircleFourLight,
} from "react-icons/pi";
const projects = [
  {
    img: project1,
    title: "Image Processing Project",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sint distinctio aliquam odit cupiditate porro! Ad odio explicabo repudiandae minus deleniti. Deleniti natus distinctio et dolore tempora hic repellat aperiam! UI for frontend development using React",
    links: {
      site: "#",
      github: "#",
    },
    icon: {
      deactive: <PiNumberCircleOneLight />,
      active: <PiNumberCircleOneFill />,
    },
  },
  {
    img: project2,
    title: "Object detection Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum blanditiis delectus dicta maxime, omnis veniam, dignissimos placeat laboriosam aliquam laborum sit incidunt. Hic suscipit maiores est consectetur vero non. Quae! UI for frontend development using Tailwind",
    links: {
      site: "#",
      github: "#",
    },
    icon: {
      deactive: <PiNumberCircleTwoLight />,
      active: <PiNumberCircleTwoFill />,
    },
  },

  {
    img: project3,
    title: "Yolo Project",
    description:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas, animi sequi accusantium fugiat sint, cupiditate delectus, asperiores ipsam quisquam qui ut porro recusandae consequuntur commodi facere temporibus dolorum unde esse natus. Commodi ea voluptatibus non ipsum tempora vel deleniti consectetur ab eos dolorem nulla, veritatis, repellendus corrupti optio eligendi minima quos impedit natus facilis nesciunt labore. Doloribus cumque voluptatem unde illo quos vitae nulla! Illo earum dicta iusto minima molestiae, facilis pariatur fugiat quibusdam quo nobis? Voluptate voluptas, sint temporibus sed labore perferendis pariatur inventore commodi aliquid deleniti iste alias consequuntur magnam adipisci perspiciatis explicabo in ipsum repellat, obcaecati iusto earum beatae? Nesciunt sed illo deleniti eligendi, eaque asperiores, ipsa provident, repudiandae dolores nulla accusantium officiis cupiditate voluptates praesentium odio eveniet veritatis excepturi harum velit! Adipisci, corporis quibusdam rerum iure necessitatibus est quasi alias dolorem laboriosam beatae velit impedit. Laudantium quasi labore iure harum ea at vitae? Ipsa cupiditate adipisci qui, quibusdam, dignissimos nihil accusamus excepturi ducimus, inventore itaque quia numquam maxime. Corporis quam hic inventore eum, laudantium reprehenderit error, nostrum aperiam vero tempora delectus ut. Neque inventore est adipisci quod repellat libero cupiditate suscipit dolorum nemo tempora eum officiis natus ullam incidunt, veniam aspernatur mollitia beatae et placeat magnam perspiciatis fugiat quasi vitae animi? Sapiente molestiae hic sequi fuga odio dolore, ducimus vero delectus id nobis alias magnam impedit similique, tempore quo, aliquam corporis voluptas totam? Nemo quisquam inventore soluta illum quae! Eos quia voluptas nulla omnis consequuntur blanditiis, quo sapiente ipsa at facilis. Ipsa iure illum totam. Quisquam iusto, magni commodi libero eum quae alias soluta nostrum. Ipsum, voluptate excepturi libero, deserunt facilis voluptas esse, asperiores exercitationem vero aliquam explicabo commodi necessitatibus veniam obcaecati. Soluta, earum illo provident aliquid doloribus sunt libero est nostrum reprehenderit assumenda explicabo expedita in nihil eos, animi, et corrupti repudiandae! Recusandae assumenda fugit itaque provident doloribus at distinctio, expedita nemo? Blanditiis repudiandae illo accusantium quis ullam. Explicabo sunt voluptates maxime, deserunt iusto mollitia cupiditate repellat nihil, itaque quasi architecto quaerat quisquam labore et iure harum, corporis doloribus est corrupti reprehenderit! Dicta beatae tempore corrupti voluptas molestiae esse omnis sunt, libero commodi dolor eveniet sit ipsa! Quam, ab! Sit nostrum dolores mollitia nulla recusandae. Atque, cupiditate laboriosam possimus dignissimos natus similique! Libero deleniti molestias, mollitia doloribus aperiam velit perspiciatis repellat consectetur odit deserunt vero quisquam est repudiandae nulla quae praesentium quod unde? Qui quisquam sapiente dignissimos rerum labore optio id est iusto! Dolore tempora numquam sint recusandae, aut veniam placeat nihil, eaque quisquam quas, incidunt minima aperiam. Quam est distinctio tempore porro nostrum sapiente aut sit obcaecati qui? Nostrum officia delectus asperiores qui placeat accusantium, veniam deserunt exercitationem nisi voluptatibus facere alias, quasi harum incidunt ipsum dolor ullam illo error! Quasi, ipsum autem. Impedit corrupti provident consequuntur! Et dolore quaerat fugiat maiores, accusamus nulla ducimus ipsam odit deleniti assumenda, eum rerum eligendi vitae sequi autem voluptate animi possimus dignissimos eaque impedit nobis veniam minima. Expedita doloremque blanditiis omnis commodi error mollitia voluptatum harum necessitatibus rerum quisquam eveniet magnam vero quibusdam delectus a ex, repellat odio! Deserunt saepe, qui iusto, at earum deleniti ipsum assumenda quam autem impedit aliquid maxime officia laborum eum nulla placeat voluptatum natus commodi? Rem id nemo hic saepe quaerat, tempora velit. Consequatur totam, facere, repudiandae labore consectetur amet maiores vitae aperiam quia ipsa odit saepe pariatur blanditiis eius. Corporis asperiores pariatur eum voluptatem in. Ipsum itaque, debitis rerum minima vero dolor quod obcaecati nulla perspiciatis! Eveniet magni quis a minus expedita. Natus consequatur ipsum sequi, unde voluptatum voluptatem, ducimus officiis rerum expedita numquam necessitatibus facilis sit maiores dolores ratione eveniet minima molestiae obcaecati ea suscipit voluptatibus quia officia, accusantium quidem. Cumque quasi ad dicta consectetur incidunt sit fugit possimus odit quibusdam. Deserunt, culpa nam expedita, id fugiat neque natus delectus sit illo suscipit, accusantium facilis reprehenderit optio error voluptatibus illum temporibus necessitatibus nihil reiciendis at autem molestias eius maiores debitis! Sint inventore autem nobis amet. Soluta provident repellendus repellat modi odio, eum quo adipisci dignissimos quidem. Maxime, eveniet illo accusantium quidem fugiat magni soluta vitae officiis optio. Fugit culpa quos, nobis velit nemo corporis laborum quod amet esse necessitatibus eligendi adipisci maiores. Iste adipisci ea porro. Illo obcaecati deleniti dicta natus necessitatibus eum quasi molestiae sapiente sunt accusamus quos alias laborum repellat cumque aliquam aliquid nostrum earum, quam tempora ab exercitationem. Velit, odio! At sapiente debitis eos deleniti ipsam natus necessitatibus maiores sit laudantium ducimus voluptatibus suscipit ab maxime deserunt libero placeat, excepturi quis eaque nostrum voluptas quam eligendi mollitia. Nesciunt voluptatem repellendus ratione eaque commodi. Maiores ipsum dignissimos provident architecto reiciendis possimus, quaerat, magnam in molestiae totam soluta harum dicta nisi voluptatem. Culpa officia unde in commodi natus minima dolorem, aliquam distinctio adipisci temporibus velit perspiciatis eum officiis aut doloremque eos vel excepturi deserunt, eligendi nostrum modi. Amet doloremque quae nisi unde pariatur asperiores quam velit vitae inventore voluptate obcaecati, illum fugiat soluta accusantium sit maxime mollitia facilis qui in laudantium, ut est. Facilis obcaecati quae veniam repellendus, placeat quod libero voluptatibus est optio doloremque soluta nam quisquam, vitae pariatur quas ullam veritatis nostrum voluptate nulla id. Eligendi accusamus incidunt perferendis! Minima fugit quia, dolor eum quod qui vitae cumque, quas nam in eligendi iure maxime illum optio delectus odio excepturi? Quis eos a, sunt velit iste consequuntur in accusamus et voluptatem laudantium, temporibus eaque omnis alias nobis molestias veritatis illo, magni est. Quo officia veritatis quisquam magni, dolore quos fugiat deserunt? Iure a necessitatibus saepe molestiae itaque autem ea veniam non dolorem nihil, aliquam repudiandae labore veritatis, est aliquid cum nulla similique ipsum. Exercitationem, modi? Placeat voluptatem a aut itaque voluptas, aspernatur fugiat doloribus harum rem suscipit cupiditate mollitia impedit amet alias odio assumenda earum dolorem consequatur provident quam, delectus id labore. Quisquam architecto odio laudantium soluta distinctio aspernatur odit atque, deleniti adipisci nostrum eius veniam repudiandae alias quis. Voluptatum quos, ea veniam possimus, doloremque nemo expedita porro, quam fuga quibusdam tempora modi velit laboriosam a sed nostrum debitis mollitia. Placeat voluptatibus cupiditate accusantium reprehenderit exercitationem id, dicta voluptatum iure illo. Blanditiis repellendus obcaecati odit animi tempore.jik adipisicing elit. Eum beatae tempore reiciendis tempora possimus in aperiam quae soluta quasi voluptatum sapiente consequuntur, ullam nesciunt, dolorem cumque repellat veritatis, impedit aliquid! UI for backend development using Tailwind",
    links: {
      site: "#",
      github: "#",
    },

    icon: {
      deactive: <PiNumberCircleThreeLight />,
      active: <PiNumberCircleThreeFill />,
    },
  },
  {
    img: project4,
    title: "Yolo Project",
    description:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas, animi sequi accusantium fugiat sint, cupiditate delectus, asperiores ipsam quisquam qui ut porro recusandae consequuntur commodi facere temporibus dolorum unde esse natus. Commodi ea voluptatibus non ipsum tempora vel deleniti consectetur ab eos dolorem nulla, veritatis, repellendus corrupti optio eligendi minima quos impedit natus facilis nesciunt labore. Doloribus cumque voluptatem unde illo quos vitae nulla! Illo earum dicta iusto minima molestiae, facilis pariatur fugiat quibusdam quo nobis? Voluptate voluptas, sint temporibus sed labore perferendis pariatur inventore commodi aliquid deleniti iste alias consequuntur magnam adipisci perspiciatis explicabo in ipsum repellat, obcaecati iusto earum beatae? Nesciunt sed illo deleniti eligendi, eaque asperiores, ipsa provident, repudiandae dolores nulla accusantium officiis cupiditate voluptates praesentium odio eveniet veritatis excepturi harum velit! Adipisci, corporis quibusdam rerum iure necessitatibus est quasi alias dolorem laboriosam beatae velit impedit. Laudantium quasi labore iure harum ea at vitae? Ipsa cupiditate adipisci qui, quibusdam, dignissimos nihil accusamus excepturi ducimus, inventore itaque quia numquam maxime. Corporis quam hic inventore eum, laudantium reprehenderit error, nostrum aperiam vero tempora delectus ut. Neque inventore est adipisci quod repellat libero cupiditate suscipit dolorum nemo tempora eum officiis natus ullam incidunt, veniam aspernatur mollitia beatae et placeat magnam perspiciatis fugiat quasi vitae animi? Sapiente molestiae hic sequi fuga odio dolore, ducimus vero delectus id nobis alias magnam impedit similique, tempore quo, aliquam corporis voluptas totam? Nemo quisquam inventore soluta illum quae! Eos quia voluptas nulla omnis consequuntur blanditiis, quo sapiente ipsa at facilis. Ipsa iure illum totam. Quisquam iusto, magni commodi libero eum quae alias soluta nostrum. Ipsum, voluptate excepturi libero, deserunt facilis voluptas esse, asperiores exercitationem vero aliquam explicabo commodi necessitatibus veniam obcaecati. Soluta, earum illo provident aliquid doloribus sunt libero est nostrum reprehenderit assumenda explicabo expedita in nihil eos, animi, et corrupti repudiandae! Recusandae assumenda fugit itaque provident doloribus at distinctio, expedita nemo? Blanditiis repudiandae illo accusantium quis ullam. Explicabo sunt voluptates maxime, deserunt iusto mollitia cupiditate repellat nihil, itaque quasi architecto quaerat quisquam labore et iure harum, corporis doloribus est corrupti reprehenderit! Dicta beatae tempore corrupti voluptas molestiae esse omnis sunt, libero commodi dolor eveniet sit ipsa! Quam, ab! Sit nostrum dolores mollitia nulla recusandae. Atque, cupiditate laboriosam possimus dignissimos natus similique! Libero deleniti molestias, mollitia doloribus aperiam velit perspiciatis repellat consectetur odit deserunt vero quisquam est repudiandae nulla quae praesentium quod unde? Qui quisquam sapiente dignissimos rerum labore optio id est iusto! Dolore tempora numquam sint recusandae, aut veniam placeat nihil, eaque quisquam quas, incidunt minima aperiam. Quam est distinctio tempore porro nostrum sapiente aut sit obcaecati qui? Nostrum officia delectus asperiores qui placeat accusantium, veniam deserunt exercitationem nisi voluptatibus facere alias, quasi harum incidunt ipsum dolor ullam illo error! Quasi, ipsum autem. Impedit corrupti provident consequuntur! Et dolore quaerat fugiat maiores, accusamus nulla ducimus ipsam odit deleniti assumenda, eum rerum eligendi vitae sequi autem voluptate animi possimus dignissimos eaque impedit nobis veniam minima. Expedita doloremque blanditiis omnis commodi error mollitia voluptatum harum necessitatibus rerum quisquam eveniet magnam vero quibusdam delectus a ex, repellat odio! Deserunt saepe, qui iusto, at earum deleniti ipsum assumenda quam autem impedit aliquid maxime officia laborum eum nulla placeat voluptatum natus commodi? Rem id nemo hic saepe quaerat, tempora velit. Consequatur totam, facere, repudiandae labore consectetur amet maiores vitae aperiam quia ipsa odit saepe pariatur blanditiis eius. Corporis asperiores pariatur eum voluptatem in. Ipsum itaque, debitis rerum minima vero dolor quod obcaecati nulla perspiciatis! Eveniet magni quis a minus expedita. Natus consequatur ipsum sequi, unde voluptatum voluptatem, ducimus officiis rerum expedita numquam necessitatibus facilis sit maiores dolores ratione eveniet minima molestiae obcaecati ea suscipit voluptatibus quia officia, accusantium quidem. Cumque quasi ad dicta consectetur incidunt sit fugit possimus odit quibusdam. Deserunt, culpa nam expedita, id fugiat neque natus delectus sit illo suscipit, accusantium facilis reprehenderit optio error voluptatibus illum temporibus necessitatibus nihil reiciendis at autem molestias eius maiores debitis! Sint inventore autem nobis amet. Soluta provident repellendus repellat modi odio, eum quo adipisci dignissimos quidem. Maxime, eveniet illo accusantium quidem fugiat magni soluta vitae officiis optio. Fugit culpa quos, nobis velit nemo corporis laborum quod amet esse necessitatibus eligendi adipisci maiores. Iste adipisci ea porro. Illo obcaecati deleniti dicta natus necessitatibus eum quasi molestiae sapiente sunt accusamus quos alias laborum repellat cumque aliquam aliquid nostrum earum, quam tempora ab exercitationem. Velit, odio! At sapiente debitis eos deleniti ipsam natus necessitatibus maiores sit laudantium ducimus voluptatibus suscipit ab maxime deserunt libero placeat, excepturi quis eaque nostrum voluptas quam eligendi mollitia. Nesciunt voluptatem repellendus ratione eaque commodi. Maiores ipsum dignissimos provident architecto reiciendis possimus, quaerat, magnam in molestiae totam soluta harum dicta nisi voluptatem. Culpa officia unde in commodi natus minima dolorem, aliquam distinctio adipisci temporibus velit perspiciatis eum officiis aut doloremque eos vel excepturi deserunt, eligendi nostrum modi. Amet doloremque quae nisi unde pariatur asperiores quam velit vitae inventore voluptate obcaecati, illum fugiat soluta accusantium sit maxime mollitia facilis qui in laudantium, ut est. Facilis obcaecati quae veniam repellendus, placeat quod libero voluptatibus est optio doloremque soluta nam quisquam, vitae pariatur quas ullam veritatis nostrum voluptate nulla id. Eligendi accusamus incidunt perferendis! Minima fugit quia, dolor eum quod qui vitae cumque, quas nam in eligendi iure maxime illum optio delectus odio excepturi? Quis eos a, sunt velit iste consequuntur in accusamus et voluptatem laudantium, temporibus eaque omnis alias nobis molestias veritatis illo, magni est. Quo officia veritatis quisquam magni, dolore quos fugiat deserunt? Iure a necessitatibus saepe molestiae itaque autem ea veniam non dolorem nihil, aliquam repudiandae labore veritatis, est aliquid cum nulla similique ipsum. Exercitationem, modi? Placeat voluptatem a aut itaque voluptas, aspernatur fugiat doloribus harum rem suscipit cupiditate mollitia impedit amet alias odio assumenda earum dolorem consequatur provident quam, delectus id labore. Quisquam architecto odio laudantium soluta distinctio aspernatur odit atque, deleniti adipisci nostrum eius veniam repudiandae alias quis. Voluptatum quos, ea veniam possimus, doloremque nemo expedita porro, quam fuga quibusdam tempora modi velit laboriosam a sed nostrum debitis mollitia. Placeat voluptatibus cupiditate accusantium reprehenderit exercitationem id, dicta voluptatum iure illo. Blanditiis repellendus obcaecati odit animi tempore.jik adipisicing elit. Eum beatae tempore reiciendis tempora possimus in aperiam quae soluta quasi voluptatum sapiente consequuntur, ullam nesciunt, dolorem cumque repellat veritatis, impedit aliquid! UI for backend development using Tailwind",
    links: {
      site: "#",
      github: "#",
    },
    icon: {
      deactive: <PiNumberCircleFourLight />,
      active: <PiNumberCircleFourFill />,
    },
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <>
      <div
        className="snap-start relative h-screen flex justify-center items-center "
        id="projects"
      >
        <div className="absolute top-30">
          <h1 className="text-text font-semibold cursor-pointer text-2xl">
            Projects
          </h1>
        </div>
        <div className="h-full w-full md:w-[65vw] md:h-[65vh] md:mt-0 flex flex-col md:flex-row justify-center items-center content-center md:pt-0 pt-5 px-5 drop-shadow-accent">
          <div className="flex flex-col md:gap-4 md:flex-row justify-center">
            <div className="w-full md:w-150 h-70 md:h-150 p-1 ">
              <img
                src={projects[currentProject].img}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover mb-4 p-2 rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-text font-semibold text-2xl mt-5">
                  {projects[currentProject].title}
                </h3>
                <p className="text-text text-justify text-pretty my-4 text-xl md:max-h-65 max-h-25 md:w-[700px] overflow-y-scroll">
                  {projects[currentProject].description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={projects[currentProject].links.site}
                    className="px-4 py-2 bg-background text-accent border font-extralight text-xl border-accent rounded-3xl hover:bg-accent hover:text-background transition duration-300 w-full md:w-auto text-center"
                  >
                    View Doc
                  </a>
                </div>
              </div>
              <ul className="ml-6 flex flex-row gap-6 justify-center mt-4 md:gap-1 self-center">
                {projects.map((project, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`text-4xl cursor-pointer ${currentProject === index ? "text-accent" : "text-text"}`}
                  >
                    {currentProject === index
                      ? project.icon.active
                      : project.icon.deactive}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
