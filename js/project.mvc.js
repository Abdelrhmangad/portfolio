// We gonna display projects from mvc

let model = {
   projects: [
      {
         name: "Clinc",
         url: "https://abdelrhmangad.github.io/Clinc/#",
         img: "images/med1.png"
      },
      {
         name: "Bino",
         url: "https://abdelrhmangad.github.io/bino-inc/",
         img: "images/bin2.png"
      },
      {
         name: "Axit",
         url: "https://abdelrhmangad.github.io/AXIT/",
         img: "images/ax1.png"
      },
      {
         name: "Bino.INC",
         url: "https://abdelrhmangad.github.io/Bino/",
         img: "images/bin1.png"
      }
   ]
};

let controller = {
   init: function () {
      viewProjects.init();
   },
   projectsAtModel: function () {
      return model.projects
   }
};

let viewProjects = {
   init: function () {
      this.render();
   },
   render: function () {
      let projectsSection = document.getElementById('projects');
      controller.projectsAtModel().map((project) => {
         let eachProject = `
            <div class="project">
               <div class="project-img">
                  <div class="demo-div">
                     <a href="${project.url}" target="_blank">View Demo</a> 
                  </div>
                  <img src="${project.img}" alt="">
               </div>
               <p class="project-name">
                  ${project.name}
               </p>
            </div>
         `

         projectsSection.innerHTML += eachProject;
      })
      console.log(controller.projectsAtModel());
   }
}

controller.init();