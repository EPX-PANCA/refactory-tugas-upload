# Service  
### NodePort - LoadBalancer - Ingress

#
## NodePort

Untuk membuat Service NodePort

```sh
kubectl create -f service-nodeport.yaml

#tunggu hingga proses selesai
```

Untuk melihat proses sudah running atau belum

```sh
kubectl get all --show-labels

#akan menampilkan service
```

Jika sudah running coba akses

```sh
http://172.17.0.2:30001
```

#


## LoadBalancer

Untuk membuat Service LoadBalancer

```sh
kubectl create -f service-loadbalancer.yaml

#tunggu hingga proses selesai
```

Untuk melihat proses sudah running atau belum

```sh
kubectl get all --show-labels

#akan menampilkan info mengenai service dan pods
# NOTE : EXTERNAL-IP akan pending, harusnya menggunakan load balancer dari penyedia layanan Cloud
```

Jika pod sudah running

```sh
#jalankan command, untuk melihat url ip service dan port
minikube service statichtml-service-loadbalancer --url
```

```sh
#contoh, setelah menjalankan command di atas
http://172.17.0.2:31655
```

Buka URL di browser untuk mengecek, jika bisa dibuka, maka proses pembuatan berhasil.

#

## Ingress

Untuk membuat Service Ingress, yang perlu dilakukan adalah mengecek addon ingress sudah berjalan atau belum

```sh
minikube addons list # untuk melihat addon ingrees sudah aktif atau belum

#Jika ingress belum aktif, gunakan command dibawah untuk mengaktifkannya.

minikube addons enable ingress

# untuk cek ingress-nginx-controller

kubectl get pods --namespace kube-system

```
Langkah selanjutnya

```sh
kubectl create -f service-ingress.yaml
#tunggu hingga proses selesai
```

Untuk melihat proses sudah running atau belum

```sh
kubectl get all --show-labels

#akan menampilkan info mengenai service dan pods
```
Untuk melihat info Ingress

```sh
kubectl get ingresses

#hasilnya kurang lebih akan seperti dibawah ini

#NAME                 CLASS    HOSTS               ADDRESS      PORTS   AGE
#statichtml-ingress   <none>   nginx.panca.local   172.17.0.2   80      2m13s

```


Selanjutnya tambahkan ip dan domain ke hosts

```sh

sudo nano ~ /etc/hosts


# tabahkan ke dalam file hosts
# 172.17.0.2      nginx.panca.local
# dan simpan perubahan
```

Jika sudah menambahkan ip dan local domain, cek dengan membuka url http://nginx.panca.local pada browser.

