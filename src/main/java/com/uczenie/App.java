package com.uczenie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.ArrayList;
import java.util.Arrays;

public class App {

    Client client;

    public static void main(String[] args) {
        AbstractApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring.xml");
        ClientService clientService = applicationContext.getBean(ClientService.class);



        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("postgres");
        EntityManager entityManager = entityManagerFactory.createEntityManager();

        entityManager.getTransaction().begin();

        Client client = new Client(0, "Łukasz");
        client.setMoveCount(Arrays.asList(1, 5, 15));
        entityManager.persist(client);
        System.out.println(client);


        entityManager.getTransaction().commit();
        entityManager.close();
        entityManagerFactory.close();

        applicationContext.close();

    }

}
