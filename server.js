// Load environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// === API Endpoints ===

// 1. Booking Endpoint
app.post('/api/booking', async (req, res) => {
    const bookingData = req.body;
    console.log('📅 New Booking Request:', bookingData);

    try {
        const { data, error } = await supabase
            .from('bookings')
            .insert([
                {
                    name: bookingData.name,
                    email: bookingData.email,
                    phone: bookingData.phone,
                    service: bookingData.service, // You might need to map index to string if needed
                    barber: bookingData.barber,   // You might need to map index to string if needed
                    booking_date: bookingData.booking_date,
                    booking_time: bookingData.booking_time
                }
            ]);

        if (error) throw error;

        console.log('✅ Booking saved to Supabase:', data);

        res.json({
            success: true,
            message: 'Foglalás sikeresen rögzítve! / Booking confirmed!'
        });
    } catch (err) {
        console.error('❌ Error saving booking:', err.message);
        res.status(500).json({
            success: false,
            message: 'Hiba történt a foglalás mentésekor. / Error saving booking.'
        });
    }
});

// 2. Contact Endpoint
app.post('/api/contact', async (req, res) => {
    const contactData = req.body;
    console.log('✉️ New Contact Message:', contactData);

    try {
        const { data, error } = await supabase
            .from('contacts')
            .insert([
                {
                    name: contactData.name,
                    email: contactData.email,
                    message: contactData.message
                }
            ]);

        if (error) throw error;

        console.log('✅ Message saved to Supabase:', data);

        res.json({
            success: true,
            message: 'Üzenet elküldve! / Message sent!'
        });
    } catch (err) {
        console.error('❌ Error saving message:', err.message);
        res.status(500).json({
            success: false,
            message: 'Hiba történt az üzenet küldésekor. / Error sending message.'
        });
    }
});

// Fallback to index.html for SPA-like navigation
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start Server (only if running locally, Vercel will use module.exports)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`
        🚀 Server running at http://localhost:${PORT}
        ✨ Static files served from ./src
        📅 Booking API: POST /api/booking
        ✉️ Contact API: POST /api/contact
        `);
    });
}

// Export the app for Vercel
module.exports = app;
