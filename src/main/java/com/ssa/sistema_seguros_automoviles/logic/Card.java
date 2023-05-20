package com.ssa.sistema_seguros_automoviles.logic;

import jakarta.persistence.*;

@Entity
@Table(name = "card")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column
    long card_number;
    @Column
    String date;
    @Column
    Integer cvc;
    @Column
    Integer id_client;


    public Card(Integer ID,long num_card, String fec_vencimiento, Integer cvc,Integer id_cli) {
        this.id = ID;
        this.card_number = num_card;
        this.date = fec_vencimiento;
        this.cvc = cvc;
        this.id_client = id_cli;
    }

    public Card() {

    }

    public Integer getCvc() {
        return cvc;
    }

    public void setCvc(Integer cvc) {
        this.cvc = cvc;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public long getCard_number() {
        return card_number;
    }

    public void setCard_number(long card_number) {
        this.card_number = card_number;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getId_client() {
        return id_client;
    }

    public void setId_client(Integer id_client) {
        this.id_client = id_client;
    }



    @Override
    public String toString() {
        return "Card{" + "num_card=" + card_number + ", fec_vencimientol=" + date + ", cvc=" + cvc + '}';
    }

}
