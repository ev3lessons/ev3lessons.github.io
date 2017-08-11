---
layout: post2
language: "en"
keywords: "Coaching getting_started FLL FLL resources"
image: "/images/Butler/Passion/1/img/3.png"
title: "Debugging Tips"
minidescription: "This article shares tips for teams to debug their code."
sidetitle: ""
side: ""
author: "Various"
authorim: "/images/people/group.jpg"
---
The following discussion is quoted from the Facebook Group <a href="https://www.facebook.com/groups/FLLShareandLearn/">FLL: Share & Learn </a>. One of the participants asked a great question about how teams debug programs. Lots of great ideas shared below.

<b>Question from 
Francis Cariño Belizario:</b> How do you all debug programs? I think collecting some of our teams' favorite techniques in one place could be really helpful to new teams.


<img src="/images/coachcorner/Debugging.jpg" style="max-width: 100%" />


**Response from Stephanie Ozenne**

For example, when the robot is behaving badly, the first thing my kids would do is inspect the program carefully - it can be easy to enter "12" under motor rotations instead of "1.2" and that makes the program look very different than you expect!
After that inspection, they would make sure they have the correct program downloaded and that they're not using the "recently run" menu on the bot, which can sometimes throw you off (especially if you've recently changed the name of the program!).
After that, they'd check all the wiring and make sure the connections are tight. If a sensor is misbehaving, looking to see if it's working in "port view" can be helpful.
If the program is *still* not working, they would insert "wait" blocks or sometimes insert a sound block just before or after the part of the program they suspect is doing something strange. Warning: Once my team used this method to make sure a sensor was seeing a line and stopping on it correctly to follow that line. They left the sound block in for a few weeks. When they went to take it out, the robot no longer would stop and find the line correctly! They determined that in the time the sound was playing, the robot had "settled" after it's stop. Inserting a wait block for the same amount of time that the sound had played restored the expected behavior.
I think once or twice, we have disconnected large chunks of the program "off the beam" to see earlier parts of the program run alone and then add blocks back if the behavior goes back to what we expect.
That's what I can think of off the top of my head. What do your teams do when the robot is suddenly behaving strangely to find the problem?


**Response from Joseph Gillen:**

I insist our programmers label each section of a program with a comment text box--ex, "this block robot turns 90 degrees towards the weight machine". They can also use it as a "scratch pad" to jot down changes.

Also, the first question they ask if something goes wonky is, Is it a hardware problem or a software problem? What changes were made?

Battery level is also big. Last year they had a heavy bot, which they noticed was a big drag on the battery and the robot would act differently on a full charge vs. a nearly depleted battery. They now check the battery charge often and make sure they ALWAYS charge it when not in use.

**Response from Sara Hart Chisholm:**

Most times it's a hardware problem for us - loose connection, to a loose wheel. Our team has learned to inspect the robot well before jumping to the conclusion that it is the program - especially if they have only been tweaking the program

**Response from Ruth Ann Francis:**

My team's first step is to run the program again so see if the behavior is repeatable. If it's not, it's likely something mechanical (wire rubbing on tire or something dragging on the mat) or something with the set-up. If the issue is repeatable, it's more likely to be a software/programming issue.

Then they check to make sure that everything is correct with the robot - right program run, all sensors and motors properly connected and reading correctly, etc.

Then they check the program. What was the last thing changed? We try to make only one change at a time so that the debugging is easier. Were the correct ports selected? Are the motors going the right direction? Do the values make sense...like the 1.2 vs 12. Are the units correct? (Always check your units! If my structures professor in college taught me anything, it was that once your units are correct, you're more than likely over halfway there....but, ya know, with something of a Brooklyn/Indian accent.)

If we still can't identify the problem, we undo the last change and try it again. If it works, it's something in the change we made. If not, it's something with the robot that we missed and it might be time for a reset/reboot (If I've learned anything from the programming alpha geek at work it's that many problems can be solved by rebooting...I also sometimes wonder if he's not taking that time to fix the thing he realized he screwed up with the last update someone asked him to make. In any event, it often works.)

If we still can't figure out what's wrong, then we start pulling big chunks of code off the beam and adding them back, one or a few at a time until we can figure out what's wrong (almost always it's that someone wasn't paying enough attention when they did one of the troubleshooting steps above). Often times I relate a trouble shooting story from work. More often than not the issue could have been solved by better documentation. (One of these seasons my team is going to trust me that everything is easier when it's properly documented and actually do it. Until then, I'll keep telling my stories and sighing exasperatedly and they'll keep rolling their eyes and promising to update the documentation right away and keep it current and then get distracted talking about the latest super hero movie or video game.)

**Response from Swati Gupta:**
1. Battery level check
2. Wire connections check/verify in Port View, 
3. Check program: run the myblocks only , select and run specific blocks: tell kids to comment and keep it modular (My Blocks)

**Response from Travis Smith:**

Travis Smith A lot of people don't know this, but if you connect via bluetooth and press the "play" button at the beginning of the program (instead of on the brick) then each block will be highlighted as the robot executes the program.

**Response from Francis Cariño Belizario:**

We go to our program, divide the program into the first block and the rest, run the program, add the next block, and so on until we see which part is wrong, fix it, continue coding and testing step by step

