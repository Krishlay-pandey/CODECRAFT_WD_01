
        document.addEventListener('DOMContentLoaded', function() {
            const nav = document.querySelector('nav');
            const navLinks = document.querySelectorAll('.nav-link');
            const contentArea = document.getElementById('content-area');
            
            // Content for each menu item
            const contentMap = {
                'Home': '<h1>Welcome Home</h1><p>This is the homepage with latest news and updates.</p>',
                'Services': '<h1>Our Services</h1><ul><li>Web Design</li><li>Development</li></ul>',
                'About': '<h1>About Us</h1><p>We are a creative team passionate about web development.</p>',
                'Portfolio': '<h1>Our Work</h1><p>Check out our latest projects in the portfolio.</p>',
                'Contact': '<h1>Get in Touch</h1><p>Email: contact@example.com<br>Phone: 91-1234567890</p>'
            };
            
            // Scroll event listener
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });

            // Enhanced hover and click effects
            navLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });

                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageName = this.textContent;
                    contentArea.innerHTML = contentMap[pageName];
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
        });