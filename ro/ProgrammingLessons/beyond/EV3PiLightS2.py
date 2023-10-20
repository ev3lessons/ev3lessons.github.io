#! /usr/bin/env python
# import packages
import serial
import time
import struct
import os

EV3 = serial.Serial('/dev/rfcomm0')
while 1:
        if EV3.inWaiting() >= 2: # check for ev3 message
            # Get the number of bytes in this message
            s = EV3.read(2)
            # struct.unpack returns a tuple unpack using []
            [numberOfBytes] = struct.unpack("<H", s)
            print numberOfBytes,
            # Wait for the message to complete
            while EV3.inWaiting() < numberOfBytes:
                time.sleep(0.01)
            #read number of bytes
            s = s + EV3.read(numberOfBytes)
            s = s[6:]
            # Get the mailboxName
            mailboxNameLength = ord(s[0])
            mailboxName = s[1:1+mailboxNameLength-1]
            print mailboxName,
            s = s[mailboxNameLength+1: ]
            # Get the message text
            [messageLength] = struct.unpack("<H", s[0:2])
            message = s[2:2+messageLength]
            print message
            if "color_change" in message: #check if message is color_change
                os.system("irsend SEND_ONCE Light power")
        else:
            # No data is ready to be processed yield control to system
            time.sleep(0.01)
