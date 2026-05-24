**Title: Working with Linux Commands and Basic system management tasks.**

Aim

To get an understanding about the basic Linux commands and performing the basic file and directory management, system and process management tasks by the use of terminal.

Objectives

- To study the various basic Linux terminal commands.
- To perform file and directory management tasks.
- To get familiar with ways of viewing and searching files.
- To run network and system information commands.
- To study the basic process management in Linux.

Theory

Linux is an open-source operating system commonly used in servers, cloud computing and development environment. Linux has a command-line interface that allows users to communicate with the system directly.

The basic Linux commands help in executing various commands regarding file handling, navigation, process control, network related work. System administrators and Developers mostly use these commands in their day-to-day tasks. The basic commands are a set of powerful tools to get an understanding of operating systems and various tasks being performed by it.

Some important concepts involved here:

CLI (Command Line Interface) - the interface that allows users to interact with the system using commands typed in plain text.

File System - the way that files are stored, accessed and organized in directories and sub-directories in Linux.

Processes - currently running instances of programs on the operating system.

Permissions - the controls put in place to manage the level of access users have to files and directories.

Introduction

Linux is a powerful and widely used open-source operating system that forms the backbone of many modern computing environments, including servers, cloud platforms, and software development systems. It offers a robust Command-Line Interface (CLI) that allows users to interact with the system by issuing specific commands.

Understanding and utilizing Linux commands is crucial for efficiently managing files, navigating directories, controlling processes, and monitoring system performance. These skills are particularly valuable for system administrators, developers, and other IT professionals working with Linux-based systems.

This lab is designed to provide hands-on experience with fundamental Linux commands and explore their applications in managing files, directories, processes, and system resources. It aims to build a strong foundation for working effectively in Linux environments and gain practical knowledge of operating system operations.

**Procedure**

|     |     |     |
| --- | --- | --- |
| Task No. | Command | Meaning / Explanation |
| 1   | cd Student_Lab  <br>cd Linux | Changes directory step-by-step into specified folders. |
| 2   | cd .. | Moves one level up to the parent directory. |
| 3   | cd ../.. | Moves two levels up in the directory hierarchy. |
| 4   | cd / | Navigates to the root directory (top-most level). |
| 5   | tree | Displays directory structure in a tree format. |
| 6   | clear | Clears the terminal screen. |
| 7   | pwd | Shows the full path of the current directory. |
| 8   | ls -l | Lists files with detailed information (permissions, size, date). |
| 9   | ls -lh | Lists files with sizes in human-readable format (KB, MB). |
| 10  | ls /home | Lists files of a specific directory without changing location. |
| 11  | cd Stu&lt;TAB&gt; | Auto-completes directory/file names using the TAB key. |
| 12  | history | Displays previously executed commands. |
| 13  | !!  | Re-executes the last command. |
| 14  | cd - | Switches to the previous directory. |
| 15  | man ls | Opens the manual/help page for a command. |

**1.Basic Navigation Task**

**2.Tasks on Directory Management (with explanations)**

**Task 1: Creating a Directory Structure**

mkdir -p Student_Lab/Linux Networking Programming

Meaning: mkdir is a command that creates a new directory. The -p option helps to create parent as well as nested directories in one command, so that if the parent directory do not exist it is also created with the help of this option.

**Task 2: Entering a Directory**

cd Student_Lab/Linux

Meaning: The cd command allows us to change from the present directory to any other directory in the system.

**Task 3: Creating Sub folders**

mkdir commands scripts

Meaning: We created two sub directories within the current directory. The directories are commands and scripts.

**Task 4: Deleting a Directory**

rm -r Programming

Meaning: Using the rm-r command, we can remove a directory and its contents recursively.

**3\. Tasks on File Management (with explanations)**

**Task1: Creating a file**

touch notes.txt practice.txt

Meaning: touch command is used to create files. If the file exists, the file modification time stamp would be updated to current time.

**Task2: Copying a file & renaming a file**

cp notes.txt commands/

mv practice.txt linux_practice.txt

Meaning: cp command is used to copy a file from one location to another and the mv command is used to move/rename a file.

