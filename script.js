/* Add to existing style.css */

/* ... (all your previous CSS) ... */

/* Home Page Hero CTA Group */
.hero-cta-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-unit);
    margin-top: calc(var(--spacing-unit) * 1.5);
}
.hero-cta-button-alt { /* Style for the secondary AI button */
    background-color: transparent;
    border: 2px solid var(--accent-red);
    color: var(--accent-red);
}
.hero-cta-button-alt:hover {
    background-color: var(--accent-red);
    color: var(--text-primary);
}


/* Home Page Quick Links Cards Section */
#home-quick-links-section {
    background-color: var(--black-secondary); /* Or choose a different bg */
}
.home-cards-container {
    display: grid;
    grid-template-columns: 1fr; /* Mobile: 1 column */
    gap: var(--spacing-unit);
    margin-top: calc(var(--spacing-unit) * 1.5);
}
.home-feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: var(--black-card);
    padding: calc(var(--spacing-unit) * 1.5);
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-primary);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid var(--accent-red); /* Consistent with mfg cards */
}
.home-feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
.home-card-icon {
    margin-bottom: var(--spacing-unit);
}
.home-card-icon svg {
    width: 40px;
    height: 40px;
    fill: var(--accent-red);
}
.home-feature-card h3 {
    font-size: calc(var(--spacing-unit) * 1.1);
    font-weight: 600;
    margin-bottom: calc(var(--spacing-unit) * 0.3);
}
.home-feature-card p {
    font-size: calc(var(--spacing-unit) * 0.85);
    color: var(--text-secondary);
    line-height: 1.4;
}

/* Desktop Overrides for Home Page Cards */
@media (min-width: 768px) {
    .hero-cta-group {
        flex-direction: row; /* Buttons side-by-side on desktop */
        justify-content: center;
    }
    .hero-cta-button + .hero-cta-button { /* Add margin between buttons */
        margin-left: var(--spacing-unit);
    }

    .home-cards-container {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Adjust minmax as needed */
        gap: calc(var(--spacing-unit) * 1.5);
    }
}

/* Adjust Mobile Nav for 5 items if needed */
.mobile-bottom-nav a {
    font-size: 0.65rem; /* May need to be smaller for 5 items */
    padding: 0.6rem 0.2rem; /* Adjust padding */
}
.mobile-bottom-nav a svg {
    width: 20px;
    height: 20px;
}
