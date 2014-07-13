
# C.MD

This is an *explosive* mixture of ***ClojureScript, Rx, React/Om, core.async, github CORS api, ace, marked, web workers etc***  ~~crafted~~engineered together to give you the *best* ***gist*** editing tool, ever... well, at least a good try :-)
It's currently an alfa-quality prototype, so do not expect to much.

Check out a demo: <http://eugenen.github.io/>

#### What you can do with the demo:

- just provide your Github username and a **secret* to log in
- should you be logged in:
 - click a `:NEW_G!ST:` to set a name and then `PUSH>>` to create a new gist with whatever content is *here*
 - ...or select a gist from the list to work on it, then `PUSH>>` to save, `>>PULL` to update content from Github.
- use `C.MD` as a beautiful *gist* viewer - just set an url hash to `#<gist-id>;p`, for example: <http://eugenen.github.io/#58a15db96ca12b952f8e;p>


***

\* To obtain the *secret* please follow next steps:

- open your Github account settings on `Applications` menu topic - https://github.com/settings/applications
- click `Generate new token` button
- select ***only*** the `gist` scope (the last one) and click a big green `Generate token` button
- concatenate the token with a string `:x-oauth-basic` and generate a `base64` hash of the resulting string:
 ```bash
  $ echo <token>:x-oauth-basic | base64
 ```

...then paste the hash into the `S#CRET` field and click `LOG>>IN` and you're in! :-)

Why so much trouble? - becase it's a *hacker*'s editor so the login process should not be *boring* as in *common*, *lame* *userspace* applications :-) The good news is that `CMD` will remember your credentials in *cookies*, so you will enjoy an *autologin* until you `LOG^OUT`.


:::

```
(println "Heil Clojure!")
```

##### *Easter cat*

<img src=http://thecatapi.com/api/images/get?format=src&type=gif>


    