**Task 3: Move a file**

mv linux_practice.txt scripts/

Meaning: We move the file linux_practice.txt into the script folder.

**Task 4: Delete a file**

rm notes.txt

Meaning: To delete a file, we can use the rm command.

**Task 5: Copy a file to multiple locations**

cp notes.txt linux_practice.txt commands/

Meaning: Here we copy the file notes.txt to the directory commands/ as well as to the current directory.

**Task 6: Get file details**

ls-l

Meaning: ls-l commands give details of a file.

**Task 7: Check a file type**

file notes.txt

Meaning: file command gives information about the type of file it is.

**Task 8: display a file**

cat notes.txt

Meaning: cat command is used to display the content of a file.

**Task 9: count words in a file**

wc notes.txt

Meaning: wc command will display no. Of lines, words and characters present in a file.

**Task 10: create a file and write into it**

echo "Linux is powerful" > file1.txt

Meaning: > command writes the text into a file. If a file already exists, it overwrites the content.

Task 11: append content into a file

echo "It is widely used" >> file1.txt

Meaning: >> command is used to append the new content to the file.

Task 12: Rename files(simple one)

mv file1.txt file2.txt

Meaning: mv command is also used to rename a file.

4\. File viewing tasks (with explanations)

**Task 1: Add content**

echo "Linux is an open-source operating system" > notes.txt

echo "It is widely used in servers and cloud computing" >> notes.txt

Meaning: The command > writes the given text to a file. If the file exists, it will be overwritten. But >> writes the content to the file without deleting the contents from the original file, it appends the content to the file.

**Task 2: Displaying a file (in 3 ways)**

cat notes.txt

less notes.txt

head notes.txt

Meaning: The command cat displays the contents of a file to the console. Whereas the less command and head command displays only the parts of a file (when a file is huge).

**5\. Searching tasks (with explanations)**

Task 1: Search a word

grep "Linux" notes.txt

Meaning: Using the command grep we can search for a word in a file. It returns only the line numbers if the required text is found in the file.

Task 2: Searching for files that end with .txt

find Student_Lab -name "\*.txt"

Meaning: find command is used to search for a specific file that matches a certain pattern. In this case, we are searching for files ending with ".txt".

6\. Network Commands (with explanations)

Task 1: Check connectivity

ping google.com

Meaning: The ping command allows us to check if our system can connect to a given IP address or hostname and how long it takes for the response.

Task 2: Downloading a file

wget https://example.com/sample.txt

Meaning: This command is used to download files from a URL. By default, it saves the file to the current directory.

7\. System information tasks (with explanations)

uname-a

Meaning: uname is a command that gives the details about the system.

cat /etc/os-release

Meaning: This file contains the details of the operating system that is installed in our system.

whoami

Meaning: This command gives the current login username.

uptime

Meaning: This command gives the information about how long has the system been running.

8\. Process management tasks (with explanations)

ps

Meaning: ps command is used to list the processes running on our system.

top

Meaning: The top command is a program that provides a dynamic, real-time view of a running system.

kill <PID>;

Meaning: To kill any process using its PID.

9\. File creation task (with explanations)

Task 1: Creating a file

echo "Linux Practice Lab" > lab.txt

Meaning: The > operator redirects the standard output of the echo command to the file named "lab.txt". If "lab.txt" doesn't exist, it will be created. If it exists, its contents will be overwritten.

Task 2: Adding a line to a file

echo "This is an additional line" >> lab.txt

Meaning: The >> operator appends the output of the echo command to the file "lab.txt". It adds the new line without deleting the existing content.

Task 3: Displaying the file

cat lab.txt

Meaning: The cat command displays the entire content of the "lab.txt" file to the standard output.

**Conclusion**

Through this practical lab various commands were used to navigate around, manage files and directories, view files and search through them. Networking commands, system commands as well as commands related to the process management and creation of a file were all demonstrated and explained. Each command used is very efficient and can even perform large and complicated operations in very little time. It made my skills at using the command line a whole lot better, I could learn how useful a command-line is for managing the server as well as the cloud and system administration.
