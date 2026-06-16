const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// သင်ပေးထားတဲ့ HTML ထဲက ၂၀၂၆ ထိုင်းပိတ်ရက် ဒေတာအစစ်အမှန်များ
const holidays2026 = [
    { "month": "January", "date": 1, "day": "Thursday", "holiday_name": "New Year's Day" },
    { "month": "January", "date": 2, "day": "Friday", "holiday_name": "Additional special holiday" },
    { "month": "March", "date": 3, "day": "Tuesday", "holiday_name": "Makha Bucha Day" },
    { "month": "April", "date": 6, "day": "Monday", "holiday_name": "Chakri Memorial Day" },
    { "month": "April", "date": 13, "day": "Monday", "holiday_name": "Songkran Festival" },
    { "month": "April", "date": 14, "day": "Tuesday", "holiday_name": "Songkran Festival" },
    { "month": "April", "date": 15, "day": "Wednesday", "holiday_name": "Songkran Festival" },
    { "month": "May", "date": 1, "day": "Friday", "holiday_name": "National Labor Day" },
    { "month": "May", "date": 4, "day": "Monday", "holiday_name": "Coronation Day" },
    { "month": "June", "date": 1, "day": "Monday", "holiday_name": "Substitution for Visakha Bucha Day (Sunday 31st May 2026)" },
    { "month": "June", "date": 3, "day": "Wednesday", "holiday_name": "H.M. Queen Suthida Bajrasudhabimalalakshana's Birthday" },
    { "month": "July", "date": 28, "day": "Tuesday", "holiday_name": "H.M. King Maha Vajiralongkorn Phra Vajiraklaochaoyuhua's Birthday" },
    { "month": "July", "date": 29, "day": "Wednesday", "holiday_name": "Asarnha Bucha Day" },
    { "month": "August", "date": 12, "day": "Wednesday", "holiday_name": "H.M. Queen Sirikit The Queen Mother's Birthday / Mother's Day" },
    { "month": "October", "date": 13, "day": "Tuesday", "holiday_name": "H.M. King Bhumibol Adulyadej the Great Memorial Day" },
    { "month": "October", "date": 16, "day": "Friday", "holiday_name": "Additional special holiday *" },
    { "month": "October", "date": 23, "day": "Friday", "holiday_name": "H.M. King Chulalongkorn the Great Memorial Day" },
    { "month": "December", "date": 7, "day": "Monday", "holiday_name": "Substitution for H.M. King Bhumibol Adulyadej the Great's Birthday / National Day / Father's Day (Saturday 5th December 2026)" },
    { "month": "December", "date": 10, "day": "Thursday", "holiday_name": "Constitution Day" },
    { "month": "December", "date": 31, "day": "Thursday", "holiday_name": "New Year's Eve" }
];

app.get('/api/holidays', (req, res) => {
    // month, date, day ကို ပေါင်းပြီး offDay အဖြစ် ဒေတာထဲ ထည့်သွင်းခြင်း
    const formatHolidays = holidays2026.map(holiday => ({
        ...holiday,
        offDay: `${holiday.month} ${holiday.date}, ${holiday.day}` // Output: "January 1, Thursday"
    }));

    res.json({
        success: true,
        year: 2026,
        total_holidays: formatHolidays.length,
        data: formatHolidays // ဒေတာအသစ်ကို response ပြန်ပေးခြင်း
    });
});


// Home Route
app.get('/', (req, res) => {
    res.send('SET Holiday Static API is running perfectly! Go to /api/holidays');
});

// Vercel Serverless စစ်ဆေးခြင်း
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
