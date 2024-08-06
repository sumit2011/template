fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate header
    document.getElementById('title').textContent = data.header.title;
    document.getElementById('logo').src = data.header.logo;

    // Populate navigation
    const navLinks = data.navigation.links.map(link => `<a href="${link.url}">${link.label}</a>`);
    document.getElementById('navigation').innerHTML = navLinks.join(' | ');

    // Populate projects
    const projects = data.projects.map(project => `
      <div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <img src="${project.image}" alt="${project.title}">
        <a href="${project.url}">View Project</a>
      </div>
    `);
    document.getElementById('projects').innerHTML = projects.join('');

    // Populate about
    document.getElementById('about').innerHTML = ``;

    // Populate contact
    document.getElementById('contact').innerHTML = `<p>Email: ${data.contact.email}</p><p>Phone: ${data.contact.phone}</p>`;
  })
  .catch(error => console.error('Error fetching data:', error));
