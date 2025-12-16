// Slideshow
    let slideIndex = 0;
    let autoSlide;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
        
        autoSlide = setTimeout(showSlides, 4000);
    }

    function currentSlide(n) {
        clearTimeout(autoSlide);
        slideIndex = n;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        
        slides[slideIndex].style.display = "block";
        dots[slideIndex].classList.add("active");
        
        slideIndex++;
        autoSlide = setTimeout(showSlides, 4000);
    }

    showSlides();

    // Login Form Functionality
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageEl = document.getElementById('loginMessage');
        
        // Hardcoded credentials
        const validUsername = 'admin';
        const validPassword = 'password123';
        
        // Check credentials
        if (username === validUsername && password === validPassword) {
            messageEl.style.color = 'green';
            messageEl.textContent = '✓ Login successful! Welcome, ' + username + '!';
            messageEl.style.display = 'block';
            
            // Clear form after 2 seconds
            setTimeout(function() {
                document.getElementById('loginForm').reset();
                messageEl.style.display = 'none';
            }, 2000);
        } else {
            messageEl.style.color = 'red';
            messageEl.textContent = '✗ Invalid username or password';
            messageEl.style.display = 'block';
            
            // Hide error message after 3 seconds
            setTimeout(function() {
                messageEl.style.display = 'none';
            }, 3000);
        }
    });

    // Progress Bar Animation with Intersection Observer
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                
                let width = 0;
                const interval = setInterval(() => {
                    if (width >= progress) {
                        clearInterval(interval);
                    } else {
                        width++;
                        bar.style.width = width + "%";
                        bar.innerHTML = width + "%";
                    }
                }, 20);
                
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => observer.observe(bar));

    // Collapsible Sections
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // Smooth scroll with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });