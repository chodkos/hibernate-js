package com.uczenie;

public interface ClientDao {

    void addClient(Client client);

    Client findClient(String name);


}
