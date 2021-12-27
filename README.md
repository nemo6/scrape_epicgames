# scrape_epicgames
  
    Pour Windows

`USERNAME` Nom d'utilisateur Windows

Il faut placer `start.vbs` dans le dossier `C:\Users\USERNAME\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`, pour exécuter le script au démarrage.

Dans le script "start.vbs", il faut ajouter le lien vers le script "app.js". Moi je l'ai mis dans `C:/Users/USERNAME/Documents/scrape_epicgames`.
    
```vbs
command = "powershell.exe node 'C:/Users/USERNAME/Documents/scrape_epicgames/app.js'"
set shell = CreateObject("WScript.Shell")
shell.Run command,0
```
