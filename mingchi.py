#  I am a bike seller and I use serial numbers for my bikes. Occasionally people raise a support ticket with issues and I need them to include their bike serial number. However, they mostly, with the hyphens in the wrong place, some letters lowercase etc. I need a quick script to format my serial numbers correctly.

#  def format_serial_number(serial, l):
#      ...
#  The serial numbers need to be grouped into sections of length l separated by dashes -, except for the first section that may be shorter if the string cannot be split into equal parts of length l. It must also all be in upper case.

#  For example, running the function should return the values as below:

#  IN : format_serial_number('7Hnwad9Jk', length=4)
#  OUT: "7-HNWA-D9Jk"

#  IN : format_serial_number('6F2k-1d-0-z', length=4)
#  OUT: "6F2K-1D0Z"

#  IN : format_serial_number('14k-9-b', length=2)
#  OUT: "1-4K-9B"


def format_serial_number(serial, length):
    # Remove non-alphanumeric characters and convert to uppercase
    serial_number = ''.join(filter(str.isalnum, serial)).upper()
    
    # Calculate the number of dashes needed
    num_dashes = -(-len(serial_number) // length)  # Equivalent to math.ceil in JavaScript
    
    # Insert dashes at the correct positions
    formatted_serial = []
    for i in range(num_dashes):
        formatted_serial.append(serial_number[i * length: (i + 1) * length])
    
    return '-'.join(formatted_serial)

# Test cases
print(format_serial_number('7Hnwad9Jk', 4))  # Output: "7-HNWA-D9JK"
print(format_serial_number('6F2k-1d-0-z', 4))  # Output: "6F2K-1D0Z"
print(format_serial_number('14k-9-b', 2))  # Output: "1-4K-9B"
