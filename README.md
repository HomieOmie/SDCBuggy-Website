# SDCBuggy-Website

**A temporary publication of this website can be viewed from the following link:**
https://homieomie.github.io/SDCBuggy-Website/  
    * note that this publication is from the main branch of the repository. Any work done on a separate branch will not be viewable via Github Pages and must be viewed locally on your machine.  

## Cloning the Repository ##

### **Linux / WSL Ubuntu** ###
1. Open your linuz terminal and enter the following command `ssh-keygen -t ed25519 -C your@email.com`  
    a. Make sure to replace `your@email.com` with the email you used for the Github account you will be using to work with the repo  
    b. If you have an older machine, you can replace the encryption `ed25519` in the above command with another encryption method such as `rsa`: `ssh-keygen -t rsa -b 4096` 
2. The terminal will then ask you questions regarding which file systems to save your SSH key-pair in and if you would like to use a password with your SSH: you can simply press enter without putting anything in the terminal to skip those prompts.   
    a. If would like to store your SSH key-pair in a different file path in your system, you may specify so. 
    b. If you would like to use a Password with your SSH key-pair, you may specify so.  
3. In your terminal, enter the following command `~/.ssh/config`  
    a. If you get a message saying `no such file or directory`, then enter the command `touch ~/.ssh/config`, otherwise proceed to the next step  
4. In your terminal, enter the following command `vim ~/.ssh/config`. You will be using vim editor to configure the `config` file.  
5. Enter the following code block into the file you just opened with vim editor:    
```    
Host *
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519
```
6. Then save this file by pressing the `Esc` key and entering `:wq` into the terminal then pressing `Enter`
7. The enter the following command into your terminal `ssh-add ~/.ssh/id_ed25519`
8. Next, enter the following command into the terminal `cat ~/.ssh/id_ed25519.pub`: **Copy the terminal output to your clipboard (ctrl+c)**  
    a. Example key: `ssh-ed25519 ALKJHKLJHKhkjhskjhkhgekj your@email.com`
9. Next open up Github, go to your profile, go to `SSH and GPG Keys`, and click on `New SSH Key`  
10. Next, add a name for your SSH key i.e. `HomieOmie SDC Wesbite SSH` in the box labeled **Title**, and past the SSH key you copied to your clipboard into the box labeled **Key**, then click `Add SSH Key`  
11. Your SSH Key for Github is now setup  
12. To clone the repo, go to the tab labeled `<> code`, click the dropdown labeled `<> clone`, click the tab labeled `SSH`, and copy it using the button with the two overlapping squares
13. The go into your terminal and go into whatever directory you want to clone this repo to and enter the following command `git clone SSHLINK`  
    a. `SSHLINK` will be the link you just copied to your clipboard  
14. The repo should now have cloned to your local machine


