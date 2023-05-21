package com.ssa.sistema_seguros_automoviles.logic;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "card")
public class Card implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column
    long card_number;
    @Column
    String date;
    @Column
    Integer cvc;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_client", referencedColumnName = "id")
    Client cli;


    public Card(Integer ID,long num_card, String fec_vencimiento, Integer cvc,Client id_cli) {
        this.id = ID;
        this.card_number = num_card;
        this.date = fec_vencimiento;
        this.cvc = cvc;
        this.cli = id_cli;
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

    public Client getId_client() {
        return cli;
    }

    public void setId_client(Client id_client) {
        this.cli = id_client;
    }



    @Override
    public String toString() {
        return "Card{" + "num_card=" + card_number + ", fec_vencimientol=" + date + ", cvc=" + cvc + '}';
    }

}
