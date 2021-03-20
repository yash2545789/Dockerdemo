node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("yash2545789/Dockerdemo")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
