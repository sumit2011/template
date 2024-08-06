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
    document.getElementById('about').innerHTML = `<div className="about_contents">
                        <section className="imageSection">
                            <img src={about.image} alt="image" />
                        </section>

                        <section className="infoSection">
                            {/* <h1>About Me</h1> */}
                            <h2>${about.title}</h2>
                            <p>${about.description}</p>
                            <p>${about.subtitle}</p>
                            <div className="personalInfo">
                                <div><span>Name:</span><span>${about.name}</span></div>
                                <div><span>Age:</span><span>${about.age}</span></div>
                                <div><span>Email:</span><span>${about.email}</span></div>
                                <div><span>Address:</span><span>${about.address}</span></div>

                            </div>
                            <div className="button">
                                <button>Download CV</button>
                            </div>
                        </section>
                    </div>`;

    // Populate contact
    document.getElementById('contact').innerHTML = `<p>Email: ${data.contact.email}</p><p>Phone: ${data.contact.phone}</p>`;
  })
  .catch(error => console.error('Error fetching data:', error));
