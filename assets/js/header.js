var baseUrl = window.location.origin;

function insertNavbars() {
	// Fetch the JSON data
	if (baseUrl.includes('belinemarthelot.github.io')) {
		baseUrl += '/portfolio';
	}
	console.log('Base url: ', baseUrl);
	fetch(baseUrl + '/assets/data/nav.json')
		.then((response) => response.json())
		.then((data) => {
			// Get the navbar element
			const elementsMainNavbar = document.getElementById(
				'elements-main-navbar'
			);
			const headerMainNavbar =
				document.getElementById('header-main-navbar');
			const elementsMenuNavbar = document.getElementById(
				'elements-menu-navbar'
			);

			// Create the navbar links
			const elementsMainNavbarlinks = data.links
				.slice(1)
				.map(
					(link) => `
                        <li>
                            <a href="${baseUrl}${link.url}">${link.title}</a>
                        </li>
                    `
				)
				.join('');

			const headerMainNavbarlink = `
                <a href="${baseUrl}${data.links[0].url}">${data.links[0].title}</a>
            `;

			// Create the navbar links
			const elementsMenuNavbarlinks = data.links
				.slice(1)
				.map(
					(link) => `
                    <li>
                    <a href="${baseUrl}${link.url}">
                        <h3>${link.title}</h3>
                        <p>${link.description}</p>
                    </a>
                    </li>
                `
				)
				.join('');

			// Insert the navbar HTML into the navbar element
			headerMainNavbar.innerHTML = `
               <ul>${headerMainNavbarlink}</ul>
              `;
			elementsMainNavbar.innerHTML = `
            <ul>${elementsMainNavbarlinks}</ul>
           `;
			elementsMenuNavbar.innerHTML = `
           <ul class="links">${elementsMenuNavbarlinks}</ul>
          `;
		});
}

window.onload = insertNavbars;
