package com.uczenie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    private Client client;

    @Autowired
    public ClientService(Client client) {
        this.client = client;
    }

    public void doShopping(Client client){
        System.out.println("Zrobiono zakupy");
        System.out.println("Pozdro, kliencie " + client.toString());

    }
}
