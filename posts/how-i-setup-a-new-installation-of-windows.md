---
title: How I setup a new installation of Windows
date: 2019-05-04
---

A few days ago, I decided to reinstall Windows 10 due to the normal wear and tear that comes with using the same Windows install over a few years and wanted to document the whole process. This guide is mainly relevant for installing Windows 10. But without a further ado, let’s get started.

## Pre-Installation

Before installing Windows, I always make sure to update my USB flash drive installer with the latest version. So I head over to Microsoft’s website and download the [Media Creation Tool](https://www.microsoft.com/en-us/software-download/windows10). I then follow the instructions to create an ISO image of the OS installer. Following that, I download the latest version of [Rufus](https://www.rufus.akeo.ie/), which is a piece of software the can essentially “burn” an ISO image file to a flash drive. I then use it to finally create my installer.

After creating the install drive, I go to my computer manufacturer’s website (in my case it’s the motherboard manufacturer’s website) and download the latest drivers. I then head on over to my GPU vendor’s website (in my case it’s AMD) and download the latest display drivers. After that, I go over to [Ninite](https://www.ninite.com/) to create an installer that installs most of the programs (Firefox, my default browser; Chrome; Foxit PDF; Java; Skype; Steam; Discord; and Notepad++ just to name a few) I use from one executable. It’s really convenient because I don’t have to go searching for all the software I use, I can just select most of them from this website.

Finally, I go ahead and backup the program file data that’s on my C drive because most of my files and documents are on a separate D drive. I wish Windows had a way where I could use a tool to retrieve all my application data and configuration data from one system and transfer it to another without any messing with the not-really-centralized-application-database that is the registry (in fact, Microsoft discourages developers to use the registry even though they use it themselves). I personally think \*NIX systems do a much better job with storing configuration data. Although I know I should, I don’t usually backup my drive prior to reinstalling. I really need to get into the habit of backing up my installation every few weeks.

## Installation

I don’t really do anything special during install, I just format my C drive and let it copy its file. I also put in my product key after I get everything setup (if it doesn’t activate automatically).

## Setup

During setup, I make sure to disable the phone home business that Microsoft likes to enable by default and always create a local account. I’m not a big fan of my user account being hooked up to an online account, so I just opt to create a local account.

## Post-Installation

After getting onto the desktop, I proceed to install the drivers that I had downloaded earlier on my separate D drive. I always let them install in one sitting and then reboot after all of them have installed.

After installing the drivers, I find the Ninite installer that I had also previously downloaded and let it install all the programs that I selected. Since I have a higher-end PC and have an SSD, everything installs fairly quickly and without any issues. Afterwards, I go hunting online looking for software that I use that’s not included in the Ninite installer such as Visual Studio, IntelliJ, Git, Adobe suite, and more. Also, since most of games are on my D drive, I just configure Steam to look for them there and let it download and install the others and soon I’ll be able to play all my games again. Just of nostalgia and the fact that I like, I install this piece of software called [Classic Sounds](https://www.reddit.com/r/Windows10/comments/8gk3ft/shutdown_startup_logon_logoff_and_unlock_sounds/) which restores the logon, logoff, lock, and shutdown sounds in Windows 10. By default, it switches the sound scheme to Windows XP but I personally have it as the default Windows 10 sound scheme but with the Windows 98 logon and logoff/shutdown sounds (in my opinion those are my favorites).

Afterwards, I open appwiz.cpl to enable Hyper-V for testing out applications and different operating systems and the Windows System for Linux to get a proper bash environment for programming. I really appreciate how the original developers of Windows NT thought about making a multi subsystem user mode, which makes the WSL and before that, Windows Services for Unix, possible. On a side note, the Win32 API is not the native API of Windows; there is an undocumented API that is mainly used in the kernel and in translating Win32 and Linux calls into native NT calls. Back on track, after enabling Hyper-V and WSL, I restart my system and hear the infamous Windows 98 shutdown sound.

Once I’m logged back in, I go to the Windows store, download Ubuntu (that’s just the distribution I’ve always used in WSL), and create a Linux account once it’s done installing. Afterwards, I don’t really configure the terminal too much and just leave it as. I normally use the WSL as a better CLI and with projects that require tools that are less supported on Windows (such as Ruby).

Once I got all my programs reinstalled and features reenabled, I restore the programs’ data into their respected folders (most are either in the root of my user/home folder, AppData folder, or in my documents folder). Once all my data is restored, I check to make sure all my programs work and that no data is lost and it’s usually fine.

Speaking of application preferences, in terms of customization, I don’t really do much other to customize the appearance of Windows. I all I do is make my Window title the color of the accent I chose, change the wallpaper, and make the start menu just display my pinned apps (without the application list on the side), and turn the search box into a search icon. I also refuse to clutter my desktop with program shortcuts and thus have my most used apps pinned to my start menu and taskbar and only have the Recycle Bin and shortcuts to my C and D drive on my desktop. Another random thing I do when setting up Windows is change the font in Notepad to Consolas at size 12 with word wrap on.

Finally, after all my programs are setup to my desire, I go through the Windows privacy settings to set all the data that is sent to Microsoft to its lowest and disable most UWP app permissions since I rarely use those types of applications. Because I use the Professional version of Windows, I go through the Windows Update settings to delay feature and security updates and to not automatically install them since Windows 10 has had a history with bricking systems after automatically installing updates as soon as they come out. I used to use programs like O&O Shutup10 and Spybot Anti-Beacon but with this recent installation, I didn’t bother because I felt that it blocked some of the features of the UWP programs that I was trying to use. I might be completely wrong for all I know, oh well. After that, I go to the Group Policy Editor to limit data collection further and disable web integration in search, which effectively turns Cortona into ‘Windows Search’. Lastly, I am accustomed to the “Press CTRL + ALT + DEL to login” screen so I go the run box (by pressing the Windows key and the R button at the same time) and type in “control userpasswords2” to get a User Accounts box. I can finally enable the option by checking the “Require users to press Ctrl + Alt + Delete to login” box in the Advanced tab.

To wrap things up, this is a just a sort of a disorganized, comprehensive, ramble on how I setup a new PC/installation of Windows.
