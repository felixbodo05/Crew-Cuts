// ========================================
// CREW CUTZ - SUPABASE AUTH MODULE
// ========================================

const SUPABASE_URL = 'https://jiukpnewpvcwdcctnaeq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdWtwbmV3cHZjd2RjY3RuYWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NjExMDQsImV4cCI6MjA4NjMzNzEwNH0.GBp7PSM6-DaZMs6oIgDTbDh2ikqyahoTyRM6a80wn_Q';

// Lazy Supabase client – created only when first used (ensures CDN is loaded)
let _supabase = null;
function getClient() {
    if (!_supabase) {
        if (!window.supabase) throw new Error('Supabase CDN not loaded yet!');
        _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return _supabase;
}

// =============================================
// AUTH FUNCTIONS
// =============================================

/**
 * Register a new user
 */
async function signUp(email, password, fullName, phone) {
    const { data, error } = await getClient().auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
                phone: phone
            }
        }
    });
    if (error) throw error;
    return data;
}

/**
 * Log in an existing user
 */
async function signIn(email, password) {
    const { data, error } = await getClient().auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

/**
 * Log out the current user
 */
async function signOut() {
    const { error } = await getClient().auth.signOut();
    if (error) throw error;
}

/**
 * Get the currently logged-in user (null if not logged in)
 */
async function getUser() {
    const { data: { user } } = await getClient().auth.getUser();
    return user;
}

/**
 * Get the current session
 */
async function getSession() {
    const { data: { session } } = await getClient().auth.getSession();
    return session;
}

/**
 * Get the user's profile from the profiles table
 */
async function getProfile(userId) {
    const { data, error } = await getClient()
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
    if (error) return null;
    return data;
}

// =============================================
// NAVBAR AUTH STATE UPDATER
// =============================================

/**
 * Updates the navbar login button based on auth state.
 * Adds a login/logout link to top-controls area.
 */
async function initAuthNav() {
    const user = await getUser();
    const topControls = document.querySelector('.top-controls');

    // Remove existing auth button if present
    const existingAuthBtn = document.getElementById('authNavBtn');
    if (existingAuthBtn) existingAuthBtn.remove();

    if (!topControls) return;

    const authBtn = document.createElement('a');
    authBtn.id = 'authNavBtn';
    authBtn.style.cssText = `
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.1);
        padding: 4px 16px;
        border-radius: 9999px;
        cursor: pointer;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 14px;
        color: var(--text-primary);
        height: 48px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        transition: all 250ms ease-in-out;
        text-decoration: none;
        letter-spacing: 0.05em;
    `;

    if (user) {
        authBtn.innerHTML = '<i class="fa-solid fa-user"></i><span>Profilom</span>';
        authBtn.href = 'profile.html';
    } else {
        authBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i><span>Belépés</span>';
        authBtn.href = 'login.html';
    }

    authBtn.addEventListener('mouseenter', () => {
        authBtn.style.borderColor = 'var(--primary)';
        authBtn.style.transform = 'translateY(-2px)';
        authBtn.style.color = 'var(--primary)';
    });
    authBtn.addEventListener('mouseleave', () => {
        authBtn.style.borderColor = 'rgba(255,255,255,0.1)';
        authBtn.style.transform = '';
        authBtn.style.color = 'var(--text-primary)';
    });

    // Insert before the lang toggle
    topControls.insertBefore(authBtn, topControls.firstChild);
}

// =============================================
// BOOKING FUNCTIONS
// =============================================

/**
 * Insert a booking into the Supabase bookings table
 */
async function createBooking(bookingData) {
    const user = await getUser();
    if (!user) throw new Error('Nem vagy bejelentkezve!');

    const { data, error } = await getClient()
        .from('bookings')
        .insert([{
            user_id: user.id,
            name: bookingData.name,
            email: bookingData.email,
            phone: bookingData.phone,
            barber: bookingData.barber,
            service: bookingData.service,
            booking_date: bookingData.date,
            booking_time: bookingData.time,
            notes: bookingData.notes || null,
            status: 'pending'
        }])
        .select()
        .single();

    if (error) throw error;
    return data;
}

/**
 * Get all bookings for the current user
 */
async function getUserBookings() {
    const user = await getUser();
    if (!user) return [];

    const { data, error } = await getClient()
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('booking_date', { ascending: true });

    if (error) throw error;
    // Biztonsági szűrés: csak érvényes, kitöltött dátummal/idővel rendelkező foglalásokat adunk vissza
    return (data || []).filter(b => b.booking_date && typeof b.booking_date === 'string' && b.booking_time && typeof b.booking_time === 'string');
}

// =============================================
// REDIRECT HELPERS
// =============================================

/**
 * Redirects to login.html if not authenticated.
 * Call at the top of protected pages.
 */
async function requireAuth(redirectUrl = 'booking.html') {
    const user = await getUser();
    if (!user) {
        window.location.href = `login.html?redirect=${encodeURIComponent(redirectUrl)}`;
        return null;
    }
    return user;
}

// Export to global scope
window.CrewCutzAuth = {
    get supabase() { return getClient(); },
    signUp,
    signIn,
    signOut,
    getUser,
    getSession,
    getProfile,
    initAuthNav,
    createBooking,
    getUserBookings,
    requireAuth
};
