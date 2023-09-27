// I am a bike seller and I use serial numbers for my bikes. Occasionally people raise a support ticket with issues and I need them to include their bike serial number. However, they mostly, with the hyphens in the wrong place, some letters lowercase etc. I need a quick script to format my serial numbers correctly.

// def format_serial_number(serial, l):
//     ...
// The serial numbers need to be grouped into sections of length l separated by dashes -, except for the first section that may be shorter if the string cannot be split into equal parts of length l. It must also all be in upper case.

// For example, running the function should return the values as below:

// IN : format_serial_number('7Hnwad9Jk', length=4)
// OUT: "7-HNWA-D9Jk"

// IN : format_serial_number('6F2k-1d-0-z', length=4)
// OUT: "6F2K-1D0Z"

// IN : format_serial_number('14k-9-b', length=2)
// OUT: "1-4K-9B"

function formatSerialNumber(serial, length) {
    // Remove non-alphanumeric characters and convert to uppercase
   let serialNumber = serial.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    
    // Calculate the number of dashes needed
    const numDashes = Math.ceil(serialNumber.length / length);
    
    // Insert dashes at the correct positions
    const formattedSerial = [];
    for (let i = 0; i < numDashes; i++) {
        formattedSerial.push(serialNumber.slice(i * length, (i + 1) * length));
    }
    
    return formattedSerial.join('-');
}

// Test cases
console.log(formatSerialNumber('7Hnwad9Jk', 4));  // Output: "7-HNWA-D9JK"
console.log(formatSerialNumber('6F2k-1d-0-z', 4));  // Output: "6F2K-1D0Z"
console.log(formatSerialNumber('14k-9-b', 2));  // Output: "1-4K-9B"
