Git: A Modern Approach to Code Management
 January 19, 2018  Mikhail Flenov  Programming
 Total: 3 Average: 3.7
In this article, I would like to share my knowledge and experience of working with git.

The main hallmark of git is that it does not block a file to make changes to code. You make changes and the system simply remembers the changes. When the code is merged with another code, the changes are deployed over the base code.

It all begins with initialization of a new repository for your code – git init. It is a tree trunk of your project that will be called master. Never develop your code right in the trunk, it is a very bad practice. We have master installed on the staging server from which we run a code on the production servers. The client on this server can change parameters that are stored in the config files. Programmers can fix urgent bugs on this server but in the very rare cases.

Code Branches
Developers never open a tree on their computers for the purpose of development. Everyone understands that development of a new code or bug fixing in a trunk is not the best idea.

In the company I work for, the code is developed by teams, but even if the code is developed by a single person, all trees are created on the remote server. Developers clone the remote repository on their computers (git clone), work locally and send changes to the server.

The work of every developer begins with fetching the latest changes from the server to their computer – git fetch. Now, when you need to start working on a new code or want to fix a bug, you should create a new branch from the main tree.

git checkout -b fixdone/345321 origin/master

git checkout pulls data from the repository. The -b key tells that we need not only to pull but also create a new branch with the name fixdone/345321. Naming branches is an individual matter, someone prefers meaningful names. For example, I use such names as done, fixdone, newdone or whateverdone (everybody chooses a magic word up to their taste)) plus ticket number after the slash.

According to the documentation, there is also an optional parameter that is separated from the ticket number by a space – a branch from which you create your own one. I recommend using this parameter every time. In the example, I specified origin/master – a remote trunk of our tree.

A few more words about naming. Why is origin/master a remote trunk? It is specified with the word origin. We created a new branch fixdone/345321 and it is a local copy on our disk. A remote copy in the repository will be titled as origin/fixdone/345321. We create our branch right from the remote tree located on the server. You will have your own master locally and it can be created in the following way:

git checkout -b master origin/master

This command creates a local copy of the current master. When a month passes by and you do git fetch to fetch all the changes made by other developers and this command updates all remote branches of the trunk on your disc. That is, origin/master will be updated, but the master you created locally won’t be updated. If next time you create a new branch from the local copy:

git checkout -b fixdone/333445 master

it will be created from your old master and will contain older code.

If we do not specify explicitly a branch from which a new branch is created, it will be created from the current branch. It may lead to certain issues. Suppose, we created a new branch:

git checkout -b fixdone/111 origin/master

Then, we wrote a code that must be sent to the production server on January 1, and then we created another branch:

git checkout -b fixdone/222

This branch will be created from fixdone/111 and will contain all the changes from this branch. You write a new code that must be sent to the production server tomorrow. As a result, you will send fixdone/222 to production together with the code from 111, which should not be there.

To prevent situations like this, always specify the main branch explicitly, and in the most cases, it will be origin/master.

Saving Code
We created a new branch from the main tree. We don’t need to block any files from changes made by other users, you simply change a code or add a new one without reference to other developers in your team. When you complete your work on the code, save data in your branch. I would like to underline once more that changes must be saved in your branch, not in the master.

Execute the git status command to view which files are to be changed and which branch is a current one.

It is also a good idea to execute the git diff command that will show which lines have been changed. The git system is designed in a way so that it saves only changes. If you change only one line and git diff shows that the whole file has been changed, it means that your editor has formatted the code. Perhaps, you configured the editor to replace characters with tab spaces.

Never save files with incidental change of all lines in the repository. Otherwise, other developers would wish to talk to you seriously. Such a commit is easier to delete than to use.

If you made sure that git diff shows only really changed lines highlighted, they can be added to commit. The files are added in the following way:
git add filename

Aliases can be used instead of the file names. If you need to add all changed files, you can use the -u key:

git add -u

This command adds all changed files. If you create new modules, you will need to execute git add separately.

Now, when you added all changes, you can confirm them with the following command:

git commit -m ‘this is my first project’

The -m key allows adding an inscription that should have a real name, or rather a description of your commit. So, everything has been changed and the changes can be sent to the server. For this, the push command is used:

git push origin fixdone/345321

There may be a small confusion for beginners here. When you see the word ‘origin’, you begin to think of the remote branch about which we spoke above. However, here it is a separate word and it has a different meaning – after this word, a branch you want to send to the repository is specified.

After execution of this command, the origin/fixdone/34532 remote branch appears on the server. This branch can be fetched by other developers to their computers using the git fetch command.

Merging Code
Now, let’s talk about the biggest power of git – code merge. You wrote a code and it must be tested by a specially trained person. A person who tests creates their own branch on their computer or server:

git checkout -b tests/qa1 origin/master

Now, when this person has their own copy of the master, they begin to test various tickets. Suppose, a tester receives the ticket 345321 with your code. They should deploy your code over their branch:

git merge origin/fixdone/345321

Since a tester does not have your branch locally, they have a copy of the remote branch and specify origin/fixdone/345321.

Now, our changes are deployed on the tester’s code. They can test it and send claims to developers.

When everything has been tested out, branches are waiting for the release. When the release day comes, a person responsible for the release, creates a new branch from the main tree. A new branch? Again? Yes, this is the way we branch our code and changes.

git checkout -b golive20171129 origin/master

Now, we need to merge all changes that should go to production:

git merge origin/fixdone/345321

git merge origin/fixdone/345322

git merge origin/fixdone/345323

All branches have been merged into one and are ready to the final tests and production.

Unit testing and manual testing of all changes take place. When testing is over, the code goes to the repository:

git push origin golive20171129

When everything is on the staging server, where master is always a current branch, the following commands are executed:

git fetch

git merge origin/golive20171129 –no-commit –no-ff

The first command fetches the latest changes from the server, and the second one merges the golive20171129 branch with the master. Again, testing takes place.

Code Rollback
Note that we used the following two keys on the staging server when executing the merge command:

–no-commit – by default, git executes commit right after the merge. Generally speaking, there is nothing bad about it, but if something goes wrong, it is easier to roll back changes without a commit.

–no-ff – leaves the pointer to the master point in its proper place.

Suppose, the production failed and we need to roll back changes. For this, we need to execute the following command:

git reset –hard

All uncommitted changes will be canceled and displaced from the current code branch.

What if we need to roll back only one file? If can be pulled from the master with the following command:

git checkout filename

The current changes for the file will be canceled.

When everything has been tested out in the main branch of the staging server, changes can be saved.

What is a strong side of git?
The strong side of git is that you don’t need to block files. Instead, you need to create separate code branches, write your code and git will save only your changes. It remembers that user 1 changed lines 10, 20 and 30 in the XXX file and the changes made. When you
