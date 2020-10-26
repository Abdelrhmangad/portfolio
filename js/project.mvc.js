// We gonna display projects from mvc

let model = {
   projects: [
      {
         name: "Crown Shop",
         url: "https://crownclothesreactapp.herokuapp.com/",
         img: "images/crown-commerce.png"
      },
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
         name: "Online Grocery",
         url: "https://gad-ecommerce-app.herokuapp.com/",
         img: "images/gad-ecommerce.png"
      },
      {
         name: "Monster Rolodex",
         url: "https://abdelrhmangad.github.io/Monster-Rolodex_ReactProject/",
         img: "images/monster-rolodex.png"
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
                  <img src="${project.img}" alt=" Sorry Image Didn't load well">
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