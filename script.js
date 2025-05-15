// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    // IMPORTANT: YOU NEED TO THOROUGHLY REVIEW AND COMPLETE THIS DATA
    const fitmentData = {
        chevrolet: {
            name: "Chevrolet",
            searchTerms: "chevrolet chevy gm general motors",
            description: "Silverado, Tahoe, Equinox, etc.",
            tag: "US Domestic",
            vehicles: [
                { vehicle: "Silverado 1500", years: "2019-Present", lugPattern: "6x139.7", cb: "78.1mm", thread: "M14x1.5", offset: "+19 to +31", notes: "Verify specific year/trim." },
                { vehicle: "Tahoe", years: "2021-Present", lugPattern: "6x139.7", cb: "78.1mm", thread: "M14x1.5", offset: "+20 to +30", notes: "" },
                { vehicle: "Equinox", years: "2018-Present", lugPattern: "5x115", cb: "70.3mm", thread: "M12x1.5", offset: "+40 to +50", notes: "Older gens vary (5x120, 5x105)" },
                { vehicle: "Suburban", years: "2021-Present", lugPattern: "6x139.7", cb: "78.1mm", thread: "M14x1.5", offset: "+20 to +30", notes: "" },
                { vehicle: "Colorado", years: "2015-Present", lugPattern: "6x120", cb: "66.9mm", thread: "M12x1.5", offset: "+28 to +33", notes: "" },
                { vehicle: "Traverse", years: "2018-Present", lugPattern: "6x120", cb: "74.1mm", thread: "M14x1.5", offset: "+45 to +52", notes: "Older gen was 6x132" },
                { vehicle: "Camaro", years: "2016-Present", lugPattern: "5x120", cb: "66.9mm", thread: "M14x1.5", offset: "Varies widely", notes: "Check ZL1/SS specific." },
                { vehicle: "Malibu", years: "2016-Present", lugPattern: "5x115", cb: "70.3mm", thread: "M12x1.5", offset: "+40 to +50", notes: "" },
                { vehicle: "Blazer (New)", years: "2019-Present", lugPattern: "6x120", cb: "66.9mm", thread: "M14x1.5", offset: "+40 to +50", notes: "" }, // Verify CB for Blazer
                { vehicle: "Trailblazer (New)", years: "2021-Present", lugPattern: "5x115", cb: "70.3mm", thread: "M12x1.5", offset: "+40 to +45", notes: "" },
            ]
        },
        ford: {
            name: "Ford",
            searchTerms: "ford",
            description: "F-150, Explorer, Mustang, etc.",
            tag: "US Domestic",
            vehicles: [
                { vehicle: "F-150", years: "2015-Present", lugPattern: "6x135", cb: "87.1mm", thread: "M14x1.5", offset: "+30 to +44", notes: "Raptor different" },
                { vehicle: "Explorer", years: "2020-Present", lugPattern: "5x114.3", cb: "67.1mm", thread: "M14x1.5", offset: "+40 to +50", notes: "Older can be 5x114.3 w/ 70.5mm CB" },
                { vehicle: "Mustang", years: "2015-Present", lugPattern: "5x114.3", cb: "70.5mm", thread: "M14x1.5", offset: "Varies (GT: +35 to +50)", notes: "Check specific model/trim" },
                { vehicle: "Expedition", years: "2018-Present", lugPattern: "6x135", cb: "87.1mm", thread: "M14x1.5", offset: "+30 to +44", notes: "" },
                { vehicle: "Edge", years: "2015-Present", lugPattern: "5x108", cb: "63.4mm", thread: "M12x1.5", offset: "+45 to +55", notes: "" },
                { vehicle: "Ranger", years: "2019-Present", lugPattern: "6x139.7", cb: "93.1mm", thread: "M12x1.5", offset: "+50 to +55", notes: "" },
                { vehicle: "Escape", years: "2020-Present", lugPattern: "5x108", cb: "63.4mm", thread: "M12x1.5", offset: "+45 to +52", notes: "" },
                { vehicle: "Bronco", years: "2021-Present", lugPattern: "6x139.7", cb: "93.1mm", thread: "M12x1.5", offset: "Varies widely", notes: "Bronco Sport is 5x108" },
                { vehicle: "Fusion", years: "2013-2020", lugPattern: "5x108", cb: "63.4mm", thread: "M12x1.5", offset: "+45 to +55", notes: "Discontinued" },
                { vehicle: "Maverick", years: "2022-Present", lugPattern: "5x108", cb: "63.4mm", thread: "M12x1.5", offset: "+35 to +45", notes: "" },
            ]
        },
        dodge_ram: {
            name: "Dodge/RAM",
            searchTerms: "dodge ram chrysler jeep mopar",
            description: "Ram 1500, Charger, Durango, etc.",
            tag: "US Domestic",
            vehicles: [
                { vehicle: "Ram 1500", years: "2019-Present", lugPattern: "6x139.7", cb: "77.8mm", thread: "M14x1.5", offset: "+19", notes: "Older/Classic 5x139.7" },
                { vehicle: "Charger", years: "2011-Present", lugPattern: "5x115", cb: "71.5mm", thread: "M14x1.5", offset: "Varies (RWD: +15 to +25)", notes: "AWD different" },
                { vehicle: "Durango", years: "2011-Present", lugPattern: "5x127", cb: "71.5mm", thread: "M14x1.5", offset: "+30 to +50", notes: "" },
                { vehicle: "Challenger", years: "2008-Present", lugPattern: "5x115", cb: "71.5mm", thread: "M14x1.5", offset: "Varies (RWD: +15 to +25)", notes: "" },
                { vehicle: "Grand Caravan", years: "2008-2020", lugPattern: "5x127", cb: "71.5mm", thread: "M12x1.5", offset: "+40", notes: "Discontinued" },
                { vehicle: "Ram 2500/3500", years: "2019-Present", lugPattern: "8x165.1", cb: "121.3mm", thread: "M14x1.5", offset: "Varies", notes: "Older years may use 9/16 studs" },
                { vehicle: "Journey", years: "2009-2020", lugPattern: "5x127", cb: "71.5mm", thread: "M12x1.5", offset: "+40", notes: "Discontinued" },
                { vehicle: "Jeep Wrangler (JL/JT)", years: "2018-Present", lugPattern: "5x127", cb: "71.5mm", thread: "M14x1.5", offset: "+10 to +45", notes: "" },
                { vehicle: "Jeep Grand Cherokee (WL)", years: "2022-Present", lugPattern: "5x127", cb: "71.5mm", thread: "M14x1.5", offset: "+40 to +55", notes: "Older WK2 was 5x127, earlier 5x114.3" },
                { vehicle: "Ram ProMaster City", years: "2015-2022", lugPattern: "5x98", cb: "58.1mm", thread: "M12x1.25", offset: "+35 to +40", notes: "Discontinued" },
            ]
        },
        nissan_infiniti: {
            name: "Nissan / Infiniti",
            searchTerms: "nissan infiniti",
            description: "Altima, Titan, Q50, QX80, etc.",
            tag: "Japanese Import",
            vehicles: [
                { vehicle: "Altima", years: "Recent", lugPattern: "5x114.3", cb: "66.1mm", thread: "M12x1.25", offset: "+40 to +50", notes: "" },
                { vehicle: "Titan", years: "Recent", lugPattern: "6x139.7", cb: "77.8mm", thread: "M14x1.5", offset: "+18 to +25", notes: "Titan XD has different specs" },
                { vehicle: "Infiniti Q50/Q60", years: "Recent", lugPattern: "5x114.3", cb: "66.1mm", thread: "M12x1.25", offset: "+40 to +50", notes: "" },
                { vehicle: "Infiniti QX80", years: "Recent", lugPattern: "6x139.7", cb: "77.8mm", thread: "M14x1.5", offset: "+20 to +30", notes: "" },
                { vehicle: "Frontier", years: "2022-Present", lugPattern: "6x114.3", cb: "66.1mm", thread: "M12x1.25", offset: "+30 to +45", notes: "Older gens vary" },
                { vehicle: "Pathfinder", years: "2022-Present", lugPattern: "5x114.3", cb: "66.1mm", thread: "M14x1.5", offset: "+40 to +50", notes: "Older gens were 6x114.3" },
                { vehicle: "Maxima", years: "Recent", lugPattern: "5x114.3", cb: "66.1mm", thread: "M12x1.25", offset: "+45 to +55", notes: "" },
                { vehicle: "Rogue", years: "Recent", lugPattern: "5x114.3", cb: "66.1mm", thread: "M12x1.25", offset: "+35 to +45", notes: "" },
                { vehicle: "Murano", years: "Recent", lugPattern: "5x114.3", cb: "66.1mm", thread: "M12x1.25", offset: "+40 to +50", notes: "" },
                { vehicle: "Armada", years: "Recent", lugPattern: "6x139.7", cb: "77.8mm", thread: "M14x1.5", offset: "+20 to +30", notes: "" },
            ]
        },
        toyota_lexus: {
            name: "Toyota / Lexus",
            searchTerms: "toyota lexus scion",
            description: "Tacoma, Camry, RX, IS, etc.",
            tag: "Japanese Import",
            vehicles: [
                { vehicle: "Tacoma", years: "Recent", lugPattern: "6x139.7", cb: "106.1mm", thread: "M12x1.5", offset: "+5 to +30", notes: "" },
                { vehicle: "Camry", years: "Recent", lugPattern: "5x114.3", cb: "60.1mm", thread: "M12x1.5", offset: "+35 to +45", notes: "" },
                { vehicle: "Lexus RX", years: "Recent", lugPattern: "5x114.3", cb: "60.1mm", thread: "M12x1.5", offset: "+30 to +40", notes: "" },
                { vehicle: "Lexus IS", years: "Recent", lugPattern: "5x114.3", cb: "60.1mm", thread: "M12x1.5", offset: "+35 to +45", notes: "" },
                { vehicle: "4Runner", years: "Recent", lugPattern: "6x139.7", cb: "106.1mm", thread: "M12x1.5", offset: "+5 to +25", notes: "" },
                { vehicle: "Highlander", years: "Recent", lugPattern: "5x114.3", cb: "60.1mm", thread: "M12x1.5", offset: "+30 to +40", notes: "" },
                { vehicle: "Tundra", years: "2022-Present", lugPattern: "6x139.7", cb: "95.1mm", thread: "M14x1.5", offset: "+18 to +60", notes: "Older was 5x150" },
                { vehicle: "Sequoia", years: "2023-Present", lugPattern: "6x139.7", cb: "95.1mm", thread: "M14x1.5", offset: "+18 to +60", notes: "Older was 5x150" },
                { vehicle: "RAV4", years: "Recent", lugPattern: "5x114.3", cb: "60.1mm", thread: "M12x1.5", offset: "+30 to +40", notes: "" },
                { vehicle: "Lexus GX", years: "2024-Present", lugPattern: "6x139.7", cb: "95.1mm", thread: "M14x1.5", offset: "+15 to +25", notes: "Older was 106.1mm CB" },
            ]
        },
        honda_acura: {
            name: "Honda / Acura",
            searchTerms: "honda acura",
            description: "Civic, Accord, CR-V, MDX, TLX, etc.",
            tag: "Japanese Import",
            vehicles: [
                { vehicle: "Civic (Non Type-R)", years: "Recent", lugPattern: "5x114.3", cb: "64.1mm", thread: "M12x1.5", offset: "+40 to +50", notes: "Type R is 5x120" },
                { vehicle: "Accord", years: "Recent", lugPattern: "5x114.3", cb: "64.1mm", thread: "M12x1.5", offset: "+40 to +55", notes: "" },
                { vehicle: "CR-V", years: "Recent", lugPattern: "5x114.3", cb: "64.1mm", thread: "M12x1.5", offset: "+40 to +50", notes: "" },
                { vehicle: "Acura MDX", years: "Recent", lugPattern: "5x120", cb: "64.1mm", thread: "M14x1.5", offset: "+45 to +55", notes: "" },
                { vehicle: "Acura TLX", years: "Recent", lugPattern: "5x120", cb: "64.1mm", thread: "M14x1.5", offset: "+45 to +55", notes: "Older gen was 5x114.3" },
                { vehicle: "Pilot", years: "Recent", lugPattern: "5x120", cb: "64.1mm", thread: "M14x1.5", offset: "+45 to +55", notes: "" },
                { vehicle: "Odyssey", years: "Recent", lugPattern: "5x120", cb: "64.1mm", thread: "M14x1.5", offset: "+45 to +55", notes: "" },
                { vehicle: "Ridgeline", years: "Recent", lugPattern: "5x120", cb: "64.1mm", thread: "M14x1.5", offset: "+45 to +55", notes: "" },
                { vehicle: "Acura Integra", years: "2023-Present", lugPattern: "5x114.3", cb: "64.1mm", thread: "M12x1.5", offset: "+40 to +50", notes: "" },
                { vehicle: "HR-V", years: "Recent", lugPattern: "5x114.3", cb: "64.1mm", thread: "M12x1.5", offset: "+45 to +55", notes: "" },
            ]
        },
         mercedes: {
            name: "Mercedes-Benz",
            searchTerms: "mercedes benz mb",
            description: "C-Class, E-Class, GLE, Sprinter, etc.",
            tag: "German Import",
            vehicles: [
                { vehicle: "C-Class (W205/W206)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.5 Ball", offset: "+35 to +50", notes: "" },
                { vehicle: "E-Class (W213/W214)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.5 Ball", offset: "+35 to +50", notes: "" },
                { vehicle: "S-Class (W222/W223)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.5 Ball", offset: "+30 to +45", notes: "" },
                { vehicle: "GLC (X253/X254)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.5 Ball", offset: "+30 to +45", notes: "" },
                { vehicle: "GLE (W166/W167)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M15x1.25 Ball", offset: "+40 to +55", notes: "Verify thread M14 or M15" },
                { vehicle: "GLS (X166/X167)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M15x1.25 Ball", offset: "+40 to +55", notes: "Verify thread M14 or M15" },
                { vehicle: "A-Class (W177)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.5 Ball", offset: "+40 to +50", notes: "" },
                { vehicle: "CLA (C118)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.5 Ball", offset: "+40 to +50", notes: "" },
                { vehicle: "Sprinter (906/907)", years: "Recent", lugPattern: "6x130", cb: "84.1mm", thread: "M14x1.5 Ball", offset: "Varies", notes: "2500 models. 3500 different." },
                { vehicle: "G-Class (W463/W463A)", years: "Recent", lugPattern: "5x130", cb: "84.1mm", thread: "M14x1.5 Ball", offset: "+20 to +50", notes: "" },
            ]
        },
        bmw: {
            name: "BMW",
            searchTerms: "bmw bayerische motoren werke",
            description: "3 Series, 5 Series, X3, X5, etc.",
            tag: "German Import",
            vehicles: [
                { vehicle: "3 Series (G20)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+25 to +40", notes: "Older F30 5x120" },
                { vehicle: "5 Series (G30/G60)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+25 to +45", notes: "Older F10 5x120" },
                { vehicle: "X3 (G01)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+25 to +40", notes: "" },
                { vehicle: "X5 (G05)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+30 to +45", notes: "Older F15 5x120" },
                { vehicle: "1 Series (F40/F52)", years: "Recent FWD", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+40 to +50", notes: "Older RWD different" },
                { vehicle: "2 Series GranCoupe (F44)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+40 to +50", notes: "Coupe (G42) RWD 5x112 but diff offsets" },
                { vehicle: "X1 (U11)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+40 to +50", notes: "" },
                { vehicle: "7 Series (G70)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+20 to +35", notes: "" },
                { vehicle: "X7 (G07)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "+30 to +40", notes: "" },
                { vehicle: "M3/M4 (G80/G82)", years: "Recent", lugPattern: "5x112", cb: "66.6mm", thread: "M14x1.25 Cone", offset: "Aggressive, F:+20 R:+20", notes: "Specific M offsets" },
            ]
        }
    };

    // --- DOM Elements ---
    const mainContent = document.getElementById('main-content');
    const pages = document.querySelectorAll('#main-content > .page-content'); // Target direct children for pages
    const navLinks = document.querySelectorAll('.app-nav a[data-page], .mobile-bottom-nav a[data-page], .hero-cta-button[data-page]');
    
    const manufacturerCardsList = document.getElementById('manufacturer-cards-list');
    const manufacturerSearchInput = document.getElementById('manufacturer-search-input');
    
    const fitmentDetailPageContainer = document.getElementById('fitment-page'); // The whole fitment page
    const fitmentDetailSectionWrapper = document.getElementById('fitment-detail-section-wrapper');
    const fitmentDetailManufacturerName = document.getElementById('fitment-detail-manufacturer-name');
    const fitmentDetailTableContainer = document.getElementById('fitment-detail-table-container');
    const backToMfgListBtn = document.getElementById('back-to-mfg-list-btn');
    
    const currentYearSpan = document.getElementById('current-year');

    // Elements for showing/hiding fitment page parts
    const fitmentPageHeader = fitmentDetailPageContainer.querySelector('.page-header-generic');
    const fitmentSearchContainer = fitmentDetailPageContainer.querySelector('.fitment-search-container');


    // --- Functions ---
    const setActivePage = (pageId) => {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active-page');
            } else {
                page.classList.remove('active-page');
            }
        });

        // Update nav links
        document.querySelectorAll('.app-nav a[data-page], .mobile-bottom-nav a[data-page]').forEach(link => {
            if (link.dataset.page === pageId) {
                link.classList.add('active-nav-link');
            } else {
                link.classList.remove('active-nav-link');
            }
        });
        window.scrollTo(0, 0);
    };

    const createManufacturerCard = (mfgKey, mfgData) => {
        const card = document.createElement('div');
        card.className = 'manufacturer-card';
        card.dataset.mfgKey = mfgKey;
        card.dataset.searchTerms = mfgData.searchTerms.toLowerCase();
        
        card.innerHTML = `
            <h3 class="manufacturer-card-title">${mfgData.name}</h3>
            <p class="manufacturer-card-desc">${mfgData.description}</p>
            <span class="manufacturer-card-tag">${mfgData.tag}</span>
        `;
        card.addEventListener('click', () => showFitmentDetail(mfgKey));
        return card;
    };

    const populateManufacturerCards = () => {
        if (!manufacturerCardsList) return;
        manufacturerCardsList.innerHTML = ''; 
        Object.keys(fitmentData).forEach(key => {
            const card = createManufacturerCard(key, fitmentData[key]);
            manufacturerCardsList.appendChild(card);
        });
    };

    const filterManufacturerCards = () => {
        if (!manufacturerSearchInput || !manufacturerCardsList) return;
        const searchTerm = manufacturerSearchInput.value.toLowerCase();
        const cards = manufacturerCardsList.querySelectorAll('.manufacturer-card');
        cards.forEach(card => {
            if (card.dataset.searchTerms.includes(searchTerm)) {
                card.classList.remove('hidden-card');
            } else {
                card.classList.add('hidden-card');
            }
        });
    };

    const createFitmentTable = (vehicles) => {
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Vehicle</th>
                    <th>Years</th>
                    <th>Lug Pattern</th>
                    <th>Center Bore</th>
                    <th>Thread Size</th>
                    <th>Offset (ET)</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                ${vehicles.map(v => `
                    <tr>
                        <td data-label="Vehicle">${v.vehicle || ''}</td>
                        <td data-label="Years">${v.years || ''}</td>
                        <td data-label="Lug Pattern">${v.lugPattern || ''}</td>
                        <td data-label="Center Bore">${v.cb || ''}</td>
                        <td data-label="Thread Size">${v.thread || ''}</td>
                        <td data-label="Offset (ET)">${v.offset || ''}</td>
                        <td data-label="Notes">${v.notes || ''}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        return table;
    };
    
    const showFitmentDetail = (mfgKey) => {
        const mfg = fitmentData[mfgKey];
        if (!mfg || !fitmentDetailSectionWrapper || !fitmentDetailTableContainer || !fitmentDetailManufacturerName) return;

        fitmentDetailManufacturerName.innerHTML = `<span>${mfg.name}</span> Fitment`;
        fitmentDetailTableContainer.innerHTML = ''; 
        const table = createFitmentTable(mfg.vehicles);
        fitmentDetailTableContainer.appendChild(table);

        // Hide card list, main fitment header, and search
        if(fitmentPageHeader) fitmentPageHeader.style.display = 'none';
        if(fitmentSearchContainer) fitmentSearchContainer.style.display = 'none';
        if(manufacturerCardsList) manufacturerCardsList.style.display = 'none';
        
        fitmentDetailSectionWrapper.style.display = 'block';
        window.scrollTo(0,0);
    };

    const hideFitmentDetail = () => { // This function is called when going "back" or navigating to fitment page
        if (fitmentDetailSectionWrapper) fitmentDetailSectionWrapper.style.display = 'none';
        
        // Show card list, main fitment header, and search
        if(fitmentPageHeader) fitmentPageHeader.style.display = 'block'; // or 'flex' if it was
        if(fitmentSearchContainer) fitmentSearchContainer.style.display = 'block';
        if(manufacturerCardsList) manufacturerCardsList.style.display = 'grid'; 
        
        if (manufacturerSearchInput) {
            manufacturerSearchInput.value = ''; 
            filterManufacturerCards(); 
        }
    };

    // --- Event Listeners ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            setActivePage(pageId);
            if (pageId === 'fitment-page') { 
                hideFitmentDetail(); 
            }
        });
    });

    if (manufacturerSearchInput) {
        manufacturerSearchInput.addEventListener('input', filterManufacturerCards);
    }
    if (backToMfgListBtn) {
        backToMfgListBtn.addEventListener('click', hideFitmentDetail);
    }

    // --- Initialization ---
    if(currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
    populateManufacturerCards(); 
    setActivePage('home-page'); 
});
