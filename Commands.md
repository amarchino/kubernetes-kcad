# Usefulc commands found throughout the course
## Switch namespace
```
kubectl config set-context $(kubectl config current-context) --namespace=<namespace>
```

## Imperative
### Create POD
```
kubectl run <name> --image=<image> --labels=<key=value>[,<key=value>]
```
### Create Service
```
kubectl expose pod <podname> --port=<port> --name <name>
```

## Taint node
With `-` at the end, it will remove the taint
```
kubectl taint nodes <node> <key>=<value>:<operation>[-]
```

## Label node
```
kubectl label nodes <node> <key>=<value>
```