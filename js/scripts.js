// GET THE REFERENCES
const container = document.getElementById('main-content');
const links = document.querySelectorAll('.nav-links a');
let url = 'partials/home.html'; // Default page

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
    /*
    IMPORTANT NOTES:
    loadContent RUNS EVERY TIME A LINK IS CLICKED.
    loadContent REQUIRES THE INPUT. THIS INPUT IS
    THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
    EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
    THE UPDATED PATH TO THE REQUESTED CONTENT.
    */
    
    // Show loading indicator
    container.innerHTML = '<div class="loading">Loading content...</div>';
    
    // RUN THE fetch(urlFeed).then().then().catch()
    fetch(urlFeed)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
            
            // Update active navigation
            links.forEach(link => link.classList.remove('active'));
            if (urlFeed.includes('home.html')) {
                document.getElementById('home-link').classList.add('active');
            } else if (urlFeed.includes('portfolio.html')) {
                document.getElementById('portfolio-link').classList.add('active');
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
            
            // Fallback content if fetch fails
            if (urlFeed.includes('home.html')) {
                container.innerHTML = `
                    <article class="article">
                        <h2>The Value of Money</h2>
                        <div class="article-content">
                            <figure class="article-image">
                                <img src="img/money-concept.jpg" alt="Money concept illustration" />
                                <figcaption>The evolving role of money in modern society</figcaption>
                            </figure>
                            <div class="article-text">
                                <p>Money has evolved from simple bartering systems to complex digital currencies, fundamentally reshaping how we perceive value and exchange. In today's interconnected world, the traditional understanding of money as merely a medium of exchange has expanded to encompass store of value, unit of account, and even social status symbol.</p>
                                <p>The rise of cryptocurrency and digital payments has challenged conventional monetary systems, forcing us to reconsider what gives money its value. While some argue that fiat currencies backed by government trust remain supreme, others point to the decentralized nature of digital assets as the future of financial transactions.</p>
                                <p>Understanding money's true value requires examining not just its purchasing power, but its role in enabling human cooperation, innovation, and social progress. As we move toward an increasingly digital economy, the question becomes: what will define value in the next generation?</p>
                            </div>
                        </div>
                    </article>

                    <article class="article">
                        <h2>GMO Food: Science or Concern?</h2>
                        <div class="article-content">
                            <figure class="article-image">
                                <img src="img/gmo-food.jpg" alt="GMO food illustration" />
                                <figcaption>Genetically modified organisms in agriculture</figcaption>
                            </figure>
                            <div class="article-text">
                                <p>Genetically Modified Organisms (GMOs) represent one of the most controversial topics in modern agriculture and food production. While proponents argue that GMO technology can help address world hunger and reduce pesticide use, critics raise concerns about long-term health effects and environmental impact.</p>
                                <p>Scientific consensus generally supports the safety of approved GMO foods for human consumption. Major health organizations, including the WHO and FDA, have found no evidence that GMO foods pose greater risks than conventional foods. However, the debate continues over labeling requirements and consumer choice.</p>
                                <p>The environmental implications of GMO crops are complex, with benefits including reduced pesticide use and increased crop yields, but potential risks such as the development of resistant pests and impact on non-target species. As agricultural technology advances, finding the balance between innovation and precaution remains crucial.</p>
                            </div>
                        </div>
                    </article>

                    <article class="article">
                        <h2>The World in 2100</h2>
                        <div class="article-content">
                            <figure class="article-image">
                                <img src="img/future-world.jpg" alt="Future world visualization" />
                                <figcaption>Envisioning our planet's future</figcaption>
                            </figure>
                            <div class="article-text">
                                <p>By 2100, our world will likely be transformed by climate change, technological advancement, and demographic shifts. Current projections suggest global temperatures could rise by 1.5 to 4 degrees Celsius, fundamentally altering weather patterns, sea levels, and agricultural zones worldwide.</p>
                                <p>Technological integration will be seamless, with artificial intelligence, renewable energy, and biotechnology reshaping every aspect of human life. Cities may be vertical, transportation autonomous and electric, and work-life balance redefined by automation and universal basic income discussions.</p>
                                <p>The global population, expected to peak around 10-11 billion, will face unprecedented challenges in resource management, urban planning, and social equity. How we address climate change, technological governance, and international cooperation today will determine whether 2100 represents humanity's greatest achievement or its greatest challenge.</p>
                            </div>
                        </div>
                    </article>
                `;
            } else if (urlFeed.includes('portfolio.html')) {
                container.innerHTML = `
                    <div class="portfolio-section">
                        <h2>Portfolio</h2>
                        <div class="portfolio-grid">
                            <div class="portfolio-card">
                                <img src="img/web-design-project.jpg" alt="Web Design Project" />
                                <h3>Modern E-commerce Site</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/mobile-app-project.jpg" alt="Mobile App Project" />
                                <h3>Health Tracking App</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/branding-project.jpg" alt="Branding Project" />
                                <h3>Corporate Identity</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/ui-ux-project.jpg" alt="UI/UX Project" />
                                <h3>Dashboard Interface</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/print-design-project.jpg" alt="Print Design Project" />
                                <h3>Marketing Materials</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/animation-project.jpg" alt="Animation Project" />
                                <h3>Motion Graphics</h3>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            // Update active navigation
            links.forEach(link => link.classList.remove('active'));
            if (urlFeed.includes('home.html')) {
                document.getElementById('home-link').classList.add('active');
            } else if (urlFeed.includes('portfolio.html')) {
                document.getElementById('portfolio-link').classList.add('active');
            }
        });
}; // CLOSE YOUR FUNCTION loadContent HERE

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    event.preventDefault();
    
    // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    const href = event.target.getAttribute('href');
    
    // CALL THE FUNCTION loadContent PROVIDING THE href
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
    // OF loadContent FUNCTION.
    loadContent(href);
}; // CLOSE YOUR FUNCTION selectContent HERE

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
links.forEach(link => {
    link.addEventListener('click', selectContent);
});