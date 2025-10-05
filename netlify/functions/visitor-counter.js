const fs = require('fs');
const path = require('path');

const COUNTER_FILE = path.join(__dirname, 'counter.json');

exports.handler = async function (event, context) {
    let count = 0;
    // Read current count
    try {
        if (fs.existsSync(COUNTER_FILE)) {
            const data = fs.readFileSync(COUNTER_FILE, 'utf8');
            count = JSON.parse(data).count || 0;
        }
    } catch (err) {
        count = 0;
    }

    // Increment count only on POST
    if (event.httpMethod === 'POST') {
        count++;
        fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count }), 'utf8');
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ count })
    };
};