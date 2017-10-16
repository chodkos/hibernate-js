package com.uczenie;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "Clients")
@Component
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String login;
    @ElementCollection
    private List<Integer> moveCount;// = new HashMap

    public Client() {
    }

    public Client(int id, String login) {
        this.id = id;
        this.login = login;

        this.moveCount = new ArrayList<Integer>();
    }

    public List<Integer> getMoveCount() {
        return moveCount;
    }

    public void setMoveCount(List<Integer> moveCount) {
        this.moveCount = moveCount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }


    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", moveCount=" + moveCount +
                '}';
    }
}
