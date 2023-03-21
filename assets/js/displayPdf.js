// Define a function that displays a PDF document
function displayPdf(pdfUrl) {
	// Get the canvas element
	var canvas = document.getElementById('pdfCanvas');

	// Get the buttons for navigating through the pages
	var prevButton = document.getElementById('prevPage');
	var nextButton = document.getElementById('nextPage');

	// Get the element for displaying the current page number
	var currentPage = document.getElementById('currentPage');
	// Get the element for displaying the total number of pages
	var totalPages = document.getElementById('totalPages');

	// Declare a variable to hold the current page number
	var pageNumber = 1;

	// Load the PDF file using the pdf.js library
	pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
		// Display the total number of pages
		totalPages.textContent = pdf.numPages;

		// Display the first page of the PDF file
		renderPage(pdf, pageNumber);

		// Add event listeners to the buttons
		prevButton.addEventListener('click', function () {
			if (pageNumber > 1) {
				pageNumber--;
				renderPage(pdf, pageNumber);
				currentPage.textContent = pageNumber;
			}
		});

		nextButton.addEventListener('click', function () {
			if (pageNumber < pdf.numPages) {
				pageNumber++;
				renderPage(pdf, pageNumber);
				currentPage.textContent = pageNumber;
			}
		});
	});

	// Function to render a PDF page
	function renderPage(pdf, pageNum) {
		// Get the PDF page to be rendered
		pdf.getPage(pageNum).then(function (page) {
			// Set the scale of the page to fit the canvas
			var viewport = page.getViewport({ scale: 1.5 });
			canvas.width = viewport.width;
			canvas.height = viewport.height;

			// Render the PDF page on the canvas
			var ctx = canvas.getContext('2d');
			var renderContext = {
				canvasContext: ctx,
				viewport: viewport,
			};
			page.render(renderContext);
		});
	}
}
