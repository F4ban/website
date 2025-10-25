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
          <div class="p-3 float-md-end d-block mx-auto" style="width: 190px">
            <img class="img-fluid rounded-4" src="../assets/me.jpg" alt="Fabian's Avatar" />
          </div>
          <p>Hi! I'm Fabian.</p>
          <p>
            I am an IT Specialist in Systems Administration, currently employed at HalloWelt! GmbH.
            I'm passionate about automating processes, crafting innovative solutions, and staying
            up-to-date with the latest technologies. My expertise lies in network and server
            administration ensuring that all IT systems function smoothly and efficiently. I enjoy
            exploring new ideas and tinkering with self-hosted home infrastructure. My
            <router-link to="/projects">project</router-link> page showcases some of my most notable
            works.
          </p>
          <p>
            At HalloWelt!, I administrate and deploy BlueSpice, a open source wiki software based on
            MediaWiki. It is especially developed for businesses as an enterprise wiki and used in
            over 150 countries.
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
