document.addEventListener('DOMContentLoaded', () => {
    const joinBtn = document.getElementById('join-btn');
    const emailStep = document.getElementById('email-step');
    const downloadStep = document.getElementById('download-step');

    // 1. Install Button Click -> Show Success/Download
    // 1. Install Button Click -> Show Success/Download & Reveal Guide
    joinBtn.addEventListener('click', () => {
        // Hide the install button area
        emailStep.style.display = 'none';

        // Show the "Added! Install now" section
        downloadStep.classList.remove('hidden');
        downloadStep.style.opacity = '0';
        downloadStep.style.display = 'block';

        // Reveal the Guide Section
        const guideSection = document.getElementById('guide-section');
        if (guideSection) {
            guideSection.classList.remove('hidden');
            // Scroll to the guide section immediately so user sees it
            guideSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Sequential Reveal: One step every 3 seconds, First one instant (0ms)
            const steps = document.querySelectorAll('.guide-step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('visible');
                    // Scroll this step into view for mobile users
                    step.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // After the last step, show Button AND Auto Redirect
                    if (index === steps.length - 1) {
                        setTimeout(() => {
                            const actionContainer = document.getElementById('join-group-container');
                            const joinBtnLink = document.querySelector('.join-group-btn');

                            // Show button (fallback)
                            if (actionContainer) {
                                actionContainer.classList.remove('hidden');
                                actionContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }

                            // Auto Redirect: Open Group in New Tab, then redirect main page to Play Store after 15s
                            if (joinBtnLink && joinBtnLink.href) {
                                // 1. Open Google Group in new tab
                                window.open(joinBtnLink.href, '_blank');

                                // 2. Wait 15 seconds, then redirect THIS page to Play Store
                                setTimeout(() => {
                                    window.location.href = "https://play.google.com/store/apps/details?id=rajibul.fugofresh.tracker";
                                }, 15000);
                            }
                        }, 3000); // 3 seconds after last step appears
                    }

                }, index * 3000); // 0, 3000, 6000, 9000
            });
        }

        // Trigger reflow for fade-in
        setTimeout(() => {
            downloadStep.style.transition = 'opacity 0.5s';
            downloadStep.style.opacity = '1';
        }, 50);
    });

    // Close modal logic removed


    // Screenshots Scroll functionality
    const scrollContainer = document.getElementById('screenshots-scroll');
    const prevBtn = document.getElementById('scroll-left');
    const nextBtn = document.getElementById('scroll-right');

    if (scrollContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

});
