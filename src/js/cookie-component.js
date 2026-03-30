const cookieHTML = `
    <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-[120] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-6 transform translate-y-full transition-transform duration-500 flex flex-col md:flex-row items-center justify-between gap-6 hidden">
        <div class="max-w-4xl">
            <h4 class="font-serif font-bold text-brand-900 text-lg mb-2">We value your privacy</h4>
            <p class="text-sm text-gray-600 leading-relaxed font-sans">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                <a href="/legal.html" class="text-brand-orange hover:underline font-bold">Read our Cookie Policy</a>.
            </p>
        </div>
        <div class="flex flex-wrap gap-3 shrink-0">
            <button onclick="cookieManager.openPreferences()" class="px-6 py-2.5 rounded-none border border-gray-300 text-brand-900 font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors">Preferences</button>
            <button onclick="cookieManager.rejectAll()" class="px-6 py-2.5 rounded-none border border-brand-900 text-brand-900 font-bold text-xs uppercase tracking-widest hover:bg-brand-900 hover:text-white transition-colors">Reject All</button>
            <button onclick="cookieManager.acceptAll()" class="px-6 py-2.5 rounded-none bg-brand-orange text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-900 hover:shadow-lg transition-all shadow-md">Accept All</button>
        </div>
    </div>

    <div id="cookie-modal" class="fixed inset-0 z-[130] hidden flex items-center justify-center bg-brand-900/60 backdrop-blur-sm opacity-0 transition-opacity duration-300">
        <div class="bg-white rounded-none shadow-2xl w-full max-w-2xl mx-4 overflow-hidden transform scale-95 transition-transform duration-300">
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 class="font-serif font-bold text-2xl text-brand-900">Cookie Preferences</h3>
                <button onclick="cookieManager.closePreferences()" class="text-gray-400 hover:text-brand-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
            <div class="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                <p class="text-sm text-gray-600 font-sans">Customize your cookie settings below. Essential cookies are always required for the website to function.</p>
                
                <div class="flex items-start justify-between gap-4 p-4 rounded-none bg-gray-50 border border-gray-200">
                    <div>
                        <span class="font-bold text-brand-900 block mb-1">Essential Cookies</span>
                        <p class="text-xs text-gray-500 font-sans">Required for basic site functionality and security.</p>
                    </div>
                    <div class="relative inline-flex items-center cursor-not-allowed opacity-50">
                        <input type="checkbox" checked disabled class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-none after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-900"></div>
                    </div>
                </div>

                <div class="flex items-start justify-between gap-4 p-4 rounded-none border border-gray-100 hover:border-gray-200 transition-colors">
                    <div>
                        <span class="font-bold text-brand-900 block mb-1">Analytics</span>
                        <p class="text-xs text-gray-500 font-sans">Help us understand how visitors interact with the website.</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="cookie-analytics" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-none after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-900"></div>
                    </label>
                </div>

                <div class="flex items-start justify-between gap-4 p-4 rounded-none border border-gray-100 hover:border-gray-200 transition-colors">
                    <div>
                        <span class="font-bold text-brand-900 block mb-1">Marketing</span>
                        <p class="text-xs text-gray-500 font-sans">Used to deliver relevant advertisements and track performance.</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="cookie-marketing" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-none after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-900"></div>
                    </label>
                </div>
            </div>
            <div class="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                 <button onclick="cookieManager.closePreferences()" class="px-6 py-2.5 rounded-none border border-gray-300 text-gray-600 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">Cancel</button>
                 <button onclick="cookieManager.savePreferences()" class="px-6 py-2.5 rounded-none bg-brand-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-800 transition-colors shadow-lg">Save Preferences</button>
            </div>
        </div>
    </div>

    <button onclick="cookieManager.openPreferences()" id="cookie-trigger" class="fixed bottom-6 left-6 z-[100] w-10 h-10 rounded-full bg-white text-brand-900 shadow-lg border border-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 hidden group" title="Cookie Preferences">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
    </button>
`;

// --- COOKIE MANAGER LOGIC ---
const cookieManager = {
    init: function() {
        const consent = localStorage.getItem('koi_cookie_consent');
        const trigger = document.getElementById('cookie-trigger');
        if (!consent) {
            this.showBanner();
        } else {
            this.applySettings(JSON.parse(consent));
            if(trigger) trigger.classList.remove('hidden');
        }
    },

    showBanner: function() {
        const banner = document.getElementById('cookie-banner');
        if(banner) {
            banner.classList.remove('hidden');
            setTimeout(() => banner.classList.remove('translate-y-full'), 100);
        }
    },

    hideBanner: function() {
        const banner = document.getElementById('cookie-banner');
        const trigger = document.getElementById('cookie-trigger');
        if(banner) {
            banner.classList.add('translate-y-full');
            setTimeout(() => {
                banner.classList.add('hidden');
                if(trigger) trigger.classList.remove('hidden');
            }, 500);
        }
    },

    openPreferences: function() {
        const modal = document.getElementById('cookie-modal');
        if(modal) {
            const consent = JSON.parse(localStorage.getItem('koi_cookie_consent') || '{"analytics": false, "marketing": false}');
            const analyticsCheck = document.getElementById('cookie-analytics');
            const marketingCheck = document.getElementById('cookie-marketing');
            
            if(analyticsCheck) analyticsCheck.checked = consent.analytics;
            if(marketingCheck) marketingCheck.checked = consent.marketing;

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.querySelector('div').classList.remove('scale-95');
            }, 10);
        }
    },

    closePreferences: function() {
        const modal = document.getElementById('cookie-modal');
        if(modal) {
            modal.classList.add('opacity-0');
            modal.querySelector('div').classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    },

    acceptAll: function() {
        const settings = { necessary: true, analytics: true, marketing: true };
        this.save(settings);
    },

    rejectAll: function() {
        const settings = { necessary: true, analytics: false, marketing: false };
        this.save(settings);
    },

    savePreferences: function() {
        const analyticsCheck = document.getElementById('cookie-analytics');
        const marketingCheck = document.getElementById('cookie-marketing');
        
        const settings = {
            necessary: true,
            analytics: analyticsCheck ? analyticsCheck.checked : false,
            marketing: marketingCheck ? marketingCheck.checked : false
        };
        this.save(settings);
        this.closePreferences();
    },

    save: function(settings) {
        localStorage.setItem('koi_cookie_consent', JSON.stringify(settings));
        this.applySettings(settings);
        this.hideBanner();
    },

    applySettings: function(settings) {
        console.log('Applied Cookie Settings:', settings);
        // You can drop your Google Analytics tracking logic here!
    }
};

// Expose cookieManager to global scope for button clicks in the injected HTML
window.cookieManager = cookieManager;

// Auto-inject and start when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Inject the HTML at the very end of the body
    document.body.insertAdjacentHTML('beforeend', cookieHTML);
    
    // Start the cookie manager
    cookieManager.init();
});