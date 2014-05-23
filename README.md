squiddy-dependency
==================
Squiddy-dependency contains a meteorite package with third party libraries required by Suiddy app.

Version :
---
The current version is *0.4* ( likely to be pushed to 1.0, if we didn't find any issue with the asset file) 

Installation :
---
In order to access the latest version of Squiddy dependency, the following code snippet need to be inserted 
in the smart.js configuration file. 

```
{
    "packages": {
        "squiddy-dependency": {
            "git": "https://securityCollaborator:squiddypassword1@github.com/giuse88/squiddy-dependency.git", 
            "tag" : "v0.4"
        }
    }
}
```

Then run the mrt update command : 
```
mrt update 
```

