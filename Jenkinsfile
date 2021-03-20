node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

        def customImage = docker.build("yash2545789/Dockerdemo")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
