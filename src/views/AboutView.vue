<template>
  <section class="pt-page">
    <div class="container">
      <div class="row mb-4">
        <div class="col">
          <h1>About</h1>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-auto me-auto text-start">
          <div class="p-3 float-md-end d-block mx-auto" style="width: 250px">
            <img
              class="img-fluid rounded-4"
              src="../assets/me.jpg"
              alt="Fabian's Avatar"
            />
          </div>
          <p>Hi! I'm Fabian.</p>
          <p>
            I’m an IT Specialist focused on Systems Administration and DevOps,
            currently working at HalloWelt! GmbH. I have a strong passion for
            optimizing processes through automation and building creative,
            tech-driven solutions. When I’m not tackling challenges at work, I
            love experimenting with self-hosted infrastructure and diving into
            emerging technologies. You can explore some of my home
            <router-link to="/projects">projects</router-link>.
          </p>
          <p>
            At HalloWelt!, I administrate and deploy BlueSpice, a open source
            wiki software built on MediaWiki. Tailored for enterprise use,
            BlueSpice serves worldwide as a robust knowledge management
            solution, and is utilized in over 150 countries.
          </p>
          <p>
            <router-link to="/connect">Feel free to reach out!</router-link>
          </p>
        </div>
        <div class="text-center my-4">
          <img
            class="img-fluid"
            src="https://api.markl.dev/?username=F4ban&show_icons=true&theme=transparent&rank_icon=percentile"
            alt="GitHub Stats"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
