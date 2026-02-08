---
title: Uiliser Docker watch avec Symfony
description: Article de blog présentant l’utilisation de Docker avec l’option watch dans le cadre de Symfony.
slug: docker-watch-et-symfony
published: 04-24-2025
---

# Utiliser Docker watch avec Symfony


Dans cet article, je vais vous expliquer comment utiliser Docker watch avec le framework Symfony.

::note
Au-dela de la présentation de Docker watch, cet article a surtout pour but de vous présenter différentes méthodes 
permettant d’utiliser Docker sur vos environnements de développement. 
<br />
Libre à vous de choisir la méthode qui vous convient le mieux. Je vais m’attacher à présenter 
les points forts et les faiblesses de chaque méthode. 
::

Il s’agit d’une opération relativement simple mais qui va mobiliser un certain nombre de concepts 
propre à Docker. **Il est donc recommandé d’avoir déjà utilisé la technologie Docker au moins une fois**, 
avoir connaissances de ce qu’est Docker compose sera un gros plus.

## 📚 Remise à plat sur Docker

Pour commencer voici un petit rappel des principaux termes utilisés dans la technologie Docker. Je vais me servir de ces
termes tout au long de l’article il est donc important de les connaitre et de savoir à quoi ils correspondent. 

[Docker](https://www.docker.com/) est une technologie de conteneurisation. 
Voici les concepts clefs qu’il faudra connaitre pour la suite de cet article :
- Une image : il s’agit du modèle de notre application. Elle devrait contenir toutes les informations nécessaires au bon fonctionnement de l’application (code, dépendances, etc.).
- Un conteneur : pour faire simple, un conteneur est une image lancée. Notre application tournera donc dans un conteneur qui sera construit à partir d’une image.
- Un volume : les conteneurs sont sans état (stateless), c’est à dire que si l’on éteint puis relance un conteneur tout le contenu du conteneur sera supprimé. Pour palier à ce problème Docker met à disposition des 
volumes, ils permettent de partager des fichiers entre la machine hôte et le conteneur. L’utilisation principale est quand notre conteneur contient un système de gestion de base de données, pour garder notre base de données
même si le conteneur est éteint, on enregistre notre base dans un volume.

## 🪴 La problématique

Si vous avez déjà essayé d’utiliser Docker sur vos environnements de développement, vous avez déjà très certainement recontré ce problème : 
**Comment partager le code entre mon IDE et le conteneur qui fait tourner mon application.**

## Première solution : monter un volume

La solution la plus simple est de monter un volume entre le conteneur et le machine hôte, chaque changement *que ça soit dans le conteneur ou sur ma machine sera automatiquement synchronisé.*

Nous nous retrouverions donc avec un environnement défini comme tel : 

::code-group

```Containerfile [Containerfile]
FROM php:8-fpm-alpine

RUN apk add icu-dev libxml2-dev icu-data-full

RUN docker-php-ext-install intl xml ctype

RUN echo "short_open_tag = On" > /usr/local/etc/php/php.ini
RUN echo "chdir = /var/www/html/public\nuser = php\ngroup = php" >> /usr/local/etc/php-fpm.d/www.conf

COPY --from=composer/composer:2.9 /usr/bin/composer /usr/bin/composer

ENTRYPOINT ["php-fpm"]
```

```yaml [compose.yaml]
services:
    app:
        build: .
        volumes:
            - .:/var/www/html
```

::

Cette solution est fonctionnelle, cependant elle présente un certain nombre de problème : 
1. Les dépendances provennant de composer ne sont pas installées à la construction de l’image, il faudra donc les installer 
manuellement une fois le conteneur démarré avec la commande : 
```bash
docker run <mon_conteneur> composer install
``` 
2. L’image en tant que telle ne contient pas de le code de notre application, pour preuve en lançant l’application sans 
passer de volume : 
```bash
docker run --rm --entrypoint ls <mon_image> 
```