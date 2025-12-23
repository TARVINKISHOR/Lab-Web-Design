// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 70;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formResponse = document.getElementById('formResponse');
            formResponse.className = 'alert alert-success mt-3';
            formResponse.textContent = 'Thank you for your message! We will get back to you within 24 hours.';
            formResponse.style.display = 'block';
            
            this.reset();
            
            setTimeout(() => {
                formResponse.style.display = 'none';
            }, 5000);
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            } else {
                navbar.style.backgroundColor = 'var(--primary-color)';
            }
        });
